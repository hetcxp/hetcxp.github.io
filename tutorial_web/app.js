const slides = [
  // SLIDE 1 — Clic en "Menús"
  { id: 1, image: "Slide_1.png", type: "click",
    hotspot: { x: 5.6, y: 5.7, w: 3.9, h: 3.7 },
    instruction: "Haz clic en el menú Menús",
    instructionPos: "bottom" },

  // SLIDE 2 — Clic en "CxC / Cobranzas / Vendedor"
  { id: 2, image: "Slide_2.png", type: "click",
    hotspot: { x: 5.9, y: 29.7, w: 20, h: 3.2 },
    instruction: "Haz clic en CxC / Cobranzas / Vendedor",
    instructionPos: "bottom" },

  // SLIDE 3 — Clic en botón "Cliente"
  { id: 3, image: "Slide_3.png", type: "click",
    hotspot: { x: 1.4, y: 6, w: 3.8, h: 3.6 },
    instruction: "Haz clic en el botón Cliente",
    instructionPos: "bottom" },

  // SLIDE 4 — Clic en "Gestionar Cliente"
  { id: 4, image: "Slide_4.png", type: "click",
    hotspot: { x: 1.5, y: 8.8, w: 11.2, h: 3.8 },
    instruction: "Haz clic en Gestionar Cliente",
    instructionPos: "bottom" },

  // SLIDE 5 — Clic en botón Insertar
  { id: 5, image: "Slide_5.png", type: "click",
    hotspot: { x: 12.9, y: 15.2, w: 4.2, h: 9.8 },
    instruction: "Haz clic en el botón Insertar",
    instructionPos: "bottom" },

  // SLIDE 6 — Clic en ícono de calendario
  { id: 6, image: "Slide_6.png", type: "click",
    hotspot: { x: 64, y: 22.4, w: 2.4, h: 4.1 },
    instruction: "Haz clic en el ícono de calendario",
    instructionPos: "bottom" },

  // SLIDE 7 — Clic en día 27
  { id: 7, image: "Slide_7.png", type: "click",
    hotspot: { x: 53, y: 41.5, w: 1.9, h: 3.6 },
    instruction: "Selecciona el día 27",
    instructionPos: "bottom" },

  // SLIDE 8 — Clic en desplegable Status
  { id: 8, image: "Slide_8.png", type: "click",
    hotspot: { x: 71.9, y: 22.2, w: 10.3, h: 5.2 },
    instruction: "Haz clic en el desplegable de Status",
    instructionPos: "bottom" },

  // SLIDE 9 — Clic en Activo (cierra desplegable)
  { id: 9, image: "Slide_9.png", type: "click",
    hotspot: { x: 72, y: 26.3, w: 10.2, h: 3.1 },
    instruction: "Selecciona Activo (deja el valor por defecto)",
    instructionPos: "bottom" },

  // SLIDE 10 — Escribe Nº R.I.F. (FUSIONADO: antes era clic + texto separados)
  { id: 10, image: "Slide_10.png", type: "text",
    hotspot: { x: 23.2, y: 32.7, w: 14.6, h: 4.4 },
    expected: "J123456789",
    instruction: "Escribe J123456789 en el campo Nº R.I.F. y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 11 — Escribe Nombre
  { id: 11, image: "Slide_11.png", type: "text",
    hotspot: { x: 23.2, y: 38.2, w: 55, h: 5.5 },
    expected: "INVERSIONES CLIENTE C.A",
    instruction: "Escribe INVERSIONES CLIENTE C.A en el campo Nombre y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 12 — Clic en desplegable de tipo de contribuyente
  { id: 12, image: "Slide_12.png", type: "click",
    hotspot: { x: 49.6, y: 46.9, w: 17, h: 3.5 },
    instruction: "Haz clic en el desplegable de tipo de contribuyente",
    instructionPos: "bottom" },

  // SLIDE 13 — Clic en Contribuyente
  { id: 13, image: "Slide_13.png", type: "click",
    hotspot: { x: 49.5, y: 50.1, w: 17, h: 3.5 },
    instruction: "Haz clic en Contribuyente",
    instructionPos: "bottom" },

  // SLIDE 14 — Escribe Contacto (FUSIONADO)
  { id: 14, image: "Slide_14.png", type: "text",
    hotspot: { x: 23, y: 59.6, w: 24.6, h: 3.4 },
    expected: "PEDRO PEREZ",
    instruction: "Escribe PEDRO PEREZ en el campo Contacto y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 15 — Escribe Teléfono
  { id: 15, image: "Slide_15.png", type: "text",
    hotspot: { x: 23.1, y: 64.9, w: 24.7, h: 4.1 },
    expected: "0212-1234567",
    instruction: "Escribe 0212-1234567 en el campo Teléfono y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 16 — Escribe E-mail
  { id: 16, image: "Slide_16.png", type: "text",
    hotspot: { x: 23.2, y: 76.5, w: 24.4, h: 3.5 },
    expected: "INCCLIENTE@CORREO.COM",
    instruction: "Escribe INCCLIENTE@CORREO.COM en el campo E-mail y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 17 — Escribe Dirección
  { id: 17, image: "Slide_17.png", type: "text",
    hotspot: { x: 23.2, y: 84.7, w: 55, h: 6.5 },
    expected: "URB LOS PALOS GRANDES",
    instruction: "Escribe URB LOS PALOS GRANDES en el campo Dirección y presiona Enter",
    instructionPos: "top" },

  // SLIDE 18 — Clic en botón "..." de Ciudad
  { id: 18, image: "Slide_18.png", type: "click",
    hotspot: { x: 34.1, y: 91.5, w: 2, h: 3.5 },
    instruction: "Haz clic en el botón ... junto al campo Ciudad",
    instructionPos: "top" },

  // SLIDE 19 — Escribe *CARACAS en buscador
  { id: 19, image: "Slide_19.png", type: "text",
    hotspot: { x: 39, y: 32.2, w: 18.8, h: 3.2 },
    expected: "*CARACAS",
    instruction: "Escribe *CARACAS en el buscador y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 20 — Clic en botón Buscar (lupa)
  { id: 20, image: "Slide_20.png", type: "click",
    hotspot: { x: 42.8, y: 17.8, w: 4.7, h: 9 },
    instruction: "Haz clic en el botón Buscar",
    instructionPos: "bottom" },

  // SLIDE 21 — Clic en CARACAS y luego Escoger
  { id: 21, image: "Slide_21.png", type: "click",
    hotspot: { x: 38, y: 17.8, w: 4.6, h: 9.2 },
    instruction: "Haz clic en el botón Escoger",
    instructionPos: "bottom" },

  // SLIDE 22 — Escribe Zona Postal (FUSIONADO: antes era clic en campo + texto)
  { id: 22, image: "Slide_22.png", type: "text",
    hotspot: { x: 70.7, y: 91.4, w: 9, h: 3.5 },
    expected: "1040",
    instruction: "Escribe 1040 en el campo Zona Postal y presiona Enter",
    instructionPos: "top" },

  // SLIDE 23 — Clic en botón "..." de Zona de Cobranza
  { id: 23, image: "Slide_23.png", type: "click",
    hotspot: { x: 74.5, y: 59.1, w: 2.7, h: 3.9 },
    instruction: "Haz clic en el botón ... de Zona de Cobranza",
    instructionPos: "bottom" },

  // SLIDE 24 — Clic en botón "..." de Sector de Negocio
  { id: 24, image: "Slide_24.png", type: "click",
    hotspot: { x: 74.4, y: 62.7, w: 2.5, h: 3.9 },
    instruction: "Haz clic en el botón ... de Sector de Negocio",
    instructionPos: "bottom" },

  // SLIDE 25 — Escribe día de Cumpleaños
  { id: 25, image: "Slide_25.png", type: "text",
    hotspot: { x: 64.3, y: 74, w: 3, h: 3.5 },
    expected: "24",
    instruction: "Escribe 24 en el campo Día de cumpleaños y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 26 — Escribe mes de Cumpleaños
  { id: 26, image: "Slide_26.png", type: "text",
    hotspot: { x: 70.6, y: 74, w: 3, h: 3.5 },
    expected: "11",
    instruction: "Escribe 11 en el campo Mes de cumpleaños y presiona Enter",
    instructionPos: "bottom" },

  // SLIDE 27 — Clic en botón "..." Vendedor
  { id: 27, image: "Slide_27.png", type: "click",
    hotspot: { x: 77.5, y: 90.8, w: 2, h: 3.5 },
    instruction: "Haz clic en el botón ... junto al campo Nombre del vendedor",
    instructionPos: "top" },

  // SLIDE 28 — Clic en pestaña Advertencias
  { id: 28, image: "Slide_28.png", type: "click",
    hotspot: { x: 24, y: 43.9, w: 6.7, h: 4.3 },
    instruction: "Haz clic en la pestaña Advertencias",
    instructionPos: "bottom" },

  // SLIDE 29 — Clic en pestaña Dir. de Despacho
  { id: 29, image: "Slide_29.png", type: "click",
    hotspot: { x: 30.1, y: 44.2, w: 8.5, h: 4.2 },
    instruction: "Haz clic en la pestaña Dirección de Despacho",
    instructionPos: "bottom" },

  // SLIDE 30 — Clic en botón Insertar (guardar)
  { id: 30, image: "Slide_30.png", type: "click",
    hotspot: { x: 15.9, y: 8.2, w: 4.2, h: 9.8 },
    instruction: "Haz clic en el botón Insertar para guardar el cliente",
    instructionPos: "bottom" },

  // SLIDE 31 — Clic en botón Salir
  { id: 31, image: "Slide_31.png", type: "click",
    hotspot: { x: 19.7, y: 8.4, w: 3.8, h: 9.2 },
    instruction: "Haz clic en el botón Salir",
    instructionPos: "bottom" },

  // SLIDE 32 — Cerrar ventana Buscar Cliente (X)
  { id: 32, image: "Slide_32.png", type: "click",
    hotspot: { x: 84.5, y: 8.3, w: 2, h: 3.9 },
    instruction: "Cierra la ventana. ¡Tutorial completado! 🎉",
    instructionPos: "bottom" },
];

let currentIndex = 0;
let isCurrentActionCompleted = false;

// Elementos DOM
const slideImage = document.getElementById('slide-image');
const hotspotClick = document.getElementById('hotspot-click');
const hotspotText = document.getElementById('hotspot-text');
const instructionBox = document.getElementById('instruction-box');
const progressIndicator = document.getElementById('progress-indicator');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const modalError = document.getElementById('error-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

// --- MODO EDICIÓN AVANZADO ---
let isEditMode = false;
let isDragging = false;
let isResizing = false;
let dragStartX, dragStartY, initialLeft, initialTop, initialWidth, initialHeight;
let editBox = null;
let resizeHandle = null;
let currentNewCoords = null;

const codePanel = document.createElement('div');
codePanel.style.cssText = 'position:fixed; top:10px; right:10px; background:rgba(0,0,0,0.8); color:#0f0; padding:15px; z-index:9999; display:none; max-width:400px; font-family:monospace; border-radius:8px; white-space:pre-wrap; flex-direction:column; gap:10px; cursor:move; user-select:none; box-shadow:0 4px 12px rgba(0,0,0,0.5);';
document.body.appendChild(codePanel);

// Hacer el panel arrastrable
let panelDragging = false;
let panelStartX, panelStartY, panelInitialX, panelInitialY;

codePanel.addEventListener('mousedown', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') return;
    panelDragging = true;
    panelStartX = e.clientX;
    panelStartY = e.clientY;
    const rect = codePanel.getBoundingClientRect();
    panelInitialX = rect.left;
    panelInitialY = rect.top;
    codePanel.style.right = 'auto'; // Liberar el ancla de la derecha
});

document.addEventListener('mousemove', (e) => {
    if (panelDragging) {
        const dx = e.clientX - panelStartX;
        const dy = e.clientY - panelStartY;
        codePanel.style.left = (panelInitialX + dx) + 'px';
        codePanel.style.top = (panelInitialY + dy) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (panelDragging) panelDragging = false;
});

const codeText = document.createElement('div');
codePanel.appendChild(codeText);

const btnSave = document.createElement('button');
btnSave.textContent = "Guardar y Siguiente";
btnSave.style.cssText = 'padding:8px; background:#0f0; color:#000; border:none; border-radius:4px; cursor:pointer; font-weight:bold;';
codePanel.appendChild(btnSave);

function initEditBox() {
    const slide = slides[currentIndex];
    const targetHotspot = slide.type === 'click' ? hotspotClick : hotspotText;
    targetHotspot.classList.add('hidden'); // Ocultar el real
    
    if (editBox) editBox.remove();
    
    editBox = document.createElement('div');
    editBox.style.cssText = 'position:absolute; border:3px solid #ff0; background:rgba(255,255,0,0.3); z-index:9998; cursor:move;';
    
    resizeHandle = document.createElement('div');
    resizeHandle.style.cssText = 'position:absolute; right:-5px; bottom:-5px; width:15px; height:15px; background:#f00; cursor:nwse-resize; z-index:9999;';
    editBox.appendChild(resizeHandle);
    
    document.getElementById('slide-container').appendChild(editBox);
    
    // Calcular posición actual en píxeles
    const imgRect = slideImage.getBoundingClientRect();
    const containerRect = document.getElementById('slide-container').getBoundingClientRect();
    const containerRatio = imgRect.width / imgRect.height;
    const imageRatio = slideImage.naturalWidth / slideImage.naturalHeight;
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
    
    const pLeft = totalOffsetX + (slide.hotspot.x / 100) * renderedWidth;
    const pTop = totalOffsetY + (slide.hotspot.y / 100) * renderedHeight;
    const pWidth = (slide.hotspot.w / 100) * renderedWidth;
    const pHeight = (slide.hotspot.h / 100) * renderedHeight;
    
    editBox.style.left = pLeft + 'px';
    editBox.style.top = pTop + 'px';
    editBox.style.width = pWidth + 'px';
    editBox.style.height = pHeight + 'px';
    
    currentNewCoords = { ...slide.hotspot };
    updateCodePanel();
    
    // Eventos de drag y resize
    editBox.addEventListener('mousedown', (e) => {
        if (e.target === resizeHandle) {
            isResizing = true;
        } else {
            isDragging = true;
        }
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        initialLeft = parseFloat(editBox.style.left);
        initialTop = parseFloat(editBox.style.top);
        initialWidth = parseFloat(editBox.style.width);
        initialHeight = parseFloat(editBox.style.height);
        e.preventDefault(); // evitar seleccionar texto
    });
}

document.addEventListener('mousemove', (e) => {
    if (!isEditMode) return;
    if (isDragging) {
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        editBox.style.left = (initialLeft + dx) + 'px';
        editBox.style.top = (initialTop + dy) + 'px';
    } else if (isResizing) {
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        editBox.style.width = Math.max(10, initialWidth + dx) + 'px';
        editBox.style.height = Math.max(10, initialHeight + dy) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging || isResizing) {
        isDragging = false;
        isResizing = false;
        recalculatePercentages();
    }
});

function recalculatePercentages() {
    if (!editBox) return;
    const imgRect = slideImage.getBoundingClientRect();
    const containerRect = document.getElementById('slide-container').getBoundingClientRect();
    const containerRatio = imgRect.width / imgRect.height;
    const imageRatio = slideImage.naturalWidth / slideImage.naturalHeight;
    
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
    
    const pLeft = parseFloat(editBox.style.left);
    const pTop = parseFloat(editBox.style.top);
    const pWidth = parseFloat(editBox.style.width);
    const pHeight = parseFloat(editBox.style.height);
    
    const percentX = ((pLeft - totalOffsetX) / renderedWidth) * 100;
    const percentY = ((pTop - totalOffsetY) / renderedHeight) * 100;
    const percentW = (pWidth / renderedWidth) * 100;
    const percentH = (pHeight / renderedHeight) * 100;
    
    currentNewCoords = {
        x: parseFloat(percentX.toFixed(1)),
        y: parseFloat(percentY.toFixed(1)),
        w: parseFloat(percentW.toFixed(1)),
        h: parseFloat(percentH.toFixed(1))
    };
    
    updateCodePanel();
}

function updateCodePanel() {
    if (!currentNewCoords) return;
    codeText.innerHTML = `<b>Modo Edición Activado</b><br><br>Arrastra el cuadro amarillo para moverlo, o la esquina roja para cambiar el tamaño.<br><br>Lámina ${currentIndex + 1} (${slides[currentIndex].type})<br><br>Nuevas coordenadas:<br>hotspot: { x: ${currentNewCoords.x}, y: ${currentNewCoords.y}, w: ${currentNewCoords.w}, h: ${currentNewCoords.h} }`;
}

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'e' && e.ctrlKey) {
        isEditMode = !isEditMode;
        codePanel.style.display = isEditMode ? 'flex' : 'none';
        if (isEditMode) {
            initEditBox();
        } else {
            if (editBox) editBox.remove();
            editBox = null;
            // Mostrar hotspot original de nuevo
            const slide = slides[currentIndex];
            const targetHotspot = slide.type === 'click' ? hotspotClick : hotspotText;
            targetHotspot.classList.remove('hidden');
        }
    }
});

btnSave.onclick = () => {
    btnSave.textContent = "Guardando...";
    fetch('/save_coords', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slide_id: slides[currentIndex].id, coords: currentNewCoords })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 'success') {
            // Actualizar el array en memoria
            slides[currentIndex].hotspot = currentNewCoords;
            btnSave.textContent = "¡Guardado!";
            
            setTimeout(() => {
                btnSave.textContent = "Guardar y Siguiente";
                // Avanzar automáticamente
                if (currentIndex < slides.length - 1) {
                    loadSlide(currentIndex + 1);
                } else {
                    alert("¡Haz llegado a la última lámina!");
                }
            }, 500);
        }
    })
    .catch(err => {
        console.error(err);
        btnSave.textContent = "Error al guardar";
        setTimeout(() => btnSave.textContent = "Guardar y Siguiente", 2000);
    });
};
// ----------------------

function positionHotspot(hotspot, coords) {
    const slideContainer = document.getElementById('slide-container');
    const containerRect = slideContainer.getBoundingClientRect();
    const imgRect = slideImage.getBoundingClientRect();
    
    // Calcular el tamaño real de la imagen renderizada (considerando object-fit: contain)
    const containerRatio = imgRect.width / imgRect.height;
    const imageRatio = slideImage.naturalWidth / slideImage.naturalHeight;
    
    let renderedWidth, renderedHeight;
    
    if (containerRatio > imageRatio) {
        // Limitado por el alto (pillarbox, bandas laterales)
        renderedHeight = imgRect.height;
        renderedWidth = renderedHeight * imageRatio;
    } else {
        // Limitado por el ancho (letterbox, bandas arriba/abajo)
        renderedWidth = imgRect.width;
        renderedHeight = renderedWidth / imageRatio;
    }
    
    // Calcular el offset de la imagen renderizada dentro del elemento <img>
    const offsetX = (imgRect.width - renderedWidth) / 2;
    const offsetY = (imgRect.height - renderedHeight) / 2;
    
    // Offset total respecto al contenedor
    const totalOffsetX = imgRect.left - containerRect.left + offsetX;
    const totalOffsetY = imgRect.top - containerRect.top + offsetY;
    
    hotspot.style.left   = (totalOffsetX + (coords.x / 100) * renderedWidth)  + 'px';
    hotspot.style.top    = (totalOffsetY + (coords.y / 100) * renderedHeight) + 'px';
    hotspot.style.width  = ((coords.w / 100) * renderedWidth)  + 'px';
    hotspot.style.height = ((coords.h / 100) * renderedHeight) + 'px';
}

function loadSlide(index) {
    if (index < 0 || index >= slides.length) return;
    
    currentIndex = index;
    const slide = slides[currentIndex];
    isCurrentActionCompleted = false;
    
    // Configurar imagen
    slideImage.src = 'images/' + slide.image;
    
    // Configurar instrucción
    instructionBox.classList.remove('animate-slide-in');
    void instructionBox.offsetWidth; // force reflow para reiniciar la animación
    instructionBox.textContent = slide.instruction;
    instructionBox.className = 'instruction-box ' + slide.instructionPos + ' animate-slide-in';
    
    // Configurar hotspots
    hotspotClick.classList.add('hidden');
    hotspotText.classList.add('hidden');
    
    const targetHotspot = slide.type === 'click' ? hotspotClick : hotspotText;
    
    // Aplicar coordenadas calculadas
    positionHotspot(targetHotspot, slide.hotspot);
    
    targetHotspot.classList.remove('hidden');
    
    if (slide.type === 'text') {
        hotspotText.value = '';
        setTimeout(() => hotspotText.focus(), 100);
    }
    
    updateControls();
    
    // Si el modo edición está activo, inicializar el cuadro de inmediato
    if (isEditMode) {
        initEditBox();
    }
}

function completeAction() {
    isCurrentActionCompleted = true;
    updateControls();
    
    // Resaltar hotspot como completado brevemente y luego avanzar
    const activeHotspot = slides[currentIndex].type === 'click' ? hotspotClick : hotspotText;
    activeHotspot.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    activeHotspot.style.borderColor = 'rgba(0, 255, 0, 0.8)';
    
    setTimeout(() => {
        // Reset estilos
        activeHotspot.style.backgroundColor = '';
        activeHotspot.style.borderColor = '';
        
        // Auto avanzar si no es la última
        if (currentIndex < slides.length - 1) {
            loadSlide(currentIndex + 1);
        } else {
            // Última lámina completada
            instructionBox.textContent = "¡Tutorial completado con éxito! 🎉";
            instructionBox.className = 'instruction-box top';
            instructionBox.style.backgroundColor = 'rgba(0, 128, 0, 0.9)';
            hotspotClick.classList.add('hidden');
            hotspotText.classList.add('hidden');
        }
    }, 400);
}

function updateControls() {
    progressIndicator.textContent = `Lámina ${currentIndex + 1} de ${slides.length}`;
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = !isCurrentActionCompleted || currentIndex === slides.length - 1;
}

function showError() {
    modalError.classList.remove('hidden');
    // Agitar input
    hotspotText.style.animation = 'shake 0.4s';
    setTimeout(() => hotspotText.style.animation = '', 400);
}

// Event Listeners
hotspotClick.addEventListener('click', () => {
    if (slides[currentIndex].type === 'click') {
        completeAction();
    }
});

hotspotText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const slide = slides[currentIndex];
        const userInput = hotspotText.value.trim().toLowerCase();
        const expected = slide.expected.toLowerCase();
        
        if (userInput === expected) {
            completeAction();
        } else {
            showError();
        }
    }
});

btnPrev.addEventListener('click', () => loadSlide(currentIndex - 1));
btnNext.addEventListener('click', () => {
    if (isCurrentActionCompleted && currentIndex < slides.length - 1) {
        loadSlide(currentIndex + 1);
    }
});

btnCloseModal.addEventListener('click', () => {
    modalError.classList.add('hidden');
    hotspotText.focus();
});

window.addEventListener('resize', () => {
    const slide = slides[currentIndex];
    const targetHotspot = slide.type === 'click' ? hotspotClick : hotspotText;
    if (!targetHotspot.classList.contains('hidden')) {
        positionHotspot(targetHotspot, slide.hotspot);
    }
});

slideImage.addEventListener('load', () => {
    const slide = slides[currentIndex];
    const targetHotspot = slide.type === 'click' ? hotspotClick : hotspotText;
    if (!targetHotspot.classList.contains('hidden') || isEditMode) {
        positionHotspot(targetHotspot, slide.hotspot);
        if (isEditMode) initEditBox();
    }
});

// Inicializar
window.addEventListener('DOMContentLoaded', () => {
    loadSlide(0);
});

// Estilo para agitar
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);
