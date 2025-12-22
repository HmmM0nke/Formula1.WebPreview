// ✅ SLIDER
let sliderIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
const slidesContainer = document.querySelector(".slides");
let slideInterval;

function startSliderTimer() {
    if(!slidesContainer) return;
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        showSlide(sliderIndex + 1);
    }, 5000);
}

function showSlide(i) {
    sliderIndex = (i + slideCount) % slideCount;
    slidesContainer.style.transform = `translateX(-${sliderIndex*100}%)`;
}

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
if(nextBtn) nextBtn.onclick = () => { showSlide(sliderIndex+1); };
if(prevBtn) prevBtn.onclick = () => { showSlide(sliderIndex-1); };

startSliderTimer();

// ✅ VIDEO LIGHTBOX
const lightbox = document.getElementById("videoLightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
if(lightbox && lightboxVideo){
    document.querySelectorAll(".video-thumb").forEach(thumb => {
        thumb.onclick = () => {
            lightbox.style.display = "flex";
            lightboxVideo.src = thumb.dataset.video;
            lightboxVideo.play();
        }
    });
    lightbox.onclick = () => {
        lightbox.style.display = "none";
        lightboxVideo.pause();
        lightboxVideo.src = "";
    }
}

// ✅ TOP 3 BUTTONS
const top3Buttons = document.querySelectorAll(".button-row button");
const top3Cards = document.querySelectorAll(".cards .card img");
const top3Images = {
    "Laatste race": ["Fotos/LN1.png", "Fotos/KA2.png", "Fotos/MV3.png"],
    "Seizoen 2025": ["Fotos/LN1.png", "Fotos/MV2.png", "Fotos/OP3.png"]
};
top3Buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const images = top3Images[btn.textContent.trim()];
        if(images) top3Cards.forEach((img,i)=>img.src=images[i]);
    });
});

// ✅ TOP KAARTEN CLICK + KEYBOARD
document.querySelectorAll(".team-card").forEach(card => {
    card.addEventListener("click", () => {
        const link = card.getAttribute("data-href") || "biografie.html";
        window.location.href = link;
    });
    card.addEventListener("keydown", e => {
        if(e.key==="Enter" || e.key===" "){
            e.preventDefault();
            const link = card.getAttribute("data-href") || "biografie.html";
            window.location.href = link;
        }
    });
});

// ✅ KEYBOARD NAVIGATIE
(function(){
    const ONE_TIME_MODAL_KEY = "keyboardIntroShown_v1";
    const modal = document.getElementById("keyboardModal");

    try {
        if(!localStorage.getItem(ONE_TIME_MODAL_KEY)){
            if(modal) modal.style.display="flex";
            localStorage.setItem(ONE_TIME_MODAL_KEY,"1");
            setTimeout(()=>{ if(modal) modal.style.display="none"; },4000);
        }
    } catch(e){ if(modal) modal.style.display="flex"; setTimeout(()=>{if(modal) modal.style.display="none";},4000); }

    const showModalBtn = document.getElementById("showKeyboardModal");
    if(showModalBtn) showModalBtn.addEventListener("click", ()=>{ if(modal) modal.style.display="flex"; });

    if(modal) modal.addEventListener("click", ()=>{ modal.style.display="none"; });

    function collectFocusable(){
        const nodes = [];
        const keyboardBtn = document.getElementById("showKeyboardModal");
        if(keyboardBtn) nodes.push(keyboardBtn);

        const logo = document.querySelector("header .logo a");
        if(logo) nodes.push(logo);

        document.querySelectorAll("header nav a").forEach(n=>nodes.push(n));
        document.querySelectorAll(".prev, .next").forEach(n=>nodes.push(n));
        document.querySelectorAll(".team-card").forEach(n=>nodes.push(n));
        document.querySelectorAll(".button-row button").forEach(n=>nodes.push(n));
        const mainLink = document.querySelector(".main-link"); if(mainLink) nodes.push(mainLink);
        document.querySelectorAll(".video-thumb").forEach(n=>nodes.push(n));
        document.querySelectorAll("footer a").forEach(n=>nodes.push(n));
    document.querySelectorAll("input, textarea, select, button[type='submit']").forEach(n => nodes.push(n));

        return nodes;
    }

    let focusable = collectFocusable();
    let currentIndex = 0;

    focusable.forEach(el=>{if(!el.hasAttribute("tabindex")) el.setAttribute("tabindex","0");});

    function updateVisualFocus(){
        focusable.forEach(el=>el.classList.remove("keyboard-focus"));
        const el = focusable[currentIndex]; if(!el) return;
        el.classList.add("keyboard-focus");
        el.scrollIntoView({behavior:"smooth", block:"center"});
    }

    window.addEventListener("load", ()=>{
        focusable = collectFocusable();
        currentIndex = 0;
        updateVisualFocus();
    });

    function move(dir){
        if(focusable.length===0) return;
        const cur = focusable[currentIndex];
        const r = cur.getBoundingClientRect();
        let bestIndex = null, bestScore = Infinity;
        focusable.forEach((el,idx)=>{
            if(idx===currentIndex) return;
            const b = el.getBoundingClientRect();
            let passes=false;
            if(dir==="left" && b.right<=r.left+10) passes=true;
            if(dir==="right" && b.left>=r.right-10) passes=true;
            if(dir==="up" && b.bottom<=r.top+10) passes=true;
            if(dir==="down" && b.top>=r.bottom-10) passes=true;
            if(!passes) return;
            const dx=(b.left+b.right)/2-(r.left+r.right)/2;
            const dy=(b.top+b.bottom)/2-(r.top+r.bottom)/2;
            let score=Math.hypot(dx,dy);
            if(dir==="left"||dir==="right") score+=Math.abs(dy)*0.5;
            if(dir==="up"||dir==="down") score+=Math.abs(dx)*0.5;
            if(score<bestScore){bestScore=score; bestIndex=idx;}
        });
        if(bestIndex!==null){currentIndex=bestIndex; updateVisualFocus();}
    }

    function activateCurrent(){
        const el = focusable[currentIndex]; if(!el) return;
        if(el.tagName.toLowerCase()==="a"){
            const href = el.getAttribute("href");
            if(href && href!=="#"){ window.location.href=href; return; }
            el.click(); return;
        }
        const dataHref=el.getAttribute("data-href");
        if(dataHref && dataHref!=="#"){ window.location.href=dataHref; return; }
        if(el.tagName.toLowerCase()==="button"){ el.click(); return; }
        const dataVideo=el.getAttribute("data-video"); if(dataVideo){ window.open(dataVideo,"_blank"); return; }
        el.click();
    }

    document.addEventListener("keydown",(evt)=>{
        if(modal && modal.style.display==="flex" && evt.key===" "){ evt.preventDefault(); modal.style.display="none"; return;}
        const active = document.activeElement;
        if(active && (active.tagName==="INPUT" || active.tagName==="TEXTAREA" || active.isContentEditable)) return;
        const key = evt.key.toLowerCase();
        if(key==="w"){ evt.preventDefault(); move("up"); return; }
        if(key==="s"){ evt.preventDefault(); move("down"); return; }
        if(key==="a"){ evt.preventDefault(); move("left"); return; }
        if(key==="d"){ evt.preventDefault(); move("right"); return; }
        if(key===" "){ evt.preventDefault(); activateCurrent(); return; }
    });
})();
