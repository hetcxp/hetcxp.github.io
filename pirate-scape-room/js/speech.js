/**
 * speech.js: Text-to-Speech (TTS) engine for Nico el Grumete.
 * Optimized for Latin Spanish (es-MX/es-US) and child-like tone.
 */

let nicoVoice = null;

/**
 * initNicoVoice: Detects and selects a Latin Spanish voice.
 * Safari requires waiting for 'onvoiceschanged'.
 * [DESACTIVADO]: Usaremos archivos de audio reales en lugar de TTS.
 */
function initNicoVoice() {
    /*
    const voices = window.speechSynthesis.getVoices();
    
    // Filter for Latin American Spanish (Mexico or US Latino)
    nicoVoice = voices.find(v => v.lang === 'es-MX') || 
                voices.find(v => v.lang === 'es-US') ||
                voices.find(v => v.lang.startsWith('es-') && !v.lang.includes('ES'));

    if (!nicoVoice) {
        nicoVoice = voices.find(v => v.lang.startsWith('es'));
    }

    if (nicoVoice) {
        console.log(`Nico's voice selected: ${nicoVoice.name} (${nicoVoice.lang})`);
    } else {
        console.warn("No suitable Spanish voice found for Nico.");
    }
    */
}

// Desactivar el listener de voces ya que no usaremos TTS
/*
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = initNicoVoice;
}
*/

/**
 * nicoHabla: Nico speaks the provided text with a specific pose.
 * Synchronizes sprite changes and speech bubble visibility.
 * @param {string} texto - The message to speak.
 * @param {string} pose - The sprite pose during speech (default: 'saludo').
 */
function nicoHabla(texto, pose = 'saludo') {
    if (!texto) return;

    // Visual feedback (Sprite and Bubble)
    setNicoPose(pose);
    showNicoMessage(texto, 3000); // Muestra el mensaje por 3 segundos por defecto

    // [TAFA 1]: Eliminar TTS
    // window.speechSynthesis.cancel();
    // const utterance = new SpeechSynthesisUtterance(texto);
    // ... logic removed ...

    // [TAFA 2]: Usar el nuevo Audio Manager (Placeholder)
    if (typeof playNicoAudio === 'function') {
        playNicoAudio(texto); // Usamos el texto como ID temporalmente
    }

    /* Logic for onend cleanup is now handled by timers or the next call
    setTimeout(() => {
        setNicoPose('quieto');
        hideNicoMessage();
    }, 4000);
    */
}
