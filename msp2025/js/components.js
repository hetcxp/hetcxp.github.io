// Reusable rendering functions for various components

function renderBlock(block) {
    const container = document.createElement('div');
    container.className = 'content-block';
    
    switch (block.type) {
        case 'text-intro':
            container.innerHTML = `<div class="intro-block">${block.content}</div>`;
            break;
        case 'start-course-btn':
            container.innerHTML = `<div style="text-align: center; margin-top: 40px;"><button class="btn btn-primary" onclick="state.modulesVisited.add(0); updateGlobalProgress(); document.getElementById('next-module-btn').click();" style="font-size: 1.2rem; padding: 15px 30px;">${window.uiStrings ? window.uiStrings.startCourse : 'Start Course'}</button></div>`;
            break;
        case 'text':
            container.innerHTML = `<div>${block.content}</div>`;
            break;
        case 'hero-image':
            container.innerHTML = `<div class="hero-image"><img src="${block.src}" alt="${block.alt || ''}" loading="lazy"></div>`;
            break;
        case 'inline-image':
            container.innerHTML = `<div class="inline-image${block.position === 'center' ? ' inline-image--center' : ''}"><img src="${block.src}" alt="${block.alt || ''}" loading="lazy">${block.caption ? `<p class="inline-image-caption">${block.caption}</p>` : ''}</div>`;
            break;
        case 'accordion':
            container.innerHTML = renderAccordion(block.data);
            break;
        case 'flashcards':
            container.innerHTML = renderFlashcardGrid(block.data);
            break;
        case 'statement':
            container.innerHTML = `<div class="statement-block" style="background-color: ${block.bgColor}; color: ${block.textColor};">${block.content}</div>`;
            break;
        case 'timeline':
            container.innerHTML = renderTimeline(block.data);
            break;
        case 'alert':
            container.innerHTML = `<div class="alert alert-${block.alertType}"><div class="alert-icon">⚠️</div><div>${block.content}</div></div>`;
            break;
        case 'labeled-graphic':
            container.style.position = 'relative';
            container.style.zIndex = '50';
            container.innerHTML = renderLabeledGraphic(block.data);
            break;
        case 'process':
            container.innerHTML = renderProcess(block.data);
            break;
        case 'tabs':
            container.innerHTML = renderTabs(block.data);
            break;
        case 'two-cols':
            container.innerHTML = `<div class="two-columns"><div>${block.left}</div><div>${block.right}</div></div>`;
            break;
        case 'progress-bars':
            container.innerHTML = renderProgressBars(block.data);
            break;
        case 'comparison-table':
            container.innerHTML = renderComparisonTable(block.data);
            break;
        case 'gallery':
            container.innerHTML = renderCardGallery(block.data);
            break;
        case 'scenario':
            container.innerHTML = renderScenario(block.data);
            break;
        case 'knowledge-check':
            container.innerHTML = renderKnowledgeCheck(block.data, false);
            break;
        case 'radial-hub':
            container.innerHTML = renderRadialHub(block.data);
            break;
        case 'exam':
            container.innerHTML = renderKnowledgeCheck(block.data, true);
            break;
    }
    return container;
}

function renderAccordion(items) {
    let html = '';
    items.forEach((item, index) => {
        html += `
            <div class="accordion-item" data-index="${index}">
                <div class="accordion-header">
                    <span>${item.title}</span>
                    <span class="chevron">▼</span>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">${item.content}</div>
                </div>
            </div>
        `;
    });
    return html;
}

function renderFlashcardGrid(cards) {
    let html = '<div class="flashcard-grid">';
    cards.forEach(card => {
        html += `
            <div class="flashcard-wrapper" onclick="this.querySelector('.flashcard').classList.toggle('flipped')">
                <div class="flashcard">
                    <div class="flashcard-front" style="background-color: ${card.color}">${card.front}</div>
                    <div class="flashcard-back">${card.back}</div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderTimeline(events) {
    let html = '<div class="timeline">';
    events.forEach(event => {
        html += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <div class="timeline-year">${event.year}</div>
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                </div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderLabeledGraphic(data) {
    let html = `<div class="labeled-graphic">
        <div style="background:#DEE6EE; padding:40px; text-align:center; border-radius:12px; margin-bottom: 20px;">
            <h3>Buy, Borrow, or Build</h3>
            <p>Interactive Concept Map</p>
        </div>
    `;
    data.markers.forEach((marker, index) => {
        html += `
            <div class="lg-marker" style="left: ${marker.x}%; top: ${marker.y}%;" 
                 onclick="toggleTooltip(${index}, this)">+</div>
            <div class="lg-tooltip" id="tooltip-${index}" style="left: ${marker.x}%; top: ${marker.y + 10}%;">
                <strong>${marker.label}</strong><br>
                ${marker.detail}
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderProcess(steps) {
    let html = '<div class="process-container">';
    steps.forEach(step => {
        let exampleHtml = '';
        if (step.example) {
            exampleHtml = `
                <div class="process-example-wrap">
                    <button type="button" class="btn-toggle-example" onclick="toggleProcessExample(this)">
                        <span class="toggle-icon">💡</span>
                        <span class="toggle-text">${window.uiStrings ? window.uiStrings.viewExample : 'View Practical Example'}</span>
                        <span class="toggle-arrow">▼</span>
                    </button>
                    <div class="process-example-content">
                        <div class="process-example-box">
                            <span class="example-badge">Example</span>
                            <p>${step.example}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        html += `
            <div class="process-step">
                <div class="process-step-number">${step.number}</div>
                <h4>${step.title}</h4>
                <div>${step.content}</div>
                ${exampleHtml}
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderTabs(tabs) {
    const idPrefix = Math.random().toString(36).substr(2, 9);
    let headerHtml = '<div class="tabs-header">';
    let contentHtml = '<div class="tabs-body">';
    
    tabs.forEach((tab, index) => {
        const activeClass = index === 0 ? 'active' : '';
        headerHtml += `<button class="tab-button ${activeClass}" onclick="switchTab('${idPrefix}', ${index})">${tab.label}</button>`;
        contentHtml += `<div id="tab-content-${idPrefix}-${index}" class="tab-content ${activeClass}">${tab.content}</div>`;
    });
    
    headerHtml += '</div>';
    contentHtml += '</div>';
    
    return `<div class="tabs-container">${headerHtml}${contentHtml}</div>`;
}

function renderProgressBars(bars) {
    let html = '<div>';
    bars.forEach((bar, index) => {
        html += `
            <div class="stat-bar-container" onclick="this.classList.toggle('open')" style="cursor:pointer; margin-bottom: 20px;">
                <div class="stat-bar-label">
                    <span>${bar.label}</span>
                    <span>${bar.percent}%</span>
                </div>
                <div class="stat-bar-track">
                    <div class="stat-bar-fill" style="width: 0%" data-width="${bar.percent}%"></div>
                </div>
                <div class="stat-bar-desc">${bar.desc}</div>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderComparisonTable(data) {
    let html = '<div class="comparison-table-wrapper"><table class="comparison-table"><thead><tr>';
    data.headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';
    
    data.rows.forEach(row => {
        html += '<tr>';
        row.forEach((cell, i) => {
            if(i === 0) html += `<td><strong>${cell}</strong></td>`;
            else html += `<td>${cell}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody></table></div>';
    return html;
}

function renderCardGallery(cards) {
    let html = '<div class="card-gallery">';
    cards.forEach(card => {
        html += `
            <div class="gallery-card">
                <div class="gallery-card-icon" style="background-color: ${card.accentColor}">${card.iconSvg || card.icon}</div>
                <h4 style="color: ${card.accentColor}">${card.title}</h4>
                <p>${card.description}</p>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function renderScenario(data) {
    const idPrefix = Math.random().toString(36).substr(2, 9);
    let html = `
        <div class="scenario-box">
            <div class="scenario-situation">👤 ${data.situation}</div>
            <div class="scenario-options">
    `;
    data.options.forEach((opt, index) => {
        html += `<button class="scenario-option" onclick="handleScenario('${idPrefix}', ${index}, ${data.correctIndex})">${opt}</button>`;
    });
    html += `
            </div>
            <div id="scenario-feedback-${idPrefix}" class="scenario-feedback">
                <!-- Feedback will be injected here -->
            </div>
        </div>
    `;
    // Store feedbacks in window to be accessible by handleScenario
    window[`feedbacks_${idPrefix}`] = data.feedbacks;
    return html;
}

function renderKnowledgeCheck(questions, isExam = false) {
    const idPrefix = Math.random().toString(36).substr(2, 9);
    let html = `<div class="kc-container" id="kc-container-${idPrefix}">`;
    
    questions.forEach((q, qIndex) => {
        html += `
            <div class="kc-question-block" style="margin-bottom: 30px;">
                <div class="kc-question">${q.question}</div>
                <div class="kc-options">
        `;
        q.options.forEach((opt, oIndex) => {
            html += `<div class="kc-option" onclick="handleKCOption('${idPrefix}', ${qIndex}, ${oIndex}, ${q.correctIndex})" id="opt-${idPrefix}-${qIndex}-${oIndex}">${opt}</div>`;
        });
        html += `
                </div>
                <div id="kc-feedback-${idPrefix}-${qIndex}" class="kc-feedback">
                    ${q.feedback}
                </div>
            </div>
        `;
    });
    
    if (isExam) {
        html += `<button class="btn btn-primary kc-submit" onclick="submitExam('${idPrefix}', ${questions.length})">${window.uiStrings ? window.uiStrings.submitAnswers : 'Submit Answers'}</button>`;
        html += `<div id="exam-result-${idPrefix}"></div>`;
    }
    
    html += '</div>';
    return html;
}

// Global UI interaction helpers
window.switchTab = function(prefix, index) {
    document.querySelectorAll(`button[onclick^="switchTab('${prefix}'"]`).forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`div[id^="tab-content-${prefix}"]`).forEach(el => el.classList.remove('active'));
    
    document.querySelectorAll(`button[onclick^="switchTab('${prefix}'"]`)[index].classList.add('active');
    document.getElementById(`tab-content-${prefix}-${index}`).classList.add('active');
};

window.toggleTooltip = function(index, markerElement) {
    document.querySelectorAll('.lg-tooltip').forEach(el => {
        if(el.id !== `tooltip-${index}`) el.classList.remove('open');
    });
    document.getElementById(`tooltip-${index}`).classList.toggle('open');
    if (markerElement) {
        markerElement.classList.add('visited');
        markerElement.innerHTML = '✓';
    }
};

window.handleScenario = function(prefix, selectedIndex, correctIndex) {
    const feedbackBox = document.getElementById(`scenario-feedback-${prefix}`);
    const feedbacks = window[`feedbacks_${prefix}`];
    
    feedbackBox.style.display = 'block';
    feedbackBox.className = 'scenario-feedback ' + (selectedIndex === correctIndex ? 'correct' : 'incorrect');
    feedbackBox.innerHTML = `<strong>${selectedIndex === correctIndex ? 'Correct!' : 'Not quite.'}</strong><br>${feedbacks[selectedIndex]}`;
};

window.handleKCOption = function(prefix, qIndex, selectedIndex, correctIndex) {
    // Disable all options for this question
    for(let i=0; i<4; i++) {
        const el = document.getElementById(`opt-${prefix}-${qIndex}-${i}`);
        if(el) el.classList.add('disabled');
    }
    
    const selectedEl = document.getElementById(`opt-${prefix}-${qIndex}-${selectedIndex}`);
    const feedbackEl = document.getElementById(`kc-feedback-${prefix}-${qIndex}`);
    
    if (!feedbackEl.hasAttribute('data-original')) {
        let text = feedbackEl.innerHTML.trim();
        if (text.startsWith("Correct! ")) {
            text = text.substring(9);
        }
        feedbackEl.setAttribute('data-original', text);
    }
    
    if(selectedIndex === correctIndex) {
        selectedEl.classList.add('selected', 'correct');
        feedbackEl.innerHTML = `<strong>Correct!</strong> ${feedbackEl.getAttribute('data-original')}`;
    } else {
        selectedEl.classList.add('selected', 'incorrect');
        const correctEl = document.getElementById(`opt-${prefix}-${qIndex}-${correctIndex}`);
        if(correctEl) correctEl.classList.add('selected', 'correct');
        feedbackEl.innerHTML = `<strong>Almost there...</strong> ${feedbackEl.getAttribute('data-original')}`;
    }
    
    feedbackEl.style.display = 'block';
    
    // Store in global state if exists
    if(window.recordKnowledgeCheck) {
        window.recordKnowledgeCheck(selectedIndex === correctIndex);
    }
};

window.submitExam = function(prefix, totalQs) {
    let score = 0;
    // Just a simple calculation based on DOM state for demo purposes
    for(let i=0; i<totalQs; i++) {
        const block = document.getElementById(`kc-feedback-${prefix}-${i}`);
        const selectedCorrect = document.querySelector(`[id^="opt-${prefix}-${i}"].selected.correct`);
        if (selectedCorrect) score++;
    }
    
    const resultDiv = document.getElementById(`exam-result-${prefix}`);
    let resultMsg = "";
    if(score >= 7) resultMsg = window.uiStrings ? window.uiStrings.mspExpert : "🏆 MSP Expert — You're ready for Trusted Advisor conversations.";
    else if(score >= 5) resultMsg = window.uiStrings ? window.uiStrings.strongFoundation : "✅ Strong Foundation — Review the modules where you missed questions.";
    else resultMsg = window.uiStrings ? window.uiStrings.reviewRecommended : "📚 Review Recommended — Revisit the key modules before client conversations.";
    
    resultDiv.innerHTML = `<div class="final-score">
        <div class="score-circle">${score}/${totalQs}</div>
        <h3>${resultMsg}</h3>
    </div>`;
    
    if(window.completeExam) window.completeExam(score);
};

window.toggleProcessExample = function(btn) {
    const wrap = btn.closest('.process-example-wrap');
    if (!wrap) return;
    const content = wrap.querySelector('.process-example-content');
    const textSpan = btn.querySelector('.toggle-text');
    const isExpanded = btn.classList.toggle('expanded');
    
    if (isExpanded) {
        content.classList.add('open');
        textSpan.textContent = window.uiStrings ? window.uiStrings.hideExample : 'Hide Example';
    } else {
        content.classList.remove('open');
        textSpan.textContent = window.uiStrings ? window.uiStrings.viewExample : 'View Practical Example';
    }
};




