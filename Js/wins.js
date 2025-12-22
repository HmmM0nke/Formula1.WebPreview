// ===== DATA =====
const raceData = {
    "2025": {
        "Brazilië": [
            {positie:1, coureur:"Lando Norris", team:"McLaren", laps:71, tijd:"1:32:01.596", punten:25},
            {positie:2, coureur:"Kimi Antonelli", team:"Mercedes", laps:71, tijd:"+10.388s", punten:18},
            {positie:3, coureur:"Max Verstappen", team:"Red Bull Racing", laps:71, tijd:"+10.750s", punten:15},
            {positie:4, coureur:"George Russell", team:"Mercedes", laps:71, tijd:"+15.267s", punten:12},
            {positie:5, coureur:"Oscar Piastri", team:"McLaren", laps:71, tijd:"+15.749s", punten:10},
            {positie:6, coureur:"Oliver Bearman", team:"Haas F1 Team", laps:71, tijd:"+29.630s", punten:8},
            {positie:7, coureur:"Liam Lawson", team:"Racing Bulls", laps:71, tijd:"+52.642s", punten:6},
            {positie:8, coureur:"Isack Hadjar", team:"Racing Bulls", laps:71, tijd:"+52.873s", punten:4},
            {positie:9, coureur:"Nico Hulkenberg", team:"Kick Sauber", laps:71, tijd:"+53.324s", punten:2},
            {positie:10, coureur:"Pierre Gasly", team:"Alpine", laps:71, tijd:"+53.914s", punten:1},
            {positie:11, coureur:"Alexander Albon", team:"Williams", laps:71, tijd:"+54.184s", punten:0},
            {positie:12, coureur:"Esteban Ocon", team:"Haas F1 Team", laps:71, tijd:"+54.696s", punten:0},
            {positie:13, coureur:"Carlos Sainz", team:"Williams", laps:71, tijd:"+55.420s", punten:0},
            {positie:14, coureur:"Fernando Alonso", team:"Aston Martin", laps:71, tijd:"+55.766s", punten:0},
            {positie:15, coureur:"Franco Colapinto", team:"Alpine", laps:71, tijd:"+57.777s", punten:0},
            {positie:16, coureur:"Lance Stroll", team:"Aston Martin", laps:71, tijd:"+58.247s", punten:0},
            {positie:17, coureur:"Yuki Tsunoda", team:"Red Bull Racing", laps:71, tijd:"+69.176s", punten:0},
            {positie:18, coureur:"Lewis Hamilton", team:"Ferrari", laps:37, tijd:"DNF", punten:0},
            {positie:19, coureur:"Charles Leclerc", team:"Ferrari", laps:5, tijd:"DNF", punten:0},
            {positie:20, coureur:"Gabriel Bortoleto", team:"Kick Sauber", laps:0, tijd:"DNF", punten:0}
        ],
        "Mexico": [
            {positie:1, coureur:"Lando Norris", team:"McLaren", laps:71, tijd:"1:37:58.574", punten:25},
            {positie:2, coureur:"Charles Leclerc", team:"Ferrari", laps:71, tijd:"+30.324s", punten:18},
            {positie:3, coureur:"Max Verstappen", team:"Red Bull Racing", laps:71, tijd:"+31.049s", punten:15},
            {positie:4, coureur:"Oliver Bearman", team:"Haas F1 Team", laps:71, tijd:"+40.955s", punten:12},
            {positie:5, coureur:"Oscar Piastri", team:"McLaren", laps:71, tijd:"+42.065s", punten:10},
            {positie:6, coureur:"Kimi Antonelli", team:"Mercedes", laps:71, tijd:"+47.837s", punten:8},
            {positie:7, coureur:"George Russell", team:"Mercedes", laps:71, tijd:"+50.287s", punten:6},
            {positie:8, coureur:"Lewis Hamilton", team:"Ferrari", laps:71, tijd:"+56.446s", punten:4},
            {positie:9, coureur:"Esteban Ocon", team:"Haas F1 Team", laps:71, tijd:"+75.464s", punten:2},
            {positie:10, coureur:"Gabriel Bortoleto", team:"Kick Sauber", laps:71, tijd:"+76.863s", punten:1},
            {positie:11, coureur:"Yuki Tsunoda", team:"Red Bull Racing", laps:71, tijd:"+79.048s", punten:0},
            {positie:12, coureur:"Alexander Albon", team:"Williams", laps:70, tijd:"+1 lap", punten:0},
            {positie:13, coureur:"Isack Hadjar", team:"Racing Bulls", laps:70, tijd:"+1 lap", punten:0},
            {positie:14, coureur:"Lance Stroll", team:"Aston Martin", laps:70, tijd:"+1 lap", punten:0},
            {positie:15, coureur:"Pierre Gasly", team:"Alpine", laps:70, tijd:"+1 lap", punten:0},
            {positie:16, coureur:"Franco Colapinto", team:"Alpine", laps:70, tijd:"+1 lap", punten:0},
            {positie:17, coureur:"Carlos Sainz", team:"Williams", laps:67, tijd:"DNF", punten:0},
            {positie:18, coureur:"Fernando Alonso", team:"Aston Martin", laps:34, tijd:"DNF", punten:0},
            {positie:19, coureur:"Nico Hulkenberg", team:"Kick Sauber", laps:25, tijd:"DNF", punten:0},
            {positie:20, coureur:"Liam Lawson", team:"Racing Bulls", laps:5, tijd:"DNF", punten:0}
        ],
        "Verenigde Staten": [
            {positie:1, coureur:"Max Verstappen", team:"Red Bull Racing", laps:56, tijd:"1:34:00.161", punten:25},
            {positie:2, coureur:"Lando Norris", team:"McLaren", laps:56, tijd:"+7.959s", punten:18},
            {positie:3, coureur:"Charles Leclerc", team:"Ferrari", laps:56, tijd:"+15.373s", punten:15},
            {positie:4, coureur:"Lewis Hamilton", team:"Ferrari", laps:56, tijd:"+28.536s", punten:12},
            {positie:5, coureur:"Oscar Piastri", team:"McLaren", laps:56, tijd:"+29.678s", punten:10},
            {positie:6, coureur:"George Russell", team:"Mercedes", laps:56, tijd:"+33.456s", punten:8},
            {positie:7, coureur:"Yuki Tsunoda", team:"Red Bull Racing", laps:56, tijd:"+52.714s", punten:6},
            {positie:8, coureur:"Nico Hulkenberg", team:"Kick Sauber", laps:56, tijd:"+57.249s", punten:4},
            {positie:9, coureur:"Oliver Bearman", team:"Haas F1 Team", laps:56, tijd:"+64.722s", punten:2},
            {positie:10, coureur:"Fernando Alonso", team:"Aston Martin", laps:56, tijd:"+70.001s", punten:1},
            {positie:11, coureur:"Liam Lawson", team:"Racing Bulls", laps:56, tijd:"+73.209s", punten:0},
            {positie:12, coureur:"Lance Stroll", team:"Aston Martin", laps:56, tijd:"+74.778s", punten:0},
            {positie:13, coureur:"Kimi Antonelli", team:"Mercedes", laps:56, tijd:"+75.746s", punten:0},
            {positie:14, coureur:"Alexander Albon", team:"Williams", laps:56, tijd:"+80.000s", punten:0},
            {positie:15, coureur:"Esteban Ocon", team:"Haas F1 Team", laps:56, tijd:"+83.043s", punten:0},
            {positie:16, coureur:"Isack Hadjar", team:"Racing Bulls", laps:56, tijd:"+92.807s", punten:0},
            {positie:17, coureur:"Franco Colapinto", team:"Alpine", laps:55, tijd:"+1 lap", punten:0},
            {positie:18, coureur:"Gabriel Bortoleto", team:"Kick Sauber", laps:55, tijd:"+1 lap", punten:0},
            {positie:19, coureur:"Pierre Gasly", team:"Alpine", laps:55, tijd:"+1 lap", punten:0},
            {positie:20, coureur:"Carlos Sainz", team:"Williams", laps:5, tijd:"DNF", punten:0}
        ],
        "Singapore": [], "Azerbaijan": [], "Italië": [], "Nederland": [], "Hongarije": [], "België": []
    },
    "2024": {
        // Voeg hier 2024-race data toe indien beschikbaar
    }
};

// ===== KOPIEER VS DATA NAAR LEGE LANDEN =====
["Singapore","Azerbaijan","Italië","Nederland","Hongarije","België"].forEach(l => {
    raceData["2025"][l] = JSON.parse(JSON.stringify(raceData["2025"]["Verenigde Staten"]));
});

// ===== TOTALE SCORES =====
const totalScores = {
    "2025": [
        {positie:1, coureur:"Lando Norris", team:"McLaren", points:408},
        {positie:2, coureur:"Max Verstappen", team:"Red Bull Racing", points:396},
        {positie:3, coureur:"Oscar Piastri", team:"McLaren", points:392},
        {positie:4, coureur:"George Russell", team:"Mercedes", points:309},
        {positie:5, coureur:"Charles Leclerc", team:"Ferrari", points:230},
        {positie:6, coureur:"Lewis Hamilton", team:"Mercedes", points:152},
        {positie:7, coureur:"Kimi Antonelli", team:"Mercedes", points:150},
        {positie:8, coureur:"Alexander Albon", team:"Williams", points:73},
        {positie:9, coureur:"Carlos Sainz", team:"Ferrari", points:64},
        {positie:10, coureur:"Isack Hadjar", team:"Racing Bulls", points:51},
        {positie:11, coureur:"Nico Hulkenberg", team:"Kick Sauber", points:49},
        {positie:12, coureur:"Fernando Alonso", team:"Aston Martin", points:48},
        {positie:13, coureur:"Oliver Bearman", team:"Haas F1 Team", points:41},
        {positie:14, coureur:"Liam Lawson", team:"Racing Bulls", points:38},
        {positie:15, coureur:"Yuki Tsunoda", team:"Red Bull Racing", points:33},
        {positie:16, coureur:"Esteban Ocon", team:"Haas F1 Team", points:32},
        {positie:17, coureur:"Lance Stroll", team:"Aston Martin", points:32},
        {positie:18, coureur:"Pierre Gasly", team:"Alpine", points:22},
        {positie:19, coureur:"Gabriel Bortoleto", team:"Kick Sauber", points:19},
        {positie:20, coureur:"Franco Colapinto", team:"Alpine", points:0},
        {positie:21, coureur:"Jack Doohan", team:"McLaren", points:0}
    ],
    "2024": [
        {positie:1, coureur:"Max Verstappen", team:"Red Bull Racing", points:437},
        {positie:2, coureur:"Lando Norris", team:"McLaren", points:374},
        {positie:3, coureur:"Charles Leclerc", team:"Ferrari", points:356},
        {positie:4, coureur:"Oscar Piastri", team:"McLaren", points:292},
        {positie:5, coureur:"Carlos Sainz", team:"Ferrari", points:290},
        {positie:6, coureur:"George Russell", team:"Mercedes", points:245},
        {positie:7, coureur:"Lewis Hamilton", team:"Mercedes", points:223},
        {positie:8, coureur:"Sergio Perez", team:"Red Bull Racing", points:152},
        {positie:9, coureur:"Fernando Alonso", team:"Aston Martin", points:70},
        {positie:10, coureur:"Pierre Gasly", team:"Alpine", points:42},
        {positie:11, coureur:"Nico Hulkenberg", team:"Kick Sauber", points:41},
        {positie:12, coureur:"Yuki Tsunoda", team:"AlphaTauri", points:30},
        {positie:13, coureur:"Lance Stroll", team:"Aston Martin", points:24},
        {positie:14, coureur:"Esteban Ocon", team:"Alpine", points:23},
        {positie:15, coureur:"Kevin Magnussen", team:"Haas F1 Team", points:16},
        {positie:16, coureur:"Alexander Albon", team:"Williams", points:12},
        {positie:17, coureur:"Daniel Ricciardo", team:"AlphaTauri", points:12},
        {positie:18, coureur:"Oliver Bearman", team:"Haas F1 Team", points:7},
        {positie:19, coureur:"Franco Colapinto", team:"Alpine", points:5},
        {positie:20, coureur:"Zhou Guanyu", team:"Alfa Romeo", points:4},
        {positie:21, coureur:"Liam Lawson", team:"AlphaTauri", points:4},
        {positie:22, coureur:"Valtteri Bottas", team:"Alfa Romeo", points:0},
        {positie:23, coureur:"Logan Sargeant", team:"Williams", points:0},
        {positie:24, coureur:"Jack Doohan", team:"McLaren", points:0}
    ]
};

// ===== UI ELEMENTS =====
let currentSeizoen = "2025";
const raceSelector = document.getElementById("raceSelector");
const seasonBtn = document.getElementById("seasonBtn");
const resultTable = document.getElementById("resultTable");

// ===== HELPER FUNCTIES =====
function clearTable() {
    resultTable.querySelector("tbody").innerHTML = "";
}

function renderRace(land, seizoen) {
    clearTable();
    const results = raceData[seizoen][land];
    const tbody = resultTable.querySelector("tbody");

    if(!results || results.length===0){
        tbody.innerHTML=`<tr><td colspan="6">Geen data beschikbaar voor ${land} in ${seizoen}</td></tr>`;
        return;
    }

    results.forEach(r=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`
            <td>${r.positie}</td>
            <td>${r.coureur}</td>
            <td>${r.team}</td>
            <td>${r.laps}</td>
            <td>${r.tijd}</td>
            <td>${r.punten}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderChampionship(seizoen){
    clearTable();
    const standings = totalScores[seizoen];
    const tbody = resultTable.querySelector("tbody");
    standings.forEach(s=>{
        const tr=document.createElement("tr");
        tr.innerHTML=`
            <td>${s.positie}</td>
            <td>${s.coureur}</td>
            <td>${s.team}</td>
            <td>-</td>
            <td>-</td>
            <td>${s.points}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ===== EVENTLISTENERS =====
seasonBtn.addEventListener("click", () => {
    currentSeizoen = currentSeizoen === "2025" ? "2024" : "2025";
    seasonBtn.textContent = "Seizoen " + currentSeizoen;

    const selectedLand = raceSelector.value;
    if(selectedLand === "Totaal"){
        renderChampionship(currentSeizoen);
    } else {
        renderRace(selectedLand, currentSeizoen);
    }
});

raceSelector.addEventListener("change", () => {
    const selected = raceSelector.value;
    if(selected === "Totaal"){
        renderChampionship(currentSeizoen);
    } else {
        renderRace(selected, currentSeizoen);
    }
});

// ===== INIT =====
// Voeg "Totaal" toe aan dropdown als optie
if (![...raceSelector.options].some(o => o.value === "Totaal")) {
    const option = document.createElement("option");
    option.value = "Totaal";
    option.textContent = "Totaal";
    raceSelector.appendChild(option);
}

// Standaard selectie Brazilië bij load
raceSelector.value = "Brazilië";
seasonBtn.textContent = "Seizoen " + currentSeizoen;
renderRace("Brazilië", currentSeizoen);
// ===== TOP 3 FOTO'S =====
const top3Buttons = document.querySelectorAll(".button-row button");
const top3Cards = document.querySelectorAll(".cards .card img");

// Definieer de volgorde van de afbeeldingen per knop
const top3Images = {
    "Laatste race": ["Fotos/LN1.png", "Fotos/KA2.png", "Fotos/MV3.png"],
    "Seizoen 2025": ["Fotos/LN1.png", "Fotos/MV2.png", "Fotos/OP3.png"]
};

// Voeg click events toe aan de knoppen
top3Buttons.forEach(button => {
    button.addEventListener("click", () => {
        const images = top3Images[button.textContent];
        if(images){
            top3Cards.forEach((img, index) => {
                img.src = images[index];
            });
        }
    });
});
// ✅ KEYBOARD NAVIGATIE VOOR KNOPPEN, LINKS, SELECTS
(function() {
    const modal = document.getElementById("keyboardModal");
    const showModalBtn = document.getElementById("showKeyboardModal");

    // Toon modal eenmalig
    const ONE_TIME_MODAL_KEY = "keyboardIntroShown_v2";
    try {
        if (!localStorage.getItem(ONE_TIME_MODAL_KEY)) {
            if (modal) modal.style.display = "flex";
            localStorage.setItem(ONE_TIME_MODAL_KEY, "1");
            setTimeout(() => { if(modal) modal.style.display = "none"; }, 4000);
        }
    } catch(e) { if(modal) modal.style.display = "flex"; setTimeout(()=>{if(modal) modal.style.display="none";},4000); }

    if(showModalBtn) showModalBtn.addEventListener("click", ()=>{ if(modal) modal.style.display = "flex"; });
    if(modal) modal.addEventListener("click", ()=>{ modal.style.display = "none"; });

    // Verzamel alle knoppen en links die W/A/S/D mogen gebruiken
    function collectKeyboardElements() {
        const nodes = [];
        document.querySelectorAll("button, a").forEach(el => nodes.push(el));
        return nodes;
    }

    let focusable = collectKeyboardElements();
    let currentIndex = 0;

    focusable.forEach(el => { if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","0"); });

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
        if(el.tagName.toLowerCase() === "a") {
            const href = el.getAttribute("href");
            if(href && href!=="#") { window.location.href = href; return; }
            el.click(); return;
        }
        if(el.tagName.toLowerCase() === "button") {
            el.click();
            return;
        }
        el.click();
    }

    // ===== TABEL NAVIGATIE
    const tableRows = document.querySelectorAll("#resultTable tbody tr");
    let currentRow = 0;
    if(tableRows.length>0) tableRows[currentRow].focus();

    document.addEventListener("keydown", (evt) => {
        const active = document.activeElement;
        if(modal && modal.style.display === "flex" && evt.key === " ") { evt.preventDefault(); modal.style.display="none"; return; }

        // Laat inputs, textarea en selects hun eigen toetsenbord afhandelen
        if(active && (active.tagName==="INPUT" || active.tagName==="TEXTAREA" || active.tagName==="SELECT" || active.isContentEditable)) return;

        // === TABEL NAVIGATIE ===
        if(active && active.closest("#resultTable")) {
            if(evt.key === "ArrowDown" || evt.key.toLowerCase() === "s") {
                evt.preventDefault();
                currentRow = (currentRow + 1) % tableRows.length;
                tableRows[currentRow].focus();
                return;
            }
            if(evt.key === "ArrowUp" || evt.key.toLowerCase() === "w") {
                evt.preventDefault();
                currentRow = (currentRow - 1 + tableRows.length) % tableRows.length;
                tableRows[currentRow].focus();
                return;
            }
            return; // Geen verdere W/A/S/D focus navigatie
        }

        // === GLOBALE NAVIGATIE ===
        const key = evt.key.toLowerCase();
        if(key==="w"){ evt.preventDefault(); moveFocus("up"); return; }
        if(key==="s"){ evt.preventDefault(); moveFocus("down"); return; }
        if(key==="a"){ evt.preventDefault(); moveFocus("left"); return; }
        if(key==="d"){ evt.preventDefault(); moveFocus("right"); return; }
        if(key===" " || key==="enter"){ evt.preventDefault(); activateCurrent(); return; }
    });

    // Init
    window.addEventListener("load", () => {
        focusable = collectKeyboardElements();
        currentIndex = 0;
        updateVisualFocus();
    });
})();
