import { footer } from "./components/footer.js";
import { navbar } from "./components/navbar.js";
import { header } from "./components/encabezado.js";
import { PresentacionJoaisoft } from "./components/PresentacionJoaisoft.js";
import { ServiciosJoaisoft } from "./components/ServiciosJoaisoft.js";
import { FormularioContacto } from "./components/FormularioContacto.js";
import { desarrolloWeb } from "./components/desarrolloWeb.js";
import { formularioDesarrolloWeb } from "./components/formularioDesarrolloWeb.js";
import { desarrolloWebDevs } from "./components/desarrolloWebDevs.js";
import { portfolioWeb } from "./components/portfolioWeb.js";
import { aplicacionesMedida } from "./components/aplicacionesMedida.js";
import { mantenimientoWebApps } from "./components/mantenimientoWebApps.js";
import { dominioHosting } from "./components/dominioHosting.js";


window.addEventListener("DOMContentLoaded", () => {
    footer();
    navbar();
    header();
    PresentacionJoaisoft();
    ServiciosJoaisoft();
    FormularioContacto();
    desarrolloWeb();
    formularioDesarrolloWeb();
    desarrolloWebDevs();
    portfolioWeb();
    aplicacionesMedida();
    mantenimientoWebApps();
    dominioHosting();




});
