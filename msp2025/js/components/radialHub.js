// Global Store for Radial Hubs
window._radialHubData = window._radialHubData || {};

window.renderRadialHub = function(data) {
    const hubId = 'hub_' + Math.random().toString(36).substr(2, 9);
    
    // Limpiar modal anterior del body si el hub se vuelve a renderizar
    document.querySelectorAll('.radial-modal-overlay').forEach(el => {
        if (el.parentNode === document.body) {
            document.body.removeChild(el);
        }
    });
    
    // Flatten items with phase references
    const allItems = [];
    let globalIndex = 0;
    
    data.phases.forEach((phase, pIdx) => {
        phase.items.forEach((item, iIdx) => {
            allItems.push({
                ...item,
                globalIndex: globalIndex,
                globalNumber: globalIndex + 1,
                phaseIndex: pIdx,
                phaseId: phase.id,
                phaseName: phase.name,
                phaseShortName: phase.shortName || phase.name,
                phaseColor: phase.color,
                phaseBadge: phase.badge || `Phase ${pIdx + 1}`
            });
            globalIndex++;
        });
    });

    window._radialHubData[hubId] = {
        phases: data.phases,
        allItems: allItems,
        seenSet: new Set(),
        currentIndex: 0
    };

    const totalItems = allItems.length;
    const cx = 260;
    const cy = 260;
    const r = 205;
    
    // Generate SVG Nodes & Phase Arcs
    let nodesSvg = '';
    let arcsSvg = '';

    const angleStep = 360 / totalItems;
    let currentStartAngle = -90;

    data.phases.forEach((phase, pIdx) => {
        const count = phase.items.length;
        const phaseSpan = count * angleStep;
        const startRad = (currentStartAngle * Math.PI) / 180;
        const endRad = ((currentStartAngle + phaseSpan - 2) * Math.PI) / 180;
        
        const x1 = cx + (r + 20) * Math.cos(startRad);
        const y1 = cy + (r + 20) * Math.sin(startRad);
        const x2 = cx + (r + 20) * Math.cos(endRad);
        const y2 = cy + (r + 20) * Math.sin(endRad);
        const largeArc = phaseSpan > 180 ? 1 : 0;

        arcsSvg += `
            <path d="M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r + 20} ${r + 20} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)}" 
                  fill="none" 
                  stroke="${phase.color}" 
                  stroke-width="6" 
                  stroke-linecap="round"
                  opacity="0.4"
                  class="radial-phase-arc"
                  data-phase="${pIdx}" />
        `;
        currentStartAngle += phaseSpan;
    });

    // Generate Nodes
    allItems.forEach((item, idx) => {
        const angleDeg = -90 + (idx * angleStep);
        const angleRad = (angleDeg * Math.PI) / 180;
        const nx = cx + r * Math.cos(angleRad);
        const ny = cy + r * Math.sin(angleRad);

        nodesSvg += `
            <g class="radial-node-group" 
               id="rnode-${hubId}-${idx}" 
               data-index="${idx}" 
               onclick="window.openRadialModal('${hubId}', ${idx})"
               style="--phase-color: ${item.phaseColor};"
               tabindex="0"
               role="button"
               aria-label="Tactic ${item.globalNumber}: ${item.title}">
                <circle class="radial-node-bg" cx="${nx.toFixed(2)}" cy="${ny.toFixed(2)}" r="15" />
                <text class="radial-node-num" x="${nx.toFixed(2)}" y="${(ny + 4).toFixed(2)}" text-anchor="middle">${item.globalNumber}</text>
                <text class="radial-node-check" x="${nx.toFixed(2)}" y="${(ny + 4).toFixed(2)}" text-anchor="middle">✓</text>
            </g>
        `;
    });

    // Phase Legend / Filter Pills
    let phaseLegendHtml = '';
    let runningIdx = 0;
    data.phases.forEach((phase, pIdx) => {
        const startForPhase = runningIdx;
        phaseLegendHtml += `
            <button type="button" 
                    class="radial-legend-pill" 
                    id="rlegend-pill-${hubId}-${pIdx}" 
                    style="--phase-color: ${phase.color}"
                    onclick="window.openRadialModal('${hubId}', ${startForPhase})">
                <span class="legend-dot" style="background-color: ${phase.color}"></span>
                <span class="legend-text">${phase.name}</span>
                <span class="legend-count">(${phase.items.length})</span>
            </button>
        `;
        runningIdx += phase.items.length;
    });

    return `
        <div class="radial-hub-container" id="${hubId}">
            <div class="radial-hub-topbar">
                <div class="radial-hub-titles">
                    <span class="radial-badge-pill">⚡ INTERACTIVE PLAYBOOK</span>
                    <h3>${data.title || 'Operational Playbook (26 Practices)'}</h3>
                    <p>${window.uiStrings ? window.uiStrings.hubDescription : 'Click on any point or phase to open the interactive viewer. The system will automatically track your progress.'}</p>
                </div>
                <div class="radial-progress-tracker">
                    <div class="tracker-label">${window.uiStrings ? window.uiStrings.playbookProgress : 'Playbook Progress:'}</div>
                    <div class="tracker-status">
                        <span class="tracker-count" id="rtracker-count-${hubId}">0</span> ${window.uiStrings ? window.uiStrings.of : 'of'} ${totalItems} ${window.uiStrings ? window.uiStrings.explored : 'explored'}
                    </div>
                    <div class="tracker-bar-bg">
                        <div class="tracker-bar-fill" id="rtracker-fill-${hubId}" style="width: 0%;"></div>
                    </div>
                </div>
            </div>

        <div class="radial-hub-wrapper">
            <!-- Top Progress Bar -->
            <div class="radial-progress-bar">
                <div class="radial-progress-info">
                    <strong>${window.uiStrings ? window.uiStrings.playbookProgress : 'Playbook Progress'}</strong>
                    <span><span id="rtracker-count-${hubId}">0</span> ${window.uiStrings ? window.uiStrings.of : 'of'} ${totalItems} ${window.uiStrings ? window.uiStrings.completed : 'completed'}</span>
                </div>
                <div class="radial-progress-track">
                    <div class="radial-progress-fill" id="rtracker-fill-${hubId}" style="width: 0%"></div>
                </div>
            </div>

            <!-- Hub Container -->
            <div class="radial-hub-container" id="${hubId}">
                <!-- Phase Legend -->
                <div class="radial-legend">
                    ${phaseLegendHtml}
                </div>

                <!-- Main SVG Hub -->
                <div class="radial-svg-box">
                    <svg viewBox="0 0 520 520" width="100%" height="100%">
                        <defs>
                            <radialGradient id="grad-core-${hubId}" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#ffffff" />
                                <stop offset="100%" stop-color="#f8fafc" />
                            </radialGradient>
                        </defs>
                        <!-- Outer track rings -->
                        <circle cx="260" cy="260" r="225" fill="none" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4 4" />
                        <circle cx="260" cy="260" r="205" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
                        <circle cx="260" cy="260" r="145" fill="none" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />

                        <!-- Phase Colored Arcs -->
                        ${arcsSvg}

                        <!-- Center Core Hub -->
                        <g class="radial-center-hub-interactive" onclick="window.openRadialModal('${hubId}', 0)" role="button" tabindex="0">
                            <circle cx="260" cy="260" r="120" fill="url(#grad-core-${hubId})" stroke="#cbd5e1" stroke-width="2" class="center-hub-bg" />
                            <circle cx="260" cy="260" r="112" fill="none" stroke="#2C4154" stroke-width="1.5" opacity="0.25" />
                            
                            <text x="260" y="215" class="center-hub-kicker" text-anchor="middle">${window.uiStrings ? window.uiStrings.playbookUpper : 'OPERATIONAL PLAYBOOK'}</text>
                            <text x="260" y="250" class="center-hub-main" text-anchor="middle">26 ${window.uiStrings ? window.uiStrings.tactics : 'Tactics'}</text>
                            <text x="260" y="280" class="center-hub-action" id="rcore-action-${hubId}" text-anchor="middle">▶ ${window.uiStrings ? window.uiStrings.clickToExplore : 'Click to Explore'}</text>
                            <text x="260" y="305" class="center-hub-seen-sub" id="rcore-seen-${hubId}" text-anchor="middle">0 / ${totalItems} ${window.uiStrings ? window.uiStrings.viewed : 'Viewed'}</text>
                        </g>

                        <!-- Nodes -->
                        ${nodesSvg}
                    </svg>
                </div>
            </div>

            <!-- Modal Carousel Viewer -->
            <div class="radial-modal-overlay" id="rmodal-overlay-${hubId}" onclick="if(event.target === this) window.closeRadialModal('${hubId}')">
                <div class="radial-modal-card" id="rmodal-card-${hubId}">
                    <button type="button" class="radial-modal-close" onclick="window.closeRadialModal('${hubId}')" aria-label="Close modal">✕</button>
                    
                    <div class="radial-modal-header">
                        <span class="modal-phase-badge" id="rmodal-badge-${hubId}">Phase 1</span>
                        <div class="modal-counter" id="rmodal-counter-${hubId}">Tactic 1 of ${totalItems}</div>
                    </div>

                    <div class="radial-modal-body">
                        <h3 class="modal-tactic-title" id="rmodal-title-${hubId}">Title</h3>
                        <div class="modal-tactic-content" id="rmodal-content-${hubId}">Content</div>
                    </div>

                    <div class="radial-modal-footer">
                        <button type="button" class="btn-modal-nav prev" id="rmodal-prev-${hubId}" onclick="window.navigateRadialModal('${hubId}', -1)">
                            <span>←</span> ${window.uiStrings ? window.uiStrings.prev : 'Previous'}
                        </button>
                        
                        <div class="modal-scrubber-dots" id="rmodal-scrubber-${hubId}">
                            ${allItems.map((_, i) => `<span class="modal-dot" id="mdot-${hubId}-${i}" onclick="window.openRadialModal('${hubId}', ${i})"></span>`).join('')}
                        </div>

                        <button type="button" class="btn-modal-nav next" id="rmodal-next-${hubId}" onclick="window.navigateRadialModal('${hubId}', 1)">
                            ${window.uiStrings ? window.uiStrings.next : 'Next'} <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

window.openRadialModal = function(hubId, itemIndex) {
    const hub = window._radialHubData[hubId];
    if (!hub) return;

    let overlay = document.getElementById(`rmodal-overlay-${hubId}`);
    if (overlay && overlay.parentNode !== document.body) {
        document.body.appendChild(overlay);
    }

    if (itemIndex < 0) itemIndex = 0;
    if (itemIndex >= hub.allItems.length) itemIndex = hub.allItems.length - 1;

    hub.currentIndex = itemIndex;
    const item = hub.allItems[itemIndex];

    hub.seenSet.add(itemIndex);

    const container = document.getElementById(hubId);
    if (!container) return;

    container.querySelectorAll('.radial-node-group').forEach((el, idx) => {
        if (hub.seenSet.has(idx)) el.classList.add('seen');
        if (idx === itemIndex) el.classList.add('current-active');
        else el.classList.remove('current-active');
    });

    const seenCount = hub.seenSet.size;
    const total = hub.allItems.length;
    const percent = Math.round((seenCount / total) * 100);

    const trackerCount = document.getElementById(`rtracker-count-${hubId}`);
    const trackerFill = document.getElementById(`rtracker-fill-${hubId}`);
    const coreSeen = document.getElementById(`rcore-seen-${hubId}`);
    const coreAction = document.getElementById(`rcore-action-${hubId}`);

    if (trackerCount) trackerCount.textContent = seenCount;
    if (trackerFill) trackerFill.style.width = `${percent}%`;
    if (coreSeen) coreSeen.textContent = `${seenCount} / ${total} ${window.uiStrings ? window.uiStrings.viewed : 'Viewed'}`;
    if (coreAction) coreAction.textContent = (seenCount === total) ? `✓ ${window.uiStrings ? window.uiStrings.playbookCompleted : 'Playbook Completed'}` : `▶ ${window.uiStrings ? window.uiStrings.continueReading : 'Continue Reading'}`;

    const card = document.getElementById(`rmodal-card-${hubId}`);
    const badge = document.getElementById(`rmodal-badge-${hubId}`);
    const counter = document.getElementById(`rmodal-counter-${hubId}`);
    const title = document.getElementById(`rmodal-title-${hubId}`);
    const content = document.getElementById(`rmodal-content-${hubId}`);
    const prevBtn = document.getElementById(`rmodal-prev-${hubId}`);
    const nextBtn = document.getElementById(`rmodal-next-${hubId}`);

    if (card) card.style.setProperty('--phase-color', item.phaseColor);
    if (badge) {
        badge.textContent = item.phaseName;
        badge.style.backgroundColor = `${item.phaseColor}18`;
        badge.style.color = item.phaseColor;
        badge.style.borderColor = `${item.phaseColor}40`;
    }
    if (counter) {
        counter.innerHTML = `${window.uiStrings ? window.uiStrings.tactic : 'Tactic'} <strong>#${item.globalNumber}</strong> ${window.uiStrings ? window.uiStrings.of : 'of'} ${total}`;
    }
    if (title) title.textContent = item.title;
    if (content) content.innerHTML = item.content;

    if (prevBtn) prevBtn.disabled = (itemIndex === 0);
    if (nextBtn) nextBtn.disabled = (itemIndex === total - 1);

    container.querySelectorAll('.modal-dot').forEach((dot, dIdx) => {
        dot.className = 'modal-dot';
        if (dIdx === itemIndex) {
            dot.classList.add('active');
            dot.style.backgroundColor = item.phaseColor;
        } else if (hub.seenSet.has(dIdx)) {
            dot.classList.add('seen');
            dot.style.backgroundColor = '';
        }
    });

    if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    window._radialKeyHandler = function(e) {
        if (e.key === 'Escape') window.closeRadialModal(hubId);
        else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') window.navigateRadialModal(hubId, 1);
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') window.navigateRadialModal(hubId, -1);
    };
    window.addEventListener('keydown', window._radialKeyHandler);
};

window.navigateRadialModal = function(hubId, delta) {
    const hub = window._radialHubData[hubId];
    if (!hub) return;
    window.openRadialModal(hubId, hub.currentIndex + delta);
};

window.closeRadialModal = function(hubId) {
    const overlay = document.getElementById(`rmodal-overlay-${hubId}`);
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    if (window._radialKeyHandler) {
        window.removeEventListener('keydown', window._radialKeyHandler);
        window._radialKeyHandler = null;
    }
};
