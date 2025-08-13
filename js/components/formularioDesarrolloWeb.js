export function formularioDesarrolloWeb() {
  const seccion = document.getElementById("formularioDesarrolloWeb");

  if (seccion) {
    seccion.innerHTML = `
      <section class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-xl-8">
            <p class="text-center mt-5">
              Rellena este breve formulario y nuestro equipo de Joaisoft se pondrá en contacto contigo para diseñar una solución a medida.
            </p>
            <form id="webRequestForm" class="bg-light p-4 rounded shadow-sm">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="nombre" class="form-label">Nombre completo *</label>
                  <input type="text" class="form-control" id="nombre" required>
                </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">Correo electrónico *</label>
                  <input type="email" class="form-control" id="email" required>
                </div>
                <div class="col-md-6">
                  <label for="telefono" class="form-label">Teléfono de contacto</label>
                  <input type="tel" class="form-control" id="telefono">
                </div>
                <div class="col-md-6">
                  <label for="sector" class="form-label">¿Para qué sector es la web?</label>
                  <select class="form-select" id="sector">
                    <option value="" selected disabled>Selecciona una opción</option>
                    <option>Comercio local</option>
                    <option>Restauración / Bares</option>
                    <option>Servicios profesionales</option>
                    <option>Educación / Formación</option>
                    <option>Portafolio personal</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="col-12">
                  <label for="objetivo" class="form-label">¿Qué necesitas exactamente?</label>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="opcion1">
                    <label class="form-check-label" for="opcion1">Sitio informativo básico</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="opcion2">
                    <label class="form-check-label" for="opcion2">Tienda online (e-commerce)</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="opcion3">
                    <label class="form-check-label" for="opcion3">Web autogestionable con panel</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="opcion4">
                    <label class="form-check-label" for="opcion4">Blog / Noticias / Eventos</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="opcion5">
                    <label class="form-check-label" for="opcion5">Otra funcionalidad</label>
                  </div>
                </div>
                <div class="col-12">
                  <label for="mensaje" class="form-label">Cuéntanos más sobre tu idea</label>
                  <textarea class="form-control" id="mensaje" rows="4" placeholder="Ej: quiero una web para mi tienda de ropa..."></textarea>
                </div>
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-gradient px-4 py-2">Enviar solicitud</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    `;
  }
}
