// === DATA & STATE ===
let slideData = [];
let currentSlideIndex = 0;
let isPlaying = false;
let subtitlesEnabled = true;
let audioEl = new Audio();
let animationFrameId = null;
let currentTimeoutId = null;

// Audio Context para el click
let audioCtx = null;

// === DOM ELEMENTS ===
const slideImage = document.getElementById('slide-image');
const cursor = document.getElementById('cursor');
const subtitleBar = document.getElementById('subtitle-bar');
const slideContainer = document.getElementById('slide-container');
const btnPlayPause = document.getElementById('btn-play-pause');
const iconPlay = document.getElementById('icon-play');
const iconPause = document.getElementById('icon-pause');
const progressRange = document.getElementById('progress');
const slideIndicator = document.getElementById('slide-indicator');
const btnSubtitles = document.getElementById('btn-subtitles');
const startOverlay = document.getElementById('start-overlay');
const btnStartVideo = document.getElementById('btn-start-video');

// === INIT ===
async function init() {
  try {
    const res = await fetch('slide_data.json');
    slideData = await res.json();
    
    if(slideData.length > 0) {
      progressRange.max = slideData.length - 1;
      loadSlide(0, false); // Cargar sin reproducir
    }
  } catch (e) {
    console.error("Error loading slide data:", e);
  }
}

// === PLAYBACK ENGINE ===
function loadSlide(index, autoPlay = false) {
  if(index < 0 || index >= slideData.length) return;
  currentSlideIndex = index;
  const slide = slideData[index];
  
  // UI Updates
  slideImage.src = slide.image;
  progressRange.value = index;
  slideIndicator.textContent = `${index + 1} / ${slideData.length}`;
  
  // Cancelar eventos pendientes
  if(animationFrameId) cancelAnimationFrame(animationFrameId);
  if(currentTimeoutId) clearTimeout(currentTimeoutId);
  audioEl.pause();
  audioEl.src = slide.audio; // Pre-cargar el correcto y resetear estado
  audioEl.currentTime = 0;
  subtitleBar.style.display = 'none';
  
  // Al arrancar, si es la primera slide y el cursor no se ha movido, centrarlo
  if(index === 0 && !autoPlay) {
    const containerRect = slideContainer.getBoundingClientRect();
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    cursor.style.transform = `translate(${centerX}px, ${centerY}px)`;
  }
  
  if(autoPlay) {
    playCurrentSlide();
  }
}

async function playCurrentSlide() {
  if(currentSlideIndex >= slideData.length) return;
  
  isPlaying = true;
  updatePlayPauseUI();
  
  const slide = slideData[currentSlideIndex];
  
  // Mostrar subtitulos
  if(subtitlesEnabled && slide.speakerNotes) {
    subtitleBar.textContent = slide.speakerNotes;
    subtitleBar.style.display = 'block';
  } else {
    subtitleBar.style.display = 'none';
  }
  
  // Audio
  if (!audioEl.src.endsWith(slide.audio)) {
    audioEl.src = slide.audio;
    audioEl.currentTime = 0;
  }
  
  try {
    await audioEl.play();
  } catch (e) {
    console.warn("Audio play failed (maybe user interaction required)", e);
    isPlaying = false;
    updatePlayPauseUI();
    return;
  }
}

audioEl.onended = async () => {
  if(!isPlaying) return;
  
  // Ocultar subtitulos
  subtitleBar.style.display = 'none';
  
  const slide = slideData[currentSlideIndex];
  
  // El cursor siempre es visible ahora
  
  // Mover cursor
  await animateCursor(slide.cursorTarget, 1000);
  
  if(!isPlaying) return; // Por si se pausó durante la animación
  
  triggerRipple();
  playClickSound();
  
  // Pausa corta y siguiente slide
  currentTimeoutId = setTimeout(() => {
    if(isPlaying) {
      if(currentSlideIndex < slideData.length - 1) {
        loadSlide(currentSlideIndex + 1, true);
      } else {
        // Fin del tutorial
        isPlaying = false;
        updatePlayPauseUI();
        subtitleBar.textContent = "¡Tutorial completado!";
        subtitleBar.style.display = 'block';
      }
    }
  }, 500);
};

// === CURSOR ANIMATION ===
// Retorna la pos x,y del transform actual del cursor
function getCurrentCursorPos() {
  const transform = cursor.style.transform;
  if(!transform) return null;
  const match = transform.match(/translate\(([^p]+)px,\s*([^p]+)px\)/);
  if(match) {
    return { x: parseFloat(match[1]), y: parseFloat(match[2]) };
  }
  return null;
}

function animateCursor(targetPercent, durationMs) {
  return new Promise(resolve => {
    const targetPx = percentToPixel(targetPercent.x, targetPercent.y);
    
    let startPx = getCurrentCursorPos();
    if(!startPx || isNaN(startPx.x)) {
      // Usar centro como fallback
      startPx = percentToPixel(50, 50);
      if(isNaN(startPx.x)) startPx = {x: 0, y: 0}; // safe fallback
    }
    
    let startTime = null;
    
    function step(timestamp) {
      if(!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const t = Math.min(progress / durationMs, 1);
      
      // Easing: cubicInOut
      const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      const currX = startPx.x + (targetPx.x - startPx.x) * ease;
      const currY = startPx.y + (targetPx.y - startPx.y) * ease;
      
      cursor.style.transform = `translate(${currX}px, ${currY}px)`;
      
      if(t < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        resolve();
      }
    }
    animationFrameId = requestAnimationFrame(step);
  });
}

// === POSITION CALCULATION ===
function percentToPixel(xPercent, yPercent) {
  const containerRect = slideContainer.getBoundingClientRect();
  const imgRect = slideImage.getBoundingClientRect();
  
  // Dimensiones naturales asumiendo que ya cargo la imagen (1920x1080 o similar)
  const imageRatio = slideImage.naturalWidth / slideImage.naturalHeight;
  const containerRatio = imgRect.width / imgRect.height;
  
  let renderedWidth, renderedHeight;
  
  if (containerRatio > imageRatio) {
      renderedHeight = imgRect.height;
      renderedWidth = renderedHeight * imageRatio;
  } else {
      renderedWidth = imgRect.width;
      renderedHeight = renderedWidth / imageRatio;
  }
  
  const offsetX = (imgRect.width - renderedWidth) / 2;
  const offsetY = (imgRect.height - renderedHeight) / 2;
  
  const totalOffsetX = imgRect.left - containerRect.left + offsetX;
  const totalOffsetY = imgRect.top - containerRect.top + offsetY;
  
  const pxX = totalOffsetX + (xPercent / 100) * renderedWidth;
  const pxY = totalOffsetY + (yPercent / 100) * renderedHeight;
  
  return { x: pxX, y: pxY };
}

// === RIPPLE & AUDIO ===
function triggerRipple() {
  const pos = getCurrentCursorPos();
  if(!pos) return;
  
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = pos.x + 'px';
  ripple.style.top = pos.y + 'px';
  
  slideContainer.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 400); // duración de animación CSS
}

function playClickSound() {
  if(!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if(audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05);
  
  gain.gain.setValueAtTime(1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 0.05);
}

// === CONTROLS & EVENTS ===
function updatePlayPauseUI() {
  if(isPlaying) {
    iconPlay.style.display = 'none';
    iconPause.style.display = 'block';
    startOverlay.style.display = 'none'; // ocultar por si se llamó mediante el teclado
  } else {
    iconPlay.style.display = 'block';
    iconPause.style.display = 'none';
  }
}

btnPlayPause.addEventListener('click', () => {
  if(!isPlaying) {
    // Si estabamos parados (por haber hecho pausa), reiniciar logica play actual
    if(audioEl.paused && audioEl.currentTime > 0 && !audioEl.ended) {
      isPlaying = true;
      updatePlayPauseUI();
      audioEl.play();
    } else {
      // Re-lanzar slide actual
      loadSlide(currentSlideIndex, true);
    }
  } else {
    isPlaying = false;
    updatePlayPauseUI();
    audioEl.pause();
    if(currentTimeoutId) clearTimeout(currentTimeoutId);
    if(animationFrameId) cancelAnimationFrame(animationFrameId);
  }
});

let wasPlayingBeforeDrag = false;

progressRange.addEventListener('mousedown', () => {
  wasPlayingBeforeDrag = isPlaying;
  isPlaying = false;
  updatePlayPauseUI();
  audioEl.pause();
});

progressRange.addEventListener('input', (e) => {
  const newIndex = parseInt(e.target.value, 10);
  loadSlide(newIndex, false);
});

progressRange.addEventListener('change', (e) => {
  const newIndex = parseInt(e.target.value, 10);
  if (wasPlayingBeforeDrag) {
    loadSlide(newIndex, true);
  }
});

btnSubtitles.addEventListener('click', () => {
  subtitlesEnabled = !subtitlesEnabled;
  if(subtitlesEnabled) {
    btnSubtitles.classList.remove('disabled');
    if(isPlaying && slideData[currentSlideIndex].speakerNotes) {
      subtitleBar.style.display = 'block';
    }
  } else {
    btnSubtitles.classList.add('disabled');
    subtitleBar.style.display = 'none';
  }
});

btnStartVideo.addEventListener('click', () => {
  startOverlay.style.display = 'none';
  btnPlayPause.click();
});

// Resize handler
window.addEventListener('resize', () => {
  // Recalcular posicion del cursor al cambiar tamano de ventana 
  // para que se mantenga sobre el hotspot.
  const slide = slideData[currentSlideIndex];
  if(slide && slide.cursorTarget && !isPlaying) {
     const pxPos = percentToPixel(slide.cursorTarget.x, slide.cursorTarget.y);
     if(!isNaN(pxPos.x)) {
       cursor.style.transform = `translate(${pxPos.x}px, ${pxPos.y}px)`;
     }
  }
});

// Boot
window.addEventListener('DOMContentLoaded', init);
