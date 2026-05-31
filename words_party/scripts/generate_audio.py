import json
import os
import asyncio
import argparse
import edge_tts

CHAR_TO_SPEECH = {
    'm': 'eme',
    'p': 'pe',
    'b': 'be',
    'd': 'de',
    'r': 'ere',
    'l': 'ele',
    's': 'ese',
    't': 'te',
    'n': 'ene',
    'ñ': 'eñe',
    'c': 'ce',
    'h': 'hache',
    'z': 'zeta',
    'g': 'ge',
    'a': 'a',
    'á': 'a con acento',
    'e': 'e',
    'é': 'e con acento',
    'i': 'i',
    'í': 'i con acento',
    'o': 'o',
    'ó': 'o con acento',
    'u': 'u',
    'ú': 'u con acento',
}

def parse_args():
    parser = argparse.ArgumentParser(description='Generate TTS audio files for Galaxia de Palabras.')
    parser.add_argument('--voice', default='es-MX-JorgeNeural', help='Voice to use for TTS.')
    return parser.parse_args()

async def generate_single_audio(text, filepath, voice, semaphore):
    async with semaphore:
        # Create output directory for file if it doesn't exist
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        
        if os.path.exists(filepath):
            print(f"Skipping (exists): {filepath}")
            return

        print(f"Generating: {text} -> {filepath}")
        try:
            communicate = edge_tts.Communicate(text=text, voice=voice)
            await communicate.save(filepath)
        except Exception as e:
            print(f"Error generating {text}: {e}")

SYSTEM_VOICES = {
    "assets/audio/system/welcome.mp3": "¡Hola Miguel! Bienvenido a la galaxia de palabras. Presiona despegar para iniciar nuestra aventura espacial.",
    "assets/audio/system/select_game.mp3": "Selecciona un minijuego en el panel para ganar estrellas.",
    "assets/audio/system/success_generic.mp3": "¡Excelente trabajo! ¡Estelar!",
    "assets/audio/system/success_game.mp3": "¡Increíble! Completaste el minijuego y ganaste tres estrellas de energía.",
    "assets/audio/system/success_station.mp3": "¡Felicitaciones! Has conquistado toda esta estación espacial.",
    "assets/audio/system/success_galaxy.mp3": "¡Espectacular! Llegaste al centro de la galaxia y desbloqueaste el gran tesoro de estrellas doradas.",
    "assets/audio/system/error_try_again.mp3": "Casi lo tienes. ¡Inténtalo de nuevo, tú puedes!",
    "assets/audio/system/btn_back.mp3": "Volver al mapa galáctico.",
    "assets/audio/system/btn_restart.mp3": "Reiniciar el juego.",
    "assets/audio/system/instruction_game1.mp3": "Selecciona las letras de los meteoritos en el orden correcto para formar la palabra que representa el dibujo.",
    "assets/audio/system/instruction_game2.mp3": "Completa la palabra colocando las sílabas correctas para armar las cabinas de la nave espacial y hacerla despegar.",
    "assets/audio/system/instruction_game3.mp3": "Mira la palabra incompleta y selecciona la sílaba correcta de las estrellas flotantes para abrir el portal.",
    "assets/audio/system/instruction_game4.mp3": "Conecta las estrellas de letras Mayúsculas de la izquierda con sus minúsculas de la derecha usando el rayo láser."
}

async def main():
    args = parse_args()
    voice = args.voice
    
    json_path = os.path.join('assets', 'data', 'words.json')
    if not os.path.exists(json_path):
        print(f"Error: {json_path} not found.")
        return

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    words_list = data.get('words', [])

    # Map target filepaths to texts to speak (deduplicated)
    tasks_map = {}

    # Load system voices first
    for filepath, text in SYSTEM_VOICES.items():
        tasks_map[filepath] = text

    for entry in words_list:
        # 1. Word
        word_text = entry.get('word', '')
        word_audio = entry.get('audios', {}).get('word', '')
        if word_text and word_audio:
            tasks_map[word_audio] = word_text

        # 2. Syllables
        syllables = entry.get('syllables', [])
        syllable_audios = entry.get('audios', {}).get('syllables', [])
        for syl, audio in zip(syllables, syllable_audios):
            if syl and audio:
                tasks_map[audio] = syl

        # 3. Letters
        letters = entry.get('letters', [])
        letter_audios = entry.get('audios', {}).get('letters', [])
        for let, audio in zip(letters, letter_audios):
            if let and audio:
                speech_text = CHAR_TO_SPEECH.get(let.lower(), let)
                tasks_map[audio] = speech_text

    # Run tasks with concurrency limit (semaphore) to prevent API rate limiting
    semaphore = asyncio.Semaphore(5)
    tasks = []
    for filepath, text in tasks_map.items():
        tasks.append(generate_single_audio(text, filepath, voice, semaphore))

    await asyncio.gather(*tasks)
    print("Audio generation complete.")

if __name__ == '__main__':
    asyncio.run(main())
