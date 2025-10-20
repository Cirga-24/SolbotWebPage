// Simple slider for simulacion.html
(function(){
    const wrapper = document.querySelector('.slides-wrapper');
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prev = document.querySelector('.nav.prev');
    const next = document.querySelector('.nav.next');
    const dots = Array.from(document.querySelectorAll('.dot'));
    if (!wrapper || slides.length === 0) return;

    let index = 0;
    let interval = null;
    const total = slides.length;

    function goTo(i){
        index = (i + total) % total;
        wrapper.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }
    function nextSlide(){ goTo(index+1); }
    function prevSlide(){ goTo(index-1); }

    function updateDots(){
        dots.forEach((d, idx) => d.classList.toggle('active', idx===index));
    }

    // attach events
    if(next) next.addEventListener('click', () => { nextSlide(); resetAuto(); });
    if(prev) prev.addEventListener('click', () => { prevSlide(); resetAuto(); });
    dots.forEach(d => d.addEventListener('click', e => { goTo(parseInt(e.currentTarget.dataset.slide,10)); resetAuto(); }));

    // init
    goTo(0);
    startAuto();
})();
