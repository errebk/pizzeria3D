// script.js

document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. Intersection Observer for Scroll Fade-In Animations
       ===================================================== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Inizia l'animazione quando il 15% dell'elemento è visibile
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stoppa l'osservazione post animazione
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));


    /* =====================================================
       2. Parallax Effect per la Pizza 3D nel Hero Section
       ===================================================== */
    const heroSection = document.getElementById('hero');
    const pizzaWrapper = document.querySelector('.pizza-wrapper');

    if (heroSection && pizzaWrapper) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calcola la posizione del mouse relativa al centro della finestra
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

            // Applica la rotazione tridimensionale al wrapper
            // per evitare di sovrascrivere l'animazione CSS del figlio
            pizzaWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Ripristina l'animazione base quando il mouse esce dal hero
        heroSection.addEventListener('mouseleave', () => {
            pizzaWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
            setTimeout(() => {
                // Remove inline style smoothly
                pizzaWrapper.style.transform = '';
            }, 300); // Wait for transition
        });
    }

});
