window.addEventListener('scroll', () => {
    var header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleziona tutti i link della navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Seleziona tutte le sezioni che devono essere monitorate
    const sections = document.querySelectorAll('section');

    // Callback dell'Intersection Observer
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Rimuovi la classe active da tutti i link
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Aggiungi la classe active al link corrispondente alla sezione in vista
                const activeLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    // Imposta l'Intersection Observer
    const observerOptions = {
        root: null, // Usa la viewport come root
        threshold: 0.5 // Triggera quando il 50% della sezione è visibile
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Osserva ciascuna sezione
    sections.forEach(section => observer.observe(section));
});