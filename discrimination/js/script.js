const casosDataES = {
    1: {
        titulo: "Caso 1: El Proceso de Contratación Seguro",
        escenario: "La historia de Javier, un reclutador junior que presencia cómo un comité de directivos descarta a candidatos altamente calificados (por edad, nombre extranjero y vestimenta) y favorece a un candidato menos preparado solo por afinidad.",
        objetivo_label: "Objetivo del caso:",
        objetivo_texto: "Identificar los principales sesgos inconscientes (Racial, Edad, Religioso/Cultural, Afinidad, etc.) y aplicar los 5 pasos positivos para erradicarlos."
    },
    2: {
        titulo: "Caso 2: Dinámicas de Equipo y el Cumplido Incomprendido",
        escenario: "La historia de Carlos, un analista que recibe un dardo disfrazado de halago ('casi me da vergüenza lo bueno que es') por parte de su líder María, basado en asunciones erróneas sobre su origen étnico frente al silencio del equipo.",
        objetivo_label: "Conceptos clave:",
        objetivo_texto: "Microagresiones, Discriminación por Asociación y Percepción. Aplicación del Método CPR (Contenido, Patrón, Relación)."
    },
    3: {
        titulo: "Caso 3: La Decisión Rápida de Liderazgo",
        escenario: "La historia de Elena, una experta técnica de 65 años cuya valiosa advertencia sobre una inversión de 5 millones de dólares es ignorada por el equipo de liderazgo debido a su edad y género, resultando en un fracaso millonario por priorizar la rapidez y la cohesión.",
        objetivo_label: "Objetivo:",
        objetivo_texto: "Identificar sesgos de conformidad, género y edad en decisiones grupales. Comprender la importancia de escuchar voces divergentes para evitar juicios apresurados."
    },
    4: {
        titulo: "Caso 4: Construyendo el Futuro",
        escenario: "La historia de Luis, un empleado con discapacidad visual que tras denunciar acoso en forma de 'bromas inofensivas', es excluido de un proyecto clave por su gerente como castigo, llevándolo a renunciar.",
        objetivo_label: "Objetivo del módulo:",
        objetivo_texto: "Diferenciar Acoso de Victimización, y revisar las 4 estrategias conductuales clave que todo líder debe aplicar para fomentar la inclusión y evitar la fuga de talento."
    }
};

const estadoCasos = {
    1: false,
    2: false,
    3: false,
    4: false
};

const progresoCasos = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

let casoActual = null;

// Referencias a elementos del DOM
const modal = document.getElementById('modal-caso');
const modalBody = document.getElementById('modal-body');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnAcceptModal = document.getElementById('btn-accept-modal');
const btnConclusion = document.getElementById('btn-conclusion');
const conclusionSection = document.getElementById('conclusion-section');
const casosCards = document.querySelectorAll('.caso-card');

const btnIniciar = document.getElementById('btn-iniciar');
const btnContinuar = document.getElementById('btn-continuar');
const heroSection = document.getElementById('hero');
const introSection = document.getElementById('intro');
const casosPanel = document.getElementById('casos-panel');

// Elementos del Modal de Presentación
const modalPresentacion = document.getElementById('modal-presentacion');
const btnClosePresentacion = document.getElementById('btn-close-presentacion');
const slidesContainer = document.getElementById('slides-container');
const btnNextSlide = document.getElementById('btn-next-slide');
const btnPrevSlide = document.getElementById('btn-prev-slide');
const slideProgress = document.getElementById('slide-progress');

let currentSlideIndex = 0;

// Slides del Caso 1
const slidesCaso1ES = [
    // Slide 1 (Eventos 1, 2, 3)
    `<div class="slide">
        <h3 style="color:var(--primary)">1. El Escenario</h3>
        <p><strong>Lectura inmersiva:</strong></p>
        <p><em>Conoce a Javier, un reclutador junior sentado en silencio en la sala de juntas.</em></p>
        <p><em>Frente a él, un comité de directivos —todos con un perfil casi idéntico— acaba de entrevistar a tres finalistas para un puesto gerencial.</em></p>
        <p><em>Javier observó cómo al Candidato A, joven y de la misma universidad que el gerente, le hacían preguntas fáciles, asumiendo su talento solo por simpatía.</em></p>
        <p><em>Luego vio cómo a la Candidata B, una mujer de 55 años con un currículum brillante, la acorralaron buscando errores para justificar que "no tendría energía".</em></p>
        <p><em>Finalmente, escuchó cómo descartaban al Candidato C por usar vestimenta tradicional y tener un nombre extranjero, asumiendo que "no encajaría en la cultura".</em></p>
        <p><em>Sabiendo que el comité ya se inclinó injustamente por el Candidato A, Javier siente un nudo en el estómago: ¿debería alzar la voz o quedarse callado para no incomodar a sus jefes?</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Reflexión Inicial</strong>
            <p>La premisa fundamental es aceptar la verdad incómoda: <strong>todos tenemos sesgos</strong> Se forman desde nuestra infancia. Aceptar esto no te hace mala persona, pero ¿qué harías tú si estuvieras en los zapatos del reclutador junior viendo que se está cometiendo una injusticia múltiple?</p>
        </div>
    </div>`,
    // Slide 2 (Evento 4)
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Análisis de los 9 Sesgos en el Escenario</h3>
        <p>Haz clic en las tarjetas para revelar cómo cada sesgo influyó en la decisión del comité.</p>
        <div class="flip-grid">
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Afinidad</div><div class="flip-card-back">El gerente adora al Candidato A por ser de su universidad.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Atribución</div><div class="flip-card-back">Asumir que el Candidato A tiene buena ética laboral solo por compartir perfil.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Belleza</div><div class="flip-card-back">Favorecer al Candidato A por su atractivo físico.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Edad</div><div class="flip-card-back">Dudar de la "energía" de la Candidata B por tener 55 años.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Género</div><div class="flip-card-back">Preferencia hacia el liderazgo masculino (A) frente al femenino (B).</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Confirmación</div><div class="flip-card-back">Preguntas trampa a B y fáciles a A para "confirmar" prejuicios.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Racial</div><div class="flip-card-back">Descartar inicialmente al Candidato C por tener un nombre extranjero.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Religioso/Cultural</div><div class="flip-card-back">Asumir que C no encajará por usar vestimenta cultural tradicional.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Conformidad</div><div class="flip-card-back">Javier calla para coincidir con el grupo y ser aceptado.</div></div>
            </div>
        </div>
    </div>`,
    // Slide 3 (Evento 5)
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Los 5 Pasos Positivos para Eliminar Sesgos</h3>
        <p>Explora las 5 medidas estructurales y conductuales (haz clic para expandir):</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">1. Contratación Moderna <span>+</span></div>
                <div class="list-item-content">Estandarizar las entrevistas, hacer las mismas preguntas a todos y usar una rúbrica ciega, cuidando las palabras de los anuncios.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">2. Hablar Claro <span>+</span></div>
                <div class="list-item-content">Fomentar un diálogo abierto. El reclutador junior debe señalar lo que ve en privado para educar a los gerentes, no para avergonzarlos.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">3. Opiniones Diversas <span>+</span></div>
                <div class="list-item-content">Consultar la decisión con un grupo diverso para anular los sesgos individuales del comité homogéneo.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">4. Tomar Acción <span>+</span></div>
                <div class="list-item-content">Hacer preguntas incisivas e indagar los verdaderos motivos cuando sospeches que un prejuicio influyó en un rechazo.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">5. Educación <span>+</span></div>
                <div class="list-item-content">Investigar sobre prejuicios y hacer introspección para descubrir en qué áreas la cultura nubló el juicio.</div>
            </div>
        </div>
    </div>`,
    // Slide 4 (Eventos 6 y 7)
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Simulador de Decisión</h3>
        <p>Eres el reclutador junior en esa sala. Observas sesgos hacia el Candidato A y Sesgo de Conformidad en el equipo. Tienes que elegir cómo proceder:</p>
        <div class="mcq-options" id="simulador-1">
            <button class="mcq-btn" onclick="resolverSimulador('A', this)"><strong>Opción A:</strong> Acusas a todos de discriminadores en medio de la reunión y exiges contratar a la Candidata B.</button>
            <button class="mcq-btn" onclick="resolverSimulador('B', this)"><strong>Opción B:</strong> Pides una pausa. En privado, te acercas al gerente, le muestras la falta de estandarización y sugieres invitar a líderes de otros departamentos.</button>
            <button class="mcq-btn" onclick="resolverSimulador('C', this)"><strong>Opción C:</strong> Aceptas la decisión pero les envías anónimamente un artículo sobre Sesgos Inconscientes.</button>
        </div>
        <div id="simulador-feedback" class="feedback-box"></div>
    </div>`,
    // Slide 5 (Evento 8)
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evalúa tu Comprensión</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. Si el equipo descartó el currículum del Candidato C al leer su nombre extranjero antes de siquiera conocerlo, ¿qué sub-categoría operó aquí?</strong></p>
            <div class="mcq-options" id="quiz-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-1')">A. Sesgo de Conformidad</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-1')">B. Sesgo de Nombre</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-1')">C. Sesgo de Belleza</button>
            </div>
        </div>
        <div>
            <p><strong>2. ¿Qué sesgo explica que el gerente le hiciera preguntas trampa a la candidata mayor para justificar su rechazo?</strong></p>
            <div class="mcq-options" id="quiz-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2')">A. Sesgo de Confirmación</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2')">B. Sesgo de Atribución</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2')">C. Sesgo de Afinidad</button>
            </div>
        </div>
    </div>`,
    // Slide 6 (Evento 9)
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Resumen</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Descargar PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Los 5 Pasos para Evitar Sesgos</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Contratación Moderna</h4><p>Entrevistas estandarizadas y rúbricas ciegas.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Hablar en Privado</h4><p>Fomentar diálogo y señalar el sesgo constructivamente.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Opiniones Diversas</h4><p>Grupos heterogéneos y múltiples perspectivas.</p></div></div>
            <div class="info-step"><div class="info-number">4</div><div class="info-content"><h4>Tomar Acción</h4><p>Indagar motivos verdaderos y hacer preguntas incisivas.</p></div></div>
            <div class="info-step"><div class="info-number">5</div><div class="info-content"><h4>Educación y Reflexión</h4><p>Investigar prejuicios y practicar la auto-reflexión.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>¡Felicidades! Has completado el Caso 1. Cierra el modal para continuar.</em></p>
    </div>`
];

// Slides del Caso 2
const slidesCaso2ES = [
    // Slide 1 (Eventos 1, 2, 3)
    `<div class="slide">
        <h3 style="color:var(--primary)">1. El Escenario</h3>
        <p><strong>Lectura inmersiva:</strong></p>
        <p><em>Conoce a Carlos, un dedicado analista en una multinacional.</em></p>
        <p><em>Tras semanas de arduo esfuerzo entregando un proyecto impecable, el equipo se reúne para celebrar.</em></p>
        <p><em>De pronto, María, la líder del equipo, se dirige a él y frente a todos le lanza un dardo disfrazado de halago: "Tu trabajo es tan bueno que casi me da vergüenza".</em></p>
        <p><em>El comentario, cargado de un tono sarcástico y enraizado en la suposición errónea de que Carlos pertenece a una minoría étnica que "normalmente no rinde así", deja la sala en un silencio incómodo.</em></p>
        <p><em>Nadie dice nada.</em></p>
        <p><em>Carlos fuerza una sonrisa, pero por dentro siente cómo la motivación se desmorona y la desconfianza hacia su líder se arraiga.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Reflexión Inicial</strong>
            <p>¿Qué elementos del caso reflejan microagresiones y cómo crees que afectan a las dinámicas de equipo?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Revelar respuesta</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.9rem;"><strong>Microagresión:</strong> "Cumplido" sarcástico basado en etnia.</p>
                        <p style="margin:0; font-size:0.9rem;"><strong>Efecto esperado:</strong> Estrés crónico, hipervigilancia y quiebra de la confianza.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    // Slide 2 (Evento 4)
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Análisis de microagresiones</h3>
        <p>Haz clic en las tarjetas para explorar los conceptos clave de este incidente.</p>
        <div class="flip-grid">
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Disc. por Asociación</div><div class="flip-card-back">Blanco de comentarios por estar con miembros discriminados.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Disc. por Percepción</div><div class="flip-card-back">María asume que Carlos pertenece a un grupo "no deseado".</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Efecto Espectador</div><div class="flip-card-back">Dificultad para identificar la agresión y renuencia a actuar en grupo.</div></div>
            </div>
        </div>
    </div>`,
    // Slide 3 (Evento 5)
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Metodología CPR</h3>
        <p>Explora cómo abordar este tipo de comportamientos (haz clic para expandir):</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">C - Contenido (Incidente) <span>+</span></div>
                <div class="list-item-content">Identificar el cumplido como una microagresión. Abordar el comentario único.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">P - Patrón <span>+</span></div>
                <div class="list-item-content">Reconocer que este comportamiento es recurrente y sistémico.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">R - Relación <span>+</span></div>
                <div class="list-item-content">Vincular el incidente con actitudes discriminatorias y abordar el daño a la confianza.</div>
            </div>
        </div>
    </div>`,
    // Slide 4 (Eventos 6 y 7)
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Simulador de Decisión</h3>
        <p>Al escuchar el comentario de María ("casi me da vergüenza"), tú decides aplicar el método CPR para confrontarla. ¿Qué enfoque eliges?</p>
        <div class="mcq-options" id="simulador-2">
            <button class="mcq-btn" onclick="resolverSimulador2('A', this)"><strong>Opción A:</strong> (Contenido) Le dices frente a todos: "Ese comentario es inapropiado hoy."</button>
            <button class="mcq-btn" onclick="resolverSimulador2('B', this)"><strong>Opción B:</strong> (Relación) Te reúnes en privado con ella y le dices: "Cuando haces ese tipo de comentarios, dañas la confianza del equipo hacia ti..."</button>
            <button class="mcq-btn" onclick="resolverSimulador2('C', this)"><strong>Opción C:</strong> (Patrón) Te quedas callado asumiendo el efecto espectador, pensando que alguien más dirá algo.</button>
        </div>
        <div id="simulador-feedback-2" class="feedback-box"></div>
    </div>`,
    // Slide 5 (Evento 8)
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evalúa tu Comprensión</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. ¿Qué fenómeno ocurre cuando María asume que Carlos es de un grupo discriminado y sus compañeros también reciben comentarios despectivos?</strong></p>
            <div class="mcq-options" id="quiz-2-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-1')">A. Microagresión sistémica</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-1')">B. Discriminación por asociación</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-1')">C. Sesgo de Confirmación</button>
            </div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>2. ¿Cuál es la principal barrera que explica por qué los compañeros no intervienen inmediatamente?</strong></p>
            <div class="mcq-options" id="quiz-2-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-2')">A. Efecto Espectador</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-2')">B. Falta de capacitación</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-2')">C. Estrés crónico</button>
            </div>
        </div>
        <div>
            <p><strong>3. ¿Qué tipo de discriminación ejerce María al tratar injustamente a Carlos por creer que pertenece a un grupo étnico?</strong></p>
            <div class="mcq-options" id="quiz-2-3">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-3')">A. Discriminación Indirecta</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-3')">B. Discriminación por Percepción</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-3')">C. Discriminación por Asociación</button>
            </div>
        </div>
    </div>`,
    // Slide 6 (Evento 9)
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Resumen</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Descargar PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Defensa ante Microagresiones</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Tipos Comunes</h4><p>Discriminación por Asociación, Percepción y Cumplidos Sarcásticos.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Impacto Oculto</h4><p>Estrés Crónico, Hipervigilancia, Pérdida de Confianza.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Método CPR</h4><p>Contenido (Incidente), Patrón, Relación.</p></div></div>
            <div class="info-step"><div class="info-number">4</div><div class="info-content"><h4>Barreras</h4><p>Superar el Efecto Espectador.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>¡Felicidades! Has completado el Caso 2. Cierra el modal para continuar.</em></p>
    </div>`
];

// Slides del Caso 3
const slidesCaso3ES = [
    // Slide 1
    `<div class="slide">
        <h3 style="color:var(--primary)">1. El Escenario</h3>
        <p><strong>Lectura inmersiva:</strong></p>
        <p><em>Conoce a Elena, una experta técnica de 65 años con décadas de experiencia en el sector.</em></p>
        <p><em>En una tensa reunión de liderazgo, el reloj marca que solo quedan 24 horas para aprobar una inversión crítica de 5 millones de dólares.</em></p>
        <p><em>El CEO propone una ruta arriesgada y el grupo, ansioso por terminar, asiente de inmediato.</em></p>
        <p><em>Elena levanta la mano y advierte con datos claros que existe una alternativa mucho más segura, pero sus palabras flotan en el vacío.</em></p>
        <p><em>Los directivos más jóvenes asumen que "sus ideas ya están obsoletas" y que, por ser mujer, "es demasiado cautelosa".</em></p>
        <p><em>Deciden ignorarla, votan por la idea del líder para no generar conflictos, y al mes siguiente, la inversión se convierte en un fracaso millonario que pudo evitarse con solo haberla escuchado.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Reflexión Inicial</strong>
            <p>¿Has participado en decisiones grupales donde tuvo peso la opinión de la mayoría sobre la opinión experta?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Revelar respuesta</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.95rem;">A menudo la presión por cohesión hace que ignoremos a voces divergentes, arriesgando gravemente la calidad del trabajo y de las decisiones finales.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    // Slide 2
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Análisis de Sesgos</h3>
        <p>Razones por las cuales se ignoró a la experta en la decisión rápida:</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Sesgo de Conformidad <span>+</span></div>
                <div class="list-item-content">El grupo prefiere seguir la línea del líder para no romper la cohesión ni generar fricción.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Sesgo de Género <span>+</span></div>
                <div class="list-item-content">Se subestima su experiencia o se le considera "demasiado cautelosa" por su género.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Sesgo de Edad <span>+</span></div>
                <div class="list-item-content">Se asume erróneamente que su conocimiento es obsoleto debido a que tiene 65 años.</div>
            </div>
        </div>
    </div>`,
    // Slide 3
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Guía de Aprendizaje</h3>
        <p><strong>Análisis del caso y acciones:</strong></p>
        <ul style="margin-left: 2rem; margin-top: 1rem; color: var(--text-secondary);">
            <li style="margin-bottom: 0.5rem;">Para anular sesgos grupales, es imperativo consultar opiniones diversas antes de tomar una decisión final.</li>
            <li>Detener juicios apresurados solicitando explícitamente puntos de vista divergentes.</li>
        </ul>
    </div>`,
    // Slide 4
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Simulador de Decisión</h3>
        <p>Eres el líder del equipo. Al notar que la opinión de la experta de 65 años fue ignorada y todos empiezan a darte la razón automáticamente, tienes 1 minuto para decidir tu próxima acción. ¿Qué haces?</p>
        <div class="mcq-options" id="simulador-3">
            <button class="mcq-btn" onclick="resolverSimulador3('A', this)"><strong>Opción A:</strong> Aceptas el apoyo unánime del grupo y procedes con tu idea original para ahorrar tiempo.</button>
            <button class="mcq-btn" onclick="resolverSimulador3('B', this)"><strong>Opción B:</strong> Pausas la reunión y solicitas explícitamente a dos miembros del equipo que argumenten a favor de la propuesta de la experta antes de votar.</button>
            <button class="mcq-btn" onclick="resolverSimulador3('C', this)"><strong>Opción C:</strong> Despiden a la experta por causar retrasos en la decisión.</button>
        </div>
        <div id="simulador-feedback-3" class="feedback-box"></div>
    </div>`,
    // Slide 5
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evalúa tu Comprensión</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. Cuando se descarta la opinión asumiendo conocimiento desactualizado por tener 65 años, ¿qué sesgo opera?</strong></p>
            <div class="mcq-options" id="quiz-3-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-1')">A. Sesgo de Confirmación</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-1')">B. Sesgo de Edad</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-1')">C. Sesgo de Afinidad</button>
            </div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>2. Alinearse rápidamente con el líder ignorando alternativas para no romper cohesión se conoce como:</strong></p>
            <div class="mcq-options" id="quiz-3-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-2')">A. Sesgo de Conformidad</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-2')">B. Sesgo de Género</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-2')">C. Efecto Espectador</button>
            </div>
        </div>
        <div>
            <p><strong>3. Subestimar la capacidad técnica por ser mujer es un claro ejemplo de:</strong></p>
            <div class="mcq-options" id="quiz-3-3">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-3')">A. Discriminación por Asociación</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-3')">B. Sesgo de Género</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-3')">C. Discriminación por Percepción</button>
            </div>
        </div>
    </div>`,
    // Slide 6
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Resumen</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Descargar PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Decisiones sin Sesgos</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Sesgos Comunes</h4><p>Conformidad, Edad, Género.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Consecuencias</h4><p>Juicios apresurados y pérdidas de calidad.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Estrategias</h4><p>Consultar opiniones diversas, solicitar visiones divergentes y pausar antes de decidir.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>¡Felicidades! Has completado el Caso 3. Cierra el modal para continuar.</em></p>
    </div>`
];

// Slides del Caso 4
const slidesCaso4ES = [
    // Slide 1
    `<div class="slide">
        <h3 style="color:var(--primary)">1. El Escenario</h3>
        <p><strong>Lectura inmersiva:</strong></p>
        <p><em>Conoce a Luis, un empleado con discapacidad visual.</em></p>
        <p><em>Recientemente, Luis ha comenzado a recibir chistes ofensivos e insultos disfrazados de "bromas inofensivas" por parte de sus compañeros de equipo respecto a su condición.</em></p>
        <p><em>Esto es **Acoso**.</em></p>
        <p><em>Agotado, Luis decide presentar una queja formal a Recursos Humanos.</em></p>
        <p><em>A la semana siguiente, su gerente lo excluye sorpresivamente del proyecto más importante del año, argumentando: "Mejor no participes, no queremos ofenderte más ni invertir recursos en adaptar la plataforma para ti".</em></p>
        <p><em>Luis, sintiéndose castigado por quejarse, renuncia al día siguiente.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Reflexión Inicial</strong>
            <p>¿Has notado que la diversidad no siempre se traduce en inclusión?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Revelar concepto</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.95rem;">La diversidad es invitar a alguien a la fiesta; la inclusión es invitarlo a bailar. Contratar diversidad sin fomentar inclusión provoca la fuga de talento.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    // Slide 2
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Análisis Conceptual</h3>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Acoso <span>+</span></div>
                <div class="list-item-content">Comportamientos dirigidos a intimidar u ofender directamente a alguien por sus características.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Victimización <span>+</span></div>
                <div class="list-item-content">Represalias o trato injusto hacia alguien *porque se atrevió a denunciar* una discriminación.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">El Impacto Oculto <span>+</span></div>
                <div class="list-item-content">Ambas acciones generan desconfianza, estrés crónico y alta rotación de talento.</div>
            </div>
        </div>
    </div>`,
    // Slide 3
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Estrategias Conductuales</h3>
        <p>Líderes modelando inclusión:</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">1. Contar historias personales <span>+</span></div>
                <div class="list-item-content">Compartir abiertamente errores pasados crea un entorno de seguridad psicológica.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">2. Examinar procesos de pensamiento <span>+</span></div>
                <div class="list-item-content">Pausar antes de asignar proyectos para cuestionar sesgos y represalias.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">3. Esfuerzo por aprender <span>+</span></div>
                <div class="list-item-content">Educarse sobre adaptaciones razonables, sin verlo como un "gasto".</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">4. Buscar retroalimentación constante <span>+</span></div>
                <div class="list-item-content">Crear canales anónimos para reportar acosos sin miedo.</div>
            </div>
        </div>
    </div>`,
    // Slide 4
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Simulador de Decisión</h3>
        <p>Te enteras de la renuncia de Luis por acoso y victimización. ¿Qué estrategia aplicas primero para reparar la cultura?</p>
        <div class="mcq-options" id="simulador-4">
            <button class="mcq-btn" onclick="resolverSimulador4('A', this)"><strong>Opción A:</strong> Redactas un nuevo manual de código de conducta y lo envías por correo.</button>
            <button class="mcq-btn" onclick="resolverSimulador4('B', this)"><strong>Opción B:</strong> Organizas una reunión compartiendo un error pasado sobre inclusión y abres un canal seguro.</button>
            <button class="mcq-btn" onclick="resolverSimulador4('C', this)"><strong>Opción C:</strong> Buscas a Luis y lo amenazas para que no publique su renuncia en redes sociales.</button>
        </div>
        <div id="simulador-feedback-4" class="feedback-box"></div>
    </div>`,
    // Slide 5
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evalúa tu Comprensión</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. Los chistes ofensivos recurrentes sobre una condición constituyen:</strong></p>
            <div class="mcq-options" id="quiz-4-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-1')">A. Discriminación Indirecta</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-4-1')">B. Acoso</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-1')">C. Microagresión sistémica</button>
            </div>
        </div>
        <div>
            <p><strong>2. La exclusión del proyecto como castigo por haber presentado la queja en RH es:</strong></p>
            <div class="mcq-options" id="quiz-4-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-4-2')">A. Victimización</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-2')">B. Efecto Espectador</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-2')">C. Sesgo de Confirmación</button>
            </div>
        </div>
    </div>`,
    // Slide 6
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Resumen</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Descargar Certificado PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Estrategias de Inclusión</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Conceptos Clave</h4><p>Acoso, Victimización, Inclusión vs Diversidad.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Impacto Oculto</h4><p>Estrés crónico, Alta rotación.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Acciones del Líder</h4><p>Contar historias, examinar procesos, educarse, buscar retroalimentación.</p></div></div>
        </div>
        <div style="margin-top: 1rem; background-color: var(--bg-main); padding: 1rem; border-radius: var(--radius); border-left: 4px solid var(--primary);">
            <strong>Compromiso Semanal:</strong> Redacta una acción conductual y hazla realidad esta semana para fomentar la inclusión en tu equipo.
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>¡Felicidades! Has completado el Caso 4. Cierra el modal para finalizar la unidad.</em></p>
    </div>`
];

let casosData = casosDataES;
let slidesCaso1 = slidesCaso1ES;
let slidesCaso2 = slidesCaso2ES;
let slidesCaso3 = slidesCaso3ES;
let slidesCaso4 = slidesCaso4ES;
let currentLanguage = 'es';

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Switch data
    if (lang === 'en') {
        casosData = casosDataEN;
        slidesCaso1 = slidesCaso1EN;
        slidesCaso2 = slidesCaso2EN;
        slidesCaso3 = slidesCaso3EN;
        slidesCaso4 = slidesCaso4EN;
    } else {
        casosData = casosDataES;
        slidesCaso1 = slidesCaso1ES;
        slidesCaso2 = slidesCaso2ES;
        slidesCaso3 = slidesCaso3ES;
        slidesCaso4 = slidesCaso4ES;
    }
    
    // Update static texts
    const texts = staticTexts[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) {
            el.innerHTML = texts[key];
        }
    });

    // Hide language modal
    document.getElementById('lang-modal').style.display = 'none';
}



// Función para abrir el modal
function abrirModal(idCaso) {
    casoActual = idCaso;
    const data = casosData[idCaso];

    modalBody.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${data.titulo}</h2>
        <hr style="border: 0; border-top: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 1.5rem; color: var(--text-primary);">${data.escenario}</p>
        <div style="background-color: var(--bg-main); padding: 1rem; border-radius: var(--radius); border-left: 4px solid var(--primary);">
            <strong style="color: var(--primary); display: block; margin-bottom: 0.5rem; font-size: 1.1rem;">${data.objetivo_label}</strong>
            <span style="font-size: 1.05rem; line-height: 1.5;">${data.objetivo_texto}</span>
        </div>
    `;

    heroSection.classList.add('hidden');
    introSection.classList.add('hidden');
    casosPanel.classList.add('hidden');
    modal.classList.remove('hidden');
    window.scrollTo(0, 0);
}

// Función para cerrar y aceptar modal
function cerrarModal() {
    modal.classList.add('hidden');

    if (casoActual !== null) {
        if (casoActual >= 1 && casoActual <= 4) {
            abrirPresentacion();
        } else {
            marcarComoVisto(casoActual);
            casoActual = null;
            heroSection.classList.remove('hidden');
            introSection.classList.remove('hidden');
            casosPanel.classList.remove('hidden');
            casosPanel.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        heroSection.classList.remove('hidden');
        introSection.classList.remove('hidden');
        casosPanel.classList.remove('hidden');
        casosPanel.scrollIntoView({ behavior: 'smooth' });
    }
}

function marcarComoVisto(id) {
    estadoCasos[id] = true;
    const card = document.querySelector(`.caso-card[data-caso="${id}"]`);
    if (card) card.classList.add('visto');

    verificarProgreso();
}

// Lógica de Presentación Interactiva
function abrirPresentacion() {
    currentSlideIndex = progresoCasos[casoActual] || 0;
    const slides = casoActual == 1 ? slidesCaso1 : (casoActual == 2 ? slidesCaso2 : (casoActual == 3 ? slidesCaso3 : (casoActual == 4 ? slidesCaso4 : [])));
    slidesContainer.innerHTML = slides.join('');
    modalPresentacion.classList.remove('hidden');
    actualizarSlides();
    setTimeout(() => {
        const activeSlides = document.querySelectorAll('.slide');
        if (activeSlides[currentSlideIndex]) {
            activeSlides[currentSlideIndex].scrollIntoView({ behavior: 'auto', block: 'start' });
        } else {
            window.scrollTo(0, 0);
        }
    }, 100);
}

function actualizarSlides() {
    const slidesHTML = casoActual == 1 ? slidesCaso1 : (casoActual == 2 ? slidesCaso2 : (casoActual == 3 ? slidesCaso3 : (casoActual == 4 ? slidesCaso4 : [])));
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index <= currentSlideIndex);
    });

    // Controles
    btnPrevSlide.classList.toggle('hidden', currentSlideIndex === 0);
    if (currentSlideIndex === slidesHTML.length - 1) {
        btnNextSlide.textContent = staticTexts[currentLanguage].btn_close;
    } else {
        btnNextSlide.textContent = staticTexts[currentLanguage].btn_next;
    }

    // Progreso
    const percent = ((currentSlideIndex + 1) / slidesHTML.length) * 100;
    slideProgress.style.width = `${percent}%`;

    // Guardar progreso y actualizar barra en la tarjeta
    progresoCasos[casoActual] = currentSlideIndex;
    const cardProgressFill = document.getElementById(`card-progress-${casoActual}`);
    if (cardProgressFill) {
        cardProgressFill.style.width = `${percent}%`;
    }
}

function cerrarPresentacion() {
    modalPresentacion.classList.add('hidden');
    marcarComoVisto(casoActual);
    casoActual = null;
    heroSection.classList.remove('hidden');
    introSection.classList.remove('hidden');
    casosPanel.classList.remove('hidden');
    casosPanel.scrollIntoView({ behavior: 'smooth' });
}

window.resolverSimulador = function (opcion, btn) {
    const buttons = document.querySelectorAll('#simulador-1 .mcq-btn');
    // Limpiamos los estados visuales pero no los deshabilitamos
    buttons.forEach(b => {
        b.classList.remove('correct', 'incorrect');
    });

    const feedback = document.getElementById('simulador-feedback');
    feedback.className = 'feedback-box show';

    if (opcion === 'B') {
        btn.classList.add('correct');
        feedback.innerHTML = `<strong>¡Excelente!</strong> Aplicaste correctamente múltiples pasos: "Hablar claro" en privado, promoviste la "Contratación Moderna", fomentaste "Opiniones Diversas" y tomaste "Acción".`;
        feedback.style.borderColor = 'var(--success)';
        feedback.style.color = 'var(--success)';
    } else if (opcion === 'A') {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Contratar para llenar cuotas sin basarse en el mérito es discriminación. Además, avergonzarlos en público destruye la comunicación.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    } else {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Enviar el artículo cubre "Educación", pero cedes al Sesgo de Conformidad permitiendo la discriminación en el presente.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    }
};

window.resolverSimulador2 = function (opcion, btn) {
    const buttons = document.querySelectorAll('#simulador-2 .mcq-btn');
    buttons.forEach(b => {
        b.classList.remove('correct', 'incorrect');
    });

    const feedback = document.getElementById('simulador-feedback-2');
    feedback.className = 'feedback-box show';

    if (opcion === 'B') {
        btn.classList.add('correct');
        feedback.innerHTML = `<strong>¡Correcto!</strong> Enfocarte en la Relación de manera privada es la forma más efectiva del CPR, pues ataca la raíz del problema.`;
        feedback.style.borderColor = 'var(--success)';
        feedback.style.color = 'var(--success)';
    } else if (opcion === 'A') {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Parcialmente correcto.</strong> Confrontar el incidente es un inicio, pero hacerlo en público pone a la defensiva a la persona.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    } else {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Ser un espectador pasivo perpetúa el ciclo de las microagresiones.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    }
};

window.resolverSimulador3 = function (opcion, btn) {
    const buttons = document.querySelectorAll('#simulador-3 .mcq-btn');
    buttons.forEach(b => {
        b.classList.remove('correct', 'incorrect');
    });

    const feedback = document.getElementById('simulador-feedback-3');
    feedback.className = 'feedback-box show';

    if (opcion === 'B') {
        btn.classList.add('correct');
        feedback.innerHTML = `<strong>¡Correcto!</strong> Obligar al grupo a explorar la perspectiva marginada anula la conformidad.`;
        feedback.style.borderColor = 'var(--success)';
        feedback.style.color = 'var(--success)';
    } else if (opcion === 'A') {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Has cedido al Sesgo de Conformidad, arriesgando el capital de la empresa.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    } else {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Actitud perjudicial que refleja sesgo y fomenta un entorno dictatorial.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    }
};

window.resolverSimulador4 = function (opcion, btn) {
    const buttons = document.querySelectorAll('#simulador-4 .mcq-btn');
    buttons.forEach(b => {
        b.classList.remove('correct', 'incorrect');
    });

    const feedback = document.getElementById('simulador-feedback-4');
    feedback.className = 'feedback-box show';

    if (opcion === 'B') {
        btn.classList.add('correct');
        feedback.innerHTML = `<strong>¡Correcto!</strong> Contar historias mostrando vulnerabilidad modela la inclusión.`;
        feedback.style.borderColor = 'var(--success)';
        feedback.style.color = 'var(--success)';
    } else if (opcion === 'A') {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Un manual es útil, pero es estructural, no conductual.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    } else {
        btn.classList.add('incorrect');
        feedback.innerHTML = `<strong>Incorrecto.</strong> Agrava el problema generando victimización adicional.`;
        feedback.style.borderColor = '#d13438';
        feedback.style.color = '#d13438';
    }
};

window.resolverQuiz = function (estado, btn, quizId) {
    const buttons = document.querySelectorAll(`#${quizId} .mcq-btn`);
    buttons.forEach(b => {
        b.disabled = true;
    });

    if (estado === 'correct') {
        btn.classList.add('correct');
    } else {
        btn.classList.add('incorrect');
        // Marcar la correcta
        buttons.forEach(b => {
            if (b.getAttribute('onclick').includes("'correct'")) {
                b.classList.add('correct');
            }
        });
    }
};

// Verificar si todos los casos fueron vistos
function verificarProgreso() {
    const todosVistos = Object.values(estadoCasos).every(status => status === true);
    if (todosVistos) {
        btnConclusion.disabled = false;
    }
}

// Event Listeners
casosCards.forEach(card => {
    card.addEventListener('click', () => {
        const idCaso = card.getAttribute('data-caso');
        abrirModal(idCaso);
    });
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    casoActual = null;
    heroSection.classList.remove('hidden');
    introSection.classList.remove('hidden');
    casosPanel.classList.remove('hidden');
    casosPanel.scrollIntoView({ behavior: 'smooth' });
});

btnAcceptModal.addEventListener('click', cerrarModal);

// Event Listeners Presentación
btnNextSlide.addEventListener('click', () => {
    const slidesHTML = casoActual == 1 ? slidesCaso1 : (casoActual == 2 ? slidesCaso2 : (casoActual == 3 ? slidesCaso3 : (casoActual == 4 ? slidesCaso4 : [])));
    if (currentSlideIndex < slidesHTML.length - 1) {
        currentSlideIndex++;
        actualizarSlides();
        const slides = document.querySelectorAll('.slide');
        if (slides[currentSlideIndex]) {
            slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } else {
        cerrarPresentacion();
    }
});

btnPrevSlide.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        actualizarSlides();
        const slides = document.querySelectorAll('.slide');
        if (slides[currentSlideIndex]) {
            slides[currentSlideIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

btnClosePresentacion.addEventListener('click', cerrarPresentacion);

btnIniciar.addEventListener('click', () => {
    introSection.classList.remove('hidden');
    introSection.scrollIntoView({ behavior: 'smooth' });
    btnIniciar.style.display = 'none';
});

btnContinuar.addEventListener('click', () => {
    casosPanel.classList.remove('hidden');
    casosPanel.scrollIntoView({ behavior: 'smooth' });
    btnContinuar.style.display = 'none';
});

btnConclusion.addEventListener('click', () => {
    conclusionSection.classList.remove('hidden');
    conclusionSection.scrollIntoView({ behavior: 'smooth' });
    btnConclusion.style.display = 'none'; // Ocultar botón después de clic
});

// SCORM Integration
window.addEventListener('load', () => {
    if (typeof scormInitialize === 'function') {
        scormInitialize();
        // Set course to incomplete initially, optional but good practice in SCORM
        scormSetValue("cmi.core.lesson_status", "incomplete");
        scormCommit();
    }
});

const btnFinalizarCurso = document.getElementById('btn-finalizar-curso');
if (btnFinalizarCurso) {
    btnFinalizarCurso.addEventListener('click', () => {
        if (typeof scormSetValue === 'function') {
            scormSetValue("cmi.core.score.raw", "100");
            scormSetValue("cmi.core.lesson_status", "passed");
            scormCommit();
            scormFinish();
        }
        btnFinalizarCurso.disabled = true;
        const msgFinalizar = document.getElementById('msg-finalizar');
        if(msgFinalizar) msgFinalizar.style.display = 'block';
    });
}
