// Global State
let recipes = [];
let filteredRecipes = [];
let activeMoment = 'all';
let activeBook = null;
let activeIngredient = null;
let searchQuery = '';

// DOM Elements
const searchInput = document.getElementById('search-input');
const momentsTabs = document.querySelectorAll('.moment-tab');
const bookFiltersContainer = document.getElementById('book-filters-container');
const ingredientCategoriesContainer = document.getElementById('ingredient-categories-container');
const resultsCount = document.getElementById('results-count');
const recipeGrid = document.getElementById('recipe-grid');
const activeFiltersBar = document.getElementById('active-filters-bar');
const activeFiltersContainer = document.getElementById('active-filters-container');
const clearAllBtn = document.getElementById('clear-all-btn');
const toggleGlossaryBtn = document.getElementById('toggle-glossary-btn');
const toggleBooksBtn = document.getElementById('toggle-books-btn');

// Modal Elements
const recipeModal = document.getElementById('recipe-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalRecipeTitle = document.getElementById('modal-recipe-title');
const modalRecipeBook = document.getElementById('modal-recipe-book');
const modalRecipeTime = document.querySelector('#modal-recipe-time span');
const modalRecipeYield = document.querySelector('#modal-recipe-yield span');
const modalRecipePreheat = document.getElementById('modal-recipe-preheat');
const modalRecipePreheatSpan = document.querySelector('#modal-recipe-preheat span');
const modalRecipeImage = document.getElementById('modal-recipe-image');
const modalRecipeMoments = document.getElementById('modal-recipe-moments');
const modalIngredientsList = document.getElementById('modal-ingredients-list');
const modalStepsList = document.getElementById('modal-steps-list');
const modalIngCount = document.getElementById('modal-ing-count');
const modalStepsCount = document.getElementById('modal-steps-count');
const modalTabs = document.querySelectorAll('.content-tab');
const tabPanes = document.querySelectorAll('.tab-pane');

// Ingredient Categories Map (for Glossary)
const ingredientCategoriesMap = {
    "Vegetales y Frutas": [
        { name: "Papa / Batata", keywords: ["papa", "batata", "papas", "batatas"] },
        { name: "Cebolla", keywords: ["cebolla", "cebollas", "verdeo", "puerro"] },
        { name: "Zanahoria", keywords: ["zanahoria", "zanahorias"] },
        { name: "Tomate", keywords: ["tomate", "tomates", "tomtitos"] },
        { name: "Palta / Aguacate", keywords: ["palta", "aguacate", "paltas"] },
        { name: "Limón / Naranja", keywords: ["limón", "limon", "naranja", "limones", "naranjas", "cítrico"] },
        { name: "Espinaca / Acelga", keywords: ["espinaca", "espinacas", "acelga", "hojas verdes"] },
        { name: "Brócoli / Zucchini", keywords: ["brócoli", "brocoli", "zucchini", "calabacín", "zucchinis"] },
        { name: "Calabaza / Zapallo", keywords: ["calabaza", "zapallo", "puré de calabaza", "calabazas"] },
        { name: "Manzana / Banana", keywords: ["manzana", "banana", "bananas", "manzanas", "plátano"] },
        { name: "Arándanos / Frutilla", keywords: ["arándanos", "arandanos", "frutilla", "frutillas", "frutos rojos", "berries"] },
        { name: "Ajo / Perejil", keywords: ["ajo", "perejil", "ajos"] },
        { name: "Champiñones", keywords: ["champiñones", "champiñon", "champignones", "hongos"] },
        { name: "Morrón / Pimiento", keywords: ["morrón", "morron", "pimiento", "pimientos", "ají", "aji"] }
    ],
    "Carnes y Pescados": [
        { name: "Pollo", keywords: ["pollo", "pechuga", "pechugas", "patas de pollo", "alitas"] },
        { name: "Carne Vacuna", keywords: ["carne", "picada", "entraña", "vacío", "vacu", "lomo", "asado", "milanesas de carne", "bife", "bifes"] },
        { name: "Carne de Cerdo", keywords: ["cerdo", "bondiola", "solomillo", "costillitas"] },
        { name: "Jamón / Panceta", keywords: ["jamón", "jamon", "panceta", "bacon", "cocido"] },
        { name: "Pescados / Mariscos", keywords: ["atún", "atun", "merluza", "pescado", "salmón", "salmon", "langostinos", "camarones"] },
        { name: "Salchichas / Chorizo", keywords: ["salchicha", "salchichas", "salchichitas", "choripán", "choripan", "chorizo", "embutido"] }
    ],
    "Lácteos y Huevos": [
        { name: "Queso", keywords: ["queso", "cheddar", "mozzarella", "mussarela", "ricota", "provoleta", "parmesano", "crema de queso", "cremoso", "rallado"] },
        { name: "Leche", keywords: ["leche", "crema de leche", "leche entera", "leche descremada"] },
        { name: "Manteca / Mantequilla", keywords: ["manteca", "mantequilla"] },
        { name: "Huevo", keywords: ["huevo", "huevos", "yema", "yemas", "clara", "claras"] },
        { name: "Yogur", keywords: ["yogur", "yogurt", "griego"] }
    ],
    "Harinas y Cereales": [
        { name: "Harina", keywords: ["harina", "premezcla", "harina 0000", "harina integral", "leudante"] },
        { name: "Avena", keywords: ["avena", "instantánea", "hojuelas"] },
        { name: "Arroz / Quinoa", keywords: ["arroz", "quinoa", "yamaní"] },
        { name: "Pan / Hojaldre / Tortillas", keywords: ["pan", "hojaldre", "tortilla", "tortillas", "rallado", "pan rallado", "rebozado", "croûtons"] },
        { name: "Legumbres", keywords: ["lentejas", "garbanzos", "porotos", "alubias", "arvejas"] },
        { name: "Maicena / Fécula", keywords: ["maicena", "fécula", "fecula", "almidón"] }
    ],
    "Aceites y Condimentos": [
        { name: "Aceite", keywords: ["aceite", "oliva", "girasol", "spray", "rocío vegetal"] },
        { name: "Sal / Pimienta", keywords: ["sal", "sal fina", "sal gruesa", "pimienta", "pimienta negra"] },
        { name: "Hierbas / Orégano", keywords: ["orégano", "oregano", "laurel", "albahaca", "romero", "tomillo", "hierbas"] },
        { name: "Especias / Canela", keywords: ["canela", "comino", "pimentón", "pimenton", "nuez moscada", "curry", "cúrcuma"] },
        { name: "Salsas", keywords: ["tahini", "mostaza", "mayonesa", "kétchup", "salsa", "soja", "guacamole", "crema agria"] }
    ],
    "Dulces y Frutos Secos": [
        { name: "Azúcar", keywords: ["azúcar", "azucar", "impalpable", "mascabo", "negra", "edulcorante"] },
        { name: "Miel", keywords: ["miel"] },
        { name: "Dulce de Leche", keywords: ["dulce de leche"] },
        { name: "Chocolate / Chips", keywords: ["chocolate", "chips", "cacao", "cobertura"] },
        { name: "Frutos Secos / Semillas", keywords: ["nuez", "nueces", "maní", "mani", "almendras", "avellanas", "sésamo", "chía", "lino", "girasol"] },
        { name: "Vainilla", keywords: ["vainilla", "esencia", "extracto"] }
    ]
};

// Helper function to remove accents from spanish strings for cleaner searching
function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Check if a recipe matches a specific ingredient category name (e.g. "Pollo")
function recipeContainsIngredient(recipe, ingredientName) {
    // Find the keywords list for this ingredient name
    let keywords = [];
    for (const cat in ingredientCategoriesMap) {
        const found = ingredientCategoriesMap[cat].find(item => item.name === ingredientName);
        if (found) {
            keywords = found.keywords;
            break;
        }
    }
    
    if (keywords.length === 0) return false;
    
    // Check if any ingredient in recipe matches any of the keywords
    return recipe.ingredients.some(ing => {
        const normalizedIng = removeAccents(ing);
        return keywords.some(keyword => {
            const regex = new RegExp(`\\b${removeAccents(keyword)}\\b|${removeAccents(keyword)}`, 'i');
            return regex.test(normalizedIng);
        });
    });
}

// Initial Loading
async function init() {
    try {
        const response = await fetch('recipes.json');
        recipes = await response.json();
        filteredRecipes = [...recipes];
        
        // Render UI panels
        renderBookFilters();
        renderIngredientGlossary();
        
        // Collapse filters by default on mobile on load
        if (window.innerWidth < 768) {
            bookFiltersContainer.classList.add('collapsed');
            if (toggleBooksBtn) toggleBooksBtn.classList.add('collapsed');
            ingredientCategoriesContainer.classList.add('collapsed');
            if (toggleGlossaryBtn) toggleGlossaryBtn.classList.add('collapsed');
        }
        
        applyFilters();
        setupEventListeners();
    } catch (error) {
        console.error('Error cargando las recetas:', error);
        resultsCount.textContent = 'Error al cargar las recetas.';
    }
}

// Render Book Filter Panel
function renderBookFilters() {
    // Count recipes per book
    const bookCounts = {};
    recipes.forEach(recipe => {
        bookCounts[recipe.book] = (bookCounts[recipe.book] || 0) + 1;
    });
    
    bookFiltersContainer.innerHTML = '';
    
    // Sort books alphabetically
    const books = Object.keys(bookCounts).sort();
    
    books.forEach(book => {
        const count = bookCounts[book];
        const btn = document.createElement('button');
        btn.className = `book-filter-btn ${activeBook === book ? 'active' : ''}`;
        btn.innerHTML = `
            <span>${book}</span>
            <span class="recipe-count-badge">${count}</span>
        `;
        btn.addEventListener('click', () => {
            if (activeBook === book) {
                activeBook = null; // Toggle off
            } else {
                activeBook = book;
            }
            updateActiveBookUI();
            applyFilters();
        });
        bookFiltersContainer.appendChild(btn);
    });
}

function updateActiveBookUI() {
    const buttons = bookFiltersContainer.querySelectorAll('.book-filter-btn');
    buttons.forEach(btn => {
        const titleSpan = btn.querySelector('span');
        if (titleSpan && titleSpan.textContent === activeBook) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Render Ingredient Glossary Panel
function renderIngredientGlossary() {
    ingredientCategoriesContainer.innerHTML = '';
    
    // Loop through defined glossary categories
    for (const [category, items] of Object.entries(ingredientCategoriesMap)) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        
        const h4 = document.createElement('h4');
        h4.textContent = category;
        groupDiv.appendChild(h4);
        
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'ingredient-tags-container';
        
        items.forEach(item => {
            // Count how many recipes contain this ingredient
            const count = recipes.filter(r => recipeContainsIngredient(r, item.name)).length;
            if (count > 0) {
                const btn = document.createElement('button');
                btn.className = `ingredient-btn ${activeIngredient === item.name ? 'active' : ''}`;
                btn.innerHTML = `${item.name} <span>(${count})</span>`;
                btn.addEventListener('click', () => {
                    if (activeIngredient === item.name) {
                        activeIngredient = null;
                    } else {
                        activeIngredient = item.name;
                    }
                    updateActiveIngredientUI();
                    applyFilters();
                });
                tagsContainer.appendChild(btn);
            }
        });
        
        if (tagsContainer.children.length > 0) {
            groupDiv.appendChild(tagsContainer);
            ingredientCategoriesContainer.appendChild(groupDiv);
        }
    }
}

function updateActiveIngredientUI() {
    const buttons = ingredientCategoriesContainer.querySelectorAll('.ingredient-btn');
    buttons.forEach(btn => {
        if (btn.textContent.startsWith(activeIngredient)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Apply Filters and Search
function applyFilters() {
    filteredRecipes = recipes.filter(recipe => {
        // Search bar query check (matches title or ingredients list)
        if (searchQuery) {
            const q = removeAccents(searchQuery);
            const matchesTitle = removeAccents(recipe.title).includes(q);
            const matchesIng = recipe.ingredients.some(ing => removeAccents(ing).includes(q));
            if (!matchesTitle && !matchesIng) return false;
        }
        
        // Moment filter
        if (activeMoment !== 'all') {
            if (!recipe.moments.includes(activeMoment)) return false;
        }
        
        // Book filter
        if (activeBook) {
            if (recipe.book !== activeBook) return false;
        }
        
        // Ingredient Glossary filter
        if (activeIngredient) {
            if (!recipeContainsIngredient(recipe, activeIngredient)) return false;
        }
        
        return true;
    });
    
    renderActiveFilterBar();
    renderRecipeGrid();
}

// Render Active Filter Pills
function renderActiveFilterBar() {
    activeFiltersContainer.innerHTML = '';
    let hasFilters = false;
    
    if (activeBook) {
        hasFilters = true;
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `Libro: ${activeBook} <i class="fa-solid fa-xmark"></i>`;
        tag.addEventListener('click', () => {
            activeBook = null;
            updateActiveBookUI();
            applyFilters();
        });
        activeFiltersContainer.appendChild(tag);
    }
    
    if (activeMoment !== 'all') {
        hasFilters = true;
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        const momentNames = {
            desayuno: "Desayunos",
            almuerzo: "Almuerzos",
            merienda: "Meriendas",
            cena: "Cenas"
        };
        tag.innerHTML = `Momento: ${momentNames[activeMoment]} <i class="fa-solid fa-xmark"></i>`;
        tag.addEventListener('click', () => {
            activeMoment = 'all';
            momentsTabs.forEach(tab => {
                if (tab.dataset.moment === 'all') tab.classList.add('active');
                else tab.classList.remove('active');
            });
            applyFilters();
        });
        activeFiltersContainer.appendChild(tag);
    }
    
    if (activeIngredient) {
        hasFilters = true;
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `Ingrediente: ${activeIngredient} <i class="fa-solid fa-xmark"></i>`;
        tag.addEventListener('click', () => {
            activeIngredient = null;
            updateActiveIngredientUI();
            applyFilters();
        });
        activeFiltersContainer.appendChild(tag);
    }
    
    if (searchQuery) {
        hasFilters = true;
        const tag = document.createElement('span');
        tag.className = 'filter-tag';
        tag.innerHTML = `Búsqueda: "${searchQuery}" <i class="fa-solid fa-xmark"></i>`;
        tag.addEventListener('click', () => {
            searchQuery = '';
            searchInput.value = '';
            applyFilters();
        });
        activeFiltersContainer.appendChild(tag);
    }
    
    if (hasFilters) {
        activeFiltersBar.style.display = 'flex';
    } else {
        activeFiltersBar.style.display = 'none';
    }
}

// Render Recipes Grid
function renderRecipeGrid() {
    recipeGrid.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        resultsCount.textContent = 'No se encontraron recetas con los filtros actuales.';
        return;
    }
    
    resultsCount.textContent = `${filteredRecipes.length} recetas encontradas`;
    
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        let imageHTML = '';
        if (recipe.image) {
            imageHTML = `<img src="${recipe.image}" alt="${recipe.title}" loading="lazy">`;
        } else {
            imageHTML = `
                <div class="no-image-placeholder">
                    <i class="fa-solid fa-image"></i>
                    <span>Sin foto</span>
                </div>
            `;
        }
        
        // Build dots for moments
        const dotsHTML = recipe.moments.map(m => `<span class="moment-dot ${m}" title="${m}"></span>`).join('');
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                ${imageHTML}
            </div>
            <div class="card-content">
                <span class="card-origin">${recipe.book}</span>
                <h3 class="card-title">${recipe.title}</h3>
                <div class="card-footer">
                    <div class="card-meta-item">
                        <i class="fa-regular fa-clock"></i>
                        <span>${recipe.time || 'N/A'}</span>
                    </div>
                    <div class="card-moments">
                        ${dotsHTML}
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(recipe));
        recipeGrid.appendChild(card);
    });
}

// Open Detail Modal
function openModal(recipe) {
    modalRecipeTitle.textContent = recipe.title;
    modalRecipeBook.textContent = recipe.book;
    modalRecipeTime.textContent = recipe.time || 'N/A';
    modalRecipeYield.textContent = recipe.yield || 'N/A';
    
    if (recipe.preheat) {
        modalRecipePreheatSpan.textContent = recipe.preheat;
        modalRecipePreheat.style.display = 'flex';
    } else {
        modalRecipePreheat.style.display = 'none';
    }
    
    if (recipe.image) {
        modalRecipeImage.src = recipe.image;
        modalRecipeImage.style.display = 'block';
    } else {
        modalRecipeImage.style.display = 'none';
    }
    
    // Moments pills
    modalRecipeMoments.innerHTML = recipe.moments.map(m => `
        <span class="moment-pill-tag ${m}">${m}</span>
    `).join('');
    
    // Ingredients count and render
    modalIngCount.textContent = recipe.ingredients.length;
    modalIngredientsList.innerHTML = '';
    recipe.ingredients.forEach((ing, i) => {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `ing-${i}`;
        
        const span = document.createElement('span');
        span.textContent = ing;
        
        li.appendChild(checkbox);
        li.appendChild(span);
        
        li.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            if (checkbox.checked) {
                li.classList.add('checked');
            } else {
                li.classList.remove('checked');
            }
        });
        
        modalIngredientsList.appendChild(li);
    });
    
    // Steps count and render
    modalStepsCount.textContent = recipe.steps.length;
    modalStepsList.innerHTML = '';
    recipe.steps.forEach((step, i) => {
        const li = document.createElement('li');
        
        const num = document.createElement('span');
        num.className = 'step-number';
        num.textContent = i + 1;
        
        const text = document.createElement('p');
        text.textContent = step;
        
        li.appendChild(num);
        li.appendChild(text);
        
        li.addEventListener('click', () => {
            li.classList.toggle('checked');
        });
        
        modalStepsList.appendChild(li);
    });
    
    // Reset modal tabs to ingredients first
    modalTabs.forEach(t => {
        if (t.dataset.tab === 'ingredients') t.classList.add('active');
        else t.classList.remove('active');
    });
    tabPanes.forEach(p => {
        if (p.id === 'pane-ingredients') p.classList.add('active');
        else p.classList.remove('active');
    });
    
    // Show Modal
    recipeModal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// Close Modal
function closeModal() {
    recipeModal.style.display = 'none';
    document.body.style.overflow = '';
}

// Setup Event Listeners
function setupEventListeners() {
    // Search Bar Input listener
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        applyFilters();
    });
    
    // Moments tabs listeners
    momentsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            momentsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeMoment = tab.dataset.moment;
            applyFilters();
        });
    });
    
    // Clear all filters btn
    clearAllBtn.addEventListener('click', () => {
        activeMoment = 'all';
        activeBook = null;
        activeIngredient = null;
        searchQuery = '';
        searchInput.value = '';
        
        // Reset moments tabs UI
        momentsTabs.forEach(tab => {
            if (tab.dataset.moment === 'all') tab.classList.add('active');
            else tab.classList.remove('active');
        });
        
        updateActiveBookUI();
        updateActiveIngredientUI();
        applyFilters();
    });
    
    // Glossary collapsible toggle
    toggleGlossaryBtn.addEventListener('click', () => {
        ingredientCategoriesContainer.classList.toggle('collapsed');
        toggleGlossaryBtn.classList.toggle('collapsed');
    });
    
    // Books collapsible toggle
    if (toggleBooksBtn) {
        toggleBooksBtn.addEventListener('click', () => {
            bookFiltersContainer.classList.toggle('collapsed');
            toggleBooksBtn.classList.toggle('collapsed');
        });
    }
    
    // Modal tabs listeners
    modalTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            modalTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const targetPaneId = `pane-${tab.dataset.tab}`;
            tabPanes.forEach(pane => {
                if (pane.id === targetPaneId) pane.classList.add('active');
                else pane.classList.remove('active');
            });
        });
    });
    
    // Close modal handlers
    closeModalBtn.addEventListener('click', closeModal);
    recipeModal.addEventListener('click', (e) => {
        if (e.target === recipeModal) closeModal();
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && recipeModal.style.display === 'flex') {
            closeModal();
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);
