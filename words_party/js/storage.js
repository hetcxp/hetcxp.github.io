// js/storage.js

const STORAGE_KEY = 'galaxia_palabras_progreso';

// Adaptador seguro para localStorage (evita excepciones en Safari si está bloqueado/privado)
let isLocalStorageSupported = true;
let memoryStorage = {};

try {
  const testKey = '__storage_test__';
  localStorage.setItem(testKey, testKey);
  localStorage.removeItem(testKey);
} catch (e) {
  isLocalStorageSupported = false;
  console.warn("localStorage no está disponible o el acceso fue denegado. Usando almacenamiento en memoria temporaria.");
}

const safeStorage = {
  getItem(key) {
    if (isLocalStorageSupported) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return memoryStorage[key] || null;
      }
    }
    return memoryStorage[key] || null;
  },
  setItem(key, value) {
    if (isLocalStorageSupported) {
      try {
        localStorage.setItem(key, value);
        return;
      } catch (e) {
        // Fallback to memory storage
      }
    }
    memoryStorage[key] = value;
  }
};

const INITIAL_STATE = {
  total_stars: 0,
  stations: {
    station1: { completed: false, name: "Nebulosa M", games: { game1: 0, game2: 0, game3: 0, game4: 0 } },
    station2: { completed: false, name: "Asteroides P", games: { game1: 0, game2: 0, game3: 0, game4: 0 } },
    station3: { completed: false, name: "Estación Saturno B", games: { game1: 0, game2: 0, game3: 0, game4: 0 } },
    station4: { completed: false, name: "Constelación D", games: { game1: 0, game2: 0, game3: 0, game4: 0 } },
    station5: { completed: false, name: "Agujero Sílabas", games: { game1: 0, game2: 0, game3: 0, game4: 0 } },
    station6: { completed: false, name: "Supernova Letras", games: { game1: 0, game2: 0, game3: 0, game4: 0 } }
  }
};

export function initStorage() {
  if (!safeStorage.getItem(STORAGE_KEY)) {
    saveProgress(INITIAL_STATE);
  }
}

export function getProgress() {
  const data = safeStorage.getItem(STORAGE_KEY);
  if (!data) {
    initStorage();
    return INITIAL_STATE;
  }
  try {
    const parsed = JSON.parse(data);
    // Validate schema basics
    if (!parsed || typeof parsed.total_stars === 'undefined' || !parsed.stations || !parsed.stations.station1 || !parsed.stations.station1.games) {
      console.warn("Old storage schema detected. Resetting...");
      saveProgress(INITIAL_STATE);
      return INITIAL_STATE;
    }
    return parsed;
  } catch (e) {
    console.error("Error reading progress, resetting:", e);
    saveProgress(INITIAL_STATE);
    return INITIAL_STATE;
  }
}

export function saveProgress(progress) {
  safeStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markGameCompleted(stationId, gameId, starsEarned) {
  const progress = getProgress();
  if (!progress.stations[stationId]) {
    console.error(`Invalid stationId: ${stationId}`);
    return progress;
  }

  const station = progress.stations[stationId];
  
  // Save highest stars earned for this minigame
  const previousStars = station.games[gameId] || 0;
  if (starsEarned > previousStars) {
    station.games[gameId] = starsEarned;
    // Add the difference to total stars
    progress.total_stars += (starsEarned - previousStars);
  }

  // Check if all 4 games are completed (each having at least 1 star)
  const allGamesCompleted = Object.values(station.games).every(stars => stars > 0);
  if (allGamesCompleted) {
    station.completed = true;
  }

  saveProgress(progress);
  return progress;
}

export function resetProgress() {
  saveProgress(INITIAL_STATE);
  return INITIAL_STATE;
}
