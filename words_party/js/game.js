// js/game.js
import { markGameCompleted } from './storage.js?v=8';
import { playSFX, playAudio, stopAllAudio, preloadAudio } from './audio.js?v=8';

// Global game state
let currentStationId = null;
let currentGameId = null;
let currentRound = 1;
let starsEarned = 3;
let vocabulary = [];
let roundWords = [];
let currentWord = null;

// Game 1 state
let currentLetterIdx = 0;

// Game 2 state
let currentSyllableIdx = 0;

// Game 4 state
let selectedUppercaseNode = null;
let completedMatchesCount = 0;

// Shaker helper for errors
const shakeElement = (el) => {
  el.classList.add('shake-anim');
  setTimeout(() => el.classList.remove('shake-anim'), 400);
};

export function startGame(stationId, gameId) {
  currentStationId = stationId;
  currentGameId = gameId;
  currentRound = 1;
  starsEarned = 3;

  // Cargar vocabulario en segundo plano
  fetch('assets/data/words.json')
    .then(res => res.json())
    .then(data => {
      vocabulary = data.words || [];
    })
    .catch(err => console.error("Error loading words JSON:", err));

  // Mostrar el cartel explicativo intermedio
  showGameInstructions();
}

function showGameInstructions() {
  const board = document.getElementById('game-board-container');
  if (!board) return;
  board.innerHTML = '';

  const instructions = {
    game1: {
      title: "Meteoritos de Letras",
      text: "Selecciona las letras de los meteoritos en el orden correcto para formar la palabra que representa el dibujo.",
      icon: "☄️"
    },
    game2: {
      title: "Estación de Sílabas",
      text: "Completa la palabra colocando las sílabas correctas para armar las cabinas de la nave espacial y hacerla despegar.",
      icon: "🚀"
    },
    game3: {
      title: "Portal Estelar",
      text: "Mira la palabra incompleta y selecciona la sílaba correcta de las estrellas flotantes para abrir el portal.",
      icon: "🌀"
    },
    game4: {
      title: "Constelaciones Gemelas",
      text: "Conecta las estrellas de letras Mayúsculas de la izquierda con sus minúsculas de la derecha usando el rayo láser.",
      icon: "✨"
    }
  };

  const info = instructions[currentGameId] || {
    title: "Misión Espacial",
    text: "Completa el desafío para ganar estrellas de energía.",
    icon: "⭐"
  };

  const cardHtml = `
    <div class="instruction-card pop-anim">
      <div class="instruction-icon">${info.icon}</div>
      <h2 class="instruction-title">${info.title}</h2>
      <p class="instruction-text">${info.text}</p>
      <button id="btn-start-mission" class="btn-primary btn-accept-pulse">¡ACEPTAR!</button>
    </div>
  `;

  board.innerHTML = cardHtml;

  // Reproducir audio explicativo
  const audioPath = `assets/audio/system/instruction_${currentGameId}.mp3`;
  playAudio(audioPath);

  const btnAccept = document.getElementById('btn-start-mission');
  if (btnAccept) {
    btnAccept.addEventListener('click', () => {
      stopAllAudio(); // Detener audio explicativo de inmediato
      playAudio('assets/audio/system/sfx_click.mp3');
      
      // Asegurarnos de que el vocabulario esté cargado antes de iniciar
      if (vocabulary.length === 0) {
        const checkLoad = setInterval(() => {
          if (vocabulary.length > 0) {
            clearInterval(checkLoad);
            initRoundData();
          }
        }, 100);
      } else {
        initRoundData();
      }
    });
  }
}

function initRoundData() {
  // Filter vocabulary by consonant mapped to station
  // station1: M, station2: P, station3: B, station4: D, station5 & station6: mixed
  const consonantMap = {
    station1: ['M'],
    station2: ['P'],
    station3: ['B'],
    station4: ['D'],
    station5: ['M', 'P', 'B', 'D'],
    station6: ['M', 'P', 'B', 'D']
  };

  const targets = consonantMap[currentStationId] || ['M'];
  const filtered = vocabulary.filter(w => targets.includes(w.consonant));

  // Shuffle and slice 3 words for the 3 rounds
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  roundWords = shuffled.slice(0, 3);

  // Fallback if not enough words
  if (roundWords.length < 3) {
    roundWords = [...filtered, ...filtered, ...filtered].slice(0, 3);
  }

  loadRound();
}

function loadRound() {
  document.getElementById('current-round').textContent = currentRound;
  currentWord = roundWords[currentRound - 1];

  // Preload all audios for the current word to ensure zero latency and synchronous playback on Safari
  if (currentWord && currentWord.audios) {
    if (currentWord.audios.word) preloadAudio(currentWord.audios.word);
    if (Array.isArray(currentWord.audios.syllables)) {
      currentWord.audios.syllables.forEach(path => preloadAudio(path));
    }
    if (Array.isArray(currentWord.audios.letters)) {
      currentWord.audios.letters.forEach(path => preloadAudio(path));
    }
  }

  const board = document.getElementById('game-board-container');
  board.innerHTML = '';

  // Update game HUD title
  const hudTitle = document.getElementById('game-title-hud');
  const gameTitles = {
    game1: "Meteoritos de Letras",
    game2: "Estación de Sílabas",
    game3: "Portal Estelar",
    game4: "Constelaciones Gemelas"
  };
  hudTitle.textContent = gameTitles[currentGameId] || "Juego";

  // Dispatch to corresponding game render
  if (currentGameId === 'game1') {
    initMeteoritosGame(board);
  } else if (currentGameId === 'game2') {
    initSyllablesGame(board);
  } else if (currentGameId === 'game3') {
    initPortalGame(board);
  } else if (currentGameId === 'game4') {
    initConstellationsGame(board);
  }
}

/* --- GAME 1: METEORITOS DE LETRAS --- */
function initMeteoritosGame(board) {
  currentLetterIdx = 0;
  const wordText = currentWord.word;

  // Render Slots
  const slotsHtml = wordText.split('').map((_, idx) => `
    <div class="letter-slot" id="slot-${idx}">_</div>
  `).join('');

  // Render Distractor + Correct Letters
  const correctLetters = wordText.split('');
  const allAlphabet = 'abcdefghijklmnñopqrstuvwxyzáéíóú'.split('');
  const distractors = allAlphabet
    .filter(c => !correctLetters.includes(c))
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const pool = [...correctLetters, ...distractors].sort(() => Math.random() - 0.5);

  const buttonsHtml = pool.map(char => `
    <button class="meteorite-btn" data-char="${char}">${char.toUpperCase()}</button>
  `).join('');

  board.innerHTML = `
    <div class="game-container-sp">
      <button class="illustration-box" aria-label="Escuchar referencia">
        <span class="word-emoji">${currentWord.emoji}</span>
      </button>
      <div class="word-slots-container">${slotsHtml}</div>
      <div class="options-flex">${buttonsHtml}</div>
    </div>
  `;

  const illustration = board.querySelector('.illustration-box');
  if (illustration) {
    illustration.addEventListener('click', () => {
      stopAllAudio();
      playAudio(currentWord.audios.word);
    });
  }

  // Bind tap handlers
  board.querySelectorAll('.meteorite-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tapped = btn.dataset.char;
      const target = wordText[currentLetterIdx];

      if (tapped.toLowerCase() === target.toLowerCase()) {
        playAudio(currentWord.audios.letters[currentLetterIdx]);
        const slot = document.getElementById(`slot-${currentLetterIdx}`);
        slot.textContent = target.toUpperCase();
        slot.classList.add('pop-anim', 'filled');
        btn.style.opacity = '0.3';
        btn.disabled = true;
        currentLetterIdx++;

        if (currentLetterIdx === wordText.length) {
          setTimeout(() => {
            playAudio(currentWord.audios.word);
            playAudio('assets/audio/system/sfx_correct.mp3');
            advanceNext();
          }, 800);
        }
      } else {
        shakeElement(btn);
        playAudio('assets/audio/system/sfx_incorrect.mp3');
        playAudio('assets/audio/system/error_try_again.mp3');
        starsEarned = Math.max(1, starsEarned - 1);
      }
    });
  });
}

/* --- GAME 2: ESTACIÓN DE SÍLABAS --- */
function initSyllablesGame(board) {
  currentSyllableIdx = 0;
  const syllables = currentWord.syllables;

  // Render Slots
  const slotsHtml = syllables.map((_, idx) => `
    <div class="syllable-slot" id="syl-slot-${idx}">[ ? ]</div>
  `).join('');

  // Collect distractor syllable
  const allSyllables = vocabulary
    .flatMap(w => w.syllables)
    .filter(s => !syllables.includes(s));
  const distractor = allSyllables[Math.floor(Math.random() * allSyllables.length)] || "ma";

  const pool = [...syllables, distractor].sort(() => Math.random() - 0.5);

  const buttonsHtml = pool.map(syl => `
    <button class="syllable-btn" data-syl="${syl}">${syl.toUpperCase()}</button>
  `).join('');

  board.innerHTML = `
    <div class="game-container-sp">
      <button class="illustration-box" aria-label="Escuchar referencia">
        <span class="word-emoji">${currentWord.emoji}</span>
      </button>
      <div class="syllables-slots-container">${slotsHtml}</div>
      <div class="options-flex">${buttonsHtml}</div>
    </div>
  `;

  const illustration = board.querySelector('.illustration-box');
  if (illustration) {
    illustration.addEventListener('click', () => {
      stopAllAudio();
      currentWord.audios.syllables.forEach((sylAudio, idx) => {
        setTimeout(() => {
          playAudio(sylAudio);
        }, idx * 800);
      });
    });
  }

  board.querySelectorAll('.syllable-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tapped = btn.dataset.syl;
      const target = syllables[currentSyllableIdx];

      if (tapped === target) {
        playAudio(currentWord.audios.syllables[currentSyllableIdx]);
        const slot = document.getElementById(`syl-slot-${currentSyllableIdx}`);
        slot.textContent = target.toUpperCase();
        slot.classList.add('pop-anim', 'filled');
        btn.style.opacity = '0.3';
        btn.disabled = true;
        currentSyllableIdx++;

        if (currentSyllableIdx === syllables.length) {
          setTimeout(() => {
            playAudio('assets/audio/system/sfx_launch.mp3');
            playAudio(currentWord.audios.word);
            advanceNext();
          }, 800);
        }
      } else {
        shakeElement(btn);
        playAudio('assets/audio/system/sfx_incorrect.mp3');
        playAudio('assets/audio/system/error_try_again.mp3');
        starsEarned = Math.max(1, starsEarned - 1);
      }
    });
  });
}

/* --- GAME 3: PORTAL ESTELAR (COMPLETAR PALABRA) --- */
function initPortalGame(board) {
  const syllables = currentWord.syllables;
  
  // Randomly hide one syllable index
  const hiddenIdx = Math.floor(Math.random() * syllables.length);
  const correctOption = syllables[hiddenIdx];

  // Distractors
  const otherSyllables = vocabulary
    .flatMap(w => w.syllables)
    .filter(s => s !== correctOption);
  const shuffledOthers = [...new Set(otherSyllables)].sort(() => Math.random() - 0.5);
  const distractors = shuffledOthers.slice(0, 2);

  const pool = [correctOption, ...distractors].sort(() => Math.random() - 0.5);

  // Incomplete representation
  const displayParts = syllables.map((s, idx) => {
    return idx === hiddenIdx ? `<span class="missing-portal-slot">___</span>` : s.toUpperCase();
  }).join(' - ');

  const optionsHtml = pool.map(syl => `
    <button class="portal-star-btn" data-syl="${syl}">⭐ ${syl.toUpperCase()}</button>
  `).join('');

  board.innerHTML = `
    <div class="game-container-sp">
      <button class="illustration-box" aria-label="Escuchar referencia">
        <span class="word-emoji">${currentWord.emoji}</span>
      </button>
      <div class="portal-display">${displayParts}</div>
      <div class="options-flex">${optionsHtml}</div>
    </div>
  `;

  const illustration = board.querySelector('.illustration-box');
  if (illustration) {
    illustration.addEventListener('click', () => {
      stopAllAudio();
      playAudio(currentWord.audios.word);
    });
  }

  board.querySelectorAll('.portal-star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tapped = btn.dataset.syl;

      if (tapped === correctOption) {
        playAudio('assets/audio/system/sfx_correct.mp3');
        playAudio(currentWord.audios.word);
        board.querySelector('.missing-portal-slot').textContent = correctOption.toUpperCase();
        board.querySelector('.missing-portal-slot').classList.add('portal-unlocked');
        
        setTimeout(advanceNext, 1200);
      } else {
        shakeElement(btn);
        playAudio('assets/audio/system/sfx_incorrect.mp3');
        playAudio('assets/audio/system/error_try_again.mp3');
        starsEarned = Math.max(1, starsEarned - 1);
      }
    });
  });
}

/* --- GAME 4: CONSTELACIONES GEMELAS --- */
function initConstellationsGame(board) {
  selectedUppercaseNode = null;
  completedMatchesCount = 0;

  // We choose 4 letters (e.g. M, P, B, D)
  const letters = ['M', 'P', 'B', 'D'];
  const shuffledLower = [...letters].map(l => l.toLowerCase()).sort(() => Math.random() - 0.5);

  const leftHtml = letters.map(letter => `
    <button class="constellation-star upper" data-let="${letter}">${letter}</button>
  `).join('');

  const rightHtml = shuffledLower.map(letter => `
    <button class="constellation-star lower" data-let="${letter}">${letter}</button>
  `).join('');

  board.innerHTML = `
    <div class="constellation-game-wrapper">
      <svg class="constellation-laser-svg"></svg>
      <div class="constellation-column" id="col-upper">${leftHtml}</div>
      <div class="constellation-column" id="col-lower">${rightHtml}</div>
    </div>
  `;

  const svg = board.querySelector('.constellation-laser-svg');

  // Tap handler for Uppercase
  board.querySelectorAll('.constellation-star.upper').forEach(btn => {
    btn.addEventListener('click', () => {
      playAudio('assets/audio/system/sfx_click.mp3');
      
      // Clear previous selection highlight
      board.querySelectorAll('.constellation-star.upper').forEach(b => b.classList.remove('selected'));
      
      selectedUppercaseNode = btn;
      btn.classList.add('selected');
    });
  });

  // Tap handler for Lowercase
  board.querySelectorAll('.constellation-star.lower').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!selectedUppercaseNode) {
        shakeElement(btn);
        return;
      }

      const upperVal = selectedUppercaseNode.dataset.let;
      const lowerVal = btn.dataset.let;

      if (upperVal.toLowerCase() === lowerVal.toLowerCase()) {
        // Draw Laser Line
        drawLaser(selectedUppercaseNode, btn, svg);
        playAudio('assets/audio/system/sfx_laser.mp3');

        // Lock buttons
        selectedUppercaseNode.disabled = true;
        selectedUppercaseNode.classList.add('matched');
        selectedUppercaseNode.classList.remove('selected');
        btn.disabled = true;
        btn.classList.add('matched');

        selectedUppercaseNode = null;
        completedMatchesCount++;

        if (completedMatchesCount === 4) {
          setTimeout(() => {
            playAudio('assets/audio/system/sfx_correct.mp3');
            advanceNext();
          }, 800);
        }
      } else {
        shakeElement(btn);
        shakeElement(selectedUppercaseNode);
        playAudio('assets/audio/system/sfx_incorrect.mp3');
        playAudio('assets/audio/system/error_try_again.mp3');
        selectedUppercaseNode.classList.remove('selected');
        selectedUppercaseNode = null;
        starsEarned = Math.max(1, starsEarned - 1);
      }
    });
  });
}

function drawLaser(upperEl, lowerEl, svg) {
  const svgRect = svg.getBoundingClientRect();
  const r1 = upperEl.getBoundingClientRect();
  const r2 = lowerEl.getBoundingClientRect();

  const x1 = r1.right - svgRect.left - (r1.width / 4);
  const y1 = r1.top - svgRect.top + (r1.height / 2);
  const x2 = r2.left - svgRect.left + (r2.width / 4);
  const y2 = r2.top - svgRect.top + (r2.height / 2);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "var(--neon-green)");
  line.setAttribute("stroke-width", "4");
  line.style.filter = "drop-shadow(0 0 6px var(--neon-green))";
  
  svg.appendChild(line);
}

/* --- ROUND / STATE PROGRESSION --- */
function advanceNext() {
  currentRound++;
  if (currentRound > 3) {
    finishGame();
  } else {
    setTimeout(loadRound, 600);
  }
}

function finishGame() {
  markGameCompleted(currentStationId, currentGameId, starsEarned);
  
  // Update screen elements
  document.getElementById('reward-stars').textContent = '⭐'.repeat(starsEarned);
  
  // Show reward Screen
  document.getElementById('screen-game-play').classList.remove('active');
  document.getElementById('screen-reward').classList.add('active');

  playAudio('assets/audio/system/sfx_victory.mp3');
  playAudio('assets/audio/system/success_game.mp3');
}

// Wire Continue Button in Reward Screen
document.addEventListener('DOMContentLoaded', () => {
  const btnContinue = document.getElementById('btn-reward-continue');
  if (btnContinue) {
    btnContinue.addEventListener('click', () => {
      playAudio('assets/audio/system/sfx_click.mp3');
      document.getElementById('screen-reward').classList.remove('active');
      
      // Go back to the Control Panel of that station
      document.getElementById('screen-control-panel').classList.add('active');

      // Trigger click on back button map to refresh map progress automatically
      const btnBackMap = document.getElementById('btn-back-map');
      if (btnBackMap) btnBackMap.click();
    });
  }
});
