// Animar barra al cargar
window.addEventListener('load', () => {
    document.querySelectorAll('.progress').forEach(el => {
        let width = el.style.width;
        el.style.width = '0';
        setTimeout(() => {
            el.style.width = width;
        }, 100);
    });
});