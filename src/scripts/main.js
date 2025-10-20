document.addEventListener('click', function(e) {
    const enlaceFicha = e.target.closest('a.ficha');
    const botonFicha = e.target.closest('button.ficha');

    if (enlaceFicha || botonFicha) {
        e.preventDefault();
        const url = enlaceFicha ? enlaceFicha.getAttribute('href') : botonFicha.getAttribute('data-pdf');
        if (!url) return;
        const modal = document.getElementById('pdfModal');
        const frame = document.getElementById('pdfFrame');
        frame.src = url;
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        return;
    }

    if (e.target.matches('.pdf-overlay') || e.target.matches('.pdf-close')) {
        const modal = document.getElementById('pdfModal');
        const frame = document.getElementById('pdfFrame');
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        frame.src = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('pdfModal');
        if (modal && modal.classList.contains('show')) {
            const frame = document.getElementById('pdfFrame');
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            frame.src = '';
        }
    }
});

// Back to top button logic
(function () {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    // Show button after scrolling down 300px
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });

    // Smooth scroll to top on click
    btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();