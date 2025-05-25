// Arrays de equipos
const incubadora = [];
const estufa = [];
const autoclave = [];
const termometro = [];
const microscopio = [];
const banioTermostatico = [];
const balanza = [];
const flujoLaminar = [];

document.addEventListener('DOMContentLoaded', () => {
    const ingresoLink = document.getElementById('link-ingreso');
    const formulario = document.getElementById('formulario-ingreso');
    const form = document.getElementById('form-equipo');
    const logoPrincipal = document.getElementById("logo-principal");
    const seccionIncubadora = document.getElementById("Incubadora");

    // Mostrar el formulario al hacer clic en "Ingreso de Equipo"
    ingresoLink.addEventListener('click', (e) => {
        e.preventDefault();
        ocultarTodo();
        formulario.style.display = 'block';
    });

    // Manejar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipo = document.getElementById('tipo').value.toLowerCase();
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const calibracion = document.getElementById('calibracion').value;
        const verificacion = document.getElementById('verificacion').value;
        const vencimiento = document.getElementById('vencimiento').value;
        const imagen = document.getElementById('imagen').files[0];
        const certificado = document.getElementById('certificado').files[0];
        const manual = document.getElementById('manual').files[0];

        const nuevoEquipo = {
            ID: id,
            "nombre equipo": nombre,
            "fecha calibracion": calibracion,
            "fecha verificacion": verificacion,
            "vencimiento calibracion": vencimiento,
            "imagen nombre": imagen ? imagen.name : "Sin imagen",
            "certificado calibracion": certificado ? certificado.name : "Sin certificado",
            "manual equipo": manual ? manual.name : "Sin manual"
        };

        switch (tipo) {
            case 'incubadora':
                incubadora.push(nuevoEquipo);
                break;
            case 'estufa':
                estufa.push(nuevoEquipo);
                break;
            case 'autoclave':
                autoclave.push(nuevoEquipo);
                break;
            case 'termometro':
                termometro.push(nuevoEquipo);
                break;
            case 'microscopio':
                microscopio.push(nuevoEquipo);
                break;
            case 'baniotermostatico':
                banioTermostatico.push(nuevoEquipo);
                break;
            case 'balanza':
                balanza.push(nuevoEquipo);
                break;
            case 'flujolaminar':
                flujoLaminar.push(nuevoEquipo);
                break;
            default:
                alert("Tipo de equipo no reconocido");
                return;
        }

        alert("¡Equipo guardado con éxito!");
        form.reset();
        formulario.style.display = 'none';

        console.log({
            incubadora, estufa, autoclave,
            termometro, microscopio, banioTermostatico,
            balanza, flujoLaminar
        });
    });

    // Ocultar imagen principal al hacer clic en cualquier opción del navbar
    const navLinks = document.querySelectorAll("nav.navbar a");
    const descripcionPrincipal = document.getElementById("descripcion-principal");
    const descripcionPrincipal1 = document.getElementById("descripcion-principal1");
    const descripcionPrincipal2 = document.getElementById("descripcion-principal2");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (logoPrincipal) logoPrincipal.style.display = "none";
            if (descripcionPrincipal) descripcionPrincipal.style.display = "none";
            if (descripcionPrincipal1) descripcionPrincipal1.style.display = "none";
            if (descripcionPrincipal2) descripcionPrincipal2.style.display = "none";
        });
    });

    // Mostrar la sección de Incubadora
    const incubadoraLink = document.getElementById("link-incubadora");
    incubadoraLink.addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionIncubadora.style.display = "block";
        mostrarIncubadora();
    });

    // Función para ocultar todas las secciones
    function ocultarTodo() {
        if (formulario) formulario.style.display = 'none';
        if (seccionIncubadora) seccionIncubadora.style.display = 'none';
        if (logoPrincipal) logoPrincipal.style.display = 'none';
    }

    // Función para mostrar array incubadora
    function mostrarIncubadora() {
        const contenedor = document.getElementById("contenido-incubadora");
        contenedor.innerHTML = ""; // Limpiar contenido anterior

        if (incubadora.length === 0) {
            contenedor.innerHTML = "<h2>No hay incubadoras registradas.</h2>";
        }

        incubadora.forEach(equipo => {
            const equipoHTML = `
            <div class="grilla">
                <div class="grilla-izquierda">
                    <img src= ${equipo["imagen nombre"]} width="50%" class="imagen-incubadora">
                </div>
                <div class="separador"></div>
                <div class="contenido">
                    <p><strong>ID:</strong> ${equipo.ID}</p>
                    <p><strong>Nombre:</strong> ${equipo["nombre equipo"]}</p>
                    <p><strong>Fecha Calibración:</strong> ${equipo["fecha calibracion"]}</p>
                    <p><strong>Fecha Verificación:</strong> ${equipo["fecha verificacion"]}</p>
                    <p><strong>Vencimiento Calibración:</strong> ${equipo["vencimiento calibracion"]}</p>
                    <p><strong>Certificado:</strong> ${equipo["certificado calibracion"]}</p>
                    <p><strong>Manual:</strong> ${equipo["manual equipo"]}</p>
                </div>
            </div>
        `;
            contenedor.innerHTML += equipoHTML;
        });
    }
});