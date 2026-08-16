// Data structure containing the course content
const courseDataEN = {
    glossary: [
        { acronym: "MSP", full: "Managed Service Program/Provider", definition: "A program that manages a company's contingent (non-permanent) workforce — including sourcing, onboarding, compliance, and billing — typically through a third-party provider." },
        { acronym: "VMS", full: "Vendor Management System", definition: "The core technology platform (e.g., SAP Fieldglass, Beeline) that centralizes supplier management, requisitions, billing, and compliance tracking for the MSP program." },
        { acronym: "SOW", full: "Statement of Work", definition: "A project-based contract model where deliverables, milestones, and budgets are managed (not just hours worked). SOW spend represents 39% of all managed MSP spend in 2025." },
        { acronym: "MSA", full: "Master Services Agreement", definition: "The framework contract between the client company and the MSP that governs the overall relationship." },
        { acronym: "SA", full: "Supplier Agreement", definition: "The contract between the MSP (or client) and individual staffing agencies. Usually as complex as the MSA itself." },
        { acronym: "ASL", full: "Approved Supplier List", definition: "The curated list of staffing agencies authorized to submit candidates within an MSP program." },
        { acronym: "SWP", full: "Strategic Workforce Planning", definition: "Proactive planning of workforce needs (e.g., anticipating 50 developers needed in 6 months and deciding to hire, rent freelancers, or train internal staff)." },
        { acronym: "QECR", full: "Quality, Efficiency, Cost, Risk", definition: "The four-pillar framework clients use to measure the success of an MSP program." },
        { acronym: "CVP", full: "Contractor Value Proposition", definition: "A dedicated value proposition for the non-permanent workforce, offering them communication, training, and engagement comparable to permanent employees." },
        { acronym: "RTD", full: "Recruit, Train, Deploy", definition: "A model where talent is recruited, custom-trained, and then deployed to the client. Training cost falls on staffing agencies." },
        { acronym: "RPO", full: "Recruitment Process Outsourcing", definition: "Outsourcing of the permanent (direct-hire) recruitment process. Combined with MSP = Total Talent." },
        { acronym: "TTA/TTM", full: "Total Talent Acquisition / Management", definition: "Holistic management of both temporary and permanent talent under a single integrated solution (MSP + RPO)." },
        { acronym: "DE&I", full: "Diversity, Equity & Inclusion", definition: "Strategies ensuring diverse representation and equitable treatment in talent sourcing." },
        { acronym: "ESG", full: "Environmental, Social & Governance", definition: "Metrics integrating sustainability, social responsibility, and governance standards into business practices." },
        { acronym: "KPI", full: "Key Performance Indicator", definition: "Quantifiable metrics used in quarterly reviews to determine a supplier's tier position within the MSP program." },
        { acronym: "SPOC", full: "Single Point of Contact", definition: "The designated contact person from the staffing agency who interfaces with the MSP program." }
    ],

    modules: [
        {
            id: 1,
            title: "Introduction",
            objective: "Welcome to the MSP Global Landscape 2025 course. Please review the key questions before starting.",
            themeColor: "primary", // primary, teal, gold
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod1.jpg",
                    alt: "MSP Global Landscape 2025 – Introduction"
                },
                {
                    type: "text-intro",
                    content: `<p><strong>Audience:</strong> This course is designed for account executives of a staffing company that operates both as a supplier within third-party MSP ecosystems and as an MSP provider. It aims to provide them with a comprehensive understanding of the global market, enabling them to position their services effectively and hold knowledgeable and consultative conversations with clients by answering the following key questions, based on the following fundamental documents:</p>
                              <ul>
                                <li><em>SIA MSP Global Landscape 2025</em></li>
                                <li><em>Global MSP Structures & Legal Restrictions</em></li>
                                <li><em>Best Practices in Succeeding with MSPs</em></li>
                                <li><em>How MSPs are using skills-based hiring</em></li>
                              </ul>`
                },
                {
                    type: "accordion",
                    data: [
                        { title: "What are the current figures of the MSP market and how have its global operating models evolved?", content: "→ Covered in Modules 2 & 3" },
                        { title: "How do the technological ecosystems, funding models, and legal restrictions interact?", content: "→ Covered in Modules 5 & 6" },
                        { title: "Why are AI and skills-based hiring critical to mitigating talent shortage and turnover?", content: "→ Covered in Modules 3, 5 & 6" },
                        { title: "What metrics and best practices determine success as a supplier within a third-party MSP?", content: "→ Covered in Module 8" },
                        { title: "How can we structure value-added services to become true Trusted Advisors?", content: "→ Covered in Modules 4 & 7" }
                    ]
                },
                {
                    type: "start-course-btn"
                }
            ]
        },
        {
            id: 2,
            title: "The Market in Numbers",
            objective: "Upon completion, the participant will be able to understand the 6 key metrics of the 2025 MSP market and explain their direct impact on the company's business strategy.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod2.jpg",
                    alt: "The Market in Numbers – Data Analytics"
                },
                {
                    type: "text",
                    content: "<p>The global contingent workforce landscape is undergoing a structural transformation. Understanding today's MSP market requires analyzing how macroeconomic pressures intersect with operational indicators.</p><p><strong>2025 Context:</strong> Demand for contingent talent has slowed down in 2025 due to an adverse macroeconomic environment. As a result, MSPs face the dual pressure of offering low-cost alternatives while launching new, higher value-added services.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. The 6 Benchmark Metrics of 2025</h3><p>These six quantitative pillars define current program adoption, commercial models, and talent dynamics. <em>Click on each card to explore what each metric represents:</em></p>"
                },
                {
                    type: "flashcards",
                    data: [
                        { front: "MSP Adoption", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>58%</strong><div>of companies with more than 1,000 employees already use an external MSP (vs. ~40% in 2009).</div></div>", color: "#60A5FA" },
                        { front: "SOW as a growth engine", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>39%</strong><div>Spend on SOW (Statement of Work) projects represents 39% of all managed MSP spend — the highest percentage recorded to date. For many suppliers, growth in SOW has offset the decline in temporary placements.</div></div>", color: "#2DD4BF" },
                        { front: "Dominant pricing model", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>78%</strong><div>of clients pay the MSP a fee calculated as a percentage of the spend managed through the program (fee as a % of spend).</div></div>", color: "#FBBF24" },
                        { front: "Predominant vendor-neutral model", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>55%</strong><div>of the market by spend continues to operate under vendor-neutral models, meaning MSPs depend on a robust and motivated ecosystem of staffing firms.</div></div>", color: "#F87171" },
                        { front: "Skills Mismatch", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>50%</strong><div>Almost 50% of employers report dissatisfaction with their hires due to a lack of adequate skills.</div></div>", color: "#60A5FA" },
                        { front: "Total Talent (MSP+RPO)", back: "<div style='display: flex; flex-direction: column; text-align: center; gap: 10px;'><strong style='font-size: 1.5em;'>9%</strong><div>Only 9% of clients have both MSP and RPO services under a single agreement — but the pipeline is growing rapidly.</div></div>", color: "#2DD4BF" }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Connecting Data to Strategy: Retention via Skills-Based Hiring</h3><p>When analyzing these figures, the <strong>50% skills mismatch</strong> emerges as the most disruptive metric. Faced with persistent turnover and candidate dissatisfaction, MSPs are integrating skills-based hiring strategies and delegating targeted training to staffing agencies to secure job-ready talent from day one, without inflating operational costs.</p>"
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "What percentage of all managed MSP spend is represented by SOW projects?",
                            options: ["22%", "39%", "55%", "78%"],
                            correctIndex: 1,
                            feedback: "Correct! SOW spend at 39% is the highest ever recorded and has offset the decline in temporary placements for many suppliers."
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Evolution & The Skills Mismatch",
            objective: "Upon completion, the participant will be able to describe the evolution of the MSP from 2009 to 2025 and explain the 6 advanced sourcing solutions applied by the 'Buy, Borrow, or Build' approach.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod3.jpg",
                    alt: "Evolution of MSPs from 2009 to 2025"
                },
                {
                    type: "text",
                    content: "<p>The transformation of MSPs over the past decade explains why basic vendor consolidation is no longer viable. Today's programs manage complex global ecosystems designed to bridge critical talent gaps.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Historical Trajectory (2009–2025)</h3><p>Trace the transition from tactical local cost containment to strategic enterprise talent management:</p>"
                },
                {
                    type: "timeline",
                    data: [
                        { year: "2009", title: "Local Consolidation Era", description: "Just over 40% adoption. MSPs were mainly used locally to consolidate suppliers, reduce risks, and leverage purchasing power." },
                        { year: "~2015", title: "Multi-Country Expansion", description: "Programs begin scaling across borders. VMS platforms like SAP Fieldglass and Beeline emerge as global leaders, enabling centralized management of distributed workforces." },
                        { year: "2025", title: "Strategic Global Talent Managers", description: "58% adoption. MSPs have evolved to offer advanced talent sourcing strategies and solutions on a global scale. SOW spend reaches 39% of all managed spend." }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. The Structural Bottleneck: Skills Mismatch</h3><p>As programs expanded globally, organizations encountered a critical friction point: traditional credential-based hiring fails to keep pace with rapid skill obsolescence.</p>"
                },
                {
                    type: "two-cols",
                    left: "<p>The gap between talent demand and supply is growing, so relying on traditional avenues (resumes and credentials) is no longer enough, as they filter out adaptable talent and generate short-term hires. Adopting a <em>skills-first</em> approach is vital to finding 'job-ready' profiles in non-traditional avenues.</p>",
                    right: "<p>The mismatch of skills (in professional, niche, and operational roles) is the biggest challenge going forward. <strong>Almost 50% of employers report dissatisfaction with their hires due to a lack of adequate skills.</strong></p>"
                },
                {
                    type: "text",
                    content: "<h3>3. Sourcing Architecture: The 'Buy, Borrow, or Build' Framework</h3>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_buy_borrow_build.jpg",
                    alt: "Buy, Borrow, or Build talent sourcing framework",
                    caption: "The three strategic levers: Buy (acquire permanently), Borrow (engage contingent), Build (upskill internally)",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>To overcome this mismatch, mature MSPs deploy a <strong>holistic and multi-channel approach</strong>, securing talent through three strategic levers: acquiring talent permanently (<em>Buy</em>), engaging contingent expertise (<em>Borrow</em>), or upskilling internal capabilities (<em>Build</em>).</p><p style='text-align: center; margin-top: 15px; margin-bottom: 20px;'><em>Click on each marker in the interactive map below to explore the 6 sourcing solutions:</em></p>"
                },
                {
                    type: "labeled-graphic",
                    data: {
                        markers: [
                            { x: 15, y: 25, label: "Strategic Workforce Planning (SWP)", detail: "<em>Ex: Anticipating the need for 50 developers for a project in 6 months and deciding whether to hire them full-time, rent freelancers, or train internal staff.</em>" },
                            { x: 50, y: 15, label: "Direct Sourcing", detail: "Direct hiring without traditional intermediaries.<br><br><em>Ex: Using the company's employer brand to attract and hire independent contractors directly, avoiding agency margins.</em>" },
                            { x: 85, y: 25, label: "Talent Platforms & CRM/Pooling", detail: "Systems to proactively create, manage, and nurture talent communities. Prioritizes cultivating known talent, such as <strong>silver medallists</strong> (previous finalists), <strong>alumni</strong> (former employees), and referrals.<br><br><em>Ex: Maintaining a database of former employees and sending them regular newsletters to hire them quickly when a vacancy arises.</em>" },
                            { x: 15, y: 70, label: "Intelligent Sourcing/Matching", detail: "Automated platforms for matching candidates with tasks.<br><br><em>Ex: Using AI algorithms to scan thousands of profiles and find in seconds the consultant who has exactly the three certifications required for a project.</em>" },
                            { x: 50, y: 80, label: "Intelligence Platforms", detail: "Tools to obtain hiring insights (data and ideas about hiring).<br><br><em>Ex: Consulting market analytics to discover which city offers the most abundant and affordable IT talent before deciding where to open a new operation.</em>" },
                            { x: 85, y: 70, label: "Learning Platforms & Assessments", detail: "To validate or develop talent internally.<br><br><em>Ex: Instead of looking for a hard-to-find profile in the market, quickly certifying 10 current employees through courses integrated into the platform.</em>" }
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "What does the 'Build' approach mean in the 'Buy, Borrow, or Build' talent strategy?",
                            options: [
                                "Acquiring an external staffing company",
                                "Developing talent internally via training",
                                "Building a new proprietary VMS platform",
                                "Constructing physical recruitment offices"
                            ],
                            correctIndex: 1,
                            feedback: "Correct! 'Build' refers to validating or developing talent internally, such as quickly certifying current employees through integrated courses."
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Transition to Trusted Advisors",
            objective: "Upon completion, the participant will be able to explain the QECR framework with its subcomponents and list the 6 sophisticated solutions that differentiate a Trusted Advisor from a basic administrator.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod4.jpg",
                    alt: "Transition to Trusted Advisors"
                },
                {
                    type: "text",
                    content: "<p>The market maturation has shifted buyer expectations. Basic operational delivery has become table stakes, forcing providers to redefine how they generate value.</p>"
                },
                {
                    type: "text",
                    content: `<h3>1. The Baseline: Operational Expectations vs. Strategic Demands</h3>`
                },
                {
                    type: "two-cols",
                    left: `<div style="background-color: var(--color-bg-light); padding: 25px; border-radius: var(--radius-md); border-top: 4px solid var(--color-primary); height: 100%;">
                                <h4 style="margin-bottom: 10px;">The Expected</h4>
                                <p>Clients already take compliance, cost savings, and value for money for granted.</p>
                           </div>`,
                    right: `<div style="background-color: var(--color-bg-blue-light); padding: 25px; border-radius: var(--radius-md); border-top: 4px solid var(--color-accent-teal); height: 100%;">
                                <h4 style="color: var(--color-accent-teal); margin-bottom: 10px;">The New</h4>
                                <p>They now demand that the MSP offer sophisticated workforce solutions that assist in organizational innovation and business transformation.</p>
                            </div>`
                },
                {
                    type: "text",
                    content: `<h3>2. The Foundational Hygiene: The QECR Framework</h3>`
                },
                {
                    type: "inline-image",
                    src: "img/ctx_qecr_pillars.jpg",
                    alt: "The four QECR pillars: Quality, Efficiency, Cost, Risk",
                    caption: "The QECR Framework: four pillars measuring MSP program performance",
                    position: "center"
                },
                {
                    type: "text",
                    content: `<p>Before advancing to consultative services, an MSP must flawlessly execute its core responsibilities. Performance is measured across the four pillars of the <strong>QECR Framework</strong>. <em>Click on each card to explore:</em></p>`
                },
                {
                    type: "flashcards",
                    data: [
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>Q</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #60A5FA; margin-bottom: 8px;'>Quality</h4><ul style='padding-left: 18px; font-size: 0.88rem; line-height: 1.4;'><li>Quality of the <strong>delivered talent</strong></li><li>Quality of the <strong>suppliers\' service</strong></li><li><strong>Operational efficiency</strong> of the program</li></ul></div>",
                            color: "#60A5FA"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>E</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #2DD4BF; margin-bottom: 8px;'>Efficiency</h4><ul style='padding-left: 18px; font-size: 0.88rem; line-height: 1.4;'><li>Speed in <strong>submission times</strong></li><li>Speed in <strong>onboarding/offboarding</strong></li><li>Speed in <strong>financial processes</strong></li><li>Speed in <strong>billing</strong></li></ul></div>",
                            color: "#2DD4BF"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>C</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #FBBF24; margin-bottom: 8px;'>Cost</h4><p style='font-size: 0.84rem; margin-bottom: 6px;'><strong>Total savings</strong>, not just hourly rates:</p><ul style='padding-left: 18px; font-size: 0.84rem; line-height: 1.35;'><li>Optimizing <strong>tools and software</strong></li><li>Optimizing <strong>program marketing</strong></li><li>Optimizing <strong>data management</strong></li><li><strong>Uncontained risk reduction</strong></li></ul></div>",
                            color: "#FBBF24"
                        },
                        {
                            front: "<div style='font-size: 4rem; font-weight: 800;'>R</div>",
                            back: "<div style='width: 100%; text-align: left;'><h4 style='color: #F87171; margin-bottom: 8px;'>Risk</h4><p style='font-size: 0.84rem; margin-bottom: 6px;'><strong>Active prevention of contingencies:</strong></p><ul style='padding-left: 18px; font-size: 0.84rem; line-height: 1.35;'><li>Avoiding <strong>labor reclassification</strong></li><li>Preventing <strong>system failures</strong></li><li>Protecting <strong>data/IP vulnerability</strong></li><li>Avoiding <strong>non-compliance fines</strong></li></ul></div>",
                            color: "#F87171"
                        }
                    ]
                },
                {
                    type: "text",
                    content: `<div style="background-color: var(--color-primary); color: white; padding: 30px; border-radius: var(--radius-md); text-align: center; margin-top: 40px; margin-bottom: 30px;">
                                <h4 style="color: white; margin-bottom: 10px;">The Objective: Trusted Advisor</h4>
                                <p>By delivering high-impact consultative capabilities, the MSP stops being a simple administrator to become an indispensable business partner, clearly differentiating itself from internal management and competitors.</p>
                              </div>`
                },
                {
                    type: "text",
                    content: "<h3>3. Six Sophisticated Solutions in Action</h3><p>These value-added services directly impact client strategy, talent sustainability, and profitability:</p>"
                },
                {
                    type: "process",
                    data: [
                        {
                            number: 1,
                            title: "ESG and DE&I Initiatives",
                            content: "Integrating environmental, social, and governance metrics, as well as diversity, equity, and inclusion strategies in the hiring of external talent.",
                            example: "Requiring talent suppliers to demonstrate sustainable practices and ensuring that at least 30% of presented candidates come from underrepresented groups."
                        },
                        {
                            number: 2,
                            title: "Talent Advisory and Consulting",
                            content: "Expert advice aimed at hiring based on real capabilities (<em>skills-first</em>) rather than traditional roles or credentials, reducing attrition. <strong>Statistically, 75% of companies use role assessments this year. More importantly, employer satisfaction rises from 73% (with traditional hiring) to 82% under the skills-first model.</strong>",
                            example: "Instead of looking for a 'senior Project Manager', advising the client to hire someone who has the specific skills of 'cloud migration and agile methodology', regardless of their previous title."
                        },
                        {
                            number: 3,
                            title: "Advanced Data Analytics",
                            content: "Use of advanced data to make informed workforce decisions.",
                            example: "Analyzing historical data to predict peaks in contractor resignations in certain months and activating preventive retention plans."
                        },
                        {
                            number: 4,
                            title: "Tail Spend Management",
                            content: "Intelligent control and management of fragmented or 'rogue' low-value spending.",
                            example: "Consolidating all scattered and unregulated hires of independent consultants into a single channel managed by the MSP, achieving immediate savings and reducing risks."
                        },
                        {
                            number: 5,
                            title: "Recruit, Train, Deploy (RTD)",
                            content: "Schemes aimed at recruiting talent, custom-training them, and subsequently integrating them into the client. <strong>In this model, the execution and cost of training fall on the staffing agencies, representing a net operational benefit for the MSP program.</strong>",
                            example: "Recruiting recent graduates without experience, training them intensively in a specific client software for two months, and then assigning them to the company's projects."
                        },
                        {
                            number: 6,
                            title: "Contractor Value Proposition (CVP)",
                            content: "Creating a specific value proposition for the non-permanent workforce, offering them communication, training, and interaction conditions at the level of a permanent employee.",
                            example: "Granting freelancers access to the company's internal training platforms and involving them in corporate communications and events to ensure their loyalty."
                        }
                    ]
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "Under the skills-first hiring model, employer satisfaction rises to what percentage (compared to 73% with traditional hiring)?",
                            options: ["78%", "82%", "88%", "91%"],
                            correctIndex: 1,
                            feedback: "Correct! Satisfaction rises from 73% to 82%. Additionally, 75% of companies already use role assessments this year."
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Technological Ecosystems & AI",
            objective: "Upon completion, the participant will be able to differentiate the 5 AI subcategories applied to the MSP, explain the regulatory alert, and identify the key functionalities of the VMS ecosystem.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod5.jpg",
                    alt: "Technological Ecosystems and AI"
                },
                {
                    type: "text",
                    content: "<p>Executing advanced MSP strategies requires an integrated technology stack. This architecture pairs a robust <strong>transactional core (the VMS)</strong> with a rapidly evolving <strong>cognitive layer (Artificial Intelligence)</strong>.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. The Cognitive Layer: 5 AI Models in MSP</h3>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_ai_layers.jpg",
                    alt: "The 5 AI layers in MSP technology",
                    caption: "From Machine Learning to Agentic AI: the five cognitive layers powering modern MSP programs",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>Artificial Intelligence is moving from rule-based task automation to semi-autonomous decision orchestration. <em>Click on each tab below to explore the AI categories and their specific MSP applications:</em></p>"
                },
                {
                    type: "tabs",
                    data: [
                        { label: "Machine Learning", content: "<p><strong>Analyzes data and finds patterns to predict success.</strong></p><p><em>Ex: Predicting early turnover risks or statistically determining which job portal attracts the best candidates; optimizing the posting of job offers.</em></p>" },
                        { label: "NLP", content: "<p><strong>'Understands' and classifies human information.</strong></p><p><em>Ex: Analyzing the free text of a resume to extract and index key skills, or detecting the tone/sentiment of a candidate in a chat; automatically scheduling interviews.</em></p>" },
                        { label: "Deep Learning", content: "<p><strong>Handles complex data that neural networks learn without explicit programming.</strong></p><p><em>Ex: Voice recognition in video interviews, image analysis in compliance documents, nonlinear relationships in large volumes of candidate data.</em></p>" },
                        { label: "Generative AI", content: "<p><strong>'Creates' new and original content based on patterns.</strong></p><p><em>Ex: Automatically drafting attractive job descriptions from scratch or writing personalized emails to candidates; it is already a standard feature in most platforms in 2025.</em></p>" },
                        { label: "Agentic AI", content: "<p><strong>Almost autonomous, goal-oriented systems — the hottest topic of 2025.</strong></p><p><em>Ex: A virtual agent that searches, filters profiles, contacts candidates, conducts a preliminary interview, and reports the final shortlist without human intervention. Note: most current implementations are still 'agentic-ish', with partial autonomy.</em></p>" }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Human-in-the-Loop & Regulatory Governance</h3><p>While AI unlocks dramatic speed, sustainable programs must balance automated efficiency with high-touch advisory skills and strict legal compliance:</p>"
                },
                {
                    type: "two-cols",
                    left: "<p>Platforms must give the recruiter 'clear lines of sight', indicating exactly where, when, and how to interact within semi-autonomous processes to establish high-value relationships (High-Touch).</p>",
                    right: "<p>By delegating operations to technology, MSPs face the new challenge of intensively training their own staff so they evolve from being simple operational administrators to true <strong>strategic advisors</strong> in the long term.</p>"
                },
                {
                    type: "alert",
                    alertType: "important",
                    content: "<strong>Regulatory alert — relevant for client conversations:</strong> The adoption of AI in recruiting carries growing legal risks. In 2024, US federal agencies introduced <strong>59 AI-related regulations</strong> (more than double that in 2023).<br><br>The <strong>EU AI Act</strong> places the responsibility for AI misuse on both the software provider <em>and the final client</em>. This means that MSP programs using unaudited or 'black box' AI legally expose their clients.<br><br>For account executives, this is a point of differentiation: being able to demonstrate that the AI tools used in the program are auditable and comply with current regulatory frameworks."
                },
                {
                    type: "text",
                    content: "<h3>3. The Infrastructure Core: VMS Architecture & Trends</h3><p>The cognitive layer cannot function without the underlying Vendor Management System that anchors operational compliance and spend visibility. <em>Click on each topic to explore:</em></p>"
                },
                {
                    type: "accordion",
                    data: [
                        {
                            title: "The Predominant Base (VMS)",
                            content: "<p>The Vendor Management System remains the technological heart of the market, with <strong>SAP Fieldglass</strong> and <strong>Beeline</strong> as global leaders.</p>"
                        },
                        {
                            title: "Selection Models & Flexibility",
                            content: "<p>In <strong>79%</strong> of cases the MSP chooses and provides the technology. A significant <strong>21%</strong> of clients prefer to impose their own tool. This forces MSPs to maintain solid tech partnerships to ensure clean integrations.</p>"
                        },
                        {
                            title: "Proprietary Systems & Scalable Alternatives",
                            content: "<p>Besides massive commercial VMSs, the report identified at least <strong>33 other technologies</strong> in use. When a program's hiring volume (small/medium) does not justify the high cost of a traditional license, MSPs resort to two strategies:</p><ol><li>Extending the capabilities of tools the client already owns (such as procurement systems or CRMs like SAP SuccessFactors)</li><li><strong>Betting heavily on proprietary systems (own VMS): </strong>The development of custom tools is a clear differentiation trend: <strong>22 of those 33</strong> alternative technologies are exclusively owned by MSPs, including platforms like <em>3 Story Software, AccelerationVMS, HireGenics VMS, Retinue Bridge VMS,</em> and <em>Matrix PRISM</em>.</li></ol>"
                        },
                        {
                            title: "New Peripheral Tools",
                            content: "<p>The ecosystem is complemented by connecting the VMS with platforms specialized in <strong>direct sourcing</strong>, CRMs for building <strong>talent pools</strong>, and <strong>assessment or hiring insights</strong> tools.</p>"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>4. Key Functionalities of the VMS Ecosystem</h3><p>Beyond basic vendor consolidation, modern VMS platforms have expanded their capabilities to cover a wide array of strategic functions. The chart below illustrates the adoption rate of these key functionalities across the industry.</p>"
                },
                {
                    type: "progress-bars",
                    data: [
                        { label: "Supplier & Billing Management", percent: 100, desc: "Centralizing the relationship with agencies, controlling rates, and unifying billing in a single system." },
                        { label: "Compliance Management", percent: 100, desc: "Ensuring and auditing that all contractors strictly comply with the required legal, labor, and security requirements." },
                        { label: "Payroll Processing", percent: 93, desc: "Managing payments for temporary workers efficiently and auditably." },
                        { label: "Direct Sourcing & Talent Pools", percent: 90, desc: "Creating talent communities or marketplaces curated directly by the MSP to provide candidates quickly without relying on external agencies." },
                        { label: "Integrated Strategic Planning", percent: 83, desc: "Facilitating metrics that allow joint planning of the permanent and contingent workforce." },
                        { label: "SOW Project Administration", percent: 83, desc: "Managing contracts based on outsourced services or Statements of Work, controlling deliverables, milestones, and budgets (and not just hours worked)." }
                    ]
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "How many of the 33 alternative technologies identified in the market are exclusively owned by MSPs?",
                            options: ["8", "15", "22", "33"],
                            correctIndex: 2,
                            feedback: "Correct! 22 of the 33 alternative technologies are proprietary MSP-owned systems. This is a clear differentiation trend."
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Funding, Delivery Models & Skills-Based Hiring",
            objective: "Upon completion, the participant will be able to explain the 3 axes of the sourcing model, the MSP contractual chain, the 2 funding models and their geographical implications, and the operational dynamics of skills-based hiring.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod6.jpg",
                    alt: "Funding, Delivery Models and Skills-Based Hiring"
                },
                {
                    type: "text",
                    content: "<p>An MSP program is not a collection of isolated policies; it is an integrated operating system. The <strong>legal governance</strong> dictates the <strong>sourcing rules</strong>, which determine the <strong>funding economics</strong>, and ultimately enable high-value delivery models like <strong>Skills-Based Hiring</strong>.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Contractual Governance & Legal Architecture</h3><p>Every MSP operation begins with establishing the legal chain of accountability. <em>Click on each card to explore its core components:</em></p>"
                },
                {
                    type: "flashcards",
                    data: [
                        {
                            front: "Governance Chain",
                            back: "<div><strong style='color: var(--color-primary); font-size: 1.1em;'>[Client] ➔ [MSP] ➔ [VMS] ➔ [Staffing Agencies]</strong><p style='margin-top: 10px; font-size: 0.95em;'>Centralizes operational and requisition flow through standardized governance and technology infrastructure.</p></div>",
                            color: "#60A5FA"
                        },
                        {
                            front: "Supplier Agreement",
                            back: "<div><p style='font-size: 0.95em;'>A comprehensive framework often as complex as the master MSA. It establishes program rules, SLA metrics, supplier tiering, and commercial allocation potential.</p></div>",
                            color: "#2DD4BF"
                        },
                        {
                            front: "Regional Legal Dynamics",
                            back: "<div><p style='font-size: 0.92em; margin-bottom: 8px;'><strong>US/UK:</strong> MSP typically acts as <em>Principal</em> (direct payer).</p><p style='font-size: 0.92em;'><strong>Europe (e.g., Germany):</strong> MSP acts as <em>Agent</em>, requiring direct contracts between client and agency to prevent co-employment risks.</p></div>",
                            color: "#FBBF24"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<p><strong>2. Calibrating Sourcing & Delivery Mechanics</strong></p><p>Operating within this legal architecture, the MSP sets the operational rules of engagement across three core sourcing levers. <em>Click on each tab below to explore them:</em></p>"
                },
                {
                    type: "tabs",
                    data: [
                        {
                            label: "Competitiveness",
                            content: "<p><strong>Degree to which suppliers compete with each other:</strong></p><p>Range: <em>Sole Supplier</em> (single provider) → <em>Tiers</em> (secondary suppliers receive requisitions only if primary tier fails) → <em>Open Bidding</em> (simultaneous market release).</p>"
                        },
                        {
                            label: "Vendor Integration",
                            content: "<p><strong>Level and location of external resource management:</strong></p><p>Range: <em>Full Outsourcing</em> → <em>Off-site Support</em> → <em>On-site Dedicated Support</em>.</p>"
                        },
                        {
                            label: "Rate Elasticity",
                            content: "<p><strong>Commercial pricing and rate-setting mechanisms:</strong></p><ul><li><strong>Fixed Rate Cards:</strong> Standardized, predetermined ceiling/floor rates per role level.</li><li><strong>Pay range + Mark-up:</strong> Talent pay is flexible within a band, with agency margins fixed as an agreed percentage.</li><li><strong>Max Bill Rates:</strong> Hard caps on total invoiced cost to enforce budget discipline.</li></ul>"
                        }
                    ]
                },
                {
                    type: "text",
                    content: "<p><strong>3. The Economic Equation: Funding Models & Margins</strong></p>"
                },
                {
                    type: "inline-image",
                    src: "img/ctx_funding_map.jpg",
                    alt: "Global funding model distribution",
                    caption: "Supplier-funded (Americas) vs Client-funded (Europe & APAC) — regional dominance of MSP funding models",
                    position: "center"
                },
                {
                    type: "text",
                    content: "<p>How delivery rates are structured directly intersects with who funds the MSP program, impacting supplier margin sustainability and adoption:</p>"
                },
                {
                    type: "comparison-table",
                    data: {
                        headers: ["", "Client-funded", "Supplier-funded"],
                        rows: [
                            ["How it works", "The client pays the MSP directly via management fees.", "Staffing agencies absorb the MSP fee as part of their margin. <strong>Vital:</strong> Agencies must maximize ecosystem efficiencies (automated billing, centralized requisitions, zero sales cost) to offset fee deductions."],
                            ["Strength", "Better supplier adoption and compliance; lower overall markup inflation.", "Zero-cost perception for the client from day one; high initial program buy-in."],
                            ["Risk", "Requires internal client budget justification; harder to roll out in low-volume regions.", "Supplier resistance and margin compression if volume is insufficient."],
                            ["Dominant region", "<strong>Europe & APAC</strong> (narrower statutory agency margins restrict fee absorption)", "<strong>North America</strong>"]
                        ]
                    }
                },
                {
                    type: "statement",
                    bgColor: "var(--color-primary)",
                    textColor: "white",
                    content: "<strong>55%</strong> of global MSP spend operates under vendor-neutral models — proving that MSP sustainability relies entirely on maintaining a viable, motivated supplier ecosystem."
                },
                {
                    type: "text",
                    content: "<h3>4. Strategic Value Delivery: Skills-Based Hiring & Total Talent</h3><p>With governance, sourcing rules, and funding aligned, the MSP can solve the client's biggest operational bottleneck: <strong>accelerated turnover and acute skill shortages</strong>.</p><p>By transitioning from reactive seat-filling to <strong>Skills-Based Hiring</strong>, the MSP orchestrates value creation without absorbing operational overhead:</p><ul><li><strong>Delegated Capability Building:</strong> The execution and cost of candidate upskilling are assumed directly by staffing firms in exchange for committed volume.</li><li><strong>Tangible Client ROI:</strong> Up-skilled talent pools lead to faster time-to-fill, superior placement fit, higher contractor-to-FTE conversion rates, and reduced churn.</li><li><strong>The Total Talent Horizon:</strong> While only <strong>9%</strong> of clients currently unify MSP and RPO under one contract, mature skills-based delivery serves as the primary gateway toward full <strong>Total Talent Management</strong>.</li></ul>"
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "In the Supplier-funded model, what is the 'vital' recommendation for staffing agencies?",
                            options: [
                                "Negotiate higher initial profit margins",
                                "Maximize centralized ecosystem benefits",
                                "Pass operational costs to candidates",
                                "Refuse supplier-funded participation"
                            ],
                            correctIndex: 1,
                            feedback: "Correct! Agencies must compensate margin pressure by fully leveraging the MSP's centralized infrastructure: zero sales costs per requisition, automated billing, standardized collections."
                        }
                    ]
                }
            ]
        },
        {
            id: 7,
            title: "Strategic Implications (Operating as Own MSP)",
            objective: "Upon completion, the participant will be able to articulate the 7 key strategic implications for positioning the company as an innovative and irreplaceable MSP.",
            themeColor: "teal",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod7.jpg",
                    alt: "Strategic Implications for Own MSP"
                },
                {
                    type: "text",
                    content: "<p>When operating directly as an MSP provider, success hinges on positioning the program as a consultative transformation partner rather than a low-cost commodity.</p>"
                },
                {
                    type: "text",
                    content: "<h3>1. Strategic Positioning Levers</h3><p>Master these seven core strategic principles to build long-term client retention, protect commercial margins, and defend against in-housing:</p>"
                },
                {
                    type: "gallery",
                    data: [
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2a7 7 0 0 1 4 12.7V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.3A7 7 0 0 1 12 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="24" x2="14" y2="24"/></svg>', title: "Trusted Advisor: No Longer Optional", description: "Clients expect strategic advice, not just supplier management. The path involves building capabilities in SWP, advanced analytics, and talent advisory." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"/><path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"/></svg>', title: "Breaking the Churn Cycle", description: "Client urgency often forces reactive hiring, which generates frustration and high turnover, restarting the cycle. Positioning skills-based hiring not just as a trend, but as the cure for this vicious cycle, is a strong sales argument." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>', title: "Skills-First Opens New Doors", description: "The market is migrating from 'I'm looking for a Project Manager' to 'I'm looking for someone with these specific skills'. Account executives who master this language will speak the same language as today's decision-makers, proving that this approach is key to offering sustainable ROI and drastically reducing turnover costs." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>', title: "Standard Pricing as Starting Point", description: "The standard pricing model (78% fee-as-%-of-spend) is the expected starting point. Proposals that include alternative models (gainshare, outcome-based) can be differentiators for more sophisticated clients." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', title: "Proprietary Technology as Differentiator", description: "22 of the 33 alternative technologies to the standard VMS are owned by the MSPs themselves. Having or being able to integrate a proprietary tech solution positions you better in front of clients who do not want to depend on expensive commercial licenses." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>', title: "Risk of In-housing", description: "Organizations with mature programs constantly evaluate internalizing their workforce management. Continuous innovation is the only real defense against this risk." },
                        { iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>', title: "Total Talent Acquisition/Management", description: "Positioning oneself to comprehensively manage both temporary and direct talent (MSP + RPO) will give a massive competitive advantage as the market matures towards holistic solutions." }
                    ]
                },
                {
                    type: "text",
                    content: "<h3>2. Applied Strategy: Defending Value Against In-Housing</h3><p>Put strategic positioning into practice when faced with client budget reviews or commoditization threats:</p>"
                },
                {
                    type: "scenario",
                    data: {
                        situation: "A potential client tells you: 'Our current MSP just handles invoices and compliance — nothing strategic. We're thinking about bringing it all in-house.' How do you respond?",
                        options: [
                            "Agree with the in-housing plan and offer transition help.",
                            "Present Trusted Advisor capabilities to show strategic value.",
                            "Offer a discount on current services to retain the account."
                        ],
                        correctIndex: 1,
                        feedbacks: [
                            "Not ideal. You've just validated their decision to leave the MSP model. The document emphasizes that continuous innovation is the only defense against in-housing risk.",
                            "Excellent! This is exactly the Trusted Advisor positioning the market demands. You're demonstrating that your MSP delivers strategic value that's impossible to replicate internally.",
                            "Risky. Competing on price alone is a race to the bottom. The document emphasizes value-added services, not lower costs."
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "What is the only real defense against the risk of clients in-housing their MSP programs?",
                            options: ["Lower operational pricing", "Longer service contracts", "Continuous program innovation", "Stricter compliance reporting"],
                            correctIndex: 2,
                            feedback: "Correct! Organizations with mature programs constantly evaluate internalizing. Only continuous innovation prevents this."
                        }
                    ]
                }
            ]
        },
        {
            id: 8,
            title: "Operational Playbook (Succeeding as a Supplier)",
            objective: "Upon completion, the participant will be able to apply the 26 operational best practices to enter, stay, and be profitable as a supplier within a third-party MSP.",
            themeColor: "gold",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod8.jpg",
                    alt: "Operational Playbook for Suppliers"
                },
                {
                    type: "text",
                    content: "<p>With <strong>55%</strong> of the market operating under vendor-neutral models, MSP success depends on maintaining a thriving agency ecosystem. When our company acts as a staffing supplier within a third-party MSP, following this structured lifecycle playbook is critical to ensure high performance, tier elevation, and sustainable account profitability.</p>"
                },
                {
                    type: "inline-image",
                    src: "img/playbook_infographic.jpg",
                    alt: "A sleek, modern corporate infographic showing a 3-phase playbook labeled 'Phase 1: Getting on the Approved Supplier List (ASL)', 'Phase 2: Staying on the List, Elevating Tiers & Expanding', and 'Phase 3: Protecting Margins & Ensuring Long-Term Profitability'.",
                    caption: "Visual overview of the 3-phase operational lifecycle",
                    position: "center"
                },
                {
                    type: "radial-hub",
                    data: {
                        title: "Operational Playbook (26 Strategic Practices)",
                        phases: [
                            {
                                id: "phase1",
                                name: "Phase 1: Getting on the Approved Supplier List (ASL)",
                                shortName: "Entry & ASL",
                                badge: "Phase 1: ASL Entry",
                                color: "#38BDF8",
                                items: [
                                    { title: "Look Before You Leap", content: "Find out if the program is client or supplier funded, the tier model, and especially what candidate profiles the current suppliers are struggling to fill." },
                                    { title: "Proper Timing", content: "In the initial phase of an MSP program, administrators are swamped with implementation. Wait for the program to mature, unless you have absolute certainty that you can resolve a critical unmet need." },
                                    { title: "Know Your Limits", content: "Do not offer more than you can deliver; it is preferable to say 'no' to a requisition than to damage your reputation by failing to deliver." },
                                    { title: "Quality & Specialization (Niche)", content: "Worker Quality is the primary criterion. Position yourself as a specialist in hard-to-fill roles; this attracts MSPs struggling to close complex positions." },
                                    { title: "Start Elsewhere If Necessary", content: "If it's hard to get directly into a specific program, try qualifying as a supplier in another program managed by the same MSP/VMS to build history and trust." },
                                    { title: "Preventive Audit", content: "MSPs look for 100% compliant agencies. Having licenses, insurance, and staff trained to interact with VMS systems ready before applying accelerates inclusion." },
                                    { title: "Respect Program Policies (Contact)", content: "Always contact the MSP/VMS to apply. Bypassing the MSP and attempting to contact the engagement manager (end client) directly is harmful and severely reduces your future opportunities." },
                                    { title: "Growth Through Performance", content: "Understand that MSPs do not guarantee incoming volumes. Be prepared to earn positions by demonstrating solid results." },
                                    { title: "Prepare Net Rates", content: "Do not count on volume rebate schemes. Negotiate a competitive starting rate with pre-agreed reductions upon reaching certain volumes. Avoid pushing for future 'price hikes'; adjustments operate via fixed rate card schemes." }
                                ]
                            },
                            {
                                id: "phase2",
                                name: "Phase 2: Staying on the List, Elevating Tiers & Expanding",
                                shortName: "Retention & Tiers",
                                badge: "Phase 2: Elevation",
                                color: "#2DD4BF",
                                items: [
                                    { title: "Deeply Analyze the SA", content: "Don't read it just as a legal document. The SA details the program's structure, metrics, and your true business potential." },
                                    { title: "Who Really Decides?", content: "Remember that although you operate under the MSP's rules, the client (engagement manager) makes the final hiring decision. The MSP pre-filters candidates based on the best fit (not by supplier), which democratizes opportunities for small agencies." },
                                    { title: "Compliance is the Bare Minimum", content: "Clients take regulatory compliance for granted. Prepare for regular audits ensuring that licenses, insurance, payroll/tax payments, and your team's (SPOC) training are up to date. Any unauthorized direct contact with the client is grounds for expulsion." },
                                    { title: "Ensure Fair KPI Calculation", content: "Quarterly reviews determine your place in the tiers. If you are a niche supplier, request that your fulfillment rate be measured only against your specialty's requisitions, not the overall total." },
                                    { title: "Respond (and Quickly)", content: "Constant lack of response is interpreted as disinterest and sinks your reputation with the MSP. Speed and consistency improve your positioning for higher-volume SOW projects." },
                                    { title: "Anticipate with a Talent Pool", content: "Develop communities with the most requested profiles (or silver medallists). This slashes response times and raises your award ratio on urgent positions." },
                                    { title: "Assume the Onboarding", content: "The time the candidate wastes preparing negatively impacts your evaluation. Agencies that assume onboarding become indispensable partners (Skills-Based Hiring)." },
                                    { title: "Ask for Active Feedback", content: "If your candidate is not selected or is rejected, do not assume the decision in silence. Find out the cause to recalibrate your future searches." },
                                    { title: "Active Account Management", content: "Hold regular meetings with the MSP. Find out about budget changes, new SOW projects, or scarce profiles before they happen." },
                                    { title: "Be a Consultative Partner", content: "Actively suggest operational improvements. A supplier that brings intelligence to the overall success of the MSP program is harder to replace." }
                                ]
                            },
                            {
                                id: "phase3",
                                name: "Phase 3: Protecting Margins & Ensuring Long-Term Profitability",
                                shortName: "Margins & Tech",
                                badge: "Phase 3: Profitability",
                                color: "#FBBF24",
                                items: [
                                    { title: "Isolate Profitability per Account", content: "Do not use your global corporate margin. Calculate the specific direct and indirect cost of serving that MSP client to define your minimum viable margin." },
                                    { title: "Define Strategic Roles per Account", content: "Decide the real value of each account: profit generation, overhead coverage, entry into new markets, or high-impact reference account?" },
                                    { title: "Capitalize on Indirect Benefits", content: "Compensate for rate pressure by fully taking advantage of what the MSP centralizes: zero sales costs per requisition, automated self-billing, standardized collections, and quick access to the VMS." },
                                    { title: "Filter Requisitions & Maximize Awarding Ratio", content: "Every rejected candidate is wasted money and effort. Focus exclusively on requisitions where you have ready and validated profiles." },
                                    { title: "Question Over-qualification", content: "Rigorously analyze the job description and clarify the true priorities (using the VMS chat). Submitting overqualified talent unnecessarily raises the bill rate without additional benefits for the client." },
                                    { title: "Cross-selling & Lateral Exploration", content: "Review positions outside your core focus, looking for scarce roles that offer a higher billing margin if you can fill them profitably." },
                                    { title: "Innovation as the Engine of Survival", content: "This is the market's definitive recommendation. Automate your recruiting and back-office. Suppliers that leverage emerging technologies (AI, sourcing automation) are the only ones capable of maintaining profitable operations under the continuous pressure of the MSP model." }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: "scenario",
                    data: {
                        situation: "You've been invited to join a brand-new MSP program that just launched last month. The MSP admin seems overwhelmed. What do you do?",
                        options: [
                            "Accept immediately to gain a first-mover supplier advantage.",
                            "Wait for program maturity unless solving a critical unmet need.",
                            "Contact the client's hiring manager to accelerate the process."
                        ],
                        correctIndex: 1,
                        feedbacks: [
                            "Risky. During the initial phase, MSP administrators are swamped with implementation. Getting in too early can mean poor support, messy processes, and wasted effort on your part.",
                            "Exactly right! The Playbook recommends waiting for program maturity. The exception is only if you can fill a critical gap that current suppliers cannot.",
                            "This is a serious violation. Bypassing the MSP and contacting the engagement manager directly is harmful and severely reduces your future opportunities. This is grounds for exclusion."
                        ]
                    }
                },
                {
                    type: "knowledge-check",
                    data: [
                        {
                            question: "If you are a niche supplier, what should you request regarding your KPI measurement?",
                            options: [
                                "Exemption from standard quarterly performance reviews",
                                "Measurement based only on specialty role requisitions",
                                "Higher billing rates to offset lower placement volume",
                                "Direct access to end clients for continuous feedback"
                            ],
                            correctIndex: 1,
                            feedback: "Correct! Niche suppliers should ensure their performance metrics reflect their specialty, not the total program volume."
                        }
                    ]
                }
            ]
        },
        {
            id: 9,
            title: "Key Takeaways & Final Assessment",
            objective: "Upon completion, the participant will demonstrate comprehensive mastery of the course concepts by correctly answering at least 7 out of 10 questions.",
            themeColor: "primary",
            blocks: [
                {
                    type: "hero-image",
                    src: "img/hero_mod9.jpg",
                    alt: "Key Takeaways and Final Assessment"
                },
                {
                    type: "text",
                    content: "<p>Congratulations on completing the core curriculum of the <strong>MSP Global Landscape 2025</strong>. Review the unified summary below consolidating the five fundamental pillars before attempting the final certification assessment.</p>"
                },
                {
                    type: "text",
                    content: "<h3>Executive Course Summary (TL;DR)</h3>"
                },
                {
                    type: "accordion",
                    data: [
                        { title: "📈 Market figures and evolution?", content: "58% adoption in large companies, driven by SOW spending (39%). They evolved from simple local consolidators to strategic global talent managers." },
                        { title: "⚖️ Tech ecosystems, funding, and legal frameworks?", content: "The VMS centralizes the operation. The model (Client vs. Supplier funded) defines margins, while the legal framework requires strict compliance to avoid co-employment risks and penalties." },
                        { title: "🤖 AI and skills-based hiring?", content: "AI speeds up massive candidate filtering and the skills focus guarantees productive talent from day one. Together they break the turnover cycle and lower operational costs." },
                        { title: "🚀 Best practices for supplier success?", content: "Compliance is your entry pass. To grow you need speed, pre-qualified talent communities, to assume the onboarding process, and to leverage the VMS to ensure your profitability." },
                        { title: "🧠 How to become a Trusted Advisor?", content: "By providing business strategy: talent analytics, consulting on skills-first, integral management (Total Talent), and constant innovation to become an irreplaceable partner." }
                    ]
                },
                {
                    type: "exam",
                    data: [
                        {
                            question: "1. What percentage of all managed MSP spend comes from SOW projects?",
                            options: ["22%", "39%", "55%", "78%"],
                            correctIndex: 1,
                            feedback: "SOW at 39% is the highest ever recorded."
                        },
                        {
                            question: "2. Who is legally responsible under the EU AI Act if an MSP uses unaudited AI?",
                            options: ["Only the software vendor", "Only the MSP organization", "Both the provider and the client", "No one (AI is unregulated)"],
                            correctIndex: 2,
                            feedback: "The EU AI Act places responsibility on BOTH the software provider and the final client."
                        },
                        {
                            question: "3. In the skills-first model, who assumes the cost and execution of training?",
                            options: ["The end client", "The MSP provider", "The staffing agencies", "The VMS vendor"],
                            correctIndex: 2,
                            feedback: "Staffing agencies assume training execution and cost; the MSP capitalizes on the benefits."
                        },
                        {
                            question: "4. True or False: Compliance is a strategic differentiator in 2025.",
                            options: ["True", "False"],
                            correctIndex: 1,
                            feedback: "False. Compliance is the bare minimum expected by clients — it no longer differentiates."
                        },
                        {
                            question: "5. Match: Which funding model predominates in North America?",
                            options: ["Client-funded", "Supplier-funded", "Hybrid", "Performance-based"],
                            correctIndex: 1,
                            feedback: "Supplier-funded predominates in North America. Client-funded is stronger in Europe/APAC."
                        },
                        {
                            question: "6. How many alternative technologies to standard VMS are proprietary (MSP-owned)?",
                            options: ["8 of 33", "15 of 33", "22 of 33", "33 of 33"],
                            correctIndex: 2,
                            feedback: "22 of 33 are proprietary — a clear differentiation trend."
                        },
                        {
                            question: "7. What does the 'R' in the QECR framework stand for?",
                            options: ["Revenue", "Retention", "Risk", "Recruitment"],
                            correctIndex: 2,
                            feedback: "Risk: Active prevention of contingencies including co-employment, system failures, data/IP vulnerability, and non-compliance."
                        },
                        {
                            question: "8. What percentage of the market by spend operates under vendor-neutral models?",
                            options: ["39%", "55%", "78%", "93%"],
                            correctIndex: 1,
                            feedback: "55% — confirming that MSP success depends on a well-managed staffing firm ecosystem."
                        },
                        {
                            question: "9. What is the only real defense against the risk of clients in-housing their MSP?",
                            options: ["Lower operational pricing", "Longer service contracts", "Continuous program innovation", "More approved suppliers"],
                            correctIndex: 2,
                            feedback: "Organizations with mature programs constantly evaluate internalizing. Only continuous innovation prevents this."
                        },
                        {
                            question: "10. Under the skills-first model, employer satisfaction rises from 73% to what?",
                            options: ["78%", "82%", "88%", "95%"],
                            correctIndex: 1,
                            feedback: "From 73% (traditional hiring) to 82% under the skills-first model. Additionally, 75% of companies already use role assessments."
                        }
                    ]
                }
            ]
        }
    ]
};
