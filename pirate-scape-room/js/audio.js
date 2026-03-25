/**
 * audio.js: Logic for recording and playing back voice using MediaRecorder API.
 */

let mediaRecorder;
let micStream = null;
let audioChunks = [];
let recordingStartTime = 0; // Track duration to prevent ghost taps

// Web Audio API context and cache to prevent Safari iOS blocking and mic routing issues
let audioCtx = null;
const audioCache = {};
let currentAudioSource = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

let selectedMimeType = '';
let youtubePlayer;
let isMuted = false;



/**
 * initAudioCapture: Requests microphone permissions and initializes MediaRecorder.
 */
async function initAudioCapture(silent = false) {
    if (micStream) {
        // Check if iOS killed the stream in the background
        const track = micStream.getAudioTracks()[0];
        if (track && track.readyState === 'live') {
            return true;
        }
        console.warn("El stream del micrófono expiró, re-solicitando...");
        micStream = null;
    }
    
    // VERIFICACIÓN DE SEGURIDAD (SAFARI/iOS requiere HTTPS o localhost)
    if (!window.isSecureContext || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("API de captura de audio requerida no disponible. Normalmente falta HTTPS.");
        if (!silent) {
            alert("⚠️ Atención: Para usar el micrófono en iPad/Móvil, debes acceder a través de una conexión segura (HTTPS) o no funcionará.");
        }
        return false;
    }

    try {
        console.log("Solicitando acceso al micrófono...");
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Detect supported MIME types
        const types = [
            'audio/mp4',
            'audio/webm;codecs=opus',
            'audio/webm',
            'audio/ogg;codecs=opus'
        ];
        
        for (const type of types) {
            if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) {
                selectedMimeType = type;
                break;
            }
        }

        console.log(`Micrófono listo (${selectedMimeType || 'default mode'}).`);
        return true; // Success
    } catch (err) {
        console.error("Error al acceder al micrófono:", err);
        if (!silent) {
            alert("¡Rayos! Necesitamos el micrófono para hablar con el loro. Por favor, asegúrate de dar permiso en tu navegador.");
        }
        return false; // Failed
    }
}

/**
 * startRecording: Clears previous chunks and starts the MediaRecorder.
 * If not initialized, attempts to initialize first.
 */
async function startRecording() {
    // iOS Safari Bugifix: Playing an <audio> element silently mutes the active mic stream permanently.
    // Solution: We MUST stop the old stream tracks and request a fresh one every single time.
    if (micStream) {
        micStream.getTracks().forEach(track => track.stop());
        micStream = null;
    }

    try {
        if (!selectedMimeType) {
            // First time ever: Use initAudioCapture to populate MIME types and first micStream
            await initAudioCapture(true);
        } else {
            // Subsequent times: Instantly grab a fresh stream
            micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        }
    } catch (err) {
        console.error("Error obteniendo nuevo stream de mic:", err);
        return;
    }

    // Stop previous recorder if it was somehow left hanging

    // Create a NEW MediaRecorder instance every time to avoid iOS reusability bugs
    const options = selectedMimeType ? { mimeType: selectedMimeType } : {};
    mediaRecorder = new MediaRecorder(micStream, options);

    audioChunks = [];
    
    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            audioChunks.push(event.data);
        }
    };

    mediaRecorder.onstop = async () => {
        const duration = Date.now() - recordingStartTime;
        if (duration < 600) {
            console.warn("Grabación muy corta (toque rápido). Ignorada para evitar saltar la palabra.");
            if (typeof window.setNicoPose === 'function') window.setNicoPose('quieto');
            return;
        }

        const blobType = mediaRecorder.mimeType || selectedMimeType || 'audio/wav';
        const audioBlob = new Blob(audioChunks, { type: blobType });
        
        try {
            const ctx = getAudioCtx();
            const arrayBuffer = await audioBlob.arrayBuffer();
            const buffer = await ctx.decodeAudioData(arrayBuffer);

            if (currentAudioSource) {
                currentAudioSource.stop();
                currentAudioSource.disconnect();
                currentAudioSource = null;
            }

            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            currentAudioSource = source;

            source.onended = () => {
                if (currentAudioSource === source) currentAudioSource = null;
                const event = new CustomEvent('loroFinished');
                window.dispatchEvent(event);
            };

            source.start(0);
        } catch(e) {
            console.error("Error reproduciendo grabación WebAPI:", e);
        }
    };

    // Start recording without a timeslice! 
    // Timeslices in iOS Safari cause fragmented chunks that sound like audio "hiccups".
    recordingStartTime = Date.now();
    mediaRecorder.start();
    console.log("Grabación iniciada sin timeslice...");
}

/**
 * stopRecordingAndPlay: Stops the MediaRecorder, which triggers playback via onstop.
 */
function stopRecordingAndPlay() {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop();
        console.log("Grabación detenida.");
        
        // Stop tracks to release microphone hardware immediately and prevent iOS weirdness
        if (micStream) {
            setTimeout(() => {
                micStream.getTracks().forEach(track => track.stop());
                micStream = null;
            }, 500); // 500ms delay to ensure chunks finish piping
        }
    }
}


// Mapping of audio files to their transcription for the dialog bubble
const nicoDialogs = {
    // --- Navegación General ---
    "vo_bienvenida.m4a": "¡Hola, Capitán Miguel! ¡Qué bueno verte! Soy Nico, tu primer oficial. ¿Estás listo para buscar el tesoro?",
    "vo_mapa_intro.m4a": "¡Mira el mapa! ¡Es increíble! Tenemos cuatro islas llenas de tesoros. Elige una para empezar nuestra aventura.",

    // --- Entradas a las Islas ---
    "vo_isla_bahia.m4a": "¡Llegamos a la Bahía de los Colores! Qué lugar tan increíble. Aquí tenemos cuatro estaciones... ¿Por cuál quieres empezar?",
    "vo_isla_bosque.m4a": "¡Wow! ¡Cuántos árboles y qué verde es todo! Hay juegos escondidos por todas partes. ¡Elige el que más te guste!",
    "vo_isla_cueva.m4a": "¡Mira cuánto brillo! Estamos en la Cueva de las Gemas. Aquí las rocas guardan cuatro desafíos. ¿Cuál quieres jugar primero?",
    "vo_isla_cubierta.m4a": "¡Bienvenidos a bordo! Esta es la Cubierta del Capitán. Escoge una de las estaciones y demostremos que somos los mejores.",

    // --- Instrucciones de las Estaciones de la Bahía y otras Islas ---
    "vo_inst_loro.m4a": "¡La Estación del Loro Parlanchín! Toca el botón del micrófono y repite la palabra conmigo. ¡Enseñémosle a hablar!",
    "vo_inst_arena.m4a": "¡Letras en la Arena! Arrastra las letras con tu dedo para completar la palabra. ¡Tú puedes, Capitán!",
    "vo_inst_trazos.m4a": "¡Trazos! Arrastra las letras con tu dedo para formar las palabras en el bosque. ¡Tú puedes, Capitán!",
    "vo_inst_cofre.m4a": "¡Cofre! Ordena las letras para descubrir las palabras de esta cueva. ¡Adelante, Capitán!",
    "vo_inst_bitacora.m4a": "¡Bitácora! Acomoda las letras para registrar todo en nuestra bitácora pirata. ¡Tú puedes, Capitán!",
    "vo_inst_sumas.m4a": "¡Contando el Botín! Cuenta todos los elementos y toca el número que corresponda al total.",
    "vo_inst_aleman.m4a": "¡La Caracola Mágica! Toca el botón para escuchar en alemán y luego selecciona el objeto correcto.",
    "vo_inst_tronco.m4a": "¡El Tronco Mágico! Toca el tronco para escuchar los misterios del bosque en alemán y luego selecciona lo que oíste.",
    "vo_inst_eco.m4a": "¡El Eco de la Cueva! Toca el botón para escuchar lo que la cueva susurra en alemán, y luego elige el dibujo correcto.",
    "vo_inst_velas.m4a": "¡Las Velas del Barco! Toca el botón para escuchar lo que el viento nos trae en alemán y luego selecciona la respuesta.",
    
    // --- Éxitos ---
    "vo_ganaste_1.m4a": "¡Eso es! ¡Muy bien hecho!",
    "vo_loro_victoria.m4a": "¡Increíble! Lo hiciste de maravilla, Capitán. El loro ya está aprendiendo a hablar gracias a ti. ¡Ganaste una moneda de oro!",
    "vo_victoria_gen.m4a": "¡Increíble! Lo hiciste de maravilla, Capitán. Eres el mejor pirata de estos mares. ¡Mira, has ganado una moneda de oro!"
};

async function playWebAudio(url, pose, showBubble, transcription, fallbackWord) {
    return new Promise(async (resolve) => {
        try {
            const ctx = getAudioCtx();
            
            if (currentAudioSource) {
                currentAudioSource.stop();
                currentAudioSource.disconnect();
                currentAudioSource = null;
            }

            let buffer = audioCache[url];
            if (!buffer) {
                const response = await fetch(url);
                if (!response.ok) throw new Error("Audio no encontrado: " + url);
                const arrayBuffer = await response.arrayBuffer();
                buffer = await ctx.decodeAudioData(arrayBuffer);
                audioCache[url] = buffer;
            }

            const source = ctx.createBufferSource();
            source.buffer = buffer;
            source.connect(ctx.destination);
            currentAudioSource = source;

            source.onended = () => {
                if (currentAudioSource === source) currentAudioSource = null;
                if (typeof window.setNicoPose === 'function') window.setNicoPose('quieto');
                const bubble = document.getElementById('dialog-container');
                if (bubble) bubble.style.display = 'none';

                if (youtubePlayer && typeof youtubePlayer.playVideo === 'function' && !isMuted) {
                    youtubePlayer.playVideo();
                    if (typeof youtubePlayer.setVolume === 'function') youtubePlayer.setVolume(20);
                }
                resolve();
            };

            if (typeof window.setNicoPose === 'function') window.setNicoPose(pose);
            
            const bubble = document.getElementById('dialog-container');
            const textEl = document.getElementById('nico-text');
            if (showBubble && bubble && textEl && transcription) {
                textEl.textContent = transcription;
                bubble.style.display = 'flex'; 
            }

            if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function' && !isMuted) {
                youtubePlayer.pauseVideo();
            }

            console.log(`Reproduciendo WebAudio: ${url}`);
            source.start(0);

        } catch (e) {
            console.error(`ERROR DE CARGA WebAudio (${url}):`, e);
            if (typeof window.setNicoPose === 'function') window.setNicoPose('quieto');
            
            // Controlled Error/Fallback for missing words
            if (fallbackWord && fallbackWord !== 'sol') {
                console.warn(`Intentando fallback con 'sol'...`);
                window.playWord('sol', pose, showBubble).then(resolve);
            } else {
                resolve();
            }
        }
    });
}

/**
 * playWord: Plays a word audio following the strict pattern assets/audio/palabras/pal_[palabra].m4a
 * @param {string} word - The word to play.
 * @param {string} pose - The sprite pose name (default: 'hablando').
 * @param {boolean} showBubble - Whether to show the speech bubble (default: true).
 * @returns {Promise} - Resolves when the audio finishes playing.
 */
window.playWord = function(word, pose = 'hablando', showBubble = true) {
    const wordClean = word.toLowerCase().trim();
    const audioPath = 'assets/audio/palabras/pal_' + wordClean + '.m4a';
    return playWebAudio(audioPath, pose, showBubble, word.toUpperCase(), wordClean);
};

// Alias for internal consistency if needed
window.playWordAudio = window.playWord;

/**
 * playNico: Plays a specific audio file from assets/audio/, changes Nico's pose, 
 * and shows a dialog bubble with the corresponding text.
 * @param {string} audioFile - Filename in assets/audio/
 * @param {string} pose - The sprite pose name (default: 'hablando').
 * @param {boolean} showBubble - Whether to show the speech bubble (default: true).
 * @returns {Promise} - Resolves when the audio finishes playing.
 */
function playNico(audioFile, pose = 'saludo', showBubble = true) {
    let transcription = nicoDialogs[audioFile] || "";
    if (!transcription && audioFile.startsWith('loro_')) {
        transcription = audioFile.replace('loro_', '').replace('.m4a', '').toUpperCase();
    }
    const audioPath = 'assets/audio/' + audioFile;
    return playWebAudio(audioPath, pose, showBubble, transcription, null);
}

/**
 * playNicoAudio: Placeholder for playing pre-recorded audio files.
 * @deprecated Use playNico instead.
 */
function playNicoAudio(fileId) {
    console.log("Intentando reproducir: " + fileId);
    // This is now handled by playNico
}

/**
 * onYouTubeIframeAPIReady: Required by the YouTube API to initialize the player.
 */
function onYouTubeIframeAPIReady() {
    youtubePlayer = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'O2U1mkoZyu0',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'loop': 1,
            'playlist': 'O2U1mkoZyu0', // Required for loop to work
            'rel': 0,
            'showinfo': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

/**
 * onPlayerReady: Sets initial volume and prepares for playback.
 */
function onPlayerReady(event) {
    event.target.setVolume(20);
}

/**
 * playYoutubeMusic: Starts the YouTube background stream.
 * Critically called by a user gesture to work on iPad/Safari.
 */
function playYoutubeMusic() {
    if (youtubePlayer && typeof youtubePlayer.playVideo === 'function') {
        youtubePlayer.playVideo();
        console.log("Música de YouTube iniciada.");
    } else {
        console.warn("Reproductor de YouTube no listo.");
    }
}

/**
 * toggleYoutubeMusic: Mutes/Unmutes the background stream.
 */
function toggleYoutubeMusic() {
    const muteBtn = document.getElementById('btn-mute');
    
    // If player isn't ready or initialized, we just toggle the state visually
    // and wait for actual music to start (it will pick up isMuted state)
    isMuted = !isMuted;

    if (youtubePlayer && typeof youtubePlayer.mute === 'function') {
        if (isMuted) {
            youtubePlayer.mute();
        } else {
            youtubePlayer.unMute();
        }
    }

    if (muteBtn) {
        if (isMuted) {
            muteBtn.textContent = '🔇';
            muteBtn.classList.add('muted');
            muteBtn.title = "Activar Música";
            console.log("Música silenciada.");
        } else {
            muteBtn.textContent = '🔊';
            muteBtn.classList.remove('muted');
            muteBtn.title = "Silenciar Música";
            console.log("Música activada.");
        }
    }
}

// Attach listener immediately to avoid timing issues (TAFA 2)
document.addEventListener('DOMContentLoaded', () => {
    const muteBtn = document.getElementById('btn-mute');
    if (muteBtn) {
        muteBtn.addEventListener('click', toggleYoutubeMusic);
        muteBtn.dataset.listener = "true";
    }
});



/**
 * playDing: Play a synthesized pleasant chime when selecting a correct puzzle piece.
 */
window.playDing = function() {
    try {
        const ctx = getAudioCtx(); // Ensures it's resumed
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1046.50, ctx.currentTime); // C6
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
        console.warn("Ding error:", e);
    }
};
