export function PresentacionJoaisoft() {
  const seccion = document.getElementById("presentacion-root");

  if (seccion) {
    seccion.innerHTML = `
      <section class="presentacion-joaisoft">
        <div class="container d-flex flex-wrap align-items-center justify-content-between">
          
          <div class="presentacion-texto">
            <h2 class="titulo-principal">Impulsamos tu transformación digital</h2>
            <h3 class="subtitulo">Somos Joaisoft: desarrollo inteligente, soluciones reales.</h3>
            
            <p>
              En Joaisoft somos especialistas en digitalizar empresas mediante soluciones tecnológicas adaptadas a cada necesidad.  
              Trabajamos mano a mano con nuestros clientes para automatizar procesos, mejorar su productividad y crecer de forma sostenible.
            </p>

            <p>
              Nuestro equipo está formado por desarrolladores, consultores y diseñadores apasionados por la tecnología y el cambio.  
              Ofrecemos servicios completos que abarcan desde la consultoría funcional hasta el desarrollo y mantenimiento técnico.
            </p>

            <ul>
              <li>🔧 <strong>Odoo ERP:</strong> personalización e implementación completa para empresas.</li>
              <li>💻 <strong>Aplicaciones a medida:</strong> backend robusto con Spring Boot y frontend dinámico con React o Angular.</li>
              <li>🌐 <strong>Diseño web profesional:</strong> presencia online moderna, adaptable y optimizada.</li>
            </ul>

            <p class="enfasis">
              ¿Tienes una idea? Nosotros la convertimos en una solución digital de alto impacto.
            </p>

            <a href="#contacto" class="btn btn-gradient">> Haz que tu negocio avance</a>
          </div>

          <div class="presentacion-imagen">
            <img src="assets/presentacion-js.png" alt="Joaisoft servidores y desarrollo" />
          </div>

        </div>
      </section>
    `;
  }
}
