export function header() {
  const header = document.getElementById("header");

  if (header) {
    header.innerHTML = `
      <header class="hero-header d-flex flex-column justify-content-center align-items-center text-center text-light position-relative">
        
        <!-- VIDEO DE FONDO -->
        <video autoplay muted loop playsinline class="bg-video">
          <source src="assets/fondo.webm" type="video/webm">
          Tu navegador no soporta video HTML5.
        </video>

        <!-- CAPA OSCURA (OPCIONAL) -->
        <div class="video-overlay"></div>

        <div class="container position-relative">
          <h1 class="display-3 fw-bold animate__animated animate__fadeInDown">Joaisoft</h1>
          <p class="lead mt-3 mb-4 animate__animated animate__fadeInUp">
            <span><b>Somos </b></span><span id="changing-word" class="changing-word"><b>innovación</b></span>
          </p>
        </div>
      </header>
    `;

    const palabras = [
      "desarrollo",
      "innovación",
      "confianza",
      "tecnología",
      "impacto",
      "diseño"
    ];

    let index = 0;
    const changingWord = document.getElementById("changing-word");

    setInterval(() => {
      index = (index + 1) % palabras.length;
      changingWord.classList.remove("fade-in");
      void changingWord.offsetWidth;
      changingWord.textContent = palabras[index];
      changingWord.classList.add("fade-in");
    }, 2000);
  }
}
