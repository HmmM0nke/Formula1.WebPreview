const races = [
    { name: "Belgium GP", image: "Fotos/Races/B.webp", map: "Fotos/Maps/BelgiëMap.avif" },
    { name: "Hongarije GP", image: "Fotos/Races/H.jpg", map: "Fotos/Maps/HongarijeMap.avif" },
    { name: "Nederland GP", image: "Fotos/Races/NL.webp", map: "Fotos/Maps/NederlandMap.avif" },
    { name: "Italië GP", image: "Fotos/Races/I.jpg", map: "Fotos/Maps/ItaliëMap.avif" },
    { name: "Azerbaijan GP", image: "Fotos/Races/AB.jpg", map: "Fotos/Maps/AzerbaijanMap.avif" },
    { name: "Singapore GP", image: "Fotos/Races/S.jpg", map: "Fotos/Maps/SingaporeMap.avif" },
    { name: "Verenigde Staten GP", image: "Fotos/Races/VS.avif", map: "Fotos/Maps/VSMap.avif" },
    { name: "Mexico GP", image: "Fotos/Races/M.jpg", map: "Fotos/Maps/MexicoMap.avif" },
    { name: "Brazilië GP", image: "Fotos/Races/SP.jpg", map: "Fotos/Maps/BraziliëMap.avif" },
    { name: "Las Vegas GP", image: "Fotos/Races/LV.jpg", map: "Fotos/Maps/LasVegasMap.avif" },
    { name: "Qatar GP", image: "Fotos/Races/Q.jpg", map: "Fotos/Maps/QatarMap.avif" },
    { name: "Abu Dhabi GP", image: "Fotos/Races/AD.jpg", map: "Fotos/Maps/AbuDhabiMap.avif" }
];

const raceRow = document.getElementById("raceRow");
const mapSection = document.querySelector(".map-section");
const mapImage = document.getElementById("mapImage");

const visibleCards = 3;
let indexStart = 6; // start bij Amerika, Mexico, Brazilië
let activeIndex = null;

// Render de zichtbare kaarten
function renderRaces() {
    raceRow.innerHTML = "";

    for (let i = indexStart; i < indexStart + visibleCards; i++) {
        if (races[i]) {
            const card = document.createElement("div");
            card.classList.add("race-card");
            if (i === activeIndex) card.classList.add("active");
            card.innerHTML = `
                <img src="${races[i].image}">
                <p>${races[i].name}</p>
            `;
            card.addEventListener("click", () => {
                activeIndex = i;
                mapImage.src = races[i].map;
                mapSection.style.display = "block";
                renderRaces();
                updateKeyboardFocusable(); // update keyboard focus na click
            });
            raceRow.appendChild(card);
        }
    }
}

// Start zonder map
mapSection.style.display = "none";
renderRaces();

// Navigatie knoppen
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

leftBtn.addEventListener("click", () => {
    if (indexStart - visibleCards >= 0) {
        indexStart -= visibleCards;
        activeIndex = null;
        renderRaces();
        updateKeyboardFocusable();
    }
});

rightBtn.addEventListener("click", () => {
    if (indexStart + visibleCards < races.length) {
        indexStart += visibleCards;
        activeIndex = null;
        renderRaces();
        updateKeyboardFocusable();
    }
});

// ===== Keyboard navigatie =====
let focusable = [];
let currentIndex = 0;

function updateKeyboardFocusable() {
    // Verzamel alle zichtbare kaarten + knoppen + andere focusables
    focusable = Array.from(document.querySelectorAll("button, a, .race-card"));
    focusable.forEach(el => { if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","0"); });
    if(currentIndex >= focusable.length) currentIndex = 0;
    updateVisualFocus();
}

function updateVisualFocus() {
    focusable.forEach(el => el.classList.remove("keyboard-focus"));
    const el = focusable[currentIndex];
    if(!el) return;
    el.classList.add("keyboard-focus");
    el.scrollIntoView({behavior:"smooth", block:"center"});
}

function moveFocus(dir) {
    if(focusable.length === 0) return;
    const cur = focusable[currentIndex];
    const r = cur.getBoundingClientRect();
    let bestIndex = null;
    let bestScore = Infinity;

    focusable.forEach((el, idx) => {
        if(idx === currentIndex) return;
        const b = el.getBoundingClientRect();
        let passes = false;
        if(dir === "left" && b.right <= r.left + 10) passes = true;
        if(dir === "right" && b.left >= r.right - 10) passes = true;
        if(dir === "up" && b.bottom <= r.top + 10) passes = true;
        if(dir === "down" && b.top >= r.bottom - 10) passes = true;
        if(!passes) return;

        const dx = (b.left+b.right)/2 - (r.left+r.right)/2;
        const dy = (b.top+b.bottom)/2 - (r.top+r.bottom)/2;
        let score = Math.hypot(dx, dy);
        if(dir==="left"||dir==="right") score += Math.abs(dy)*0.5;
        if(dir==="up"||dir==="down") score += Math.abs(dx)*0.5;
        if(score < bestScore) { bestScore = score; bestIndex = idx; }
    });

    if(bestIndex !== null) { currentIndex = bestIndex; updateVisualFocus(); }
}

function activateCurrent() {
    const el = focusable[currentIndex];
    if(!el) return;
    if(el.classList.contains("race-card")) {
        const cards = Array.from(document.querySelectorAll(".race-card"));
        const i = cards.indexOf(el) + indexStart;
        if(races[i]) {
            activeIndex = i;
            mapImage.src = races[i].map;
            mapSection.style.display = "block";
            renderRaces();
            updateKeyboardFocusable();
        }
        return;
    }
    el.click();
}

document.addEventListener("keydown", (evt) => {
    const active = document.activeElement;
    if(active && (active.tagName==="INPUT" || active.tagName==="TEXTAREA" || active.tagName==="SELECT" || active.isContentEditable)) return;

    const key = evt.key.toLowerCase();
    if(key==="w"){ evt.preventDefault(); moveFocus("up"); return; }
    if(key==="s"){ evt.preventDefault(); moveFocus("down"); return; }
    if(key==="a"){ evt.preventDefault(); moveFocus("left"); return; }
    if(key==="d"){ evt.preventDefault(); moveFocus("right"); return; }
    if(key===" " || key==="enter"){ evt.preventDefault(); activateCurrent(); return; }
});

// Init keyboard focus
window.addEventListener("load", () => {
    updateKeyboardFocusable();
});
