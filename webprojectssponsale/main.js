window.addEventListener('scroll', () => {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
        header.classList.add('transparent');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const pages = {
        home: `
    <section id="home">
        <div class="introduction">
            <div class="intro-text">
                <h1>Mi presento:</h1>
                <h2>Mi chiamo Domenico Sponsale, sono uno studente e vengo da Mottola.</h2>
            </div>
        </div>

        <div class="portfolio">
            <h2>Una selezione dei miei lavori</h2>
            <div class="projects">
                <div class="project"></div>
                <div class="project"></div>
                <div class="project"></div>
            </div>
        </div>

    </section>
        `,
        'chi-sono': `
            <section id="chi-sono">
                <div class="introduction">
                    <div class="intro-text">
                        <h1>Chi Sono</h1>
                        <h2>Sono uno sviluppatore appassionato di web development.</h2>
                    </div>
                </div>
            </section>
        `,
        progetto: `
            <section id="progetto">
                <div class="introduction">
                    <div class="intro-text">
                        <h1>Il Mio Progetto</h1>
                        <h2>Sto lavorando a un progetto di sviluppo web innovativo!</h2>
                    </div>
                </div>
            </section>
        `
    };

    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Funzione per caricare la pagina dinamicamente
    const loadPage = (page) => {
        if (pages[page]) {
            contentDiv.innerHTML = pages[page]; // Carica il contenuto della pagina
            setActiveLink(page); // Imposta il link attivo
        }
    };

    // Funzione per impostare il link attivo
    const setActiveLink = (page) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    };

    // Event listener per il click sui link della navbar
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Previene il comportamento di default
            const page = link.getAttribute('data-page');
            loadPage(page); // Carica il contenuto dinamico della pagina
            history.pushState({ page: page }, '', `#${page}`); // Aggiorna l'URL senza ricaricare la pagina
        });
    });

    // Carica la pagina corrente basata sull'URL hash
    const currentPage = window.location.hash.substring(1) || 'home';
    loadPage(currentPage); // Carica il contenuto della pagina corrente all'inizio

    // Gestione del back/forward del browser
    window.addEventListener('popstate', (event) => {
        const page = event.state?.page || 'home';
        loadPage(page); // Carica la pagina corrispondente quando si preme indietro o avanti
    });
});
