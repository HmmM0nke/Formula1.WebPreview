// ---------------------------- //
// FADE-IN CARDS
const cards = document.querySelectorAll('.bio-card');

function checkFade() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;
        if (top < trigger) card.classList.add('show');
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// ---------------------------- //
// TOGGLE KNOP: MEER LEZEN / MINDER LEZEN
document.querySelectorAll('.toggle-btn').forEach(btn => {
    function toggleExtra() {
        const card = btn.closest('.bio-card');
        if (!card) return;
        const extra = card.querySelector('.extra-text');
        if (!extra) return;

        if (extra.style.maxHeight && extra.style.maxHeight !== "0px") {
            extra.style.maxHeight = null;
            btn.textContent = "Meer lezen";
        } else {
            extra.style.maxHeight = extra.scrollHeight + "px";
            btn.textContent = "Minder lezen";
        }
    }

    btn.addEventListener('click', toggleExtra);

    // Keyboard support
    btn.addEventListener('keydown', e => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleExtra();
        }
    });
});

// ---------------------------- //
// IMAGE LIGHTBOX
const lightbox = document.createElement("div");
lightbox.className = "image-lightbox";
document.body.appendChild(lightbox);

const lightboxImg = document.createElement("img");
lightbox.appendChild(lightboxImg);

document.querySelectorAll(".bio-image img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("active");
    });
});

// Klik op de lightbox sluit het
lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
});

// ---------------------------- //
// KEYBOARD NAVIGATIE + SPATIE SLUIT LIGHTBOX
(function() {
    const ONE_TIME_MODAL_KEY = "keyboardIntroShown_v1";
    const modal = document.getElementById("keyboardModal");

    try {
        if (!localStorage.getItem(ONE_TIME_MODAL_KEY)) {
            if(modal) modal.style.display = "flex";
            localStorage.setItem(ONE_TIME_MODAL_KEY,"1");
            setTimeout(() => { if(modal) modal.style.display = "none"; }, 4000);
        }
    } catch(e) { 
        if(modal) modal.style.display = "flex"; 
        setTimeout(() => { if(modal) modal.style.display = "none"; }, 4000); 
    }

    const showModalBtn = document.getElementById("showKeyboardModal");
    if (showModalBtn) showModalBtn.addEventListener("click", () => { if(modal) modal.style.display = "flex"; });

    if (modal) modal.addEventListener("click", () => { modal.style.display = "none"; });

    function collectFocusable() {
        const nodes = [];
        const keyboardBtn = document.getElementById("showKeyboardModal");
        if(keyboardBtn) nodes.push(keyboardBtn);

        const logo = document.querySelector("header .logo a");
        if(logo) nodes.push(logo);

        document.querySelectorAll("header nav a").forEach(n => nodes.push(n));
        document.querySelectorAll(".toggle-btn").forEach(n => nodes.push(n));
        document.querySelectorAll(".bio-image img").forEach(n => nodes.push(n));
        document.querySelectorAll("footer a").forEach(n => nodes.push(n));

        return nodes;
    }

    let focusable = collectFocusable();
    let currentIndex = 0;
    focusable.forEach(el => { if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","0"); });

    function updateVisualFocus() {
        focusable.forEach(el => el.classList.remove("keyboard-focus"));
        const el = focusable[currentIndex]; 
        if(!el) return;
        el.classList.add("keyboard-focus");
        el.scrollIntoView({behavior:"smooth", block:"center"});
    }

    window.addEventListener("load", () => { focusable = collectFocusable(); currentIndex = 0; updateVisualFocus(); });

    function move(dir) {
        if(focusable.length === 0) return;
        const cur = focusable[currentIndex];
        const r = cur.getBoundingClientRect();
        let bestIndex = null, bestScore = Infinity;

        focusable.forEach((el, idx) => {
            if(idx === currentIndex) return;
            const b = el.getBoundingClientRect();
            let passes = false;

            if(dir === "left" && b.right <= r.left + 10) passes = true;
            if(dir === "right" && b.left >= r.right - 10) passes = true;
            if(dir === "up" && b.bottom <= r.top + 10) passes = true;
            if(dir === "down" && b.top >= r.bottom - 10) passes = true;
            if(!passes) return;

            const dx = (b.left + b.right)/2 - (r.left + r.right)/2;
            const dy = (b.top + b.bottom)/2 - (r.top + r.bottom)/2;
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
            if(href && href !== "#") { window.location.href = href; return; }
            el.click(); return;
        }

        const dataHref = el.getAttribute("data-href");
        if(dataHref && dataHref !== "#") { window.location.href = dataHref; return; }

        if(el.tagName.toLowerCase() === "button") { el.click(); return; }

        el.click();
    }

    // ---------------------------- //
    // KEYBOARD EVENTS
    document.addEventListener("keydown", (evt) => {
        const key = evt.key.toLowerCase();

        // Als lightbox actief is: spatie sluit
        if(lightbox.classList.contains("active") && key === " ") {
            evt.preventDefault();
            lightbox.classList.remove("active");
            lightboxImg.src = "";
            return;
        }

        const active = document.activeElement;
        if(active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA" || active.isContentEditable)) return;

        if(key === "w") { evt.preventDefault(); move("up"); return; }
        if(key === "s") { evt.preventDefault(); move("down"); return; }
        if(key === "a") { evt.preventDefault(); move("left"); return; }
        if(key === "d") { evt.preventDefault(); move("right"); return; }
        if(key === " ") { evt.preventDefault(); activateCurrent(); return; }
    });

})();
