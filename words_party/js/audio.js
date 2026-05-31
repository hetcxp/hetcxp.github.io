// js/audio.js

let audioContext = null;
const audioBuffersCache = {};
const preloadPromises = {};

export function initAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {});
  }
  // Silently play a tiny buffer unconditionally to unlock Safari's strict restrictions.
  // Safari requires a synchronous sound trigger inside a gesture to change its state.
  if (audioContext) {
    try {
      const buffer = audioContext.createBuffer(1, 1, 22050);
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start(0);
    } catch (e) {
      console.warn("Silent buffer play failed:", e);
    }
  }
}

/**
 * Downloads and decodes an audio file in the background, storing it in cache.
 */
export function preloadAudio(path) {
  if (!path || path.includes('sfx_')) return Promise.resolve();
  if (audioBuffersCache[path]) return Promise.resolve(audioBuffersCache[path]);
  if (preloadPromises[path]) return preloadPromises[path];

  const promise = fetch(path)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.arrayBuffer();
    })
    .then(arrayBuffer => {
      initAudioContext();
      if (!audioContext) throw new Error("AudioContext not initialized");
      
      // Robust decodeAudioData supporting promise and callback style (Safari/iOS)
      return new Promise((resolve, reject) => {
        try {
          const promise = audioContext.decodeAudioData(
            arrayBuffer,
            (decodedBuffer) => resolve(decodedBuffer),
            (err) => reject(err)
          );
          if (promise && typeof promise.then === 'function') {
            promise.then(resolve, reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    })
    .then(audioBuffer => {
      audioBuffersCache[path] = audioBuffer;
      delete preloadPromises[path];
      return audioBuffer;
    })
    .catch(err => {
      console.warn(`Error preloading audio (${path}):`, err);
      delete preloadPromises[path];
      return null;
    });

  preloadPromises[path] = promise;
  return promise;
}


export function playSFX(type) {
  try {
    initAudioContext();
  } catch (e) {
    console.warn("Web Audio API is not supported or blocked:", e);
    return;
  }

  const startTime = audioContext.currentTime;

  const config = {
    sfx_click: {
      type: 'click',
      oscillator: 'sine',
      frequencies: [200, 600],
      duration: 0.08,
      decay: 0.08
    },
    sfx_correct: {
      type: 'correct',
      oscillators: [
        { frequency: 523.25, type: 'sine' }, // Do5
        { frequency: 659.25, type: 'sine' }  // Mi5
      ],
      duration: 0.4,
      decay: 0.4
    },
    sfx_incorrect: {
      type: 'incorrect',
      oscillator: 'triangle',
      frequencies: [180, 80],
      duration: 0.25,
      decay: 0.25
    },
    sfx_laser: {
      type: 'laser',
      oscillator: 'sawtooth',
      frequencies: [880, 220],
      duration: 0.15,
      decay: 0.15
    },
    sfx_launch: {
      type: 'launch',
      oscillator: 'square',
      frequencies: [60, 150],
      duration: 0.6,
      decay: 0.6
    },
    sfx_victory: {
      type: 'victory',
      notes: [261.63, 329.63, 392.00, 523.25], // Do4, Mi4, Sol4, Do5
      spacing: 0.08,
      decay: 0.35
    }
  };

  const settings = config[type];
  if (!settings) {
    console.warn(`Sound type "${type}" is not supported`);
    return;
  }

  // 1. Victory Arpeggio Sound
  if (settings.type === 'victory') {
    settings.notes.forEach((freq, idx) => {
      const oscNode = audioContext.createOscillator();
      oscNode.type = 'sine';
      oscNode.frequency.setValueAtTime(freq, startTime + (idx * settings.spacing));
      
      const noteGain = audioContext.createGain();
      noteGain.gain.setValueAtTime(0, startTime + (idx * settings.spacing));
      noteGain.gain.linearRampToValueAtTime(0.15, startTime + (idx * settings.spacing) + 0.01);
      noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + (idx * settings.spacing) + settings.decay);
      
      oscNode.connect(noteGain);
      noteGain.connect(audioContext.destination);
      
      oscNode.start(startTime + (idx * settings.spacing));
      oscNode.stop(startTime + (idx * settings.spacing) + settings.decay + 0.05);
    });
    return;
  }

  // 2. Dual Oscillator Sounds (sfx_correct)
  if (settings.oscillators) {
    settings.oscillators.forEach(osc => {
      const oscNode = audioContext.createOscillator();
      oscNode.type = osc.type || 'sine';
      oscNode.frequency.setValueAtTime(osc.frequency, startTime);
      
      const noteGain = audioContext.createGain();
      noteGain.gain.setValueAtTime(0, startTime);
      noteGain.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
      noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + settings.decay);
      
      oscNode.connect(noteGain);
      noteGain.connect(audioContext.destination);
      
      oscNode.start(startTime);
      oscNode.stop(startTime + settings.duration + 0.05);
    });
    return;
  }

  // 3. Frequency Sweep Sounds (click, incorrect, laser, launch)
  if (settings.frequencies) {
    const oscNode = audioContext.createOscillator();
    oscNode.type = settings.oscillator || 'sine';
    oscNode.frequency.setValueAtTime(settings.frequencies[0], startTime);
    oscNode.frequency.linearRampToValueAtTime(settings.frequencies[1], startTime + settings.duration);
    
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + settings.decay);
    
    oscNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscNode.start(startTime);
    oscNode.stop(startTime + settings.duration + 0.05);
  }
}

/**
 * Reproduce un archivo de audio (.mp3) decodificándolo vía Web Audio API.
 * Esto evita el problema de las peticiones HTTP Range de Safari y reduce la latencia.
 */
export function playAudio(path) {
  if (path.includes('sfx_')) {
    const sfxName = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
    playSFX(sfxName);
  }

  // Stop any playing voice audio before launching the new one to prevent overlaps
  stopAllAudio();

  try {
    initAudioContext();
  } catch (e) {
    console.warn("Web Audio API no soportada. Usando fallback de HTML5 Audio:", e);
    return playHTML5AudioFallback(path);
  }

  if (audioContext) {
    // Si ya lo tenemos decodificado en caché, lo reproducimos de inmediato
    if (audioBuffersCache[path]) {
      playBuffer(audioBuffersCache[path]);
      return null;
    }

    // Si no está en caché, lo descargamos, decodificamos y reproducimos
    preloadAudio(path)
      .then(audioBuffer => {
        if (audioBuffer) {
          playBuffer(audioBuffer);
        } else {
          playHTML5AudioFallback(path);
        }
      })
      .catch(err => {
        console.warn(`Error cargando audio vía Web Audio API (${path}), usando fallback:`, err);
        playHTML5AudioFallback(path);
      });
    return null;
  }

  return playHTML5AudioFallback(path);
}

let activeSources = [];
let activeHTML5Audios = [];

function playBuffer(buffer) {
  if (audioContext.state === 'suspended') {
    audioContext.resume().catch(() => {});
  }
  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start(0);
  
  activeSources.push(source);
  source.onended = () => {
    activeSources = activeSources.filter(s => s !== source);
  };
}

function playHTML5AudioFallback(path) {
  try {
    const audio = new Audio(path);
    const promise = audio.play();
    if (promise !== undefined && typeof promise.catch === 'function') {
      promise.catch(e => console.log("HTML5 Audio fallback play bloqueado:", e));
    }
    
    activeHTML5Audios.push(audio);
    audio.onended = () => {
      activeHTML5Audios = activeHTML5Audios.filter(a => a !== audio);
    };
    return audio;
  } catch (e) {
    console.warn("HTML5 Audio fallback falló:", e);
    return null;
  }
}

export function stopAllAudio() {
  activeSources.forEach(source => {
    try {
      source.stop();
    } catch (e) {
      // already stopped or not started
    }
  });
  activeSources = [];

  activeHTML5Audios.forEach(audio => {
    try {
      audio.pause();
      audio.currentTime = 0;
    } catch (e) {
      // already stopped
    }
  });
  activeHTML5Audios = [];
}
