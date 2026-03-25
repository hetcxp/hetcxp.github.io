/**
 * games.js: Logic for the different educational minigames.
 */

/**
 * renderJuegoVoz: Renders the "Efecto Loro" minigame interface.
 * @param {string} palabraObjetivo - The word the user needs to repeat.
 */
function renderJuegoVoz(palabraObjetivo) {
    const gameContent = document.getElementById('game-content');
    if (!gameContent) return;
    
    // Check if we should play instructions (moved logic to main.js, but UI needs help btn)
    // Inject UI structure
    gameContent.innerHTML = `
        <div class="voice-game">
            <button id="btn-help-loro" class="help-btn" title="Ayuda">?</button>
            <h2 class="game-instruction-title">¡Dile al Loro la palabra!</h2>
            <div class="target-word-container">
                <span class="target-word">${palabraObjetivo}</span>
            </div>
            <div class="recorder-controls">
                <button id="btn-record" class="record-btn">🦜</button>
                <p class="record-hint">Mantén presionado para hablar</p>
            </div>
        </div>
    `;

    const btnRecord = document.getElementById('btn-record');
    const btnHelp = document.getElementById('btn-help-loro');

    // Help Button logic (TAFA 2)
    if (btnHelp) {
        const triggerHelp = (e) => {
            if (e.type === 'touchstart') e.preventDefault();
            console.log("Ayuda solicitada: Reproduciendo instrucciones.");
            if (typeof window.playNico === 'function') {
                window.playNico('vo_inst_loro.m4a', 'saludo');
            }
        };
        btnHelp.addEventListener('touchstart', triggerHelp, { passive: false });
        btnHelp.addEventListener('click', triggerHelp);
    }

    // Add touch and mouse event listeners with Safari compatibility
    const startHandler = (e) => {
        // Only prevent default on touch to allow Safari mouse interaction
        if (e.type === 'touchstart') e.preventDefault();
        btnRecord.classList.add('recording');
        setNicoPose('hablando');
        // Now calling the async startRecording (defined in audio.js)
        startRecording().catch(err => console.error("Mic error:", err));
    };

    const stopHandler = (e) => {
        if (e.type === 'touchend' || e.type === 'touchcancel') e.preventDefault();
        if (btnRecord.classList.contains('recording')) {
            btnRecord.classList.remove('recording');
            stopRecordingAndPlay();
        }
    };

    btnRecord.addEventListener('touchstart', startHandler, { passive: false });
    btnRecord.addEventListener('touchend', stopHandler);
    btnRecord.addEventListener('touchcancel', stopHandler);

    btnRecord.addEventListener('mousedown', startHandler);
    btnRecord.addEventListener('mouseup', stopHandler);
    btnRecord.addEventListener('mouseleave', stopHandler); // Important if mouse drags out

    // Word Practice interaction (TAFA 2)
    const targetWord = document.querySelector('.target-word');
    if (targetWord) {
        const playPractice = (e) => {
            if (e.type === 'touchstart') e.preventDefault();
            console.log(`Práctica de palabra: ${palabraObjetivo}`);
            if (typeof window.playWord === 'function') {
                window.playWord(palabraObjetivo, 'hablando', false);
            }
        };
        targetWord.addEventListener('touchstart', playPractice, { passive: false });
        targetWord.addEventListener('click', playPractice);
        // Also keep it on container for a larger hit area
        const container = targetWord.parentElement;
        if (container) {
            container.addEventListener('touchstart', playPractice, { passive: false });
            container.addEventListener('click', playPractice);
        }
    }
}

/**
 * renderJuegoEscritura: Renders the Drag & Drop writing minigame.
 * @param {string} palabraObjetivo - The word the user needs to form.
 */
function renderJuegoEscritura(palabraObjetivo) {
    const gameContent = document.getElementById('game-content');
    if (!gameContent) return;

    // 1. Cleanup
    gameContent.innerHTML = `
        <div class="writing-game">
            <h2 class="game-instruction-title">¡Ordena las letras!</h2>
            <div id="drop-zones-container" class="drop-zones-container"></div>
            <div id="draggable-letters-container" class="draggable-letters-container"></div>
        </div>
    `;

    const dropZonesContainer = document.getElementById('drop-zones-container');
    const lettersContainer = document.getElementById('draggable-letters-container');

    // 2. Create Drop Zones
    const letters = palabraObjetivo.split('');
    letters.forEach((letter, index) => {
        const zone = document.createElement('div');
        zone.classList.add('drop-zone');
        zone.setAttribute('data-letter', letter);
        zone.setAttribute('data-index', index);
        
        // Add letter shadow for scaffolding
        const shadow = document.createElement('span');
        shadow.classList.add('letter-shadow');
        shadow.textContent = letter;
        zone.appendChild(shadow);
        
        dropZonesContainer.appendChild(zone);
    });

    // 3. Create Draggable Letters (Shuffled)
    const shuffledLetters = [...letters].sort(() => Math.random() - 0.5);
    shuffledLetters.forEach((letter) => {
        const letterEl = document.createElement('div');
        letterEl.classList.add('draggable-letter');
        letterEl.textContent = letter;
        letterEl.setAttribute('data-letter', letter);
        
        // Touch Logic Variables
        let startX, startY, currentX, currentY;
        let originalX = 0, originalY = 0;

        const pointerStart = (e) => {
            e.preventDefault();
            startX = e.clientX;
            startY = e.clientY;
            
            letterEl.classList.add('dragging');
            letterEl.style.zIndex = "1000";
            if (letterEl.setPointerCapture) letterEl.setPointerCapture(e.pointerId);
        };

        const pointerMove = (e) => {
            if (!letterEl.classList.contains('dragging')) return;
            e.preventDefault();
            currentX = e.clientX - startX;
            currentY = e.clientY - startY;

            letterEl.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.1)`;
        };

        const pointerEnd = (e) => {
            if (!letterEl.classList.contains('dragging')) return;
            letterEl.classList.remove('dragging');
            if (letterEl.releasePointerCapture) letterEl.releasePointerCapture(e.pointerId);
            
            const rect = letterEl.getBoundingClientRect();
            const dropZones = document.querySelectorAll('.drop-zone');
            let matched = false;

            dropZones.forEach(zone => {
                const zoneRect = zone.getBoundingClientRect();
                const isOverlapping = !(rect.right < zoneRect.left || 
                                       rect.left > zoneRect.right || 
                                       rect.bottom < zoneRect.top || 
                                       rect.top > zoneRect.bottom);

                const isCorrectLetter = zone.getAttribute('data-letter') === letterEl.getAttribute('data-letter');
                const isZoneEmpty = !zone.querySelector('.draggable-letter');

                if (isOverlapping && isCorrectLetter && isZoneEmpty) {
                    // Correct Match
                    zone.appendChild(letterEl);
                    letterEl.style.transform = 'none';
                    letterEl.style.position = 'static';
                    letterEl.classList.add('placed');
                    
                    // Remove pointer events
                    letterEl.removeEventListener('pointerdown', pointerStart);
                    letterEl.removeEventListener('pointermove', pointerMove);
                    letterEl.removeEventListener('pointerup', pointerEnd);
                    
                    matched = true;
                    if (window.playDing) window.playDing();
                    checkWinWriting();
                }
            });

            if (!matched) {
                // Return to original container with transition
                letterEl.style.transition = 'transform 0.3s ease';
                letterEl.style.transform = 'translate(0, 0)';
                setTimeout(() => {
                    letterEl.style.transition = 'none';
                    letterEl.style.zIndex = "";
                }, 300);
            }
        };

        letterEl.addEventListener('pointerdown', pointerStart);
        letterEl.addEventListener('pointermove', pointerMove);
        letterEl.addEventListener('pointerup', pointerEnd);

        lettersContainer.appendChild(letterEl);
    });
}

/**
 * checkWinWriting: Evaluates if the word is complete.
 */
function checkWinWriting() {
    const totalZones = document.querySelectorAll('.drop-zone').length;
    const filledZones = document.querySelectorAll('.drop-zone .draggable-letter').length;

    if (totalZones === filledZones) {
        // Dispatch win event
        const event = new CustomEvent('writingFinished');
        window.dispatchEvent(event);
    }
}

/**
 * renderJuegoSuma: Renders the math addition minigame.
 * @param {number} cantidad1 - First value for the sum.
 * @param {number} cantidad2 - Second value for the sum.
 * @param {string} icono1 - Emoji icon to use for the first group.
 * @param {string} icono2 - (Optional) Emoji icon to use for the second group. Defaults to icono1.
 */
function renderJuegoSuma(cantidad1, cantidad2, icono1, icono2) {
    const gameContent = document.getElementById('game-content');
    if (!gameContent) return;

    const iconBase2 = icono2 || icono1;

    // 1. Setup Data
    const correctAnswer = cantidad1 + cantidad2;
    
    // Generate options: Correct + 2 random distractors (+- 1 or 2, non-negative, unique)
    let options = [correctAnswer];
    while (options.length < 3) {
        const offset = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
        const distractor = correctAnswer + offset;
        if (distractor >= 0 && !options.includes(distractor)) {
            options.push(distractor);
        }
    }
    
    // Shuffle options
    options = options.sort(() => Math.random() - 0.5);

    // 2. Render Interface
    gameContent.innerHTML = `
        <div class="math-game">
            <h2 class="game-instruction-title">¡Cuenta y suma los tesoros!</h2>
            
            <div class="math-visuals-container">
                <div class="math-group" id="group1"></div>
                <div class="math-sign">+</div>
                <div class="math-group" id="group2"></div>
                <div class="math-sign">=</div>
                <div class="math-result-placeholder">?</div>
            </div>

            <div class="math-options-container">
                ${options.map(opt => `<button class="math-option-btn" data-value="${opt}">${opt}</button>`).join('')}
            </div>
        </div>
    `;

    // 3. Populate Emojis with Scaffolding
    const group1 = document.getElementById('group1');
    const group2 = document.getElementById('group2');
    
    // Group 1
    const scaffold1 = document.createElement('div');
    scaffold1.classList.add('number-scaffold');
    scaffold1.innerHTML = `<span class="digit-overlay">${cantidad1}</span>`;
    for (let i = 0; i < cantidad1; i++) {
        const span = document.createElement('span');
        span.textContent = icono1;
        scaffold1.appendChild(span);
    }
    group1.appendChild(scaffold1);
    
    // Group 2
    const scaffold2 = document.createElement('div');
    scaffold2.classList.add('number-scaffold');
    scaffold2.innerHTML = `<span class="digit-overlay">${cantidad2}</span>`;
    for (let i = 0; i < cantidad2; i++) {
        const span = document.createElement('span');
        span.textContent = iconBase2;
        scaffold2.appendChild(span);
    }
    group2.appendChild(scaffold2);

    // 4. Add Event Listeners
    const buttons = document.querySelectorAll('.math-option-btn');
    buttons.forEach(btn => {
        const handleInteraction = (e) => {
            e.preventDefault();
            const selectedValue = parseInt(btn.getAttribute('data-value'));

            if (selectedValue === correctAnswer) {
                // Correct Answer
                btn.classList.add('correct-answer');
                document.querySelector('.math-result-placeholder').textContent = correctAnswer;
                
                if (window.playDing) window.playDing();
                
                // Success message and event
                setTimeout(() => {
                    const event = new CustomEvent('mathFinished');
                    window.dispatchEvent(event);
                }, 800);
            } else {
                // Incorrect Answer
                btn.classList.add('shake');
                btn.style.backgroundColor = '#ff4d4d'; // Temporary red
                
                // Cleanup after animation
                setTimeout(() => {
                    btn.classList.remove('shake');
                    btn.style.backgroundColor = '';
                }, 500);
            }
        };

        btn.addEventListener('touchstart', handleInteraction, { passive: false });
        btn.addEventListener('click', handleInteraction);
    });
}

/**
 * renderJuegoCatalejo: Renders the "La Caracola Mágica" minigame.
 * @param {string} audioKey - The key/filename for the German audio.
 * @param {object} opcionCorrecta - The correct answer object {icon}.
 * @param {object[]} distractores - Array of incorrect option objects {icon}.
 * @param {boolean} autoPlay - Whether to automatically play the audio on load.
 */
function renderJuegoCatalejo(audioKey, opcionCorrecta, distractores, autoPlay = true) {
    const gameContent = document.getElementById('game-content');
    if (!gameContent) return;

    // 1. Setup Data
    let options = [opcionCorrecta, ...distractores];
    options = options.sort(() => Math.random() - 0.5); // Shuffle

    // Dynamic theme
    let titleText = "¡Escucha la Caracola y elige lo que oigas!";
    let btnIcon = "🐚";
    
    if (typeof gameState !== 'undefined') {
        if (gameState.currentLevel === 'bosque_loros') {
            titleText = "¡Acércate al Tronco Mágico y escucha el eco oculto!";
            btnIcon = "🪵";
        } else if (gameState.currentLevel === 'cueva_gemas') {
            titleText = "¡Escucha el Eco en la oscuridad de la Cueva!";
            btnIcon = "🦇";
        } else if (gameState.currentLevel === 'cubierta_capitan') {
            titleText = "¡Presta atención a lo que susurran las Velas!";
            btnIcon = "⛵";
        }
    }

    // 2. Render Interface
    gameContent.innerHTML = `
        <div class="catalejo-game">
            <h2 class="game-instruction-title">${titleText}</h2>
            
            <div class="audio-play-container">
                <button id="btn-play-catalejo" class="catalejo-btn" title="Escuchar">${btnIcon}</button>
            </div>

            <div class="catalejo-options-container">
                ${options.map(opt => `
                    <div class="catalejo-option-group" data-value="${opt.icon}">
                        <div class="catalejo-option">
                            ${opt.icon}
                        </div>
                    </div>`).join('')}
            </div>
        </div>
    `;

    // 3. Audio Logic (TAFA 2: Uses playNico with 'saludo' pose)
    const btnPlay = document.getElementById('btn-play-catalejo');

    const playAudio = () => {
        if (typeof window.playNico === 'function') {
            btnPlay.classList.add('playing');
            // Path: /assets/audio/aleman/de_[palabra].m4a
            const audioPath = `aleman/${audioKey}.m4a`;
            window.playNico(audioPath, 'saludo').finally(() => {
                btnPlay.classList.remove('playing');
            });
        }
    };

    // Events for Play Button
    btnPlay.addEventListener('touchstart', (e) => {
        e.preventDefault();
        playAudio();
    });
    btnPlay.addEventListener('click', playAudio);

    // Autoplay on first load
    if (autoPlay) {
        setTimeout(playAudio, 500);
    }

    // 4. Options Logic
    const optionEls = document.querySelectorAll('.catalejo-option-group');
    optionEls.forEach(el => {
        const handleInteraction = (e) => {
            e.preventDefault();
            const selectedValue = el.getAttribute('data-value');
            const correctValue = opcionCorrecta.icon;

            if (selectedValue === correctValue) {
                // Correct
                el.classList.add('correct-answer');
                
                if (window.playDing) window.playDing();

                setTimeout(() => {
                    const event = new CustomEvent('catalejoFinished');
                    window.dispatchEvent(event);
                }, 800);
            } else {
                // Incorrect
                el.classList.add('shake');
                el.style.backgroundColor = '#ff4d4d'; // Temporary red
                setTimeout(() => {
                    el.classList.remove('shake');
                    el.style.backgroundColor = '';
                }, 500);
            }
        };

        el.addEventListener('touchstart', handleInteraction, { passive: false });
        el.addEventListener('click', handleInteraction);
    });
}

/**
 * renderCofreTesoro: Renders the final treasure chest scene.
 */
function renderCofreTesoro() {
    const gameContent = document.getElementById('game-content');
    if (!gameContent) return;

    gameContent.innerHTML = `
        <div id="chest-screen" class="chest-container">
            <div id="treasure-chest" class="treasure-chest">🧰</div>
            <div id="golden-key" class="golden-key">🗝️</div>
        </div>
    `;

    const chest = document.getElementById('treasure-chest');
    const key = document.getElementById('golden-key');

    let startX, startY;
    let currentX = 0, currentY = 0;
    
    const pointerStart = (e) => {
        e.preventDefault();
        startX = e.clientX;
        startY = e.clientY;
        key.classList.add('dragging');
        if (key.setPointerCapture) key.setPointerCapture(e.pointerId);
    };

    const pointerMove = (e) => {
        if (!key.classList.contains('dragging')) return;
        e.preventDefault();
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        key.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.1)`;
    };

    const pointerEnd = (e) => {
        if (!key.classList.contains('dragging')) return;
        key.classList.remove('dragging');
        if (key.releasePointerCapture) key.releasePointerCapture(e.pointerId);
        
        const keyRect = key.getBoundingClientRect();
        const chestRect = chest.getBoundingClientRect();

        // Collision detection
        const isOverlapping = !(keyRect.right < chestRect.left || 
                               keyRect.left > chestRect.right || 
                               keyRect.bottom < chestRect.top || 
                               keyRect.top > chestRect.bottom);

        if (isOverlapping) {
            key.style.display = 'none';
            triggerVictoryCelebration();
        } else {
            // Return to start
            key.style.transition = 'transform 0.3s ease';
            key.style.transform = 'translate(0, 0)';
            setTimeout(() => {
                key.style.transition = 'none';
            }, 300);
        }
    };

    key.addEventListener('pointerdown', pointerStart);
    key.addEventListener('pointermove', pointerMove);
    key.addEventListener('pointerup', pointerEnd);
}

/**
 * triggerVictoryCelebration: Triggers the final celebration effects.
 */
function triggerVictoryCelebration() {
    const chest = document.getElementById('treasure-chest');
    if (!chest) return;

    // 1. Update Chest Visuals
    chest.innerHTML = '💎';
    chest.classList.add('opened');

    // 2. Play Sound (Tadaaa Oscillator)
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const playNote = (freq, start, duration) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, start);
            gain.gain.setValueAtTime(0.3, start);
            gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(start);
            osc.stop(start + duration);
        };
        const now = audioCtx.currentTime;
        playNote(523.25, now, 0.2); // C5
        playNote(659.25, now + 0.1, 0.2); // E5
        playNote(783.99, now + 0.2, 0.5); // G5
    } catch (e) {
        console.error("Audio API not supported or error:", e);
    }

    // 3. Generate Coin Rain
    const coins = ['🪙', '💎', '💰', '✨'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const coin = document.createElement('span');
            coin.classList.add('coin-rain');
            coin.innerHTML = coins[Math.floor(Math.random() * coins.length)];
            coin.style.left = Math.random() * 100 + 'vw';
            coin.style.animationDuration = (Math.random() * 2 + 1) + 's';
            coin.style.fontSize = (Math.random() * 2 + 2) + 'rem';
            document.body.appendChild(coin);
            
            // Remove from DOM after animation
            setTimeout(() => coin.remove(), 3000);
        }, i * 50);
    }

    // 4. Final Alert after celebration
    setTimeout(() => {
        alert("¡FELICIDADES PIRATA! Has recuperado el tesoro legendario. ¡Eres el dueño de los siete mares! 🏴‍☠️🦜💰");
    }, 3000);
}

// Global listener for the parrot game completion
window.addEventListener('loroFinished', () => {
    console.log("¡Excelente trabajo! El loro ha aprendido la palabra.");
});

// Global listener for the writing game completion
window.addEventListener('writingFinished', () => {
    console.log("¡Palabra completada correctamente!");
});

// Global listener for the math game completion
window.addEventListener('mathFinished', () => {
    console.log("¡Operación resuelta con éxito!");
});

// Global listener for the listening game completion
window.addEventListener('listeningFinished', () => {
    console.log("¡Excelente! Has escuchado correctamente la palabra en alemán.");
});
