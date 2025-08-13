export function desarrolloWebDevs() {
  const seccion = document.getElementById("desarrolloWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="desarrollo-web container py-5">
      <!-- TITULO -->
      <h2 class="text-center fw-bold mb-4 mt-5">Desarrollo Web Profesional a Medida</h2>
      <p class="text-center lead mb-5">
        En <strong>Joaisoft</strong>, convertimos tu idea en una presencia digital de alto nivel. 
        No solo diseñamos páginas web, construimos soluciones digitales pensadas para atraer clientes, 
        mejorar tu imagen de marca y generar resultados reales.
      </p>

      <!-- QUIENES SOMOS -->
      <div class="row align-items-center mb-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Quiénes somos</h4>
          <p>
            Somos un equipo apasionado por la tecnología y el diseño, especializado en el desarrollo de 
            páginas web modernas, seguras y optimizadas. Nuestro objetivo es ayudarte a destacar en el mundo digital 
            y hacer que tu sitio web sea una herramienta activa para el crecimiento de tu negocio.
          </p>
          <p>
            Desde pequeños negocios hasta grandes empresas, trabajamos con la misma dedicación y atención al detalle, 
            adaptándonos a las necesidades de cada cliente y ofreciendo un servicio cercano y transparente.
          </p>
        </div>
        <div class="col-md-6">
          <img src="assets/team-webdev.jpg" alt="Equipo de desarrollo Joaisoft" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- SERVICIOS -->
      <div class="row mt-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Nuestros servicios incluyen</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> Diseño web único y adaptado a tu marca</li>
            <li><i class="fas fa-check text-success me-2"></i> Desarrollo con HTML5, CSS3, JavaScript y frameworks modernos</li>
            <li><i class="fas fa-check text-success me-2"></i> Sitios web responsive y accesibles en todos los dispositivos</li>
            <li><i class="fas fa-check text-success me-2"></i> Optimización SEO desde el inicio para mejorar el posicionamiento</li>
            <li><i class="fas fa-check text-success me-2"></i> Integraciones con redes sociales, formularios y herramientas de análisis</li>
            <li><i class="fas fa-check text-success me-2"></i> E-commerce y pasarelas de pago seguras</li>
            <li><i class="fas fa-check text-success me-2"></i> Mantenimiento y soporte técnico continuo</li>
          </ul>
        </div>
      </div>

      <!-- PROCESO -->
      <div class="mt-5 mb-5">
        <h4 class="fw-bold text-center mb-4">Nuestro proceso de trabajo</h4>
        <div class="row text-center">
          <div class="col-md-3">
            <i class="fas fa-comments fa-2x mb-2 text-primary"></i>
            <h6>1. Análisis y estrategia</h6>
            <p>Identificamos tus objetivos, público objetivo y competencias para planificar un proyecto sólido.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-pencil-ruler fa-2x mb-2 text-primary"></i>
            <h6>2. Diseño UI/UX</h6>
            <p>Desarrollamos un prototipo visual atractivo y fácil de usar, alineado con tu identidad de marca.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-code fa-2x mb-2 text-primary"></i>
            <h6>3. Desarrollo</h6>
            <p>Construimos tu web con tecnologías modernas, asegurando rendimiento y seguridad.</p>
          </div>
          <div class="col-md-3">
            <i class="fas fa-rocket fa-2x mb-2 text-primary"></i>
            <h6>4. Lanzamiento y optimización</h6>
            <p>Publicamos tu web y realizamos ajustes para maximizar su efectividad.</p>
          </div>
        </div>
      </div>

      <!-- TECNOLOGÍAS -->
      <div class="row mb-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Tecnologías que utilizamos</h4>
          <p>
            Trabajamos con herramientas y lenguajes que garantizan la calidad, seguridad y escalabilidad de tu sitio web:
          </p>
          <ul class="list-unstyled">
            <li><i class="fas fa-code text-success me-2"></i> HTML5, CSS3 y JavaScript ES6+</li>
            <li><i class="fas fa-layer-group text-success me-2"></i> Frameworks: React, Vue, Bootstrap</li>
            <li><i class="fas fa-database text-success me-2"></i> Bases de datos MySQL y PostgreSQL</li>
            <li><i class="fas fa-server text-success me-2"></i> Hosting con cPanel, VPS o soluciones en la nube</li>
            <li><i class="fas fa-lock text-success me-2"></i> Certificados SSL y protocolos de seguridad</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="assets/tech-stack.jpg" alt="Tecnologías de desarrollo web" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- HOSTING -->
      <div class="row mb-5">
        <div class="col-md-6 order-md-2">
          <h4 class="fw-bold mb-3">Alojamiento y dominio incluidos</h4>
          <p>Nos ocupamos de que tu web esté siempre online y segura:</p>
          <ul class="list-unstyled">
            <li><i class="fas fa-globe text-success me-2"></i> Dominio propio (.com, .es, etc.)</li>
            <li><i class="fas fa-server text-success me-2"></i> Hosting rápido con 99,9% uptime</li>
            <li><i class="fas fa-shield-alt text-success me-2"></i> SSL gratuito y renovaciones automáticas</li>
            <li><i class="fas fa-cogs text-success me-2"></i> Soporte técnico y actualizaciones</li>
          </ul>
        </div>
        <div class="col-md-6">
          <img src="assets/hosting.jpg" alt="Hosting profesional" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- VENTAJAS -->
      <div class="row text-center mb-5">
        <h4 class="fw-bold mb-4">Ventajas de trabajar con Joaisoft</h4>
        <div class="col-md-4">
          <i class="fas fa-rocket fa-2x text-warning mb-2"></i>
          <p>Proyectos entregados en tiempo récord sin sacrificar calidad</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-handshake fa-2x text-warning mb-2"></i>
          <p>Relación cercana, comunicación clara y asesoría continua</p>
        </div>
        <div class="col-md-4">
          <i class="fas fa-user-shield fa-2x text-warning mb-2"></i>
          <p>Seguridad y soporte garantizados</p>
        </div>
      </div>

      <!-- CASOS DE USO -->
      <div class="mb-5">
        <h4 class="fw-bold mb-3 text-center">Casos de uso</h4>
        <p class="text-center">
          Nuestro servicio es ideal para:
        </p>
        <ul class="text-center list-unstyled">
          <li>🏪 Tiendas y negocios físicos que quieren vender online</li>
          <li>📈 Startups y emprendedores que necesitan presencia digital sólida</li>
          <li>🏢 Empresas que desean renovar su imagen en Internet</li>
          <li>🎯 Profesionales independientes que buscan clientes a través de su web</li>
        </ul>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2 mt-2">
          Solicita tu presupuesto sin compromiso
        </a>
      </div>
    </section>
  `;
}
