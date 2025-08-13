export function ServiciosJoaisoft() {
  const seccion = document.getElementById("servicios-root");

  if (seccion) {
    seccion.innerHTML = `
      <section class="servicios-joaisoft py-5">
        <div class="container text-center">
          <h2 class="titulo-seccion mb-4">¿Qué hacemos en Joaisoft?</h2>
          <p class="descripcion-seccion mb-5">Ofrecemos soluciones digitales completas para empresas que quieren crecer, automatizar y destacar en su sector.</p>

          <div class="row g-4">
            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-cubes icono-servicio"></i>
                <h4 class="servicio-titulo">Odoo ERP</h4>
                <p>Implantamos y personalizamos Odoo para digitalizar tu empresa de forma inteligente.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-code icono-servicio"></i>
                <h4 class="servicio-titulo">Aplicaciones a medida</h4>
                <p>Desarrollamos software personalizado con backend Spring Boot y frontend moderno.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-desktop icono-servicio"></i>
                <h4 class="servicio-titulo">Diseño Web</h4>
                <p>Diseñamos páginas atractivas, rápidas y adaptadas a todos los dispositivos.</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="servicio-card h-100 p-4 shadow-sm">
                <i class="fa-solid fa-robot icono-servicio"></i>
                <h4 class="servicio-titulo">Automatización</h4>
                <p>Conectamos herramientas, creamos bots y automatizamos procesos con Make, APIs y más.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
