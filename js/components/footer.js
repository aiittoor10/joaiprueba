export function footer() {
  const root = document.getElementById("footer");
  if (!root) return;

  root.innerHTML = `
  <footer class="footer-toools">
    <div class="footer-wrap container">
      <div class="row gx-5 gy-4 footer-grid">

        <!-- Columna 1: Logo + descripción -->
        <div class="col-12 col-md-3">
          <a href="index.html" class="d-inline-flex align-items-center mb-3 footer-brand">
            <img src="assets/logo.png" alt="Logo Joaisoft" class="footer-logo me-2">
            <span class="footer-brand-text">Joaisoft</span>
          </a>
          <p class="footer-text">
            En <strong>Joaisoft</strong> desarrollamos soluciones digitales a medida: 
            desde <strong>páginas web</strong> y <strong>portafolios</strong> hasta 
            <strong>automatizaciones</strong> y <strong>mantenimiento</strong>.
          </p>
        </div>

        <!-- Columna 2: Servicios -->
        <div class="col-6 col-md-3">
          <h6 class="fg-head">Servicios</h6>
          <ul class="fg-list">
            <li><a href="#desarrolloWeb">Desarrollo Web</a></li>
            <li><a href="#portfolioWeb">Portafolios</a></li>
            <li><a href="#hosting">Hosting & Mantenimiento</a></li>
            <li><a href="#consultoria">Consultoría & SEO</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <!-- Columna 3: Empresa -->
        <div class="col-6 col-md-3">
          <h6 class="fg-head">Empresa</h6>
          <ul class="fg-list">
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Cultura & Valores</a></li>
            <li><a href="#privacidad">Política de Privacidad</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Mapa del sitio</a></li>
          </ul>
        </div>

        <!-- Columna 4: Contacto -->
        <div class="col-12 col-md-3">
          <h6 class="fg-head">Contáctanos</h6>
          <p class="footer-text"><i class="fas fa-envelope me-2"></i> contacto@joaisoft.com</p>
          <p class="footer-text"><i class="fas fa-phone me-2"></i> +34 600 000 000</p>
          <p class="footer-text"><i class="fas fa-map-marker-alt me-2"></i> Orduña, Bizkaia</p>
        </div>
      </div>

      <!-- Franja inferior: iconos + logo + copy -->
      <div class="footer-bottom">
        <div class="social-row">
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="X"><i class="fab fa-x-twitter"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>

        <a href="index.html" class="brand-center" aria-label="Joaisoft - Inicio">
          <img src="assets/logo.png" alt="Joaisoft" />
        </a>

        <p class="copy">&copy; 2025 Joaisoft. Todos los derechos reservados.</p>
      </div>
    </div>

    <!-- Onda decorativa inferior -->
    <div class="footer-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
        <path d="M0,40 C240,120 480,0 720,60 C960,120 1200,20 1440,80 L1440,140 L0,140 Z"></path>
      </svg>
    </div>

    <!-- Botón idioma -->
    <button class="lang-btn" aria-label="Idioma">
      <i class="fas fa-globe"></i>
    </button>
  </footer>
  `;
}
