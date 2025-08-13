export function navbar() {
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark custom-navbar">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold d-flex align-items-center" href="#">
<a class="navbar-brand" href="index.html">
  <img src="assets/logo.png" alt="Joaisoft Logo" height="36" class="me-2" />
</a>
    
          </a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item has-sub" data-menu="desarrollo">
                <a class="nav-link has-sub" href="#" data-menu="desarrollo">
                  Desarrollo
                </a>
              </li>
              <li class="nav-item has-sub" data-menu="marketing">
                <a class="nav-link has-sub" href="#" data-menu="marketing">
                  Marketing
                </a>
              </li>
              <li class="nav-item has-sub" data-menu="branding">
                <a class="nav-link has-sub" href="#" data-menu="branding">
                  Branding
                </a>
              </li>
            </ul>

            <div class="d-none d-lg-block">
              <a href="contacto.html" class="btn btn-gradient">> HÁBLANOS</a>
            </div>

            <!-- Mega menú dentro del colapsable -->
            <div class="mega-menu-container d-none" id="megaMenu">
              <div class="container mega-menu-grid py-4">
                <div id="submenu-desarrollo" class="submenu d-none">
                  <h6 class="submenu-title">Desarrollo Web</h6>
                  <a href="desarrolloWeb.html" class="submenu-item">Diseño de páginas</a>
                  <a href="porfolioweb.html" class="submenu-item">Desarrollo de porfolios web</a>
                  <a href="aplicaciones.html" class="submenu-item">Aplicaciones a medida</a>
                  <a href="hosting.html" class="submenu-item">Dominio y Hosting</a>
                  <a href="mantenimiento.html" class="submenu-item">Mantenimiento</a>
                </div>
                <div id="submenu-marketing" class="submenu d-none">
                  <h6 class="submenu-title">Marketing</h6>
                  <a href="#" class="submenu-item">SEO</a>
                  <a href="#" class="submenu-item">Redes Sociales</a>
                  <a href="#" class="submenu-item">Campañas Ads</a>
                </div>
                <div id="submenu-branding" class="submenu d-none">
                  <h6 class="submenu-title">Branding</h6>
                  <a href="#" class="submenu-item">Diseño de logo</a>
                  <a href="#" class="submenu-item">Publicidad web</a>
                </div>
              </div>
            </div>

          </div> <!-- FIN collapse -->
        </div> <!-- FIN container-fluid -->
      </nav>
    `;

    // Interactividad del mega menú
    const items = document.querySelectorAll(".has-sub");
    const megaMenu = document.getElementById("megaMenu");
    let timeoutId;

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        clearTimeout(timeoutId);
        const menu = item.getAttribute("data-menu");
        document.querySelectorAll(".submenu").forEach((el) => el.classList.add("d-none"));
        document.getElementById(`submenu-${menu}`).classList.remove("d-none");
        megaMenu.classList.remove("d-none");
      });

      item.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
          megaMenu.classList.add("d-none");
        }, 10000);
      });
    });

    megaMenu.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
    });

    megaMenu.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        megaMenu.classList.add("d-none");
      }, 300);
    });
  }
}
