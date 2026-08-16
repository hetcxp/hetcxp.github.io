// Data structure containing the course content
const courseDataES = {
    glossary: [
        { acronym: "MSP", full: "Managed Service Program/Provider", definition: "Un programa que gestiona la fuerza laboral contingente (no permanente) de una empresa, incluyendo búsqueda, incorporación, cumplimiento y facturación, típicamente a través de un proveedor externo." },
        { acronym: "VMS", full: "Vendor Management System", definition: "La plataforma tecnológica central (ej. SAP Fieldglass, Beeline) que centraliza la gestión de proveedores, solicitudes, facturación y seguimiento de cumplimiento para el programa MSP." },
        { acronym: "SOW", full: "Statement of Work", definition: "Un modelo de contrato basado en proyectos donde se gestionan entregables, hitos y presupuestos (no solo horas trabajadas). El gasto SOW representa el 39% de todo el gasto gestionado por MSP en 2025." },
        { acronym: "MSA", full: "Master Services Agreement", definition: "El contrato marco entre la empresa cliente y el MSP que rige la relación general." },
        { acronym: "SA", full: "Supplier Agreement", definition: "El contrato entre el MSP (o cliente) y las agencias de staffing individuales. Generalmente tan complejo como el propio MSA." },
        { acronym: "ASL", full: "Approved Supplier List", definition: "La lista curada de agencias de staffing autorizadas para enviar candidatos dentro de un programa MSP." },
        { acronym: "SWP", full: "Strategic Workforce Planning", definition: "Planificación proactiva de necesidades laborales (ej. anticipar 50 desarrolladores necesarios en 6 meses y decidir si contratar, alquilar freelancers o capacitar personal interno)." },
        { acronym: "QECR", full: "Quality, Efficiency, Cost, Risk", definition: "El marco de cuatro pilares que los clientes usan para medir el éxito de un programa MSP." },
        { acronym: "CVP", full: "Contractor Value Proposition", definition: "Una propuesta de valor dedicada para la fuerza laboral no permanente, ofreciéndoles comunicación, capacitación y participación comparable a los empleados permanentes." },
        { acronym: "RTD", full: "Recruit, Train, Deploy", definition: "Un modelo donde el talento es reclutado, capacitado a medida y luego desplegado al cliente. El costo de capacitación recae en las agencias de staffing." },
        { acronym: "RPO", full: "Recruitment Process Outsourcing", definition: "Externalización del proceso de reclutamiento permanente (contratación directa). Combinado con MSP = Total Talent." },
        { acronym: "TTA/TTM", full: "Total Talent Acquisition / Management", definition: "Gestión holística del talento temporal y permanente bajo una única solución integrada (MSP + RPO)." },
        { acronym: "DE&I", full: "Diversity, Equity & Inclusion", definition: "Estrategias que aseguran representación diversa y trato equitativo en la búsqueda de talento." },
        { acronym: "ESG", full: "Environmental, Social & Governance", definition: "Métricas que integran sostenibilidad, responsabilidad social y estándares de gobernanza en las prácticas comerciales." },
        { acronym: "KPI", full: "Key Performance Indicator", definition: "Métricas cuantificables usadas en revisiones trimestrales para determinar la posición (tier) de un proveedor dentro del programa MSP." },
        { acronym: "SPOC", full: "Single Point of Contact", definition: "La persona de contacto designada por la agencia de staffing que interactúa con el programa MSP." }
    ],

    modules: [
        {
            id: 1,
            title: "Introducción",
            objective: "Bienvenido al curso MSP Global Landscape 2025. Por favor revisa las preguntas clave antes de comenzar.",
            themeColor: "primary", // primary, teal, gold
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod1.jpg",
                    alt: "MSP Global Landscape 2025 – Introducción"
                },
                {
                    type: "text-intro",
                    content: `<p><strong>Audiencia:</strong> Este curso está diseñado para ejecutivos de cuenta de una empresa de staffing que opera tanto como proveedor dentro de ecosistemas MSP de terceros como proveedor de MSP propio. Su objetivo es proporcionarles una comprensión integral del mercado global, permitiéndoles posicionar sus servicios efectivamente y mantener conversaciones expertas y consultivas con los clientes respondiendo las siguientes preguntas clave, basadas en los siguientes documentos fundamentales:</p>
                              <ul>
                                <li><em>SIA MSP Global Landscape 2025</em></li>
                                <li><em>Estructuras Globales de MSP y Restricciones Legales</em></li>
                                <li><em>Mejores Prácticas para Triunfar en los MSPs</em></li>
                                <li><em>Cómo usan los MSPs la contratación basada en habilidades</em></li>
                              </ul>`
                },
                {
                    type: "accordion",
                    data: [
                        { title: "¿Cuáles son las cifras actuales del mercado MSP y cómo han evolucionado sus modelos operativos globales?", content: "→ Cubierto en los Módulos 2 y 3" },
                        { title: "¿Cómo interactúan los ecosistemas tecnológicos, modelos de financiamiento y restricciones legales?", content: "→ Cubierto en los Módulos 5 y 6" },
                        { title: "¿Por qué la IA y la contratación por habilidades son críticas para mitigar la escasez y rotación de talento?", content: "→ Cubierto en los Módulos 3, 5 y 6" },
                        { title: "¿Qué métricas y mejores prácticas determinan el éxito como proveedor dentro de un MSP de terceros?", content: "→ Cubierto en el Módulo 8" },
                        { title: "¿Cómo podemos estructurar servicios de valor agregado para convertirnos en verdaderos Trusted Advisors?", content: "→ Cubierto en los Módulos 4 y 7" }
                    ]
                },
                {
                    type: "start-course-btn"
                }
            ]
        },
        {
            id: 2,
            title: "El Mercado en Números",
            objective: "Al finalizar, el participante podrá comprender las 6 métricas clave del mercado MSP 2025 y explicar su impacto directo en la estrategia comercial de la empresa.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod2.jpg",
                    alt: "El Mercado en Números – Analítica de Datos"
                },
                {
                    type: "text",
                    content: "<p>El panorama global de la fuerza laboral contingente está experimentando una transformación estructural. Comprender el mercado MSP de hoy requiere analizar cómo las presiones macroeconómicas se cruzan con indicadores operativos.</p><p><strong>Contexto 2025:</strong> La demanda de talento contingente se ha ralentizado en 2025 debido a un entorno macroeconómico adverso. Como resultado, los MSPs enfrentan la doble presión de ofrecer alternativas de bajo costo mientras lanzan nuevos servicios de mayor valor agregado.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Las 6 Métricas de Referencia de 2025</h3><p>Estos seis pilares cuantitativos definen la adopción actual del programa, modelos comerciales y dinámicas de talento. <em>Haz clic en cada tarjeta para explorar lo que representa cada métrica:</em></p>"
                },
                {
                    type: "flashcards",
                    data: [
                        { front: "Adopción de MSP", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>58%</strong><div>de las empresas con más de 1,000 empleados ya usan un MSP externo (vs. ~40% en 2009).</div></div>", color: "#2C4154" },
                        { front: "SOW como motor de crecimiento", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>39%</strong><div>El gasto en proyectos SOW (Statement of Work) representa el 39% de todo el gasto MSP gestionado — el porcentaje más alto registrado hasta la fecha. Para muchos proveedores, el crecimiento en SOW ha compensado el declive en colocaciones temporales.</div></div>", color: "#0A9396" },
                        { front: "Modelo de precios dominante", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>78%</strong><div>de los clientes pagan al MSP una tarifa calculada como un porcentaje del gasto gestionado a través del programa (fee as a % of spend).</div></div>", color: "#F1AD0E" },
                        { front: "Modelo neutral predominante", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>55%</strong><div>del mercado por gasto continúa operando bajo modelos neutrales (vendor-neutral), lo que significa que los MSPs dependen de un ecosistema robusto y motivado de firmas de staffing.</div></div>", color: "#9F0D10" },
                        { front: "Desajuste de Habilidades", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>50%</strong><div>Casi el 50% de los empleadores reportan insatisfacción con sus contrataciones debido a la falta de habilidades adecuadas.</div></div>", color: "#2C4154" },
                        { front: "Total Talent (MSP+RPO)", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>9%</strong><div>Solo el 9% de los clientes tienen servicios MSP y RPO bajo un mismo acuerdo — pero esta tendencia crece rápidamente.</div></div>", color: "#0A9396" }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Conectando Datos a Estrategia: Retención vía Contratación por Habilidades</h3><p>Al analizar estas cifras, el <strong>desajuste de habilidades del 50%</strong> emerge como la métrica más disruptiva. Frente a la rotación persistente y la insatisfacción de los candidatos, los MSPs están integrando estrategias de contratación basadas en habilidades y delegando capacitación dirigida a las agencias de staffing para asegurar talento listo para trabajar desde el primer día, sin inflar los costos operativos.</p>"
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "¿Qué porcentaje de todo el gasto MSP gestionado representan los proyectos SOW?",
                            options: ["22%", "39%", "55%", "78%"],
                            correctIndex: 1,
                            feedback: "¡Correcto! El gasto SOW en 39% es el más alto jamás registrado y ha compensado el declive en colocaciones temporales."
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Evolución y el Desajuste de Habilidades",
            objective: "Al finalizar, el participante podrá describir la evolución del MSP desde 2009 hasta 2025 y explicar las 6 soluciones avanzadas de sourcing aplicadas por el enfoque 'Comprar, Tomar Prestado o Construir'.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod3.jpg",
                    alt: "Evolución de los MSPs de 2009 a 2025"
                },
                {
                    type: "text",
                    content: "<p>La transformación de los MSPs en la última década explica por qué la consolidación básica de proveedores ya no es viable. Los programas de hoy gestionan complejos ecosistemas globales diseñados para cerrar brechas críticas de talento.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Trayectoria Histórica (2009–2025)</h3><p>Rastrea la transición desde la contención táctica local de costos hasta la gestión estratégica global del talento:</p>"
                },
                {
                    type: "timeline",
                    data: [
                        { year: "2009", title: "Era de Consolidación Local", description: "Poco más del 40% de adopción. Los MSPs se usaban principalmente a nivel local para consolidar proveedores, reducir riesgos y aprovechar el poder de compra." },
                        { year: "~2015", title: "Expansión Multinacional", description: "Los programas comienzan a escalar a través de las fronteras. Plataformas VMS como SAP Fieldglass y Beeline emergen como líderes globales, permitiendo la gestión centralizada de fuerzas laborales distribuidas." },
                        { year: "2025", title: "Gestores Estratégicos de Talento Global", description: "58% de adopción. Los MSPs han evolucionado para ofrecer estrategias y soluciones avanzadas de sourcing de talento a escala global. El gasto SOW alcanza el 39% de todo el gasto gestionado." }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. El Cuello de Botella Estructural: Desajuste de Habilidades</h3><p>A medida que los programas se expandían globalmente, las organizaciones encontraron un punto de fricción crítico: la contratación tradicional basada en credenciales no logra seguir el ritmo de la rápida obsolescencia de las habilidades.</p>"
                },
                {
                    type: "two-cols",
                    left: "<p>La brecha entre la demanda y la oferta de talento está creciendo, por lo que depender de vías tradicionales (currículums y credenciales) ya no es suficiente, ya que filtran al talento adaptable y generan contrataciones a corto plazo. Adoptar un enfoque <em>centrado en habilidades</em> es vital para encontrar perfiles 'listos para trabajar' en vías no tradicionales.</p>",
                    right: "<p>El desajuste de habilidades (en roles profesionales, de nicho y operativos) es el mayor desafío en el futuro. <strong>Casi el 50% de los empleadores reportan insatisfacción con sus contrataciones debido a la falta de habilidades adecuadas.</strong></p>"
                },
                {
                    type: "text",
                    content: "<h3>3. Arquitectura de Sourcing: El Marco 'Comprar, Tomar Prestado o Construir'</h3>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_buy_borrow_build.jpg",
                    alt: "Marco de sourcing de talento: Comprar, Tomar Prestado o Construir",
                    caption: "Las tres palancas estratégicas: Comprar (adquirir permanentemente), Prestar (involucrar contingente), Construir (capacitar internamente)",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>Para superar este desajuste, los MSPs maduros despliegan un <strong>enfoque holístico y multicanal</strong>, asegurando talento a través de tres palancas estratégicas: adquirir talento de forma permanente (<em>Buy/Comprar</em>), involucrar experiencia contingente (<em>Borrow/Prestar</em>) o mejorar capacidades internas (<em>Build/Construir</em>).</p><p style='text-align: center; margin-top: 15px; margin-bottom: 20px;'><em>Haz clic en cada marcador en el mapa interactivo a continuación para explorar las 6 soluciones de sourcing:</em></p>"
                },
                {
                    type: "labeled-graphic",
                    data: {
                        markers: [
                            { x: 15, y: 25, label: "Strategic Workforce Planning (SWP)", detail: "<em>Ej: Anticipar la necesidad de 50 desarrolladores para un proyecto en 6 meses y decidir si contratarlos a tiempo completo, alquilar freelancers o capacitar personal interno.</em>" },
                            { x: 50, y: 15, label: "Direct Sourcing", detail: "Contratación directa sin intermediarios tradicionales.<br><br><em>Ej: Usar la marca empleadora de la empresa para atraer y contratar contratistas independientes directamente, evitando los márgenes de las agencias.</em>" },
                            { x: 85, y: 25, label: "Plataformas de Talento y CRM/Pooling", detail: "Sistemas para crear, gestionar y nutrir comunidades de talento proactivamente. Prioriza cultivar talento conocido, como <strong>medallistas de plata</strong> (finalistas anteriores), <strong>alumni</strong> (exempleados) y referidos.<br><br><em>Ej: Mantener una base de datos de exempleados y enviarles boletines regulares para contratarlos rápidamente cuando surge una vacante.</em>" },
                            { x: 15, y: 70, label: "Sourcing/Emparejamiento Inteligente", detail: "Plataformas automatizadas para emparejar candidatos con tareas.<br><br><em>Ej: Usar algoritmos de IA para escanear miles de perfiles y encontrar en segundos al consultor que tiene exactamente las tres certificaciones requeridas para un proyecto.</em>" },
                            { x: 50, y: 80, label: "Plataformas de Inteligencia", detail: "Herramientas para obtener insights de contratación (datos e ideas sobre reclutamiento).<br><br><em>Ej: Consultar analíticas de mercado para descubrir qué ciudad ofrece el talento de TI más abundante y asequible antes de decidir dónde abrir una nueva operación.</em>" },
                            { x: 85, y: 70, label: "Plataformas de Aprendizaje y Evaluaciones", detail: "Para validar o desarrollar talento internamente.<br><br><em>Ej: En lugar de buscar un perfil difícil de encontrar en el mercado, certificar rápidamente a 10 empleados actuales a través de cursos integrados en la plataforma.</em>" }
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "¿Qué significa el enfoque 'Construir' (Build) en la estrategia de talento 'Comprar, Tomar Prestado o Construir'?",
                            options: [
                                "Adquirir una empresa externa de staffing",
                                "Desarrollar talento interno vía formación",
                                "Construir una nueva plataforma VMS propia",
                                "Construir oficinas físicas de reclutamiento"
                            ],
                            correctIndex: 1,
                            feedback: "¡Correcto! 'Construir' se refiere a validar o desarrollar talento internamente, como certificar rápidamente a los empleados actuales mediante cursos integrados."
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Transición a Trusted Advisors",
            objective: "Al finalizar, el participante podrá explicar el marco QECR con sus subcomponentes y listar las 6 soluciones sofisticadas que diferencian a un Trusted Advisor de un administrador básico.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod4.jpg",
                    alt: "Transición a Trusted Advisors"
                },
                {
                    type: "text",
                    content: "<p>La maduración del mercado ha cambiado las expectativas de los compradores. La entrega operativa básica se ha vuelto lo mínimo indispensable, obligando a los proveedores a redefinir cómo generan valor.</p>"
                },
                {
                    type: "text",
                    content: `<h3>1. La Línea Base: Expectativas Operativas vs. Demandas Estratégicas</h3>`
                },
                {
                    type: "two-cols",
                    left: `<div style="background-color: var(--color-bg-light); padding: 25px; border-radius: var(--radius-md); border-top: 4px solid var(--color-primary); height: 100%;">
                                <h4 style="margin-bottom: 10px;">Lo Esperado</h4>
                                <p>Los clientes ya dan por sentado el cumplimiento, el ahorro de costos y la relación calidad-precio.</p>
                           </div>`,
                    right: `<div style="background-color: var(--color-bg-blue-light); padding: 25px; border-radius: var(--radius-md); border-top: 4px solid var(--color-accent-teal); height: 100%;">
                                <h4 style="color: var(--color-accent-teal); margin-bottom: 10px;">Lo Nuevo</h4>
                                <p>Ahora exigen que el MSP ofrezca soluciones de fuerza laboral sofisticadas que ayuden en la innovación organizacional y transformación del negocio.</p>
                            </div>`
                },
                {
                    type: "text",
                    content: `<h3>2. La Higiene Fundacional: El Marco QECR</h3>`
                },
                {
                    type: "inline-image",
                    src: "img/ctx_qecr_pillars.jpg",
                    alt: "Los cuatro pilares QECR: Calidad, Eficiencia, Costo, Riesgo",
                    caption: "El Marco QECR: cuatro pilares que miden el rendimiento del programa MSP",
                    position: "center"
                },
                {
                    type: "text",
                    content: `<p>Antes de avanzar a servicios consultivos, un MSP debe ejecutar impecablemente sus responsabilidades centrales. El rendimiento se mide a través de los cuatro pilares del <strong>Marco QECR</strong>. <em>Haz clic en cada tarjeta para explorar:</em></p>`
                },
                {
                    type: "flashcards",
                    data: [
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>Q</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #2C4154; margin-bottom: 8px;'>Quality (Calidad)</h4><ul style='padding-left: 18px; font-size: 0.88rem; line-height: 1.4;'><li>Calidad del <strong>talento entregado</strong></li><li>Calidad del <strong>servicio de proveedores</strong></li><li><strong>Eficiencia operativa</strong> del programa</li></ul></div>",
                            color: "#2C4154"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>E</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #0A9396; margin-bottom: 8px;'>Efficiency (Eficiencia)</h4><ul style='padding-left: 18px; font-size: 0.88rem; line-height: 1.4;'><li>Velocidad en <strong>tiempos de envío</strong></li><li>Velocidad en <strong>onboarding/offboarding</strong></li><li>Velocidad en <strong>procesos financieros</strong></li><li>Velocidad en <strong>facturación</strong></li></ul></div>",
                            color: "#0A9396"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>C</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #d99b00; margin-bottom: 8px;'>Cost (Costo)</h4><p style='font-size: 0.84rem; margin-bottom: 6px;'><strong>Ahorro total</strong>, no solo tarifas:</p><ul style='padding-left: 18px; font-size: 0.84rem; line-height: 1.35;'><li>Optimizar <strong>herramientas y software</strong></li><li>Optimizar <strong>marketing del programa</strong></li><li>Optimizar <strong>gestión de datos</strong></li><li><strong>Reducción de riesgos no contenidos</strong></li></ul></div>",
                            color: "#F1AD0E"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>R</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #9F0D10; margin-bottom: 8px;'>Risk (Riesgo)</h4><p style='font-size: 0.84rem; margin-bottom: 6px;'><strong>Prevención activa de contingencias:</strong></p><ul style='padding-left: 18px; font-size: 0.84rem; line-height: 1.35;'><li>Evitar <strong>reclasificación laboral</strong></li><li>Prevenir <strong>fallas en sistemas</strong></li><li>Proteger <strong>vulnerabilidad de datos/IP</strong></li><li>Evitar <strong>multas por incumplimiento</strong></li></ul></div>",
                            color: "#9F0D10"
                        }
                    ]
                },
                {
                    type: "text",
                    content: `<div style="background-color: var(--color-primary); color: white; padding: 30px; border-radius: var(--radius-md); text-align: center; margin-top: 40px; margin-bottom: 30px;">
                                <h4 style="color: white; margin-bottom: 10px;">El Objetivo: Trusted Advisor</h4>
                                <p>Al entregar capacidades consultivas de alto impacto, el MSP deja de ser un simple administrador para convertirse en un socio de negocios indispensable, diferenciándose claramente de la gestión interna y la competencia.</p>
                              </div>`
                },
                {
                    type: "text",
                    content: "<h3>3. Seis Soluciones Sofisticadas en Acción</h3><p>Estos servicios de valor agregado impactan directamente la estrategia del cliente, la sostenibilidad del talento y la rentabilidad:</p>"
                },
                {
                    type: "process",
                    data: [
                        {
                            number: 1,
                            title: "Iniciativas ESG y DE&I",
                            content: "Integrar métricas ambientales, sociales y de gobernanza, así como estrategias de diversidad, equidad e inclusión en la contratación de talento externo.",
                            example: "Exigir a los proveedores de talento demostrar prácticas sostenibles y asegurar que al menos el 30% de los candidatos presentados provengan de grupos subrepresentados."
                        },
                        {
                            number: 2,
                            title: "Consultoría y Asesoría de Talento",
                            content: "Consejo experto enfocado en contratar con base en capacidades reales (<em>skills-first</em>) en lugar de roles o credenciales tradicionales, reduciendo la deserción. <strong>Estadísticamente, el 75% de las empresas usan evaluaciones de rol este año. Más importante aún, la satisfacción del empleador sube del 73% (con contratación tradicional) al 82% bajo el modelo skills-first.</strong>",
                            example: "En lugar de buscar un 'Project Manager senior', aconsejar al cliente contratar a alguien que tenga las habilidades específicas de 'migración a la nube y metodología ágil', sin importar su título previo."
                        },
                        {
                            number: 3,
                            title: "Analítica de Datos Avanzada",
                            content: "Uso de datos avanzados para tomar decisiones informadas sobre la fuerza laboral.",
                            example: "Analizar datos históricos para predecir picos en renuncias de contratistas en ciertos meses y activar planes de retención preventivos."
                        },
                        {
                            number: 4,
                            title: "Tail Spend Management",
                            content: "Control y gestión inteligente del gasto de bajo valor que está fragmentado o 'rebelde'.",
                            example: "Consolidar todas las contrataciones dispersas y no reguladas de consultores independientes en un solo canal gestionado por el MSP, logrando ahorros inmediatos y reduciendo riesgos."
                        },
                        {
                            number: 5,
                            title: "Recruit, Train, Deploy (RTD)",
                            content: "Esquemas dirigidos a reclutar talento, capacitarlos a medida y posteriormente integrarlos al cliente. <strong>En este modelo, la ejecución y costo de capacitación recaen en las agencias de staffing, representando un beneficio operativo neto para el programa MSP.</strong>",
                            example: "Reclutar recién graduados sin experiencia, capacitarlos intensivamente en un software específico del cliente por dos meses, y luego asignarlos a los proyectos de la empresa."
                        },
                        {
                            number: 6,
                            title: "Contractor Value Proposition (CVP)",
                            content: "Crear una propuesta de valor específica para la fuerza laboral no permanente, ofreciéndoles condiciones de comunicación, capacitación e interacción al nivel de un empleado permanente.",
                            example: "Otorgar a freelancers acceso a las plataformas de capacitación internas de la empresa e involucrarlos en comunicaciones y eventos corporativos para asegurar su lealtad."
                        }
                    ]
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "Bajo el modelo de contratación skills-first, ¿a qué porcentaje sube la satisfacción del empleador (comparado con el 73% con contratación tradicional)?",
                            options: ["78%", "82%", "88%", "91%"],
                            correctIndex: 1,
                            feedback: "¡Correcto! La satisfacción sube del 73% al 82%. Además, el 75% de las empresas ya usan evaluaciones de rol este año."
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Ecosistemas Tecnológicos e IA",
            objective: "Al finalizar, el participante podrá diferenciar las 5 subcategorías de IA aplicadas al MSP, explicar la alerta regulatoria e identificar las funcionalidades clave del ecosistema VMS.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod5.jpg",
                    alt: "Ecosistemas Tecnológicos e IA"
                },
                {
                    type: "text",
                    content: "<p>Ejecutar estrategias MSP avanzadas requiere un stack tecnológico integrado. Esta arquitectura empareja un robusto <strong>núcleo transaccional (el VMS)</strong> con una <strong>capa cognitiva (Inteligencia Artificial)</strong> de rápida evolución.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. La Capa Cognitiva: 5 Modelos de IA en MSP</h3>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_ai_layers.jpg",
                    alt: "Las 5 capas de IA en la tecnología MSP",
                    caption: "Desde Machine Learning hasta IA Agéntica: las cinco capas cognitivas impulsando los programas MSP modernos",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>La Inteligencia Artificial está pasando de la automatización de tareas basada en reglas a la orquestación de decisiones semi-autónoma. <em>Haz clic en cada pestaña a continuación para explorar las categorías de IA y sus aplicaciones específicas en MSP:</em></p>"
                },
                {
                    type: "tabs",
                    data: [
                        { label: "Machine Learning", content: "<p><strong>Analiza datos y encuentra patrones para predecir el éxito.</strong></p><p><em>Ej: Predecir riesgos tempranos de rotación o determinar estadísticamente qué portal de empleo atrae a los mejores candidatos; optimizar la publicación de ofertas de trabajo.</em></p>" },
                        { label: "NLP", content: "<p><strong>'Entiende' y clasifica información humana.</strong></p><p><em>Ej: Analizar el texto libre de un currículum para extraer e indexar habilidades clave, o detectar el tono/sentimiento de un candidato en un chat; programar entrevistas automáticamente.</em></p>" },
                        { label: "Deep Learning", content: "<p><strong>Maneja datos complejos que las redes neuronales aprenden sin programación explícita.</strong></p><p><em>Ej: Reconocimiento de voz en entrevistas en video, análisis de imágenes en documentos de cumplimiento, relaciones no lineales en grandes volúmenes de datos de candidatos.</em></p>" },
                        { label: "IA Generativa", content: "<p><strong>'Crea' contenido nuevo y original basado en patrones.</strong></p><p><em>Ej: Redactar automáticamente descripciones de trabajo atractivas desde cero o escribir correos electrónicos personalizados a los candidatos; ya es una función estándar en la mayoría de las plataformas en 2025.</em></p>" },
                        { label: "IA Agéntica", content: "<p><strong>Sistemas casi autónomos orientados a objetivos — el tema candente de 2025.</strong></p><p><em>Ej: Un agente virtual que busca, filtra perfiles, contacta candidatos, realiza una entrevista preliminar y reporta la lista corta final sin intervención humana. Nota: la mayoría de las implementaciones actuales aún son 'parcialmente agénticas'.</em></p>" }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Humano en el Bucle (Human-in-the-Loop) y Gobernanza Regulatoria</h3><p>Aunque la IA desbloquea una velocidad dramática, los programas sostenibles deben equilibrar la eficiencia automatizada con habilidades de asesoramiento de alto contacto (High-Touch) y estricto cumplimiento legal:</p>"
                },
                {
                    type: "two-cols",
                    left: "<p>Las plataformas deben darle al reclutador 'líneas de visión claras', indicando exactamente dónde, cuándo y cómo interactuar dentro de procesos semi-autónomos para establecer relaciones de alto valor.</p>",
                    right: "<p>Al delegar operaciones a la tecnología, los MSPs enfrentan el nuevo desafío de capacitar intensivamente a su propio personal para que evolucionen de simples administradores operativos a verdaderos <strong>asesores estratégicos</strong> a largo plazo.</p>"
                },
                {
                    type: "alert",
                    alertType: "important",
                    content: "<strong>Alerta regulatoria — relevante para conversaciones con clientes:</strong> La adopción de IA en el reclutamiento conlleva riesgos legales crecientes. En 2024, agencias federales de EE. UU. introdujeron <strong>59 regulaciones relacionadas con IA</strong> (más del doble que en 2023).<br><br>El <strong>Acta de IA de la UE</strong> pone la responsabilidad del mal uso de la IA tanto en el proveedor de software <em>como en el cliente final</em>. Esto significa que los programas MSP que usan IA no auditada o de 'caja negra' exponen legalmente a sus clientes.<br><br>Para los ejecutivos de cuenta, este es un punto de diferenciación: poder demostrar que las herramientas de IA usadas en el programa son auditables y cumplen con los marcos regulatorios actuales."
                },
                {
                    type: "text",
                    content: "<h3>3. El Núcleo de Infraestructura: Arquitectura VMS y Tendencias</h3><p>La capa cognitiva no puede funcionar sin el Sistema de Gestión de Proveedores (VMS) subyacente que ancla el cumplimiento operativo y la visibilidad del gasto. <em>Haz clic en cada tema para explorar:</em></p>"
                },
                {
                    type: "accordion",
                    data: [
                        {
                            title: "La Base Predominante (VMS)",
                            content: "<p>El Vendor Management System sigue siendo el corazón tecnológico del mercado, con <strong>SAP Fieldglass</strong> y <strong>Beeline</strong> como líderes globales.</p>"
                        },
                        {
                            title: "Modelos de Selección y Flexibilidad",
                            content: "<p>En el <strong>79%</strong> de los casos el MSP elige y provee la tecnología. Un significativo <strong>21%</strong> de los clientes prefiere imponer su propia herramienta. Esto obliga a los MSPs a mantener alianzas tecnológicas sólidas para asegurar integraciones limpias.</p>"
                        },
                        {
                            title: "Sistemas Propios y Alternativas Escalables",
                            content: "<p>Además de los VMS comerciales masivos, el reporte identificó al menos <strong>33 otras tecnologías</strong> en uso. Cuando el volumen de contratación de un programa (pequeño/mediano) no justifica el alto costo de una licencia tradicional, los MSPs recurren a dos estrategias:</p><ol><li>Extender las capacidades de herramientas que el cliente ya posee (como sistemas de compras o CRMs como SAP SuccessFactors)</li><li><strong>Apostar fuerte por sistemas propietarios (VMS propio): </strong>El desarrollo de herramientas personalizadas es una clara tendencia de diferenciación: <strong>22 de esas 33</strong> tecnologías alternativas son propiedad exclusiva de MSPs, incluyendo plataformas como <em>3 Story Software, AccelerationVMS, HireGenics VMS, Retinue Bridge VMS</em> y <em>Matrix PRISM</em>.</li></ol>"
                        },
                        {
                            title: "Nuevas Herramientas Periféricas",
                            content: "<p>El ecosistema se complementa conectando el VMS con plataformas especializadas en <strong>direct sourcing</strong>, CRMs para construir <strong>talent pools</strong>, y herramientas de <strong>evaluación o hiring insights</strong>.</p>"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>4. Funcionalidades Clave del Ecosistema VMS</h3><p>Más allá de la consolidación básica de proveedores, las plataformas VMS modernas han expandido sus capacidades para cubrir un amplio conjunto de funciones estratégicas. El siguiente gráfico ilustra la tasa de adopción de estas funcionalidades en la industria.</p>"
                },
                {
                    type: "progress-bars",
                    data: [
                        { label: "Gestión de Proveedores y Facturación", percent: 100, desc: "Centralizando la relación con las agencias, controlando tarifas y unificando la facturación en un solo sistema." },
                        { label: "Gestión de Cumplimiento", percent: 100, desc: "Asegurando y auditando que todos los contratistas cumplan estrictamente con los requisitos legales, laborales y de seguridad." },
                        { label: "Procesamiento de Nómina", percent: 93, desc: "Gestionando los pagos para trabajadores temporales de forma eficiente y auditable." },
                        { label: "Direct Sourcing & Talent Pools", percent: 90, desc: "Creando comunidades de talento curadas directamente por el MSP para proveer candidatos rápidamente sin depender de agencias externas." },
                        { label: "Planificación Estratégica Integrada", percent: 83, desc: "Facilitando métricas que permiten la planificación conjunta de la fuerza laboral permanente y contingente." },
                        { label: "Administración de Proyectos SOW", percent: 83, desc: "Gestionando contratos basados en servicios externalizados o Statements of Work, controlando entregables, hitos y presupuestos." }
                    ]
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "¿Cuántas de las 33 tecnologías alternativas identificadas en el mercado son propiedad exclusiva de los MSPs?",
                            options: ["8", "15", "22", "33"],
                            correctIndex: 2,
                            feedback: "¡Correcto! 22 de las 33 tecnologías alternativas son sistemas propietarios de MSP. Esta es una clara tendencia de diferenciación."
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Financiamiento, Modelos de Entrega y Skills-Based Hiring",
            objective: "Al finalizar, el participante podrá explicar los 3 ejes del modelo de sourcing, la cadena contractual del MSP, los 2 modelos de financiamiento y sus implicaciones geográficas, y la dinámica operativa de la contratación por habilidades.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod6.jpg",
                    alt: "Financiamiento, Modelos de Entrega y Skills-Based Hiring"
                },
                {
                    type: "text",
                    content: "<p>Un programa MSP no es una colección de políticas aisladas; es un sistema operativo integrado. La <strong>gobernanza legal</strong> dicta las <strong>reglas de sourcing</strong>, las cuales determinan la <strong>economía de financiamiento</strong>, y en última instancia habilitan modelos de entrega de alto valor como el <strong>Skills-Based Hiring (Contratación basada en habilidades)</strong>.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Gobernanza Contractual y Arquitectura Legal</h3><p>Toda operación MSP comienza estableciendo la cadena legal de responsabilidad. <em>Haz clic en cada tarjeta para explorar sus componentes centrales:</em></p>"
                },
                {
                    type: "flashcards",
                    data: [
                        {
                            front: "Cadena de Gobernanza",
                            back: "<div><strong style='color: var(--color-primary); font-size: 1.1em;'>[Cliente] ➔ [MSP] ➔ [VMS] ➔ [Staffing Agencies]</strong><p style='margin-top: 10px; font-size: 0.95em;'>Centraliza el flujo operativo y de solicitudes mediante infraestructura tecnológica y gobernanza estandarizada.</p></div>",
                            color: "#2C4154"
                        },
                        {
                            front: "Supplier Agreement",
                            back: "<div><p style='font-size: 0.95em;'>Un marco integral a menudo tan complejo como el propio MSA. Establece reglas del programa, métricas SLA, niveles de proveedores y potencial de asignación comercial.</p></div>",
                            color: "#0A9396"
                        },
                        {
                            front: "Dinámicas Legales Regionales",
                            back: "<div><p style='font-size: 0.92em; margin-bottom: 8px;'><strong>EE.UU./UK:</strong> El MSP típicamente actúa como <em>Principal</em> (pagador directo).</p><p style='font-size: 0.92em;'><strong>Europa (ej. Alemania):</strong> El MSP actúa como <em>Agente</em>, requiriendo contratos directos entre el cliente y la agencia para prevenir riesgos de co-empleo.</p></div>",
                            color: "#F1AD0E"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<p><strong>2. Calibrando Mecánicas de Sourcing y Entrega</strong></p><p>Operando dentro de esta arquitectura legal, el MSP establece las reglas operativas de interacción a través de tres palancas centrales de sourcing. <em>Haz clic en cada pestaña a continuación para explorarlas:</em></p>"
                },
                {
                    type: "tabs",
                    data: [
                        {
                            label: "Competitividad",
                            content: "<p><strong>Grado en el que los proveedores compiten entre sí:</strong></p><p>Rango: <em>Proveedor Único</em> (sole supplier) → <em>Niveles/Tiers</em> (proveedores secundarios reciben posiciones solo si el nivel primario falla) → <em>Licitación Abierta</em> (lanzamiento simultáneo al mercado).</p>"
                        },
                        {
                            label: "Integración del Proveedor",
                            content: "<p><strong>Nivel y ubicación de la gestión de recursos externos:</strong></p><p>Rango: <em>Externalización Total</em> → <em>Soporte Fuera de Sitio (Off-site)</em> → <em>Soporte Dedicado en Sitio (On-site)</em>.</p>"
                        },
                        {
                            label: "Elasticidad de Tarifas",
                            content: "<p><strong>Mecanismos de fijación de precios comerciales y tarifas:</strong></p><ul><li><strong>Fixed Rate Cards:</strong> Tarifas estandarizadas con topes/pisos predeterminados por nivel de rol.</li><li><strong>Rango salarial + Mark-up:</strong> El pago al talento es flexible dentro de una banda, con el margen de la agencia fijado como un porcentaje acordado.</li><li><strong>Max Bill Rates:</strong> Topes duros en el costo total facturado para hacer cumplir la disciplina presupuestaria.</li></ul>"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<p><strong>3. La Ecuación Económica: Modelos de Financiamiento y Márgenes</strong></p>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_funding_map.jpg",
                    alt: "Distribución global del modelo de financiamiento",
                    caption: "Financiado por proveedores (América) vs Financiado por cliente (Europa y APAC) — dominio regional",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>Cómo se estructuran las tarifas impacta directamente en quién financia el programa MSP y en la sostenibilidad de los márgenes de los proveedores:</p>"
                },
                {
                    type: "comparison-table",
                    data: {
                        headers: ["", "Financiado por Cliente (Client-funded)", "Financiado por Proveedor (Supplier-funded)"],
                        rows: [
                            ["Cómo funciona", "El cliente paga al MSP directamente a través de tarifas de gestión (management fees).", "Las agencias de staffing absorben la tarifa del MSP como parte de su margen. <strong>Vital:</strong> Las agencias deben maximizar las eficiencias del ecosistema (facturación automática, sin costo de ventas) para compensar las deducciones."],
                            ["Fortaleza", "Mejor adopción de proveedores y cumplimiento; menor inflación general de mark-ups.", "Percepción de 'costo cero' para el cliente desde el primer día; alta aceptación inicial."],
                            ["Riesgo", "Requiere justificación de presupuesto interno por parte del cliente; más difícil de implementar en regiones de bajo volumen.", "Resistencia de los proveedores y compresión de márgenes si el volumen es insuficiente."],
                            ["Región dominante", "<strong>Europa y APAC</strong> (márgenes estatutarios más estrechos restringen la absorción de tarifas)", "<strong>Norteamérica</strong>"]
                        ]
                    }
                },
                {
                    type: "statement",
                    bgColor: "var(--color-primary)",
                    textColor: "white",
                    content: "El <strong>55%</strong> del gasto global MSP opera bajo modelos neutrales (vendor-neutral) — demostrando que la sostenibilidad depende por completo de mantener un ecosistema de proveedores motivado y viable."
                },
                {
                    type: "text",
                    content: "<h3>4. Entrega de Valor Estratégico: Skills-Based Hiring y Total Talent</h3><p>Con la gobernanza, las reglas de sourcing y el financiamiento alineados, el MSP puede resolver el mayor cuello de botella operativo del cliente: <strong>rotación acelerada y escasez aguda de habilidades</strong>.</p><p>Al transicionar desde llenar asientos reactivamente hacia el <strong>Skills-Based Hiring</strong>, el MSP orquesta la creación de valor sin absorber sobrecarga operativa:</p><ul><li><strong>Construcción Delegada de Capacidades:</strong> La ejecución y costo de la mejora de habilidades del candidato son asumidas directamente por las firmas de staffing a cambio de volumen comprometido.</li><li><strong>ROI Tangible para el Cliente:</strong> El talento capacitado conduce a un llenado más rápido de vacantes, ajuste superior al rol, mayores tasas de conversión a empleados directos y reducción de renuncias.</li><li><strong>El Horizonte Total Talent:</strong> Aunque solo el <strong>9%</strong> de los clientes actualmente unifican MSP y RPO bajo un mismo contrato, la entrega madura basada en habilidades sirve como la entrada principal hacia una gestión de <strong>Total Talent Management</strong> integral.</li></ul>"
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "En el modelo 'Financiado por Proveedores', ¿cuál es la recomendación 'vital' para las agencias?",
                            options: [
                                "Negociar márgenes iniciales de rentabilidad más altos",
                                "Maximizar los beneficios del ecosistema centralizado",
                                "Traspasar los costos operativos finales a los candidatos",
                                "Rechazar la participación en modelos de este tipo"
                            ],
                            correctIndex: 1,
                            feedback: "¡Correcto! Las agencias deben compensar la presión de margen aprovechando completamente la infraestructura centralizada del MSP: cero costos de venta, facturación automatizada, cobranzas estandarizadas."
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Implicaciones Estratégicas (Operando como MSP Propio)",
            objective: "Al finalizar, el participante podrá articular las 7 implicaciones estratégicas clave para posicionar a la empresa como un MSP innovador e irremplazable.",
            themeColor: "teal",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod7.jpg",
                    alt: "Implicaciones Estratégicas para MSP Propio"
                },
                {
                    type: "text",
                    content: "<p>Al operar directamente como proveedor MSP, el éxito depende de posicionar el programa como un socio de transformación consultivo en lugar de un servicio básico de bajo costo (commodity).</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Palancas de Posicionamiento Estratégico</h3><p>Domina estos siete principios estratégicos centrales para construir retención de clientes a largo plazo, proteger márgenes comerciales y defenderte de la 'internalización' (in-housing):</p>"
                },
                {
                    type: "gallery",
                    data: [
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="24" x2="14" y2="24"/></svg>', title: "Trusted Advisor: Ya No Es Opcional", description: "Los clientes esperan asesoramiento estratégico, no solo gestión de proveedores. El camino implica construir capacidades en SWP, analítica avanzada y consultoría de talento." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/></svg>', title: "Rompiendo el Ciclo de Rotación", description: "La urgencia del cliente a menudo fuerza la contratación reactiva, lo que genera frustración y alta rotación. Posicionar el 'skills-based hiring' no solo como tendencia, sino como la cura para este ciclo vicioso, es un fuerte argumento de ventas." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', title: "Skills-First Abre Nuevas Puertas", description: "El mercado está migrando de 'Busco un Project Manager' a 'Busco alguien con estas habilidades específicas'. Dominar este lenguaje es clave para ofrecer un ROI sostenible y reducir costos de rotación drásticamente." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', title: "Precio Estándar como Punto de Partida", description: "El modelo de tarifa estándar (78% fee-as-%-of-spend) es el punto de partida esperado. Propuestas que incluyen modelos alternativos (gainshare, outcome-based) pueden ser diferenciadores para clientes más sofisticados." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', title: "Tecnología Propia como Diferenciador", description: "22 de las 33 tecnologías alternativas al VMS estándar son propiedad de los mismos MSP. Tener o poder integrar una solución tech propia te posiciona mejor frente a clientes que no quieren depender de licencias comerciales costosas." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', title: "Riesgo de Internalización (In-housing)", description: "Organizaciones con programas maduros evalúan constantemente internalizar su gestión de fuerza laboral. La innovación continua es la única defensa real contra este riesgo." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', title: "Total Talent Acquisition/Management", description: "Posicionarse para gestionar integralmente talento temporal y directo (MSP + RPO) dará una ventaja competitiva masiva a medida que el mercado madure hacia soluciones holísticas." }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Estrategia Aplicada: Defendiendo el Valor Contra la Internalización</h3><p>Pon el posicionamiento estratégico en práctica cuando enfrentes revisiones de presupuesto o amenazas de 'commoditización':</p>"
                },
                {
                    type: "scenario",
                    data: {
                        situation: "Un cliente potencial te dice: 'Nuestro MSP actual solo maneja facturas y cumplimiento — nada estratégico. Estamos pensando en internalizarlo todo.' ¿Cómo respondes?",
                        options: [
                            "Acordar con el plan de internalización y ofrecer ayuda en la transición.",
                            "Presentar capacidades de Trusted Advisor para mostrar valor estratégico.",
                            "Ofrecer un descuento en los servicios actuales para retener la cuenta."
                        ],
                        correctIndex: 1,
                        feedbacks: [
                            "No es ideal. Acabas de validar su decisión de abandonar el modelo MSP. La innovación continua es la única defensa.",
                            "¡Excelente! Este es exactamente el posicionamiento que demanda el mercado. Demuestras que tu MSP entrega valor estratégico imposible de replicar internamente.",
                            "Peligroso. Competir solo por precio es una carrera hacia el fondo. El documento enfatiza los servicios de valor agregado, no costos más bajos."
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "¿Cuál es la única defensa real contra el riesgo de que los clientes internalicen (in-house) sus programas MSP?",
                            options: ["Precios operativos más bajos en facturación", "Contratos de servicio extendidos multianuales", "Innovación continua de programa tecnológico", "Reportes de cumplimiento más estrictos diarios"],
                            correctIndex: 2,
                            feedback: "¡Correcto! Las organizaciones con programas maduros evalúan constantemente internalizar. Solo la innovación continua previene esto."
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "Playbook Operativo (Triunfando como Proveedor)",
            objective: "Al finalizar, el participante podrá aplicar las 26 mejores prácticas operativas para entrar, mantenerse y ser rentable como proveedor dentro de un MSP de terceros.",
            themeColor: "gold",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod8.jpg",
                    alt: "Playbook Operativo para Proveedores"
                },
                {
                    type: "text",
                    content: "<p>Con el <strong>55%</strong> del mercado operando bajo modelos neutrales (vendor-neutral), el éxito del MSP depende de mantener un ecosistema de agencias próspero. Cuando nuestra empresa actúa como proveedor de staffing dentro de un MSP de terceros, seguir este playbook de ciclo de vida estructurado es crítico para asegurar un alto rendimiento, elevación de nivel (tier) y rentabilidad sostenible de la cuenta.</p>"
                },
                {
                    type: "inline-image",
                    src: "img/placeholder_playbook.jpg",
                    alt: "Prompt: Un diagrama abstracto que muestra un playbook operativo de 3 fases para agencias de staffing, representando Entrada, Elevación y Rentabilidad, estilo corporativo moderno",
                    caption: "Visión general del ciclo de vida operativo de 3 fases",
                    position: "center"
                },
                {
                    type: "radial-hub",
                    data: {
                        title: "Playbook Operativo (26 Prácticas Estratégicas)",
                        phases: [
                            {
                                id: "phase1",
                                name: "Fase 1: Entrar en la Lista de Proveedores Aprobados (ASL)",
                                shortName: "Entrada y ASL",
                                badge: "Fase 1: Entrada ASL",
                                color: "#0284c7",
                                items: [
                                    { title: "Mira antes de saltar", content: "Averigua si el programa es financiado por el cliente o el proveedor, el modelo de niveles (tiers) y especialmente qué perfiles de candidatos están luchando por llenar los proveedores actuales." },
                                    { title: "Momento Oportuno", content: "En la fase inicial de un programa MSP, los administradores están inundados con la implementación. Espera a que el programa madure, a menos que tengas certeza absoluta de que puedes resolver una necesidad crítica no satisfecha." },
                                    { title: "Conoce tus límites", content: "No ofrezcas más de lo que puedes entregar; es preferible decir 'no' a una solicitud que dañar tu reputación al fallar en la entrega." },
                                    { title: "Calidad y Especialización (Nicho)", content: "La Calidad del Trabajador es el criterio principal. Posiciónate como especialista en roles difíciles de llenar; esto atrae a los MSPs que luchan por cerrar posiciones complejas." },
                                    { title: "Comienza en otro lugar si es necesario", content: "Si es difícil entrar directamente en un programa específico, intenta calificar como proveedor en otro programa gestionado por el mismo MSP/VMS para construir historial y confianza." },
                                    { title: "Auditoría Preventiva", content: "Los MSPs buscan agencias 100% en cumplimiento. Tener licencias, seguros y personal capacitado para interactuar con sistemas VMS listos antes de aplicar acelera la inclusión." },
                                    { title: "Respeta las políticas del programa", content: "Siempre contacta al MSP/VMS para aplicar. Saltarse al MSP e intentar contactar al gerente de contratación (cliente final) directamente es perjudicial y reduce severamente tus oportunidades futuras." },
                                    { title: "Crecimiento por Rendimiento", content: "Entiende que los MSPs no garantizan volúmenes entrantes. Prepárate para ganar posiciones demostrando resultados sólidos." },
                                    { title: "Prepara Tarifas Netas", content: "No cuentes con esquemas de descuento por volumen. Negocia una tarifa inicial competitiva con reducciones pre-acordadas al alcanzar ciertos volúmenes. Evita presionar por futuros aumentos de precio; los ajustes operan vía tarjetas de tarifas fijas." }
                                ]
                            },
                            {
                                id: "phase2",
                                name: "Fase 2: Mantenerse en la Lista, Elevar Niveles (Tiers) y Expandir",
                                shortName: "Retención y Tiers",
                                badge: "Fase 2: Elevación",
                                color: "#0d9488",
                                items: [
                                    { title: "Analiza Profundamente el SA", content: "No lo leas solo como un documento legal. El Supplier Agreement detalla la estructura del programa, métricas y tu verdadero potencial comercial." },
                                    { title: "¿Quién decide realmente?", content: "Recuerda que aunque operas bajo las reglas del MSP, el cliente hace la decisión final de contratación. El MSP prefiltra candidatos basado en el mejor ajuste (no por proveedor), lo que democratiza oportunidades." },
                                    { title: "El Cumplimiento es lo Mínimo", content: "Los clientes dan por sentado el cumplimiento. Prepárate para auditorías regulares asegurando que seguros, impuestos y entrenamiento estén al día. El contacto directo no autorizado con el cliente es motivo de expulsión." },
                                    { title: "Asegura un Cálculo Justo de KPIs", content: "Las revisiones trimestrales determinan tu lugar en los tiers. Si eres un proveedor de nicho, solicita que tu tasa de cumplimiento se mida solo contra las posiciones de tu especialidad." },
                                    { title: "Responde (y Rápido)", content: "La falta constante de respuesta se interpreta como desinterés y hunde tu reputación. La velocidad y consistencia mejoran tu posicionamiento para proyectos SOW de mayor volumen." },
                                    { title: "Anticipa con un Talent Pool", content: "Desarrolla comunidades con los perfiles más solicitados. Esto reduce drásticamente los tiempos de respuesta y eleva tu ratio de adjudicación en posiciones urgentes." },
                                    { title: "Asume el Onboarding", content: "El tiempo que pierde el candidato preparándose impacta negativamente tu evaluación. Las agencias que asumen el onboarding se convierten en socios indispensables." },
                                    { title: "Pide Feedback Activo", content: "Si tu candidato es rechazado, no asumas la decisión en silencio. Descubre la causa a través del VMS para recalibrar tus futuras búsquedas." },
                                    { title: "Gestión de Cuentas Activa", content: "Mantén reuniones regulares con el MSP. Averigua sobre cambios de presupuesto, nuevos proyectos SOW o perfiles escasos antes de que sucedan." },
                                    { title: "Sé un Socio Consultivo", content: "Sugiere activamente mejoras operativas. Un proveedor que aporta inteligencia al éxito general del programa MSP es más difícil de reemplazar." }
                                ]
                            },
                            {
                                id: "phase3",
                                name: "Fase 3: Proteger Márgenes y Asegurar Rentabilidad a Largo Plazo",
                                shortName: "Márgenes y Tech",
                                badge: "Fase 3: Rentabilidad",
                                color: "#d97706",
                                items: [
                                    { title: "Aísla la Rentabilidad por Cuenta", content: "No uses tu margen corporativo global. Calcula el costo directo e indirecto específico de servir a ese cliente MSP para definir tu margen mínimo viable." },
                                    { title: "Define Roles Estratégicos por Cuenta", content: "Decide el valor real de cada cuenta: ¿generación de ganancias, cobertura de gastos generales, entrada a nuevos mercados o cuenta de referencia de alto impacto?" },
                                    { title: "Capitaliza Beneficios Indirectos", content: "Compensa la presión de tarifas aprovechando lo que el MSP centraliza: cero costos de venta por solicitud, autofacturación automatizada, cobranzas estandarizadas." },
                                    { title: "Filtra Solicitudes y Maximiza el Ratio", content: "Cada candidato rechazado es dinero y esfuerzo perdido. Enfócate exclusivamente en solicitudes donde tengas perfiles listos y validados." },
                                    { title: "Cuestiona la Sobrecalificación", content: "Analiza rigurosamente la descripción del puesto y aclara las verdaderas prioridades. Enviar talento sobrecalificado eleva la tarifa de facturación innecesariamente." },
                                    { title: "Cross-selling y Exploración Lateral", content: "Revisa posiciones fuera de tu enfoque central, buscando roles escasos que ofrezcan un mayor margen de facturación si puedes llenarlos rentablemente." },
                                    { title: "Innovación como Motor de Supervivencia", content: "La recomendación definitiva del mercado. Automatiza tu reclutamiento y back-office. Solo los proveedores que aprovechan tecnologías emergentes pueden mantener operaciones rentables." }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: "scenario",
                    data: {
                        situation: "Has sido invitado a unirte a un programa MSP completamente nuevo que se lanzó el mes pasado. El administrador parece abrumado. ¿Qué haces?",
                        options: [
                            "Aceptar de inmediato para ganar la valiosa ventaja inicial.",
                            "Esperar a la madurez a menos que resuelvas un hueco crítico.",
                            "Contactar al gerente de contratación para apurar el proceso."
                        ],
                        correctIndex: 1,
                        feedbacks: [
                            "Peligroso. Durante la fase inicial, los administradores están inundados. Entrar demasiado pronto puede significar mal soporte, procesos desordenados y esfuerzo desperdiciado.",
                            "¡Exactamente correcto! El Playbook recomienda esperar a la madurez del programa. La excepción es si puedes llenar una brecha crítica que los actuales no pueden.",
                            "Violación grave. Saltarse al MSP y contactar al gerente directamente es perjudicial y reduce severamente oportunidades futuras. Es motivo de exclusión."
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "Si eres un proveedor de nicho, ¿qué deberías solicitar respecto a la medición de tus KPIs?",
                            options: [
                                "Exención total de las revisiones de desempeño estándar trimestrales",
                                "Medición basada solo en las solicitudes de tu especialidad técnica",
                                "Tarifas de facturación superiores para compensar el bajo volumen de envío",
                                "Acceso directo garantizado a clientes finales para obtener retroalimentación continua"
                            ],
                            correctIndex: 1,
                            feedback: "¡Correcto! Los proveedores de nicho deben asegurarse de que sus métricas de rendimiento reflejen su especialidad, no el volumen total del programa."
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "Conclusiones Clave y Evaluación Final",
            objective: "Al finalizar, el participante demostrará un dominio integral de los conceptos del curso respondiendo correctamente al menos 7 de 10 preguntas.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod9.jpg",
                    alt: "Conclusiones Clave y Evaluación Final"
                },
                {
                    type: "text",
                    content: "<p>Felicidades por completar el plan de estudios central del <strong>MSP Global Landscape 2025</strong>. Revisa el resumen unificado a continuación consolidando los cinco pilares fundamentales antes de intentar la evaluación de certificación final.</p>"
                },
                {
                    type: "text",
                    content: "<h3>Resumen Ejecutivo del Curso (TL;DR)</h3>"
                },
                {
                    type: "accordion",
                    data: [
                        { title: "📈 Cifras de mercado y evolución?", content: "58% de adopción en grandes empresas, impulsado por gasto SOW (39%). Evolucionaron de simples consolidadores locales a gestores estratégicos de talento global." },
                        { title: "⚖️ Ecosistemas tech, financiamiento y marcos legales?", content: "El VMS centraliza la operación. El modelo (Financiado por Cliente vs Proveedor) define márgenes, mientras el marco legal requiere estricto cumplimiento para evitar riesgos de co-empleo." },
                        { title: "🤖 IA y skills-based hiring?", content: "La IA acelera el filtrado masivo y el enfoque en habilidades garantiza talento productivo desde el día uno. Juntos rompen el ciclo de rotación y bajan costos operativos." },
                        { title: "🚀 Mejores prácticas para el éxito del proveedor?", content: "El cumplimiento es tu pase de entrada. Para crecer necesitas velocidad, comunidades de talento pre-calificadas, asumir el onboarding y aprovechar el VMS para asegurar tu rentabilidad." },
                        { title: "🧠 ¿Cómo convertirse en un Trusted Advisor?", content: "Entregando estrategia de negocios: analítica de talento, consultoría en skills-first, gestión integral (Total Talent), e innovación constante para volverse irremplazable." }
                    ]
                },
                {
                    type: "exam",
                    data: [
                        {
                            question: "1. ¿Qué porcentaje de todo el gasto MSP gestionado proviene de proyectos SOW?",
                            options: ["22%", "39%", "55%", "78%"],
                            correctIndex: 1,
                            feedback: "SOW al 39% es el nivel más alto jamás registrado."
                        },
                        {
                            question: "2. ¿Quién es responsable legalmente bajo el Acta de IA de la UE si un MSP usa IA no auditada?",
                            options: ["Solo el proveedor que crea el software", "Solo la organización de servicios MSP", "Tanto el proveedor como el cliente final", "Ninguno, la inteligencia artificial no está regulada"],
                            correctIndex: 2,
                            feedback: "El Acta de IA de la UE asigna responsabilidad TANTO al proveedor del software como al cliente final."
                        },
                        {
                            question: "3. En el modelo skills-first, ¿quién asume el costo y ejecución de la capacitación?",
                            options: ["El cliente final", "El proveedor MSP", "Las agencias staffing", "El vendedor del VMS"],
                            correctIndex: 2,
                            feedback: "Las agencias de staffing asumen la ejecución y costo de la capacitación; el MSP capitaliza los beneficios."
                        },
                        {
                            question: "4. Verdadero o Falso: El cumplimiento (compliance) es un diferenciador estratégico en 2025.",
                            options: ["Verdadero", "Falso"],
                            correctIndex: 1,
                            feedback: "Falso. El cumplimiento es lo mínimo indispensable que esperan los clientes — ya no diferencia."
                        },
                        {
                            question: "5. Emparejar: ¿Qué modelo de financiamiento predomina en Norteamérica?",
                            options: ["Financiado por el cliente", "Financiado por proveedores", "Híbrido de riesgo compartido", "Basado en el alto rendimiento"],
                            correctIndex: 1,
                            feedback: "El modelo financiado por proveedores predomina en Norteamérica. Financiado por el cliente es más fuerte en Europa/APAC."
                        },
                        {
                            question: "6. ¿Cuántas tecnologías alternativas al VMS estándar son propietarias (de MSP)?",
                            options: ["8 de 33", "15 de 33", "22 de 33", "33 de 33"],
                            correctIndex: 2,
                            feedback: "22 de 33 son propietarias — una clara tendencia de diferenciación."
                        },
                        {
                            question: "7. ¿Qué significa la 'R' en el marco estratégico QECR?",
                            options: ["Revenue (Ingresos comerciales)", "Retention (Retención personal)", "Risk (Riesgo y contingencia)", "Recruitment (Reclutamiento puro)"],
                            correctIndex: 2,
                            feedback: "Risk (Riesgo): Prevención activa de contingencias incluyendo co-empleo, fallas del sistema, vulnerabilidad de datos e incumplimiento."
                        },
                        {
                            question: "8. ¿Qué porcentaje del mercado por gasto opera bajo modelos neutrales (vendor-neutral)?",
                            options: ["39%", "55%", "78%", "93%"],
                            correctIndex: 1,
                            feedback: "55% — confirmando que el éxito del MSP depende de un ecosistema de firmas de staffing bien gestionado."
                        },
                        {
                            question: "9. ¿Cuál es la única defensa real contra el riesgo de que los clientes internalicen su MSP?",
                            options: ["Precios operativos más bajos en facturación", "Contratos de servicio extendidos multianuales", "Innovación continua de programa tecnológico", "Reportes de cumplimiento más estrictos diarios"],
                            correctIndex: 2,
                            feedback: "Las organizaciones evalúan constantemente la internalización. Solo la innovación continua previene esto."
                        },
                        {
                            question: "10. Bajo el modelo skills-first, ¿la satisfacción del empleador sube del 73% a qué cifra?",
                            options: ["78%", "82%", "88%", "95%"],
                            correctIndex: 1,
                            feedback: "Del 73% (contratación tradicional) al 82% bajo el modelo skills-first. Además, el 75% de las empresas ya usa evaluaciones de rol."
                        }
                    ]
                }
            ]
        }
    ]
};
