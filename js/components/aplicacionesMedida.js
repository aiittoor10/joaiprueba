export function aplicacionesMedida() {
  const host = document.getElementById("aplicacionesMedida");
  if (!host) return;

  host.innerHTML = `
    <section class="container py-5">
      <!-- HERO -->
      <h2 class="text-center fw-bold mb-3 mt-5">Aplicaciones a Medida para tu Negocio</h2>
      <p class="text-center lead mb-5">
        En <strong>Joaisoft</strong> diseñamos y desarrollamos <strong>software a medida</strong> para automatizar procesos,
        mejorar la eficiencia y potenciar tus resultados. Desde la idea hasta la puesta en producción y el mantenimiento continuo.
      </p>

      <!-- QUE DESARROLLAMOS -->
      <div class="row text-center g-4 mb-5">
        <div class="col-12"><h4 class="fw-bold mb-3">¿Qué desarrollamos?</h4></div>
        <div class="col-6 col-md-4">
          <i class="fas fa-laptop-code fa-2x mb-2 text-primary"></i>
          <h6>Aplicaciones Web</h6>
          <p class="mb-0">SPA/MPA, paneles internos, intranets, portales de clientes, backoffices.</p>
        </div>
        <div class="col-6 col-md-4">
          <i class="fas fa-mobile-alt fa-2x mb-2 text-primary"></i>
          <h6>Apps Móviles</h6>
          <p class="mb-0">PWA y apps híbridas con acceso offline, notificaciones y geolocalización.</p>
        </div>
        <div class="col-6 col-md-4">
          <i class="fas fa-project-diagram fa-2x mb-2 text-primary"></i>
          <h6>APIs & Microservicios</h6>
          <p class="mb-0">REST/JSON, autenticación, escalabilidad y documentación OpenAPI/Swagger.</p>
        </div>
        <div class="col-6 col-md-4">
          <i class="fas fa-plug fa-2x mb-2 text-primary"></i>
          <h6>Integraciones</h6>
          <p class="mb-0">Pasarelas de pago, ERP/CRM (Odoo), correo, Telegram, Make/Zapier, etc.</p>
        </div>
        <div class="col-6 col-md-4">
          <i class="fas fa-chart-line fa-2x mb-2 text-primary"></i>
          <h6>Dashboards & BI</h6>
          <p class="mb-0">KPIs, informes y visualizaciones para toma de decisiones.</p>
        </div>
        <div class="col-6 col-md-4">
          <i class="fas fa-store fa-2x mb-2 text-primary"></i>
          <h6>E-commerce & TPV</h6>
          <p class="mb-0">Catálogo, carrito, logística, facturación e integración contable.</p>
        </div>
      </div>

      <!-- TECNOLOGÍAS -->
      <div class="row align-items-center mb-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Tecnologías y stack</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> <strong>Backend:</strong> Java + Spring Boot, Python (Odoo), Node.js</li>
            <li><i class="fas fa-check text-success me-2"></i> <strong>Frontend:</strong> React, Vue, Bootstrap, HTML5, CSS3</li>
            <li><i class="fas fa-check text-success me-2"></i> <strong>Bases de datos:</strong> PostgreSQL, MySQL/MaríaDB, SQLite</li>
            <li><i class="fas fa-check text-success me-2"></i> <strong>DevOps:</strong> Docker, Nginx, CI/CD, dominios y SSL</li>
            <li><i class="fas fa-check text-success me-2"></i> <strong>Integraciones:</strong> Webhooks, Make, Telegram, SMTP, OAuth2</li>
          </ul>
        </div>
        <div class="col-md-6 text-center">
          <img src="assets/tech-stack.jpg" alt="Stack tecnológico Joaisoft"
               class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- PROCESO -->
      <div class="mb-5">
        <h4 class="fw-bold text-center mb-4">Nuestro proceso de desarrollo</h4>
        <div class="row text-center g-4">
          <div class="col-6 col-md-2">
            <i class="fas fa-comments fa-2x text-primary mb-2"></i>
            <h6>1. Descubrimiento</h6>
            <p class="mb-0">Objetivos, alcance y requisitos.</p>
          </div>
          <div class="col-6 col-md-2">
            <i class="fas fa-sitemap fa-2x text-primary mb-2"></i>
            <h6>2. Análisis & UX</h6>
            <p class="mb-0">Arquitectura, wireframes y flujo.</p>
          </div>
          <div class="col-6 col-md-2">
            <i class="fas fa-pencil-ruler fa-2x text-primary mb-2"></i>
            <h6>3. Diseño UI</h6>
            <p class="mb-0">Identidad visual y componentes.</p>
          </div>
          <div class="col-6 col-md-2">
            <i class="fas fa-code fa-2x text-primary mb-2"></i>
            <h6>4. Desarrollo</h6>
            <p class="mb-0">Frontend, backend y base de datos.</p>
          </div>
          <div class="col-6 col-md-2">
            <i class="fas fa-vial fa-2x text-primary mb-2"></i>
            <h6>5. Pruebas</h6>
            <p class="mb-0">QA funcional, seguridad y rendimiento.</p>
          </div>
          <div class="col-6 col-md-2">
            <i class="fas fa-rocket fa-2x text-primary mb-2"></i>
            <h6>6. Despliegue</h6>
            <p class="mb-0">Producción, monitorización y soporte.</p>
          </div>
        </div>
      </div>

      <!-- CALIDAD & SEGURIDAD -->
      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Calidad y seguridad</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-shield-alt text-success me-2"></i> Autenticación segura, roles y permisos</li>
            <li><i class="fas fa-lock text-success me-2"></i> SSL/TLS, cifrado en tránsito, RGPD</li>
            <li><i class="fas fa-bug text-success me-2"></i> Pruebas unitarias/e2e y revisión de código</li>
            <li><i class="fas fa-sync-alt text-success me-2"></i> CI/CD, despliegues controlados y rollback</li>
            <li><i class="fas fa-database text-success me-2"></i> Backups automáticos y recuperación</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h4 class="fw-bold mb-3">Mantenimiento y evolución</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-tools text-success me-2"></i> Soporte correctivo y evolutivo</li>
            <li><i class="fas fa-tachometer-alt text-success me-2"></i> Monitorización y métricas</li>
            <li><i class="fas fa-calendar-check text-success me-2"></i> Roadmap de mejoras y nuevas funciones</li>
            <li><i class="fas fa-hands-helping text-success me-2"></i> Acompañamiento y formación de equipos</li>
          </ul>
        </div>
      </div>



      <!-- CTA -->
      <div class="text-center">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2">
          Cuéntanos tu proyecto · Solicita propuesta
        </a>
      </div>
    </section>
  `;
}
