export function portfolioWeb() {
  const seccion = document.getElementById("portfolioWeb");
  if (!seccion) return;

  seccion.innerHTML = `
    <section class="container py-5">
      <!-- TÍTULO -->
      <h2 class="text-center fw-bold mb-4 mt-5">Portafolios Web Profesionales para Todo el Mundo</h2>
      <p class="text-center lead mb-5">
        En <strong>Joaisoft</strong> damos vida a tu talento y trayectoria creando <em>portafolios web</em> 
        únicos, elegantes y funcionales.  
        Tanto si eres <strong>profesional independiente</strong>, <strong>artista</strong>, 
        <strong>fotógrafo</strong>, <strong>estudiante</strong> o <strong>empresa</strong>, 
        diseñamos una página que cuente tu historia, potencie tu marca y te ayude a conectar con el mundo.
      </p>

      <!-- CONTENIDO PRINCIPAL -->
      <div class="row align-items-center mb-5">
        <div class="col-md-6 mb-4 mb-md-0">
          <h4 class="fw-bold mb-3">¿Qué obtienes con tu portafolio web?</h4>
          <ul class="list-unstyled">
            <li><i class="fas fa-check text-success me-2"></i> Diseño moderno y completamente adaptado a tu estilo personal o corporativo</li>
            <li><i class="fas fa-check text-success me-2"></i> Totalmente compatible con dispositivos móviles, tablets y ordenadores</li>
            <li><i class="fas fa-check text-success me-2"></i> Integración con redes sociales, formularios y sistemas de contacto</li>
            <li><i class="fas fa-check text-success me-2"></i> Fácil de actualizar con tu nuevo contenido</li>
            <li><i class="fas fa-check text-success me-2"></i> Seguridad y mantenimiento incluidos</li>
          </ul>
        </div>
        <div class="col-md-6 text-center">
          <img src="assets/portfolio-example.jpg" alt="Ejemplo de portafolio web" class="img-fluid rounded shadow" />
        </div>
      </div>

      <!-- CÓMO TRABAJAMOS -->
      <div class="mt-5 mb-5">
        <h4 class="fw-bold text-center mb-4">Nuestro proceso para crear tu portafolio</h4>
        <div class="row text-center">
          <div class="col-md-3 mb-4">
            <i class="fas fa-lightbulb fa-2x text-primary mb-2"></i>
            <h6>1. Descubrimiento</h6>
            <p>Hablamos contigo para conocer tu estilo, logros y objetivos.</p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fas fa-pencil-ruler fa-2x text-primary mb-2"></i>
            <h6>2. Diseño a medida</h6>
            <p>Diseñamos un prototipo visual único para tu marca o perfil profesional.</p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fas fa-code fa-2x text-primary mb-2"></i>
            <h6>3. Desarrollo</h6>
            <p>Programamos tu portafolio con tecnologías modernas, rápido y seguro.</p>
          </div>
          <div class="col-md-3 mb-4">
            <i class="fas fa-rocket fa-2x text-primary mb-2"></i>
            <h6>4. Publicación</h6>
            <p>Subimos tu web y la dejamos lista para que empieces a recibir visitas.</p>
          </div>
        </div>
      </div>

      <!-- CTA FINAL -->
      <div class="text-center mt-5">
        <a href="ContactoDesarrolloWeb.html" class="btn btn-gradient btn-lg px-4 py-2">
          Solicita tu portafolio web ahora
        </a>
      </div>
    </section>
  `;
}
