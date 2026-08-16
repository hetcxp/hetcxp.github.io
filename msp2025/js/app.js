const state = {
    currentModuleIndex: 0,
    modulesVisited: new Set(),
    examCompleted: false
};

window.currentLang = localStorage.getItem('mspLang') || 'en';

const dict = {
    en: {
        completed: "Completed",
        menu: "Menu",
        nextModule: "Next Module",
        glossaryTitle: "Glossary & Key Terms",
        searchTerms: "Search terms...",
        playbookUpper: "OPERATIONAL PLAYBOOK",
        tactics: "Tactics",
        clickToExplore: "Click to Explore",
        viewed: "Viewed",
        playbookCompleted: "Playbook Completed",
        continueReading: "Continue Reading",
        tactic: "Tactic",
        of: "of",
        prev: "Previous",
        next: "Next",
        explored: "explored",
        playbookProgress: "Playbook Progress",
        hubDescription: "Click on any point or phase to open the interactive viewer. The system will automatically track your progress.",
        startCourse: "Start Course",
        viewExample: "View Practical Example",
        hideExample: "Hide Example",
        submitAnswers: "Submit Answers",
        mspExpert: "🏆 MSP Expert — You're ready for Trusted Advisor conversations.",
        strongFoundation: "✅ Strong Foundation — Review the modules where you missed questions.",
        reviewRecommended: "📚 Review Recommended — Revisit the key modules before client conversations."
    },
    es: {
        completed: "Completado",
        menu: "Menú",
        nextModule: "Siguiente Módulo",
        glossaryTitle: "Glosario y Términos Clave",
        searchTerms: "Buscar términos...",
        playbookUpper: "PLAYBOOK OPERATIVO",
        tactics: "Tácticas",
        clickToExplore: "Clic para Explorar",
        viewed: "Vistos",
        playbookCompleted: "Playbook Completado",
        continueReading: "Continuar Leyendo",
        tactic: "Táctica",
        of: "de",
        prev: "Anterior",
        next: "Siguiente",
        explored: "explorados",
        playbookProgress: "Progreso del Playbook",
        hubDescription: "Haz clic en cualquier punto o fase para abrir el visor interactivo. El sistema rastreará tu progreso automáticamente.",
        startCourse: "Comenzar Curso",
        viewExample: "Ver Ejemplo Práctico",
        hideExample: "Ocultar Ejemplo",
        submitAnswers: "Enviar Respuestas",
        mspExpert: "🏆 Experto MSP — Estás listo para conversaciones de Trusted Advisor.",
        strongFoundation: "✅ Base Sólida — Revisa los módulos donde fallaste.",
        reviewRecommended: "📚 Revisión Recomendada — Vuelve a visitar los módulos clave antes de hablar con clientes."
    }
};

window.uiStrings = dict[window.currentLang];
window.courseData = window.currentLang === 'es' ? courseDataES : courseDataEN;

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    initLangToggle();
    initNavigation();
    initGlossary();
    loadModule(0);
});

function initLangToggle() {
    const toggle = document.getElementById('lang-toggle');
    if(toggle) {
        toggle.checked = window.currentLang === 'es';
        toggle.addEventListener('change', (e) => {
            window.currentLang = e.target.checked ? 'es' : 'en';
            localStorage.setItem('mspLang', window.currentLang);
            window.uiStrings = dict[window.currentLang];
            window.courseData = window.currentLang === 'es' ? courseDataES : courseDataEN;
            
            // Re-render UI
            document.getElementById('mobile-menu-btn').textContent = `☰ ${window.uiStrings.menu}`;
            document.getElementById('next-module-btn').innerHTML = `${window.uiStrings.nextModule} &rarr;`;
            document.querySelector('#glossary-modal h2').textContent = window.uiStrings.glossaryTitle;
            document.getElementById('glossary-search').placeholder = window.uiStrings.searchTerms;
            
            initNavigation();
            updateGlobalProgress();
            loadModule(state.currentModuleIndex);
        });
    }

    // Initial static translations
    document.getElementById('mobile-menu-btn').textContent = `☰ ${window.uiStrings.menu}`;
    document.getElementById('next-module-btn').innerHTML = `${window.uiStrings.nextModule} &rarr;`;
    document.querySelector('#glossary-modal h2').textContent = window.uiStrings.glossaryTitle;
    document.getElementById('glossary-search').placeholder = window.uiStrings.searchTerms;
}

function initNavigation() {
    const list = document.getElementById('module-list');
    list.innerHTML = '';
    
    courseData.modules.forEach((mod, index) => {
        const li = document.createElement('li');
        li.className = 'module-nav-item';
        li.textContent = `${index + 1}. ${mod.title}`;
        li.onclick = () => loadModule(index);
        list.appendChild(li);
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').onclick = () => {
        document.getElementById('sidebar').classList.add('open');
    };
    document.getElementById('mobile-menu-close').onclick = () => {
        document.getElementById('sidebar').classList.remove('open');
    };

    // Next module button
    document.getElementById('next-module-btn').onclick = () => {
        if(state.currentModuleIndex < courseData.modules.length - 1) {
            loadModule(state.currentModuleIndex + 1);
        }
    };
}

function loadModule(index) {
    state.currentModuleIndex = index;
    // Removed automatic addition to modulesVisited
    const mod = courseData.modules[index];
    
    // Update Sidebar UI
    const navItems = document.querySelectorAll('.module-nav-item');
    navItems.forEach((item, i) => {
        item.classList.remove('active');
        if(i === index) item.classList.add('active');
        if(state.modulesVisited.has(i)) item.classList.add('completed');
    });
    
    // Close mobile menu if open
    document.getElementById('sidebar').classList.remove('open');

    // Update Header
    document.getElementById('module-title').textContent = mod.title;
    document.getElementById('module-objective').textContent = mod.objective;
    
    // Theme colors
    const accentBar = document.getElementById('module-accent-bar');
    if(mod.themeColor === 'teal') {
        accentBar.style.backgroundColor = 'var(--color-accent-teal)';
    } else if (mod.themeColor === 'gold') {
        accentBar.style.backgroundColor = 'var(--color-accent-gold)';
    } else {
        accentBar.style.backgroundColor = 'var(--color-primary)';
    }

    // Load Body
    const body = document.getElementById('module-body');
    body.innerHTML = '';
    
    const header = document.getElementById('module-header');
    let blocksToRender = mod.blocks;

    if (mod.blocks.length > 0 && mod.blocks[0].type === 'hero-image') {
        const heroSrc = mod.blocks[0].src;
        header.style.backgroundImage = `linear-gradient(to bottom, rgba(11, 17, 32, 0.3) 0%, rgba(11, 17, 32, 0.95) 100%), url('${heroSrc}')`;
        blocksToRender = mod.blocks.slice(1);
    } else {
        header.style.backgroundImage = 'none';
    }
    
    blocksToRender.forEach((block, i) => {
        const el = renderBlock(block);
        // Stagger animation
        el.style.animationDelay = `${i * 0.1}s`;
        body.appendChild(el);
    });

    // Setup interactions for loaded content
    setupAccordions();
    animateProgressBars();
    setupScrollReveal();

    // Setup Footer
    const nextBtn = document.getElementById('next-module-btn');
    if(index === 0 || index === courseData.modules.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'inline-block';
    }

    updateGlobalProgress();
    window.scrollTo(0,0);
}

function updateGlobalProgress() {
    let progress = Math.round((state.modulesVisited.size / courseData.modules.length) * 100);
    if(state.examCompleted) progress = 100;
    
    document.getElementById('global-progress').style.width = `${progress}%`;
    document.getElementById('mobile-progress-fill').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${progress}% ${window.uiStrings.completed}`;

    // Also update sidebar UI to show checkmarks immediately
    const navItems = document.querySelectorAll('.module-nav-item');
    navItems.forEach((item, i) => {
        if(state.modulesVisited.has(i)) {
            item.classList.add('completed');
        }
    });
}

function setupAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.onclick = function() {
            const item = this.parentElement;
            // Close others
            const others = item.parentElement.querySelectorAll('.accordion-item');
            others.forEach(other => {
                if(other !== item) other.classList.remove('active');
            });
            item.classList.toggle('active');
        };
    });
}

function animateProgressBars() {
    setTimeout(() => {
        document.querySelectorAll('.stat-bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 500);
}

function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('.content-block').forEach(block => {
        observer.observe(block);
    });
}

// Glossary Logic
function initGlossary() {
    const modal = document.getElementById('glossary-modal');
    const fab = document.getElementById('glossary-fab');
    const closeBtn = document.querySelector('.close-modal');
    const search = document.getElementById('glossary-search');
    const list = document.getElementById('glossary-list');

    fab.onclick = () => {
        modal.classList.add('open');
        renderGlossaryTerms(courseData.glossary);
    };
    
    closeBtn.onclick = () => modal.classList.remove('open');
    
    window.onclick = (e) => {
        if(e.target === modal) modal.classList.remove('open');
    };

    search.oninput = (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = courseData.glossary.filter(t => 
            t.acronym.toLowerCase().includes(query) || 
            t.full.toLowerCase().includes(query) ||
            t.definition.toLowerCase().includes(query)
        );
        renderGlossaryTerms(filtered);
    };

    function renderGlossaryTerms(terms) {
        list.innerHTML = '';
        terms.forEach(term => {
            const item = document.createElement('div');
            item.className = 'glossary-item';
            item.innerHTML = `
                <div class="glossary-acronym">${term.acronym} - ${term.full}</div>
                <div class="glossary-def">${term.definition}</div>
            `;
            item.onclick = () => item.classList.toggle('open');
            list.appendChild(item);
        });
    }
}

// Global hooks for components
window.recordKnowledgeCheck = function(isCorrect) {
    state.modulesVisited.add(state.currentModuleIndex);
    updateGlobalProgress();
};

window.completeExam = function(score) {
    state.examCompleted = true;
    state.modulesVisited.add(state.currentModuleIndex);
    updateGlobalProgress();
};
