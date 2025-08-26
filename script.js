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

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});