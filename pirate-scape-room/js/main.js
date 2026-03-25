/**
 * main.js: Global game state, persistence, and navigation logic for "El Tesoro Pirata".
 */

// Nico el Grumete Global Controller
window.setNicoPose = (poseName) => {
    const sprite = document.getElementById('nico-sprite');
    if (!sprite) return;
    
    // Fallback path mapping
    const poseMap = {
        'quieto': 'assets/img/nico_quieto.png',
        'hablando': 'assets/img/nico_saludo_hablando.png',
        'saludo': 'assets/img/nico_saludo_hablando.png',
        'mapa': 'assets/img/nico_saludo_hablando.png',
        'señalar': 'assets/img/nico_saludo_hablando.png',
        'sorpresa': 'assets/img/nico_saludo_hablando.png'
    };
    
    const src = poseMap[poseName] || poseMap['quieto'];
    sprite.src = src;
    
    // Pulse animation on change for visual feedback
    sprite.style.transform = 'scale(1.05)';
    setTimeout(() => sprite.style.transform = 'scale(1)', 150);
};

window.showNicoMessage = (text, duration = 3000) => {
    const bubble = document.getElementById('dialog-container');
    const textEl = document.getElementById('nico-text');
    if (!bubble || !textEl) return;
    
    textEl.textContent = text;
    bubble.style.display = 'flex'; // Consistent with playNico
    
    if (duration > 0) {
        setTimeout(() => {
            bubble.style.display = 'none';
        }, duration);
    }
};

window.hideNicoMessage = () => {
    const bubble = document.getElementById('dialog-container');
    if (bubble) bubble.style.display = 'none'; // Consistent with playNico
};

/**
 * wordDatabase: The fixed list of 30 words for the minigames.
 */
const wordDatabase = [
    "sol", "pan", "mar", "sal", "pez",      // Nivel 1-5
    "casa", "pato", "gato", "mesa", "luna", // Nivel 6-10
    "perro", "carro", "rana", "rio", "raton", // Nivel 11-15
    "globo", "tren", "flor", "fruta", "cruz", // Nivel 16-20
    "barco", "loro", "isla", "mapa", "bota",  // Nivel 21-25
    "pirata", "tesoro", "amigo", "miguel", "nico" // Nivel 26-30
];

// Configuration for game levels/scenarios
const levelsConfig = [
    { 
        id: "bahia_colores", 
        name: "La Bahía de los Colores", 
        isFinal: false,
        icon: "🏝️",
        minigames: {
            voz: {
                id: "voz",
                name: "El Loro Parlanchín",
                icon: "🦜",
                opciones: wordDatabase
            },
            escritura: {
                id: "escritura",
                name: "Letras en la Arena",
                icon: "✍️",
                opciones: wordDatabase
            },
            suma: {
                id: "suma",
                name: "Contando el Botín",
                icon: "🧮",
                opciones: [
                    { cant1: 1, cant2: 1, icono1: "🐚", icono2: "🦀" },
                    { cant1: 2, cant2: 1, icono1: "🐟", icono2: "🐙" },
                    { cant1: 2, cant2: 2, icono1: "🐢", icono2: "🐬" },
                    { cant1: 3, cant2: 1, icono1: "🦀", icono2: "🐡" },
                    { cant1: 3, cant2: 2, icono1: "🐳", icono2: "🦑" },
                    { cant1: 4, cant2: 1, icono1: "🐠", icono2: "🦑" },
                    { cant1: 3, cant2: 3, icono1: "🐚", icono2: "🐟" },
                    { cant1: 4, cant2: 2, icono1: "🐬", icono2: "🐢" },
                    { cant1: 5, cant2: 2, icono1: "🐡", icono2: "🦀" },
                    { cant1: 4, cant2: 4, icono1: "🐙", icono2: "🐳" },
                    { cant1: 5, cant2: 1, icono1: "🦑", icono2: "🐚" },
                    { cant1: 6, cant2: 1, icono1: "🐟", icono2: "🐠" },
                    { cant1: 5, cant2: 3, icono1: "🦀", icono2: "🐢" },
                    { cant1: 7, cant2: 1, icono1: "🐬", icono2: "🐳" },
                    { cant1: 2, cant2: 4, icono1: "🐙", icono2: "🐡" },
                    { cant1: 3, cant2: 5, icono1: "🐚", icono2: "🦞" },
                    { cant1: 4, cant2: 3, icono1: "🐠", icono2: "🦞" },
                    { cant1: 2, cant2: 6, icono1: "🦐", icono2: "🦀" },
                    { cant1: 1, cant2: 8, icono1: "🐳", icono2: "🐙" },
                    { cant1: 5, cant2: 4, icono1: "🐬", icono2: "🐢" },
                    { cant1: 3, cant2: 4, icono1: "🐟", icono2: "🐡" },
                    { cant1: 6, cant2: 2, icono1: "🐚", icono2: "🦞" },
                    { cant1: 4, cant2: 5, icono1: "🦐", icono2: "🦑" },
                    { cant1: 2, cant2: 7, icono1: "🐠", icono2: "🐬" },
                    { cant1: 1, cant2: 9, icono1: "🐢", icono2: "🐳" },
                    { cant1: 5, cant2: 5, icono1: "🐙", icono2: "🐟" },
                    { cant1: 7, cant2: 3, icono1: "🦀", icono2: "🐚" },
                    { cant1: 6, cant2: 4, icono1: "🐡", icono2: "🦑" },
                    { cant1: 8, cant2: 2, icono1: "🦐", icono2: "🦞" },
                    { cant1: 9, cant2: 1, icono1: "🐠", icono2: "🐙" }
                ]
            },
            escucha: {
                id: "escucha",
                name: "La Caracola Mágica",
                icon: "🐚",
                opciones: wordDatabase
            }
        }
    },
    { 
        id: "bosque_loros", 
        name: "Bosque de los Loros", 
        icon: "🦜", 
        isFinal: false,
        minigames: {
            voz: { id: "voz", name: "El Loro Parlanchín", icon: "🦜", opciones: wordDatabase },
            escritura: { id: "escritura", name: "Trazos", icon: "📝", opciones: wordDatabase },
            suma: {
                id: "suma",
                name: "Contando el Botín",
                icon: "🥥",
                opciones: [
                    { cant1: 1, cant2: 1, icono1: "🍎", icono2: "🍌" },
                    { cant1: 2, cant2: 1, icono1: "🍇", icono2: "🍉" },
                    { cant1: 2, cant2: 2, icono1: "🍓", icono2: "🍒" },
                    { cant1: 3, cant2: 1, icono1: "🥭", icono2: "🍍" },
                    { cant1: 3, cant2: 2, icono1: "🥥", icono2: "🥝" },
                    { cant1: 4, cant2: 1, icono1: "🍊", icono2: "🍋" },
                    { cant1: 3, cant2: 3, icono1: "🍈", icono2: "🍏" },
                    { cant1: 4, cant2: 2, icono1: "🍐", icono2: "🍑" },
                    { cant1: 5, cant2: 2, icono1: "🍎", icono2: "🍓" },
                    { cant1: 4, cant2: 4, icono1: "🍌", icono2: "🍇" },
                    { cant1: 5, cant2: 1, icono1: "🍉", icono2: "🍒" },
                    { cant1: 6, cant2: 1, icono1: "🍍", icono2: "🥭" },
                    { cant1: 5, cant2: 3, icono1: "🥝", icono2: "🥥" },
                    { cant1: 7, cant2: 1, icono1: "🍋", icono2: "🍊" },
                    { cant1: 2, cant2: 4, icono1: "🍏", icono2: "🍈" },
                    { cant1: 3, cant2: 5, icono1: "🍑", icono2: "🍐" },
                    { cant1: 4, cant2: 3, icono1: "🍓", icono2: "🍎" },
                    { cant1: 2, cant2: 6, icono1: "🍇", icono2: "🍌" },
                    { cant1: 1, cant2: 8, icono1: "🍒", icono2: "🍉" },
                    { cant1: 5, cant2: 4, icono1: "🥭", icono2: "🍍" },
                    { cant1: 3, cant2: 4, icono1: "🥝", icono2: "🥥" },
                    { cant1: 6, cant2: 2, icono1: "🍋", icono2: "🍊" },
                    { cant1: 4, cant2: 5, icono1: "🍏", icono2: "🍈" },
                    { cant1: 2, cant2: 7, icono1: "🍐", icono2: "🍑" },
                    { cant1: 1, cant2: 9, icono1: "🍎", icono2: "🍓" },
                    { cant1: 5, cant2: 5, icono1: "🍌", icono2: "🍇" },
                    { cant1: 7, cant2: 3, icono1: "🍉", icono2: "🍒" },
                    { cant1: 6, cant2: 4, icono1: "🍍", icono2: "🥭" },
                    { cant1: 8, cant2: 2, icono1: "🥥", icono2: "🥝" },
                    { cant1: 9, cant2: 1, icono1: "🍊", icono2: "🍋" }
                ]
            },
            escucha: { id: "escucha", name: "El Tronco Mágico", icon: "🪵", opciones: wordDatabase }
        }
    },
    { 
        id: "cueva_gemas", 
        name: "Cueva de las Gemas", 
        icon: "💎", 
        isFinal: false,
        minigames: {
            voz: { id: "voz", name: "El Loro Parlanchín", icon: "🦜", opciones: wordDatabase },
            escritura: { id: "escritura", name: "Cofre", icon: "🧰", opciones: wordDatabase },
            suma: {
                id: "suma",
                name: "Contando el Botín",
                icon: "💎",
                opciones: [
                    { cant1: 1, cant2: 1, icono1: "💎", icono2: "🪙" },
                    { cant1: 2, cant2: 1, icono1: "👑", icono2: "💍" },
                    { cant1: 2, cant2: 2, icono1: "💰", icono2: "💎" },
                    { cant1: 3, cant2: 1, icono1: "🪙", icono2: "✨" },
                    { cant1: 3, cant2: 2, icono1: "💍", icono2: "👑" },
                    { cant1: 4, cant2: 1, icono1: "🔮", icono2: "💎" },
                    { cant1: 3, cant2: 3, icono1: "💎", icono2: "💰" },
                    { cant1: 4, cant2: 2, icono1: "✨", icono2: "💍" },
                    { cant1: 5, cant2: 2, icono1: "🪙", icono2: "👑" },
                    { cant1: 4, cant2: 4, icono1: "💍", icono2: "💎" },
                    { cant1: 5, cant2: 1, icono1: "💰", icono2: "🪙" },
                    { cant1: 6, cant2: 1, icono1: "👑", icono2: "✨" },
                    { cant1: 5, cant2: 3, icono1: "🪙", icono2: "🔮" },
                    { cant1: 7, cant2: 1, icono1: "💎", icono2: "💍" },
                    { cant1: 2, cant2: 4, icono1: "💍", icono2: "💰" },
                    { cant1: 3, cant2: 5, icono1: "👑", icono2: "💎" },
                    { cant1: 4, cant2: 3, icono1: "✨", icono2: "🪙" },
                    { cant1: 2, cant2: 6, icono1: "🔮", icono2: "👑" },
                    { cant1: 1, cant2: 8, icono1: "💎", icono2: "✨" },
                    { cant1: 5, cant2: 4, icono1: "💰", icono2: "💍" },
                    { cant1: 3, cant2: 4, icono1: "🪙", icono2: "💎" },
                    { cant1: 6, cant2: 2, icono1: "💍", icono2: "👑" },
                    { cant1: 4, cant2: 5, icono1: "✨", icono2: "💰" },
                    { cant1: 2, cant2: 7, icono1: "👑", icono2: "🪙" },
                    { cant1: 1, cant2: 9, icono1: "💎", icono2: "🔮" },
                    { cant1: 5, cant2: 5, icono1: "💰", icono2: "✨" },
                    { cant1: 7, cant2: 3, icono1: "🪙", icono2: "💍" },
                    { cant1: 6, cant2: 4, icono1: "💍", icono2: "💎" },
                    { cant1: 8, cant2: 2, icono1: "👑", icono2: "💰" },
                    { cant1: 9, cant2: 1, icono1: "💎", icono2: "🪙" }
                ]
            },
            escucha: { id: "escucha", name: "El Eco", icon: "🦇", opciones: wordDatabase }
        }
    },
    { 
        id: "cubierta_capitan", 
        name: "Cubierta del Capitán", 
        icon: "🪝", 
        isFinal: false,
        minigames: {
            voz: { id: "voz", name: "El Loro Parlanchín", icon: "🦜", opciones: wordDatabase },
            escritura: { id: "escritura", name: "Bitácora", icon: "📖", opciones: wordDatabase },
            suma: {
                id: "suma",
                name: "Contando el Botín",
                icon: "🛢️",
                opciones: [
                    { cant1: 1, cant2: 1, icono1: "🍞", icono2: "🧀" },
                    { cant1: 2, cant2: 1, icono1: "🍗", icono2: "🍖" },
                    { cant1: 2, cant2: 2, icono1: "🍎", icono2: "🍌" },
                    { cant1: 3, cant2: 1, icono1: "🥔", icono2: "🥕" },
                    { cant1: 3, cant2: 2, icono1: "🍞", icono2: "🍗" },
                    { cant1: 4, cant2: 1, icono1: "🌽", icono2: "🧅" },
                    { cant1: 3, cant2: 3, icono1: "🧀", icono2: "🍎" },
                    { cant1: 4, cant2: 2, icono1: "🍖", icono2: "🍌" },
                    { cant1: 5, cant2: 2, icono1: "🥔", icono2: "🍞" },
                    { cant1: 4, cant2: 4, icono1: "🥕", icono2: "🍗" },
                    { cant1: 5, cant2: 1, icono1: "🌽", icono2: "🧀" },
                    { cant1: 6, cant2: 1, icono1: "🧅", icono2: "🍎" },
                    { cant1: 5, cant2: 3, icono1: "🍌", icono2: "🍖" },
                    { cant1: 7, cant2: 1, icono1: "🥐", icono2: "🍞" },
                    { cant1: 2, cant2: 4, icono1: "🥖", icono2: "🧀" },
                    { cant1: 3, cant2: 5, icono1: "🥚", icono2: "🍗" },
                    { cant1: 4, cant2: 3, icono1: "🧈", icono2: "🌽" },
                    { cant1: 2, cant2: 6, icono1: "🍎", icono2: "🥕" },
                    { cant1: 1, cant2: 8, icono1: "🍌", icono2: "🥔" },
                    { cant1: 5, cant2: 4, icono1: "🍞", icono2: "🍖" },
                    { cant1: 3, cant2: 4, icono1: "🧀", icono2: "🧅" },
                    { cant1: 6, cant2: 2, icono1: "🍗", icono2: "🌽" },
                    { cant1: 4, cant2: 5, icono1: "🍖", icono2: "🥖" },
                    { cant1: 2, cant2: 7, icono1: "🥐", icono2: "🍎" },
                    { cant1: 1, cant2: 9, icono1: "🥕", icono2: "🍞" },
                    { cant1: 5, cant2: 5, icono1: "🥔", icono2: "🧀" },
                    { cant1: 7, cant2: 3, icono1: "🧅", icono2: "🍗" },
                    { cant1: 6, cant2: 4, icono1: "🥖", icono2: "🍖" },
                    { cant1: 8, cant2: 2, icono1: "🍎", icono2: "🍌" },
                    { cant1: 9, cant2: 1, icono1: "🍞", icono2: "🧀" }
                ]
            },
            escucha: { id: "escucha", name: "Velas", icon: "⛵", opciones: wordDatabase }
        }
    },
    { id: "cofre_tesoro", name: "El Cofre del Tesoro", icon: "🏴‍☠️", isFinal: true, minigames: {} }
];

// Global Game State
let gameState = {
    coins: 0,
    progress: {}, // { levelId: { minigameId: { usedOptions: [], isCompleted: false } } }
    currentWordIndex: 0, 
    sessionWords: [],
    sessionCounter: 0,
    isProcessingRound: false, // Guard for race conditions
    currentSelection: null,
    currentScreen: 'start',
    currentLevel: null,
    currentMinigame: null,
    visitedIslands: [] // Track which islands have been visited
};

const STORAGE_KEY = 'tesoroPirataState';

/**
 * saveGameState: Persists the current game state to localStorage.
 */
function saveGameState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
}

/**
 * loadGameState: Loads the game state from localStorage or initializes a new one.
 */
function loadGameState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        gameState = { ...gameState, ...parsed };

        // Legacy Migration (Convert arrays to objects)
        Object.keys(gameState.progress).forEach(levelId => {
            Object.keys(gameState.progress[levelId]).forEach(minigameId => {
                const data = gameState.progress[levelId][minigameId];
                if (Array.isArray(data)) {
                    gameState.progress[levelId][minigameId] = {
                        usedOptions: data,
                        isCompleted: data.length >= 3
                    };
                }
            });
        });

        // Initialize visitedIslands if missing
        if (!gameState.visitedIslands) {
            gameState.visitedIslands = [];
        }

        updateHUD();
    }
}

/**
 * updateHUD: Updates the UI elements (coins) based on the current state.
 */
function updateHUD() {
    const coinEl = document.getElementById('coin-count');
    if (coinEl) {
        coinEl.textContent = gameState.coins;
    }
}

/**
 * renderMap: Dynamically creates level buttons in the map screen.
 */
function renderMap() {
    const mapContainer = document.getElementById('map-locations');
    if (!mapContainer) return;

    mapContainer.innerHTML = ''; // Clear existing content

    levelsConfig.forEach(level => {
        const btn = document.createElement('button');
        btn.classList.add('level-btn');
        
        // Locking Logic: Final level requires all 16 others to be completed
        const levelProgress = gameState.progress[level.id];
        // Check if all 4 minigames in this level are marked as completed
        const completedCount = levelProgress ? 
            Object.values(levelProgress).filter(p => p && p.isCompleted).length : 0;
        const isCompleted = completedCount === 4 && !level.isFinal;

        let isLocked = false;
        if (level.isFinal) {
            let totalCompletedMinigames = 0;
            levelsConfig.forEach(lvl => {
                if (!lvl.isFinal) {
                    const prog = gameState.progress[lvl.id];
                    totalCompletedMinigames += prog ? Object.values(prog).filter(p => p && p.isCompleted).length : 0;
                }
            });
            isLocked = totalCompletedMinigames < 16;
        }

        if (isLocked) {
            btn.classList.add('locked');
            btn.disabled = true;
        }

        if (isCompleted) {
            btn.classList.add('completed');
        }

        btn.innerHTML = `
            <span class="level-icon">${level.icon}</span>
            <span class="level-name">${level.name}</span>
            ${isCompleted ? '<span class="check-mark">✅</span>' : ''}
        `;

        if (!isLocked) {
            btn.addEventListener('click', () => {
                // Audio Unlock for Safari
                window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
                enterLevel(level.id, level.name);
            });
        }

        mapContainer.appendChild(btn);
    });
}

/**
 * enterLevel: Switches to the island menu screen with an animated transition.
 * @param {string} levelId - The ID of the selected level.
 * @param {string} levelName - The display name of the level.
 */
function enterLevel(levelId, levelName) {
    triggerTransition(() => {
        gameState.currentLevel = levelId;
        
        // Update background of the main container
        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            const bgMap = {
                'bahia_colores': 'assets/img/bahia_fondo.png',
                'bosque_loros': 'assets/img/bosque_fondo.png',
                'cueva_gemas': 'assets/img/cueva_fondo.png',
                'cubierta_capitan': 'assets/img/cubierta_fondo.png',
                'cofre_tesoro': 'assets/img/cofre_fondo.png'
            };
            const bgPath = bgMap[levelId] || 'assets/img/mapa_fondo.png';
            gameContainer.style.backgroundImage = `url('${bgPath}')`;
        }

        if (levelId === "cofre_tesoro") {
            renderCofreTesoro();
            showScreen('minigame');
            
            // Update back button for final level
            const btnBack = document.getElementById('btn-back');
            if (btnBack) btnBack.textContent = "🔙 Mapa";


        } else {
            const islandTitle = document.getElementById('island-title');
            if (islandTitle) {
                islandTitle.textContent = levelName;
            }
            renderIslandMenu(levelId);
            
            // Trigger Island Welcome Audio
            const islandAudios = {
                'bahia_colores': 'vo_isla_bahia.m4a',
                'bosque_loros': 'vo_isla_bosque.m4a',
                'cueva_gemas': 'vo_isla_cueva.m4a',
                'cubierta_capitan': 'vo_isla_cubierta.m4a'
            };

            if (islandAudios[levelId]) {
                playNico(islandAudios[levelId], 'saludo');
                
                // Mark as visited (keep tracking just in case)
                if (!gameState.visitedIslands.includes(levelId)) {
                    gameState.visitedIslands.push(levelId);
                    saveGameState();
                }
            } else {
                setNicoPose('saludo');
            }

            showScreen('island');
        }
    });
}

/**
 * triggerTransition: Handles the full screen transition overlay logic.
 * @param {Function} midCallback - Logic to run when the screen is fully covered.
 * @param {boolean} isReverse - Whether to use the reverse (exit) animation.
 */
function triggerTransition(midCallback, isReverse = false) {
    const overlay = document.createElement('div');
    overlay.className = 'island-transition-overlay';
    document.body.appendChild(overlay);

    const inAnim = isReverse ? 'slide-in-reverse' : 'slide-in';
    const outAnim = isReverse ? 'slide-out-reverse' : 'slide-out';

    overlay.style.animation = `${inAnim} 0.5s forwards ease-in-out`;

    overlay.addEventListener('animationend', function handler(e) {
        if (e.animationName === inAnim) {
            if (midCallback) midCallback();
            overlay.style.animation = `${outAnim} 0.5s forwards ease-in-out`;
        } else if (e.animationName === outAnim) {
            overlay.removeEventListener('animationend', handler);
            overlay.remove();
        }
    });
}

/**
 * renderIslandMenu: Generates the 4 minigame station buttons.
 * @param {string} levelId - The ID of the level.
 */
function renderIslandMenu(levelId) {
    const stationContainer = document.getElementById('station-locations');
    if (!stationContainer) return;

    stationContainer.innerHTML = ''; // Clear existing

    const level = levelsConfig.find(l => l.id === levelId);
    if (!level || !level.minigames) return;

    // Initialize progress for this level as an object of arrays
    if (!gameState.progress[levelId]) {
        gameState.progress[levelId] = {};
    }

    // Convert object to array for iteration
    const minigames = Object.values(level.minigames);

    minigames.forEach(game => {
        const btn = document.createElement('button');
        btn.classList.add('station-btn');
        
        const gameProgress = gameState.progress[levelId][game.id] || { usedOptions: [], isCompleted: false };
        const isCompleted = gameProgress.isCompleted;

        if (isCompleted) {
            btn.classList.add('completed');
        }

        // Generate progress dots (visual representation of completion)
        let dotsHtml = '<div class="station-progress">';
        for (let i = 1; i <= 3; i++) {
            // Fill dots if station is completed
            const isFilled = isCompleted; 
            dotsHtml += `<span class="progress-dot ${isFilled ? 'filled' : ''}"></span>`;
        }
        dotsHtml += '</div>';

        btn.innerHTML = `
            <span class="station-emoji">${game.icon}</span>
            <span class="station-name">${game.name}</span>
            ${dotsHtml}
            ${isCompleted ? '<span class="station-check">✅</span>' : ''}
        `;

        btn.addEventListener('click', () => {
            // Audio Unlock for Safari
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(""));
            launchMinigame(game);
        });
        stationContainer.appendChild(btn);
    });
}

/**
 * launchMinigame: Prepares and shows the specific minigame.
 * @param {object} game - The game configuration object.
 * @param {boolean} skipInstructions - If true, instruction audio won't play.
 */
async function launchMinigame(game, skipInstructions = false) {
    gameState.currentMinigame = game.id;
    
    // Show Screen and Instructions First
    showScreen('minigame');


    // Mapping of station IDs to audio filenames and poses
    const stationConfig = {
        'voz': { file: 'vo_inst_loro.m4a', pose: 'saludo' },
        'escritura': { 
            file: gameState.currentLevel === 'bosque_loros' ? 'vo_inst_trazos.m4a' :
                  gameState.currentLevel === 'cueva_gemas' ? 'vo_inst_cofre.m4a' :
                  gameState.currentLevel === 'cubierta_capitan' ? 'vo_inst_bitacora.m4a' :
                  'vo_inst_arena.m4a', 
            pose: 'saludo' 
        },
        'suma': { file: 'vo_inst_sumas.m4a', pose: 'saludo' },
        'escucha': { 
            file: gameState.currentLevel === 'bosque_loros' ? 'vo_inst_tronco.m4a' : 
                  gameState.currentLevel === 'cueva_gemas' ? 'vo_inst_eco.m4a' :
                  gameState.currentLevel === 'cubierta_capitan' ? 'vo_inst_velas.m4a' :
                  'vo_inst_aleman.m4a', 
            pose: 'saludo' 
        }
    };

    // Start of Session: Selection of 3 Random Words (TAFA 1 & 3)
    let selection;
    const isWordGame = ['voz', 'escritura', 'escucha'].includes(game.id);

    if (!skipInstructions) {
        // Initialize Session
        gameState.sessionCounter = 0;
        if (isWordGame) {
            // Pick 3 random words from the appropriate database (TAFA 1 & 3)
            const db = (game.id === 'escucha') ? germanWordList : wordDatabase;
            gameState.sessionWords = [...db]
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);
        } else {
            // For other games (like math), just use the options or any 3 rounds
            gameState.sessionWords = Array(3).fill(null).map(() => {
                const options = game.opciones;
                return options[Math.floor(Math.random() * options.length)];
            });
        }
    }

    // Get current selection from session
    selection = gameState.sessionWords[gameState.sessionCounter];
    
    gameState.currentSelection = selection;

    // Update session progress dots in UI (ONLY the ones in the minigame screen)
    const dotsContainer = document.getElementById('minigame-session-progress');
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dot.className = `progress-dot ${i < gameState.sessionCounter ? 'filled' : ''}`;
            dotsContainer.appendChild(dot);
        }
    }

    // AUDIO FLOW (TAFA 1): Instruction Only
    const gameProgress = gameState.progress[gameState.currentLevel][gameState.currentMinigame] || { isCompleted: false };
    
    const shouldPlayInstructions = !skipInstructions && !gameProgress.isCompleted;
    if (shouldPlayInstructions) {
        // Only play instructions if not in the middle of a session and not already completed
        if (stationConfig[game.id]) {
            playNico(stationConfig[game.id].file, stationConfig[game.id].pose);
        }
    }

    // Render game content
    if (game.id === 'voz') {
        renderJuegoVoz(selection);
    } else if (game.id === 'escritura') {
        renderJuegoEscritura(selection);
    } else if (game.id === 'suma') {
        const i1 = selection.icono1 || selection.icono;
        const i2 = selection.icono2 || selection.icono;
        renderJuegoSuma(selection.cant1, selection.cant2, i1, i2);
    } else if (game.id === 'escucha') {
        // TAFA 3: Distractors from germanWordList
        const distractores = germanWordList
            .filter(w => w.word !== selection.word)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
        renderJuegoCatalejo(selection.audio, selection, distractores, !shouldPlayInstructions);
    }

    const btnBack = document.getElementById('btn-back');
    if (btnBack) btnBack.textContent = "🔙 Isla";
}

// Global listener for game completion events
window.addEventListener('loroFinished', () => {
    setNicoPose('quieto');
    setTimeout(() => completeLevel("¡Excelente! El loro ha aprendido la palabra. ¡Has ganado una moneda! 🪙"), 500);
});

window.addEventListener('writingFinished', () => {
    // TAFA: Pause so the child can visually see the assembled word before Nico speaks
    if (typeof window.playWord === 'function' && gameState.currentSelection) {
        setTimeout(() => {
            window.playWord(gameState.currentSelection).then(() => {
                setTimeout(() => {
                    completeLevel("¡Increíble! Has ordenado las letras correctamente.");
                }, 500);
            });
        }, 1200); // 1.2 second pause to admire the completed word
    } else {
        setTimeout(() => completeLevel("¡Increíble!"), 500);
    }
});

window.addEventListener('mathFinished', () => {
    setTimeout(() => completeLevel("¡Fantástico! Has resuelto el acertijo matemático. ¡Has ganado una moneda! 🪙"), 500);
});

window.addEventListener('catalejoFinished', () => {
    setTimeout(() => completeLevel("¡Excelente! Has escuchado correctamente la palabra en alemán. ¡Has ganado una moneda! 🪙"), 500);
});

/**
 * showGoldCoinAnimation: Creates a visual effect of a coin moving to the HUD.
 */
function showGoldCoinAnimation() {
    const coin = document.createElement('div');
    coin.className = 'victory-coin-animation';
    coin.textContent = '🪙';
    document.body.appendChild(coin);
    
    // Remove after animation finishes
    coin.addEventListener('animationend', () => {
        coin.remove();
    });
}

/**
 * completeLevel: Marks the current station as finished and rewards the player.
 * @param {string} message - Success message to show.
 */
function completeLevel(message) {
    if (!gameState.currentLevel || !gameState.currentMinigame || gameState.isProcessingRound) return;
    gameState.isProcessingRound = true;

    // Ensure progress structure exists
    if (!gameState.progress[gameState.currentLevel]) {
        gameState.progress[gameState.currentLevel] = {};
    }
    if (!gameState.progress[gameState.currentLevel][gameState.currentMinigame]) {
        gameState.progress[gameState.currentLevel][gameState.currentMinigame] = { usedOptions: [], isCompleted: false };
    }

    const gameProgress = gameState.progress[gameState.currentLevel][gameState.currentMinigame];
    const wasCompleted = gameProgress.isCompleted;

    // Increment session counter (TAFA 1)
    gameState.sessionCounter++;

    if (gameState.sessionCounter < 3) {
        // Continue silently so it only relies on the word playback, and no success loop
        setTimeout(() => {
            gameState.isProcessingRound = false;
            const levelData = levelsConfig.find(l => l.id === gameState.currentLevel);
            const gameData = levelData.minigames[gameState.currentMinigame];
            launchMinigame(gameData, true); // skipInstructions = true
        }, 800); // Short delay before next word loads
    } else {
        // Session Finished! (3 words complete)
        gameState.isProcessingRound = false;
        
        // Reward Logic (TAFA 2)
        if (!wasCompleted) {
            gameState.coins += 1;
            showGoldCoinAnimation();
            gameProgress.isCompleted = true;
        }

        // Add to used options if not already there (visual record)
        if (!gameProgress.usedOptions.includes(gameState.currentSelection)) {
            gameProgress.usedOptions.push(gameState.currentSelection);
        }

        saveGameState();
        updateHUD();

        // Victory Audio and Exit
        const victoryAudio = (gameState.currentMinigame === 'voz') ? 'vo_loro_victoria.m4a' : 'vo_victoria_gen.m4a';
        
        playNico(victoryAudio, 'saludo').then(() => {
            renderIslandMenu(gameState.currentLevel);
            showScreen('island');
            setNicoPose('quieto');
            hideNicoMessage();
        });
    }
}


/**
 * showScreen: Switches between SPA screens by toggling classes.
 * @param {string} screenId - The ID of the screen ('start', 'map', 'island', 'minigame').
 */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });

    const target = document.getElementById(`${screenId}-screen`);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        gameState.currentScreen = screenId;
        saveGameState();
    }
}

/**
 * resetGame: Clears all progress and reloads the application.
 */
function resetGame() {
    if (confirm("¿Seguro que quieres borrar todo el progreso?")) {
        localStorage.removeItem(STORAGE_KEY);
        gameState = {
            coins: 0,
            progress: {},
            currentWordIndex: 0,
            currentScreen: 'start',
            currentLevel: null,
            currentMinigame: null
        };
        location.reload();
    }
}

/**
 * Initialization and Event Listeners
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("¡Levando anclas! El Tesoro Pirata está listo.");
    
    // Load initial state
    loadGameState();
    setNicoPose('quieto');

    // Start Screen Logic (Safari Audio Unlock)
    const greetZone = document.getElementById('nico-greet-zone');
    const btnStart = document.getElementById('btn-start');

    if (greetZone && btnStart) {
        greetZone.addEventListener('click', () => {
            // 1. Play Welcome Audio síncronamente (evita perder el user-gesture en Safari)
            playNico('vo_bienvenida.m4a', 'saludo');
            
            // 2. Show "Zarpar" button with smooth transition
            btnStart.classList.remove('hidden');
            btnStart.classList.add('fade-in');

            // 3. Hide greet zone
            greetZone.style.opacity = '0';
            greetZone.style.pointerEvents = 'none';
            setTimeout(() => greetZone.remove(), 800);
        });

        btnStart.addEventListener('click', () => {
            // ACCIONES SÍNCRONAS PARA AUDIO SAFARI
            renderMap();
            showScreen('map');
            playYoutubeMusic(); // Start YouTube background music
            playNico('vo_mapa_intro.m4a', 'mapa'); // Nico introduces the map
        });
    }

    // Back to Map Button Logic (from Island Menu)
    const btnBackMap = document.getElementById('btn-back-to-map');
    if (btnBackMap) {
        btnBackMap.addEventListener('click', () => {
            triggerTransition(() => {
                // Reset background to map
                const gameContainer = document.getElementById('game-container');
                if (gameContainer) {
                    gameContainer.style.backgroundImage = "url('assets/img/mapa_fondo.png')";
                }
                renderMap();
                setNicoPose('mapa');
                showScreen('map');
            }, true); // Use reverse animation
        });
    }

    // Back Button Logic (from Minigame to Island Menu)
    const btnBack = document.getElementById('btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (gameState.currentLevel === 'cofre_tesoro') {
                // For the final level, use the full screen transition back to map
                triggerTransition(() => {
                    const gameContainer = document.getElementById('game-container');
                    if (gameContainer) {
                        gameContainer.style.backgroundImage = "url('assets/img/mapa_fondo.png')";
                    }
                    renderMap();
                    showScreen('map');
                }, true); // Reverse animation
            } else {
                // For standard islands, use the simpler minigame exit
                const minigameScreen = document.getElementById('minigame-screen');
                
                const performExit = () => {
                    if (gameState.currentLevel) {
                        renderIslandMenu(gameState.currentLevel);
                        showScreen('island');
                    } else {
                        renderMap();
                        showScreen('map');
                    }
                };
    
                if (minigameScreen) {
                    minigameScreen.classList.add('minigame-exit');
                    minigameScreen.addEventListener('animationend', function handler() {
                        minigameScreen.classList.remove('minigame-exit');
                        minigameScreen.removeEventListener('animationend', handler);
                        performExit();
                    }, { once: true });
                } else {
                    performExit();
                }
            }
        });
    }

    // Reset Game Button Logic
    const btnReset = document.getElementById('btn-reset-game');
    if (btnReset) {
        let isResetting = false;
        const handleReset = (e) => {
            if (isResetting) return;
            isResetting = true;
            
            e.preventDefault();
            e.stopPropagation();

            // Small delay to ensure the event cycle finishes
            setTimeout(() => {
                resetGame();
                isResetting = false;
            }, 150);
        };
        
        btnReset.addEventListener('touchstart', handleReset, { passive: false });
        btnReset.addEventListener('click', handleReset);
    }
});
