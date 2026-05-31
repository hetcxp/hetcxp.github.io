// js/app.js
import { initStorage, getProgress, resetProgress } from './storage.js?v=8';
import { startGame } from './game.js?v=8';
import { playSFX, playAudio, stopAllAudio, initAudioContext } from './audio.js?v=8';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Init Storage
  initStorage();

  // 2. DOM Selections
  const screens = {
    home: document.getElementById('screen-home'),
    map: document.getElementById('screen-map'),
    controlPanel: document.getElementById('screen-control-panel'),
    gamePlay: document.getElementById('screen-game-play'),
    reward: document.getElementById('screen-reward')
  };

  const btnLaunch = document.getElementById('btn-launch');
  const btnResetGame = document.getElementById('btn-reset-game');
  const btnBackMap = document.getElementById('btn-back-map');
  const btnExitGame = document.getElementById('btn-exit-game');
  const btnCancelReset = document.getElementById('btn-cancel-reset');
  const modalParentalGate = document.getElementById('modal-parental-gate');
  const starCountLabel = document.getElementById('star-count');
  
  let currentStationId = null;
  let parentalChallengeColor = "";

  const colorTranslations = {
    red: "rojo",
    green: "verde",
    blue: "azul"
  };

  // 3. Screen Navigation
  function showScreen(screenKey) {
    Object.keys(screens).forEach(key => {
      screens[key].classList.remove('active');
    });
    screens[screenKey].classList.add('active');
    
    // Draw lines if map is shown
    if (screenKey === 'map') {
      updateMapUI();
      // Draw lines after layout renders
      setTimeout(drawOrbitLines, 100);
    }
  }

  let welcomeAudioPlayed = false;

  const playWelcomeAudio = () => {
    if (welcomeAudioPlayed) return;
    if (screens.home.classList.contains('active')) {
      playAudio('assets/audio/system/welcome.mp3');
      welcomeAudioPlayed = true;
    }
  };

  const triggerWelcomeOnInteraction = () => {
    try {
      initAudioContext();
    } catch (e) {}
    playWelcomeAudio();
    cleanupWelcomeListeners();
  };

  const cleanupWelcomeListeners = () => {
    document.removeEventListener('click', triggerWelcomeOnInteraction);
    document.removeEventListener('touchend', triggerWelcomeOnInteraction);
  };

  document.addEventListener('click', triggerWelcomeOnInteraction);
  document.addEventListener('touchend', triggerWelcomeOnInteraction);

  // Astronaut guide interactive tap
  const guideHome = document.getElementById('guide-home');
  if (guideHome) {
    guideHome.style.cursor = 'pointer';
    guideHome.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita disparar el trigger de bienvenida global
      try {
        initAudioContext();
      } catch (err) {}
      welcomeAudioPlayed = true;
      cleanupWelcomeListeners();
      playAudio('assets/audio/system/welcome.mp3');
    });
  }

  // Play welcome audio on first user click or load if possible
  btnLaunch.addEventListener('click', () => {
    try {
      initAudioContext();
    } catch (e) {}
    welcomeAudioPlayed = true;
    cleanupWelcomeListeners();
    playAudio('assets/audio/system/sfx_click.mp3');
    showScreen('map');
  });

  // 4. Update Map UI & Check Progress
  function updateMapUI() {
    const progress = getProgress();
    starCountLabel.textContent = progress.total_stars;

    let totalCompletedStations = 0;

    // Update each station node
    for (let i = 1; i <= 6; i++) {
      const stationId = `station${i}`;
      const node = document.getElementById(stationId);
      const data = progress.stations[stationId];
      
      if (node && data) {
        // Calculate stars
        const starsText = Object.values(data.games)
          .map(stars => '⭐'.repeat(stars) || '☆')
          .join(' ');
        node.querySelector('.station-completion-stars').textContent = starsText;

        if (data.completed) {
          node.classList.add('completed');
          node.classList.remove('locked');
          totalCompletedStations++;
        } else {
          node.classList.remove('completed');
        }
      }
    }

    // Unlock solar core if all 6 stations are completed
    const coreNode = document.getElementById('galaxy-core');
    if (totalCompletedStations === 6) {
      coreNode.classList.remove('locked');
      coreNode.onclick = () => {
        playAudio('assets/audio/system/sfx_victory.mp3');
        playAudio('assets/audio/system/success_galaxy.mp3');
        showScreen('reward');
      };
    } else {
      coreNode.classList.add('locked');
      coreNode.onclick = null;
    }
  }

  // 5. SVG Orbit Lines Rendering (Dashed connection constellation)
  function drawOrbitLines() {
    const svg = document.querySelector('.orbits-svg');
    if (!svg) return;
    svg.innerHTML = '';

    const nodes = ['station1', 'station2', 'station3', 'station4', 'station5', 'station6'];
    const svgRect = svg.getBoundingClientRect();
    const coreEl = document.getElementById('galaxy-core');
    const coreRect = coreEl ? coreEl.getBoundingClientRect() : null;

    // Draw lines from core to each station
    if (coreRect) {
      const cx = coreRect.left - svgRect.left + (coreRect.width / 2);
      const cy = coreRect.top - svgRect.top + (coreRect.height / 2);

      nodes.forEach(nodeId => {
        const el = document.getElementById(nodeId);
        if (el) {
          const rect = el.querySelector('.station-avatar').getBoundingClientRect();
          const px = rect.left - svgRect.left + (rect.width / 2);
          const py = rect.top - svgRect.top + (rect.height / 2);

          const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", cx);
          line.setAttribute("y1", cy);
          line.setAttribute("x2", px);
          line.setAttribute("y2", py);
          line.setAttribute("stroke", "rgba(177, 159, 251, 0.1)");
          line.setAttribute("stroke-width", "2");
          line.setAttribute("stroke-dasharray", "4, 6");
          svg.appendChild(line);
        }
      });
    }

    // Draw connection lines in a loop
    for (let i = 0; i < nodes.length; i++) {
      const fromEl = document.getElementById(nodes[i]);
      const toEl = document.getElementById(nodes[(i + 1) % nodes.length]);

      if (fromEl && toEl) {
        const fromAvatar = fromEl.querySelector('.station-avatar').getBoundingClientRect();
        const toAvatar = toEl.querySelector('.station-avatar').getBoundingClientRect();

        const x1 = fromAvatar.left - svgRect.left + (fromAvatar.width / 2);
        const y1 = fromAvatar.top - svgRect.top + (fromAvatar.height / 2);
        const x2 = toAvatar.left - svgRect.left + (toAvatar.width / 2);
        const y2 = toAvatar.top - svgRect.top + (toAvatar.height / 2);

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);
        line.setAttribute("stroke", "rgba(177, 159, 251, 0.2)");
        line.setAttribute("stroke-width", "3");
        line.setAttribute("stroke-dasharray", "8, 6");
        svg.appendChild(line);
      }
    }
  }

  // 6. Station Control Panel (Minigame selector)
  document.querySelectorAll('.station-node:not(.core)').forEach(node => {
    node.addEventListener('click', () => {
      playAudio('assets/audio/system/sfx_click.mp3');
      currentStationId = `station${node.dataset.station}`;
      
      // Update UI title and games
      const progress = getProgress();
      const stationData = progress.stations[currentStationId];
      
      document.getElementById('station-title').textContent = stationData.name;
      
      // Update each minigame card
      document.querySelectorAll('.game-card').forEach(card => {
        const gameIndex = card.dataset.game;
        const stars = stationData.games[`game${gameIndex}`] || 0;
        card.querySelector('.game-status-stars').textContent = '⭐'.repeat(stars) || '☆☆☆';
      });

      playAudio('assets/audio/system/select_game.mp3');
      showScreen('controlPanel');
    });
  });

  // Minigame card click handler
  document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
      playAudio('assets/audio/system/sfx_click.mp3');
      const gameIndex = card.dataset.game;
      showScreen('gamePlay');
      
      // Load and start game from game.js
      startGame(currentStationId, `game${gameIndex}`);
    });
  });

  // HUD and Back Button events
  btnBackMap.addEventListener('click', () => {
    playAudio('assets/audio/system/sfx_click.mp3');
    playAudio('assets/audio/system/btn_back.mp3');
    showScreen('map');
  });

  btnExitGame.addEventListener('click', () => {
    stopAllAudio();
    playAudio('assets/audio/system/sfx_click.mp3');
    showScreen('controlPanel');
  });

  // 7. Parental Gate Confirmation Dialog
  btnResetGame.addEventListener('click', () => {
    playAudio('assets/audio/system/sfx_click.mp3');
    playAudio('assets/audio/system/btn_restart.mp3');
    
    // Choose random color
    const colors = ['red', 'green', 'blue'];
    parentalChallengeColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Update textual prompt
    const challengeText = document.querySelector('.modal-challenge-text');
    challengeText.innerHTML = `Toca el planeta <strong style="color: var(--neon-${parentalChallengeColor})">${colorTranslations[parentalChallengeColor]}</strong>`;
    
    modalParentalGate.classList.add('active');
  });

  btnCancelReset.addEventListener('click', () => {
    playAudio('assets/audio/system/sfx_click.mp3');
    modalParentalGate.classList.remove('active');
  });

  // Planet Selection verification
  document.querySelectorAll('.parental-planet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedColor = e.target.dataset.color;
      if (selectedColor === parentalChallengeColor) {
        playAudio('assets/audio/system/sfx_correct.mp3');
        resetProgress();
        modalParentalGate.classList.remove('active');
        showScreen('home');
      } else {
        playAudio('assets/audio/system/sfx_incorrect.mp3');
        playAudio('assets/audio/system/error_try_again.mp3');
        // Add soft shake animation
        e.target.style.transform = 'scale(0.85)';
        setTimeout(() => {
          e.target.style.transform = 'scale(1)';
        }, 150);
      }
    });
  });

  // Re-draw svg lines on screen rotation/resize
  window.addEventListener('resize', () => {
    if (screens.map.classList.contains('active')) {
      drawOrbitLines();
    }
  });

  // El audio de bienvenida ahora se activa mediante la primera interacción del usuario o al pulsar el astronauta guía.
});
