const staticTexts = {
    es: {
        page_title: "Curso: Casos de Discriminación",
        hero_title: "Casos de Discriminación",
        hero_subtitle: "Identificando lo invisible para construir equidad",
        btn_start: "Iniciar",
        intro_title: "Introducción",
        intro_p1: "Imagina llegar a tu oficina cada mañana sabiendo que tus ideas, tu talento y tu identidad son valorados exactamente por lo que son.",
        intro_p2: "Lamentablemente, esa no es la realidad para muchos profesionales.",
        intro_p3: "A menudo, decisiones críticas que definen la trayectoria de las personas y de la organización se toman basándose en hilos invisibles: sesgos, suposiciones no cuestionadas y prejuicios ocultos.",
        intro_p4: "Este curso te invita a ponerte en los zapatos de quienes viven estas realidades.",
        intro_p5: "A través de cuatro historias inmersivas —desde contrataciones viciadas hasta microagresiones normalizadas y fallos garrafales en el liderazgo—, desentrañaremos cómo opera la discriminación en el día a día corporativo.",
        intro_obj_title: "Objetivo General:",
        intro_obj_p1: "Emprenderemos un viaje para destapar estos puntos ciegos.",
        intro_obj_p2: "Aprenderás a identificar, analizar y mitigar los sesgos inconscientes, armándote con herramientas tácticas para convertirte en un agente de cambio y construir, en la práctica, un ecosistema laboral genuinamente inclusivo y equitativo.",
        btn_continue: "Continuar al Contenido",
        cases_title: "Contenido: Casos de Estudio",
        case_1_num: "Caso 1",
        case_1_title: "El Proceso de Contratación Seguro",
        case_2_num: "Caso 2",
        case_2_title: "Dinámicas de Equipo y el Cumplido Incomprendido",
        case_3_num: "Caso 3",
        case_3_title: "La Decisión Rápida de Liderazgo",
        case_4_num: "Caso 4",
        case_4_title: "Construyendo el Futuro",
        btn_conclusion: "Ir a la Conclusión",
        concl_title: "El verdadero trabajo apenas comienza",
        concl_p1: "Nuestra travesía termina aquí, pero estas no son solo historias aisladas; son un reflejo de las grietas que rompen la confianza en las organizaciones.",
        concl_li1: "Hemos caminado junto a <strong>Javier</strong>, presenciando la injusticia de un comité cerrado.",
        concl_li2: "Hemos sentido el desconcierto de <strong>Carlos</strong> ante un cumplido que escondía un prejuicio.",
        concl_li3: "Compartimos la frustración de <strong>Elena</strong> al ver ignorada su experiencia.",
        concl_li4: "Observamos con impotencia cómo el talento de <strong>Luis</strong> se escapaba por la puerta de atrás.",
        concl_summary: "A lo largo de este viaje aprendimos que el destino de estas historias se puede reescribir. Nos equipamos con metodologías probadas como los <strong>5 pasos positivos</strong>, el <strong>método CPR</strong> y <strong>estrategias de retención</strong> abrazando la diversidad.",
        concl_final: "Hemos logrado nuestro <strong>objetivo general</strong>: ahora posees la capacidad de ver lo invisible y el coraje de actuar. En tus manos queda el poder de transformar estas lecciones en acción, asegurando que el próximo capítulo en tu entorno laboral sea una historia de genuina inclusión y respeto mutuo.",
        btn_finish: "Finalizar y Guardar Progreso",
        msg_finish: "¡Progreso guardado correctamente! Ya puedes cerrar esta ventana.",
        btn_understood: "Comprendido",
        btn_prev: "Anterior",
        btn_next: "Siguiente",
        btn_close: "Cerrar"
    },
    en: {
        page_title: "Course: Discrimination Cases",
        hero_title: "Discrimination Cases",
        hero_subtitle: "Identifying the invisible to build equity",
        btn_start: "Start",
        intro_title: "Introduction",
        intro_p1: "Imagine arriving at your office every morning knowing that your ideas, your talent, and your identity are valued for exactly what they are.",
        intro_p2: "Unfortunately, that is not the reality for many professionals.",
        intro_p3: "Often, critical decisions that define the trajectory of people and the organization are made based on invisible threads: biases, unquestioned assumptions, and hidden prejudices.",
        intro_p4: "This course invites you to step into the shoes of those who live these realities.",
        intro_p5: "Through four immersive stories—from flawed hiring to normalized microaggressions and monumental leadership failures—we will unravel how discrimination operates in corporate day-to-day life.",
        intro_obj_title: "Overall Objective:",
        intro_obj_p1: "We will embark on a journey to uncover these blind spots.",
        intro_obj_p2: "You will learn to identify, analyze, and mitigate unconscious biases, arming yourself with tactical tools to become an agent of change and build, in practice, a genuinely inclusive and equitable work ecosystem.",
        btn_continue: "Continue to Content",
        cases_title: "Content: Case Studies",
        case_1_num: "Case 1",
        case_1_title: "The Safe Hiring Process",
        case_2_num: "Case 2",
        case_2_title: "Team Dynamics and the Misunderstood Compliment",
        case_3_num: "Case 3",
        case_3_title: "The Quick Leadership Decision",
        case_4_num: "Case 4",
        case_4_title: "Building the Future",
        btn_conclusion: "Go to Conclusion",
        concl_title: "The real work is just beginning",
        concl_p1: "Our journey ends here, but these are not just isolated stories; they are a reflection of the cracks that break trust in organizations.",
        concl_li1: "We have walked alongside <strong>Javier</strong>, witnessing the injustice of a closed committee.",
        concl_li2: "We have felt <strong>Carlos's</strong> bewilderment at a compliment that hid prejudice.",
        concl_li3: "We shared <strong>Elena's</strong> frustration at seeing her experience ignored.",
        concl_li4: "We watched helplessly as <strong>Luis's</strong> talent slipped out the back door.",
        concl_summary: "Throughout this journey we learned that the fate of these stories can be rewritten. We equipped ourselves with proven methodologies such as the <strong>5 positive steps</strong>, the <strong>CPR method</strong>, and <strong>retention strategies</strong> embracing diversity.",
        concl_final: "We have achieved our <strong>overall objective</strong>: you now possess the ability to see the invisible and the courage to act. The power to transform these lessons into action rests in your hands, ensuring that the next chapter in your work environment is a story of genuine inclusion and mutual respect.",
        btn_finish: "Finish and Save Progress",
        msg_finish: "Progress successfully saved! You can now close this window.",
        btn_understood: "Understood",
        btn_prev: "Previous",
        btn_next: "Next",
        btn_close: "Close"
    }
};

const casosDataEN = {
    1: {
        titulo: "Case 1: The Safe Hiring Process",
        escenario: "The story of Javier, a junior recruiter who witnesses how a committee of executives discards highly qualified candidates (due to age, foreign name, and attire) and favors a less prepared candidate just out of affinity.",
        objetivo_label: "Case Objective:",
        objetivo_texto: "Identify main unconscious biases (Racial, Age, Religious/Cultural, Affinity, etc.) and apply the 5 positive steps to eradicate them."
    },
    2: {
        titulo: "Case 2: Team Dynamics and the Misunderstood Compliment",
        escenario: "The story of Carlos, an analyst who receives a dart disguised as a compliment ('I'm almost embarrassed by how good you are') from his leader Maria, based on erroneous assumptions about his ethnic origin in front of the team's silence.",
        objetivo_label: "Key Concepts:",
        objetivo_texto: "Microaggressions, Discrimination by Association and Perception. Application of the CPR Method (Content, Pattern, Relationship)."
    },
    3: {
        titulo: "Case 3: The Quick Leadership Decision",
        escenario: "The story of Elena, a 65-year-old technical expert whose valuable warning about a $5 million investment is ignored by the leadership team due to her age and gender, resulting in a millionaire failure by prioritizing speed and cohesion.",
        objetivo_label: "Objective:",
        objetivo_texto: "Identify conformity, gender, and age biases in group decisions. Understand the importance of listening to divergent voices to avoid hasty judgments."
    },
    4: {
        titulo: "Case 4: Building the Future",
        escenario: "The story of Luis, an employee with a visual impairment who, after reporting harassment in the form of 'harmless jokes', is excluded from a key project by his manager as punishment, leading him to resign.",
        objetivo_label: "Module Objective:",
        objetivo_texto: "Differentiate Harassment from Victimization, and review the 4 key behavioral strategies that every leader must apply to promote inclusion and avoid talent drain."
    }
};

const slidesCaso1EN = [
    `<div class="slide">
        <h3 style="color:var(--primary)">1. The Scenario</h3>
        <p><strong>Immersive Reading:</strong></p>
        <p><em>Meet Javier, a junior recruiter sitting silently in the boardroom.</em></p>
        <p><em>In front of him, a committee of executives—all with a nearly identical profile—has just interviewed three finalists for a managerial position.</em></p>
        <p><em>Javier observed how Candidate A, young and from the same university as the manager, was asked easy questions, assuming his talent just out of affinity.</em></p>
        <p><em>Then he saw how Candidate B, a 55-year-old woman with a brilliant resume, was cornered looking for errors to justify that she "wouldn't have energy".</em></p>
        <p><em>Finally, he heard how they discarded Candidate C for wearing traditional attire and having a foreign name, assuming he "wouldn't fit the culture".</em></p>
        <p><em>Knowing the committee has already unfairly leaned towards Candidate A, Javier feels a knot in his stomach: should he speak up or stay quiet so as not to make his bosses uncomfortable?</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Initial Reflection</strong>
            <p>The fundamental premise is to accept the uncomfortable truth: <strong>we all have biases</strong>. They are formed from our childhood. Accepting this doesn't make you a bad person, but what would you do if you were in the junior recruiter's shoes seeing a multiple injustice being committed?</p>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Analysis of the 9 Biases in the Scenario</h3>
        <p>Click on the cards to reveal how each bias influenced the committee's decision.</p>
        <div class="flip-grid">
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Affinity</div><div class="flip-card-back">The manager loves Candidate A for being from his university.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Attribution</div><div class="flip-card-back">Assuming Candidate A has good work ethic just for sharing a profile.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Beauty</div><div class="flip-card-back">Favoring Candidate A for his physical attractiveness.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Age</div><div class="flip-card-back">Doubting the "energy" of Candidate B for being 55 years old.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Gender</div><div class="flip-card-back">Preference towards male leadership (A) over female (B).</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Confirmation</div><div class="flip-card-back">Trick questions for B and easy ones for A to "confirm" prejudices.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Racial</div><div class="flip-card-back">Initially discarding Candidate C for having a foreign name.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Religious/Cultural</div><div class="flip-card-back">Assuming C won't fit for using traditional cultural attire.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Conformity</div><div class="flip-card-back">Javier stays quiet to agree with the group and be accepted.</div></div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">3. The 5 Positive Steps to Eliminate Biases</h3>
        <p>Explore the 5 structural and behavioral measures (click to expand):</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">1. Modern Hiring <span>+</span></div>
                <div class="list-item-content">Standardize interviews, ask the same questions to everyone, and use a blind rubric, being careful with job ad wording.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">2. Speak Up <span>+</span></div>
                <div class="list-item-content">Foster open dialogue. The junior recruiter should point out what he sees in private to educate managers, not shame them.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">3. Diverse Opinions <span>+</span></div>
                <div class="list-item-content">Consult the decision with a diverse group to nullify the individual biases of the homogeneous committee.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">4. Take Action <span>+</span></div>
                <div class="list-item-content">Ask incisive questions and probe the real motives when you suspect a prejudice influenced a rejection.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">5. Education <span>+</span></div>
                <div class="list-item-content">Research prejudices and introspect to discover in which areas culture clouded judgment.</div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Decision Simulator</h3>
        <p>You are the junior recruiter in that room. You observe biases towards Candidate A and Conformity Bias in the team. You must choose how to proceed:</p>
        <div class="mcq-options" id="simulador-1">
            <button class="mcq-btn" onclick="resolverSimulador('A', this)"><strong>Option A:</strong> You accuse everyone of being discriminators in the middle of the meeting and demand they hire Candidate B.</button>
            <button class="mcq-btn" onclick="resolverSimulador('B', this)"><strong>Option B:</strong> You ask for a pause. In private, you approach the manager, show him the lack of standardization, and suggest inviting leaders from other departments.</button>
            <button class="mcq-btn" onclick="resolverSimulador('C', this)"><strong>Option C:</strong> You accept the decision but anonymously send them an article on Unconscious Biases.</button>
        </div>
        <div id="simulador-feedback" class="feedback-box"></div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evaluate Your Understanding</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. If the team discarded Candidate C's resume upon reading his foreign name before even meeting him, what sub-category operated here?</strong></p>
            <div class="mcq-options" id="quiz-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-1')">A. Conformity Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-1')">B. Name Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-1')">C. Beauty Bias</button>
            </div>
        </div>
        <div>
            <p><strong>2. What bias explains why the manager asked trick questions to the older candidate to justify her rejection?</strong></p>
            <div class="mcq-options" id="quiz-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2')">A. Confirmation Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2')">B. Attribution Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2')">C. Affinity Bias</button>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Summary</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Download PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">The 5 Steps to Avoid Biases</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Modern Hiring</h4><p>Standardized interviews and blind rubrics.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Speak in Private</h4><p>Foster dialogue and point out bias constructively.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Diverse Opinions</h4><p>Heterogeneous groups and multiple perspectives.</p></div></div>
            <div class="info-step"><div class="info-number">4</div><div class="info-content"><h4>Take Action</h4><p>Probe real motives and ask incisive questions.</p></div></div>
            <div class="info-step"><div class="info-number">5</div><div class="info-content"><h4>Education and Reflection</h4><p>Research prejudices and practice self-reflection.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>Congratulations! You have completed Case 1. Close the modal to continue.</em></p>
    </div>`
];

const slidesCaso2EN = [
    `<div class="slide">
        <h3 style="color:var(--primary)">1. The Scenario</h3>
        <p><strong>Immersive Reading:</strong></p>
        <p><em>Meet Carlos, a dedicated analyst in a multinational company.</em></p>
        <p><em>After weeks of hard effort delivering an impeccable project, the team gathers to celebrate.</em></p>
        <p><em>Suddenly, Maria, the team leader, turns to him and in front of everyone throws a dart disguised as a compliment: "Your work is so good I'm almost embarrassed."</em></p>
        <p><em>The comment, loaded with a sarcastic tone and rooted in the erroneous assumption that Carlos belongs to an ethnic minority that "normally doesn't perform like this", leaves the room in an uncomfortable silence.</em></p>
        <p><em>Nobody says anything.</em></p>
        <p><em>Carlos forces a smile, but inside he feels his motivation crumble and distrust towards his leader take root.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Initial Reflection</strong>
            <p>What elements of the case reflect microaggressions and how do you think they affect team dynamics?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Reveal answer</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.9rem;"><strong>Microaggression:</strong> Sarcastic "compliment" based on ethnicity.</p>
                        <p style="margin:0; font-size:0.9rem;"><strong>Expected effect:</strong> Chronic stress, hypervigilance, and breakdown of trust.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Analysis of microaggressions</h3>
        <p>Click on the cards to explore the key concepts of this incident.</p>
        <div class="flip-grid">
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Disc. by Association</div><div class="flip-card-back">Target of comments for being with discriminated members.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Disc. by Perception</div><div class="flip-card-back">Maria assumes Carlos belongs to an "undesired" group.</div></div>
            </div>
            <div class="flip-card" onclick="this.classList.toggle('flipped')">
                <div class="flip-card-inner"><div class="flip-card-front">Bystander Effect</div><div class="flip-card-back">Difficulty in identifying the aggression and reluctance to act in a group.</div></div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">3. CPR Methodology</h3>
        <p>Explore how to address this type of behavior (click to expand):</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">C - Content (Incident) <span>+</span></div>
                <div class="list-item-content">Identify the compliment as a microaggression. Address the single comment.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">P - Pattern <span>+</span></div>
                <div class="list-item-content">Recognize that this behavior is recurrent and systemic.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">R - Relationship <span>+</span></div>
                <div class="list-item-content">Link the incident to discriminatory attitudes and address the damage to trust.</div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Decision Simulator</h3>
        <p>Upon hearing Maria's comment ("I'm almost embarrassed"), you decide to apply the CPR method to confront her. Which approach do you choose?</p>
        <div class="mcq-options" id="simulador-2">
            <button class="mcq-btn" onclick="resolverSimulador2('A', this)"><strong>Option A:</strong> (Content) You tell her in front of everyone: "That comment is inappropriate today."</button>
            <button class="mcq-btn" onclick="resolverSimulador2('B', this)"><strong>Option B:</strong> (Relationship) You meet privately with her and say: "When you make those kinds of comments, you damage the team's trust in you..."</button>
            <button class="mcq-btn" onclick="resolverSimulador2('C', this)"><strong>Option C:</strong> (Pattern) You stay quiet assuming the bystander effect, thinking someone else will say something.</button>
        </div>
        <div id="simulador-feedback-2" class="feedback-box"></div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evaluate Your Understanding</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. What phenomenon occurs when Maria assumes Carlos is from a discriminated group and his colleagues also receive derogatory comments?</strong></p>
            <div class="mcq-options" id="quiz-2-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-1')">A. Systemic microaggression</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-1')">B. Discrimination by association</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-1')">C. Confirmation Bias</button>
            </div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>2. What is the main barrier that explains why colleagues don't intervene immediately?</strong></p>
            <div class="mcq-options" id="quiz-2-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-2')">A. Bystander Effect</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-2')">B. Lack of training</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-2')">C. Chronic stress</button>
            </div>
        </div>
        <div>
            <p><strong>3. What type of discrimination does Maria exercise by treating Carlos unfairly because she believes he belongs to an ethnic group?</strong></p>
            <div class="mcq-options" id="quiz-2-3">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-3')">A. Indirect Discrimination</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-2-3')">B. Discrimination by Perception</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-2-3')">C. Discrimination by Association</button>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Summary</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Download PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Defense against Microaggressions</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Common Types</h4><p>Discrimination by Association, Perception, and Sarcastic Compliments.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Hidden Impact</h4><p>Chronic Stress, Hypervigilance, Loss of Trust.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>CPR Method</h4><p>Content (Incident), Pattern, Relationship.</p></div></div>
            <div class="info-step"><div class="info-number">4</div><div class="info-content"><h4>Barriers</h4><p>Overcome the Bystander Effect.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>Congratulations! You have completed Case 2. Close the modal to continue.</em></p>
    </div>`
];

const slidesCaso3EN = [
    `<div class="slide">
        <h3 style="color:var(--primary)">1. The Scenario</h3>
        <p><strong>Immersive Reading:</strong></p>
        <p><em>Meet Elena, a 65-year-old technical expert with decades of experience in the sector.</em></p>
        <p><em>In a tense leadership meeting, the clock ticks indicating only 24 hours left to approve a critical $5 million investment.</em></p>
        <p><em>The CEO proposes a risky route and the group, anxious to finish, immediately nods.</em></p>
        <p><em>Elena raises her hand and warns with clear data that there is a much safer alternative, but her words float in a vacuum.</em></p>
        <p><em>Younger executives assume that "her ideas are already obsolete" and that, being a woman, "she is too cautious".</em></p>
        <p><em>They decide to ignore her, vote for the leader's idea to avoid conflict, and the following month, the investment turns into a millionaire failure that could have been avoided just by listening to her.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Initial Reflection</strong>
            <p>Have you participated in group decisions where the majority opinion carried weight over the expert opinion?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Reveal answer</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.95rem;">Often pressure for cohesion makes us ignore divergent voices, seriously risking the quality of work and final decisions.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Bias Analysis</h3>
        <p>Reasons why the expert was ignored in the quick decision:</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Conformity Bias <span>+</span></div>
                <div class="list-item-content">The group prefers to follow the leader's line so as not to break cohesion or create friction.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Gender Bias <span>+</span></div>
                <div class="list-item-content">Her experience is underestimated or she is considered "too cautious" because of her gender.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Age Bias <span>+</span></div>
                <div class="list-item-content">It is erroneously assumed that her knowledge is obsolete because she is 65 years old.</div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Learning Guide</h3>
        <p><strong>Case analysis and actions:</strong></p>
        <ul style="margin-left: 2rem; margin-top: 1rem; color: var(--text-secondary);">
            <li style="margin-bottom: 0.5rem;">To nullify group biases, it is imperative to consult diverse opinions before making a final decision.</li>
            <li>Stop hasty judgments by explicitly requesting divergent points of view.</li>
        </ul>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Decision Simulator</h3>
        <p>You are the team leader. Noticing that the 65-year-old expert's opinion was ignored and everyone starts automatically agreeing with you, you have 1 minute to decide your next action. What do you do?</p>
        <div class="mcq-options" id="simulador-3">
            <button class="mcq-btn" onclick="resolverSimulador3('A', this)"><strong>Option A:</strong> You accept the group's unanimous support and proceed with your original idea to save time.</button>
            <button class="mcq-btn" onclick="resolverSimulador3('B', this)"><strong>Option B:</strong> You pause the meeting and explicitly ask two team members to argue in favor of the expert's proposal before voting.</button>
            <button class="mcq-btn" onclick="resolverSimulador3('C', this)"><strong>Option C:</strong> You fire the expert for causing delays in the decision.</button>
        </div>
        <div id="simulador-feedback-3" class="feedback-box"></div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evaluate Your Understanding</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. When an opinion is discarded assuming outdated knowledge because the person is 65 years old, what bias operates?</strong></p>
            <div class="mcq-options" id="quiz-3-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-1')">A. Confirmation Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-1')">B. Age Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-1')">C. Affinity Bias</button>
            </div>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>2. Quickly aligning with the leader ignoring alternatives so as not to break cohesion is known as:</strong></p>
            <div class="mcq-options" id="quiz-3-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-2')">A. Conformity Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-2')">B. Gender Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-2')">C. Bystander Effect</button>
            </div>
        </div>
        <div>
            <p><strong>3. Underestimating technical capacity for being a woman is a clear example of:</strong></p>
            <div class="mcq-options" id="quiz-3-3">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-3')">A. Discrimination by Association</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-3-3')">B. Gender Bias</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-3-3')">C. Discrimination by Perception</button>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Summary</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Download PDF</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Decisions without Biases</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Common Biases</h4><p>Conformity, Age, Gender.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Consequences</h4><p>Hasty judgments and quality losses.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Strategies</h4><p>Consult diverse opinions, request divergent visions, and pause before deciding.</p></div></div>
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>Congratulations! You have completed Case 3. Close the modal to continue.</em></p>
    </div>`
];

const slidesCaso4EN = [
    `<div class="slide">
        <h3 style="color:var(--primary)">1. The Scenario</h3>
        <p><strong>Immersive Reading:</strong></p>
        <p><em>Meet Luis, an employee with a visual impairment.</em></p>
        <p><em>Recently, Luis has begun to receive offensive jokes and insults disguised as "harmless jokes" from his teammates regarding his condition.</em></p>
        <p><em>This is **Harassment**.</em></p>
        <p><em>Exhausted, Luis decides to file a formal complaint with Human Resources.</em></p>
        <p><em>The following week, his manager surprisingly excludes him from the most important project of the year, arguing: "Better you don't participate, we don't want to offend you more or invest resources in adapting the platform for you."</em></p>
        <p><em>Luis, feeling punished for complaining, resigns the next day.</em></p>
        <div class="callout-box" style="margin-top:1rem; padding:1rem;">
            <strong>Initial Reflection</strong>
            <p>Have you noticed that diversity doesn't always translate to inclusion?</p>
            <div class="flip-card" onclick="this.classList.toggle('flipped')" style="height: 150px; width: 100%; max-width: 400px; margin: 1rem auto;">
                <div class="flip-card-inner">
                    <div class="flip-card-front" style="display:flex; align-items:center; justify-content:center; background-color:var(--primary); color:white; border-radius:var(--radius); cursor:pointer;">Reveal concept</div>
                    <div class="flip-card-back" style="display:flex; flex-direction:column; justify-content:center; padding:1rem; background-color:var(--bg-main); border:1px solid var(--border-color); border-radius:var(--radius);">
                        <p style="margin:0; font-size:0.95rem;">Diversity is inviting someone to the party; inclusion is asking them to dance. Hiring diversity without fostering inclusion causes talent drain.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">2. Conceptual Analysis</h3>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Harassment <span>+</span></div>
                <div class="list-item-content">Behaviors directed to directly intimidate or offend someone because of their characteristics.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">Victimization <span>+</span></div>
                <div class="list-item-content">Retaliation or unfair treatment towards someone *because they dared to report* discrimination.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">The Hidden Impact <span>+</span></div>
                <div class="list-item-content">Both actions generate distrust, chronic stress, and high talent turnover.</div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">3. Behavioral Strategies</h3>
        <p>Leaders modeling inclusion:</p>
        <div class="interactive-list">
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">1. Tell personal stories <span>+</span></div>
                <div class="list-item-content">Openly sharing past mistakes creates an environment of psychological safety.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">2. Examine thought processes <span>+</span></div>
                <div class="list-item-content">Pause before assigning projects to question biases and retaliation.</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">3. Effort to learn <span>+</span></div>
                <div class="list-item-content">Educate oneself about reasonable accommodations, without seeing it as an "expense".</div>
            </div>
            <div class="list-item" onclick="this.classList.toggle('open')">
                <div class="list-item-title">4. Seek constant feedback <span>+</span></div>
                <div class="list-item-content">Create anonymous channels to report harassment without fear.</div>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">4. Decision Simulator</h3>
        <p>You hear about Luis's resignation due to harassment and victimization. What strategy do you apply first to repair the culture?</p>
        <div class="mcq-options" id="simulador-4">
            <button class="mcq-btn" onclick="resolverSimulador4('A', this)"><strong>Option A:</strong> You draft a new code of conduct manual and send it by email.</button>
            <button class="mcq-btn" onclick="resolverSimulador4('B', this)"><strong>Option B:</strong> You organize a meeting sharing a past mistake about inclusion and open a safe channel.</button>
            <button class="mcq-btn" onclick="resolverSimulador4('C', this)"><strong>Option C:</strong> You look for Luis and threaten him so he doesn't post his resignation on social media.</button>
        </div>
        <div id="simulador-feedback-4" class="feedback-box"></div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">5. Evaluate Your Understanding</h3>
        <div style="margin-bottom: 1.5rem;">
            <p><strong>1. Recurrent offensive jokes about a condition constitute:</strong></p>
            <div class="mcq-options" id="quiz-4-1">
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-1')">A. Indirect Discrimination</button>
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-4-1')">B. Harassment</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-1')">C. Systemic microaggression</button>
            </div>
        </div>
        <div>
            <p><strong>2. Exclusion from the project as punishment for having filed a complaint with HR is:</strong></p>
            <div class="mcq-options" id="quiz-4-2">
                <button class="mcq-btn" onclick="resolverQuiz('correct', this, 'quiz-4-2')">A. Victimization</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-2')">B. Bystander Effect</button>
                <button class="mcq-btn" onclick="resolverQuiz('incorrect', this, 'quiz-4-2')">C. Confirmation Bias</button>
            </div>
        </div>
    </div>`,
    `<div class="slide">
        <h3 style="color:var(--primary)">6. Summary</h3>
        <div style="text-align: right; margin-bottom: 1rem;">
            <button class="btn-light" onclick="window.print()" style="padding: 0.5rem 1rem; font-size: 0.9rem;">🖨️ Download PDF Certificate</button>
        </div>
        <div class="infografia-container">
            <h3 class="info-title">Inclusion Strategies</h3>
            <div class="info-step"><div class="info-number">1</div><div class="info-content"><h4>Key Concepts</h4><p>Harassment, Victimization, Inclusion vs Diversity.</p></div></div>
            <div class="info-step"><div class="info-number">2</div><div class="info-content"><h4>Hidden Impact</h4><p>Chronic stress, High turnover.</p></div></div>
            <div class="info-step"><div class="info-number">3</div><div class="info-content"><h4>Leader's Actions</h4><p>Tell stories, examine processes, educate oneself, seek feedback.</p></div></div>
        </div>
        <div style="margin-top: 1rem; background-color: var(--bg-main); padding: 1rem; border-radius: var(--radius); border-left: 4px solid var(--primary);">
            <strong>Weekly Commitment:</strong> Write down a behavioral action and make it happen this week to foster inclusion in your team.
        </div>
        <p style="margin-top: 1.5rem; text-align: center;"><em>Congratulations! You have completed Case 4. Close the modal to finish the unit.</em></p>
    </div>`
];
