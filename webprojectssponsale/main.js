window.addEventListener("scroll", () => {
  var header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("solid");
  } else {
    header.classList.remove("solid");
    header.classList.add("transparent");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const pages = {
    home: `
    <section id="home">
        <div class="container-head">
            <div class="head-text">
                <h1>Mi presento:</h1>
                <h2>Mi chiamo Domenico Sponsale, sono uno studente e vengo da Mottola.</h2>
            </div>
        </div>

        <div class="portfolio">
            <h2>Una selezione dei miei lavori</h2>
            <div class="containers">
                <a class="container c1" href="/webprojectssponsale/progetto2/" ><div class="container-content">Progetto 1</div></a>
                <a class="container c2" href="/"><div class="container-content">Progetto 2</div></a>
                <a class="container c3" href="/"><div class="container-content">Progetto 3</div></a>
            </div>
        </div>

    </section>
        `,
    "chi-sono": `
<section id="chi-sono">
    <div class="container-head">
        <div class="head-text">
            <h1>Chi Sono</h1>
            <h2>Sono un ragazzi appassionato di web development.</h2>
        </div>
    </div>

    <div class="curriculum">
        <h2>Curriculum</h2>
        
        <!-- Esperienza lavorativa -->
        <!-- <div class="section">
            <h3>Esperienza lavorativa</h3>
            <div class="job">
                <h4></h4>
                <p><strong>Periodo:</strong> </p>
            </div>
            <div class="job">
                <h4></h4>
                <p><strong>Periodo:</strong></p>
            </div>
        </div> -->
        
        <!-- Formazione -->
        <div class="section">
            <h3>Formazione</h3>
            <div class="edu">
              <h4>IISS Ricciotto Canudo, Gioia del Colle, Bari</h4>
              <p><strong>Titolo:</strong> Tecnico - Informatico</p>
              <p><strong>Anno conseguimento:</strong> da 2018 a 2023</p><br>
              <p><strong>Anno Scolastico:</strong> 2022/2023</p>
              <p><strong>Scuola:</strong> LICEI CANUDO-MARONE - ITI GALILEI</p>
              <p><strong>Corso:</strong> INFORMATICA; Assemblaggio computer, RomeCup 2023</p><br>
              <p><strong>Anno Scolastico:</strong> 2021/2022</p>
              <p><strong>Scuola:</strong> LICEI CANUDO-MARONE - ITI GALILEI</p>
              <p><strong>Corso:</strong> INFORMATICA; Pon matematica Triennio2, Progetto "Costruiamo un robot", Progetto "Robot e Droni", Progetto "ReWaBot - RomeCup 2022"</p><br>
              <p><strong>Anno Scolastico:</strong> 2020/2021</p>
              <p><strong>Scuola:</strong> LICEI CANUDO-MARONE - ITI GALILEI</p>
              <p><strong>Corso:</strong> INFORMATICA; Introduzione ad Arduino, Robot&Python</p><br>
              <p><strong>Anno Scolastico:</strong> 2022/2023</p>
              <p><strong>Struttura:</strong> HAPPY NETWORK (40h aula)</p><br>
              <p><strong>Anno Scolastico:</strong> 2021/2020</p>
              <p><strong>Struttura:</strong> ANTONICELLI SNC DI FEDERICO ANTONICELLI&FIGLI "CORSO DI FORMAZIONE DEI LAVORATORI" (8h aula)</p><br>
              <p><strong>Anno Scolastico:</strong> 2021/2020</p>
              <p><strong>Struttura:</strong> HAPPY NETWORK (72h struttura)</p><br>
              <p><strong>Anno Scolastico:</strong> 2020/2021</p>
              <p><strong>Struttura:</strong> HAPPY NETWORK (40h aula)</p><br>
          </div>
          <div class="edu">
              <h4>Attività Extrascolastiche</h4>
              <p><strong>Attività:</strong> FESTIVAL INTERNAZIONALE CHIèDISCENA TEATROLAB 2.0</p>
              <p><strong>Svolta presso:</strong> TEATRO ROSSINI</p>
              <p><strong>Luogo:</strong> GIOIA DEL COLLE</p>
              <p><strong>Durata:</strong> 01/11/2021 - 01/05/202</p>
            </div>
          </div>
        </div>

        <!-- Lingue -->
        <div class="section">
            <h3>Lingue</h3>
            <ul class="languages">
                <li>Italiano - Madrelingua</li>
                <li>Inglese - B1</li>
        </div>
    </div>
</section>

        `,
    progetto: `
            <section id="progetto">
                <div class="container-head">
                    <div class="head-text">
                        <h1>Il Mio Progetto</h1>
                        <h2>Sto lavorando a un progetto di sviluppo web innovativo!</h2>
                    </div>
                </div>
            </section>
        `,
  };

  const contentDiv = document.getElementById("content");
  const navLinks = document.querySelectorAll("nav ul li a");
  const navLinksContainer = document.getElementById("nav-links");

  // Funzione per caricare la pagina dinamicamente
  const loadPage = (page) => {
    if (pages[page]) {
      contentDiv.innerHTML = pages[page]; // Carica il contenuto della pagina
      setActiveLink(page); // Imposta il link attivo
      navLinksContainer.classList.remove("open");
    }
  };

  // Funzione per impostare il link attivo
  const setActiveLink = (page) => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-page") === page) {
        link.classList.add("active");
      }
    });
  };

  // Event listener per il click sui link della navbar
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Previene il comportamento di default
      const page = link.getAttribute("data-page");
      loadPage(page); // Carica il contenuto dinamico della pagina
      history.pushState({ page: page }, "", `#${page}`); // Aggiorna l'URL senza ricaricare la pagina
    });
  });

  // Carica la pagina corrente basata sull'URL hash
  const currentPage = window.location.hash.substring(1) || "home";
  loadPage(currentPage); // Carica il contenuto della pagina corrente all'inizio

  // Gestione del back/forward del browser
  window.addEventListener("popstate", (event) => {
    const page = event.state?.page || "home";
    loadPage(page); // Carica la pagina corrispondente quando si preme indietro o avanti
  });
});
