# Architecture - Galaxia de Palabras

## 1. PWA & Device Target (iPad Mini)
- **Host / Viewport**: Optimized for iPad Mini viewport (~768x1024 / 1024x768). Responsive design via CSS Flexbox/Grid and dynamic layout units (`vh`, `vw`, `vmin`).
- **PWA Features**:
  - `manifest.json` for home screen installability.
  - Service Worker for offline asset caching (audios in `/assets/audio/`, words data in `assets/data/words.json`, HTML/CSS/JS).

## 2. Character & Voice Guide
- **Astronaut Guide**: An interactive SVG or image character that animates/reacts during gameplay (idle, success, instruction).
- **Voz de Guía (Edge TTS)**:
  - Chosen Voice: `es-MX-JorgeNeural` (Mexican Spanish Male, friendly, selected by user).
  - Pre-recorded or pre-synthesized audio segments stored in `assets/audio/` to avoid live API dependency on the iPad Mini.
  - **Audio Preloading Strategy**: To bypass Safari's strict requirement for synchronous audio playback on user gesture, all audio files for the active word (word, syllables, and letters) are preloaded and decoded in the background when a round loads (`loadRound()`). Playback from the resulting `audioBuffersCache` then executes synchronously during click events.
  - **Safari AudioContext Unlock**: A synchronous silent buffer is played on the first user interaction to transition the context state to `'running'`.


## 3. UI/UX & Styling
- **Tech Stack**: Vanilla HTML5, CSS3 Custom Properties (variables), and ES6 modules. No bundler required for local developer iteration.
- **Design System**: Space/Galaxy theme. Dark violet background (`#0B0114`), starfield overlay, soft neon glow borders, and large kid-friendly touch targets.
- **Responsive Layout**: Single page layout with state management in JS (`screens: home, map, game-play, reward`).

## 3.1 Directrices de UX Infantil (Ages 5-7)
- **1. Interacción Sin Lectura (Audio-First)**: Los botones de navegación emplean iconos universales y reproducen su indicación verbal al ser tocados (ej: "Volver", "Comenzar").
- **2. Entrada Flexible (Tap-to-Place)**: Además del arrastre (drag-and-drop), el niño puede simplemente tocar una letra/sílaba para colocarla automáticamente en la siguiente posición libre.
- **3. Feedback de Error Amigable**: Las respuestas incorrectas se indican con animaciones de vibración suave y una frase motivadora del astronauta. Se prohíben alertas rojas o zumbadores agresivos.
- **4. Celebraciones de Alto Impacto**: Las respuestas correctas desencadenan estrellas fugaces animadas y gestos triunfantes del astronauta en pantalla.

## 3.5 Tablero Galáctico y Progresión (UX General)
- **El Mapa de la Galaxia**: Un mapa estelar visual donde se muestran 6 estaciones espaciales orbitales conectadas por constelaciones que guían al centro de la galaxia.
- **Las 6 Estaciones (Niveles)**:
  1. **Nebulosa de Iniciación (M)**: Primeros pasos con palabras de la consonante M.
  2. **Cinturón de Asteroides (P)**: Desafíos enfocados en la consonante P.
  3. **Estación de Saturno (B)**: Desafíos enfocados en la consonante B.
  4. **Constelación del Dragón (D)**: Desafíos enfocados en la consonante D.
  5. **Agujero Negro de las Sílabas**: Nivel avanzado enfocado puramente en silabear palabras mixtas.
  6. **Supernova de las Letras**: Desafío final cronometrado o interactivo para emparejar y armar letras mixtas.
- **Centro de la Galaxia (El Núcleo Solar)**: Bloqueado inicialmente. Se desbloquea al completar las 6 estaciones. Muestra un cofre del tesoro que libera estrellas doradas al tocarlo.
- **Estructura de Ronda y Progresión**:
  - Al seleccionar una estación, el niño entra al **Panel de Control de la Estación**, donde puede seleccionar libremente cualquiera de los **4 minijuegos**.
  - Cada minijuego seleccionado consiste en **3 rondas** (3 desafíos o palabras del grupo correspondiente a la estación).
  - Completar un minijuego otorga estrellas y lo marca como completado.
  - La estación se marca como **completada** en el Mapa Galáctico una vez que los 4 minijuegos han sido superados en esa estación.
  - El astronauta guía felicita verbalmente al niño cada vez que completa un minijuego y al conquistar la estación entera.

## 4. Game Modes (Minijuegos Espaciales)

### 1) Meteoritos de Letras (Armar Palabras con Letras)
- **Concepto**: El tablero del astronauta muestra los espacios vacíos de la palabra (ej: `[ ][ ][ ][ ]` para "pato"). Flotan meteoritos con las letras correctas y al menos 2 letras distractoras.
- **Lógica & UX**:
  - El niño arrastra las letras-meteorito a su posición correcta en orden secuencial o libre.
  - Al tocar una letra, suena su pronunciación ("p", "a", etc.).
  - Las distractoras rebotan suavemente al intentar colocarlas.

### 2) Estación de Sílabas (Armar Palabras con Sílabas)
- **Concepto**: Una nave espacial necesita ensamblar sus cabinas de sílabas (ej: `[ ma ][ má ]`).
- **Lógica & UX**:
  - Se presentan las sílabas correctas y 1 sílaba distractora en pequeños propulsores.
  - El niño las coloca en los soportes de la nave.
  - Al completar la palabra correctamente, los motores se encienden y la nave despega.

### 3) Portal Estelar (Completar Palabra con Sílaba o Consonante)
- **Concepto**: Un portal de teletransportación bloqueado muestra una palabra incompleta (ej: `ma - [ ]` o `[ ] - a - t - o`).
- **Lógica & UX**:
  - Tres estrellas flotan al lado del portal con opciones de sílabas o consonantes.
  - El niño selecciona la opción correcta para desbloquear el portal.
  - El astronauta guía da pistas sonoras al tocarlo.

### 4) Constelaciones Gemelas (Relacionar Mayúsculas con Minúsculas)
- **Concepto**: Conectar estrellas brillantes en el firmamento para dibujar constelaciones.
- **Lógica & UX**:
  - A la izquierda se muestran estrellas con letras en Mayúscula (M, P, B, D).
  - A la derecha se muestran estrellas desordenadas con sus Minúsculas (m, p, b, d).
  - El niño traza un rayo láser de energía uniendo la mayúscula con su respectiva minúscula. Al completarse, brilla una constelación.

## 4.5 Recursos de Voz, Efectos de Sonido (SFX) y Visuales

### Guión de Voces del Astronauta (Voz + Texto)
Las siguientes frases son pre-grabadas por la voz seleccionada (`es-MX-JorgeNeural`) y se reproducen según el estado del juego:
- **`system/welcome.mp3`**: "¡Hola Miguel! Bienvenido a la galaxia de palabras. Presiona despegar para iniciar nuestra aventura espacial."
- **`system/select_game.mp3`**: "Selecciona un minijuego en el panel para ganar estrellas."
- **`system/success_generic.mp3`**: "¡Excelente trabajo! ¡Estelar!"
- **`system/success_game.mp3`**: "¡Increíble! Completaste el minijuego y ganaste tres estrellas de energía."
- **`system/success_station.mp3`**: "¡Felicitaciones! Has conquistado toda esta estación espacial."
- **`system/success_galaxy.mp3`**: "¡Espectacular! Llegaste al centro de la galaxia y desbloqueaste el gran tesoro de estrellas doradas."
- **`system/error_try_again.mp3`**: "Casi lo tienes. ¡Inténtalo de nuevo, tú puedes!"
- **`system/btn_back.mp3`**: "Volver al mapa galáctico."
- **`system/btn_restart.mp3`**: "Reiniciar el juego."

### Efectos de Sonido (SFX)
- **`system/sfx_correct.mp3`**: Timbre metálico brillante de éxito.
- **`system/sfx_incorrect.mp3`**: Sonido de rebote suave de goma para fallos.
- **`system/sfx_click.mp3`**: Sonido de burbuja digital al tocar cualquier botón.
- **`system/sfx_launch.mp3`**: Rugido de propulsor de cohete al completar palabras o naves.
- **`system/sfx_victory.mp3`**: Fanfarria espacial orquestal para pantallas de recompensa.
- **`system/sfx_laser.mp3`**: Zumbido eléctrico de rayo láser al conectar constelaciones.

### Recursos Visuales (Generados por IA / Nube)
- **Fondo de Pantalla**: Imagen espacial inmersiva profunda con estrellas y nebulosas violetas.
- **Astronauta Guía**: Ilustraciones 3D de un simpático personaje en tres estados: `idle` (flotando), `success` (celebrando con pulgares arriba), y `pointing` (indicando el tablero).
- **Planetas y Estaciones**: Seis diseños únicos de estaciones/planetas flotantes y un gran sol brillante para el Núcleo Solar.
- **Ilustraciones de Palabras (Emojis)**: Emojis nativos y descriptivos asignados a cada una de las 30 palabras directamente en `words.json`, con estilos CSS responsivos (`.word-emoji`). Se mantiene un estilo minimalista, escalable, offline-friendly y de rendimiento óptimo en Safari de iPad Mini.

## 5. Estructura PWA y Persistencia

### Arquitectura de Archivos PWA
```
words_party/
  ├── manifest.json            # Configuración de instalación en iPad Mini
  ├── sw.js                    # Service Worker con estrategia Cache-First para audios/imágenes
  ├── index.html               # Punto de entrada de la SPA
  ├── assets/
  │    ├── data/
  │    │    └── words.json
  │    ├── audio/
  │    │    ├── words/
  │    │    ├── syllables/
  │    │    ├── letters/
  │    │    └── system/
  │    └── images/
  │         ├── bg_space.jpg
  │         ├── astronaut_happy.png
  │         ├── astronaut_pointing.png
  │         ├── astronaut_idle.png
  │         ├── words/
  │         └── stations/
  ├── css/
  │    └── styles.css          # Variables CSS y maquetación responsive flex/grid
  └── js/
       ├── app.js              # Controlador principal, Router de pantallas y Service Worker Init
       ├── storage.js          # Guardado de progreso y carga de localStorage
       └── game.js             # Lógica de estados y renderizado de minijuegos
```

### Esquema de Guardado de Progreso (`localStorage`)
Se almacena bajo la clave `"galaxia_palabras_progreso"` con la siguiente estructura JSON:
```json
{
  "total_stars": 0,
  "stations": {
    "station1": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } },
    "station2": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } },
    "station3": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } },
    "station4": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } },
    "station5": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } },
    "station6": { "completed": false, "games": { "game1": false, "game2": false, "game3": false, "game4": false } }
  }
}
```

### Botón de Reinicio y Puerta de Seguridad Parental (Modal)
- Al hacer clic en el icono de reinicio (engranaje/papelera):
  1. Se despliega un modal superpuesto a pantalla completa.
  2. Suena el audio: "¿Seguro que quieres borrar tus estrellas y volver a empezar?"
  3. **Puerta Parental Infantil**: Para proceder con la eliminación, se muestra un reto simple de reconocimiento de color o formas: **"Toca el planeta rojo"** (se muestran tres pequeños planetas flotantes: uno azul, uno verde y uno rojo).
  4. Si toca el planeta rojo, se ejecuta `localStorage.clear()`, se reinicia el estado y la app vuelve a la pantalla de bienvenida.
  5. Si toca el azul o el verde, el modal se cierra sin borrar datos.
