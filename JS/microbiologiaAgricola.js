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
    const descripcionPrincipal = document.getElementById("descripcion-principal");
    const descripcionPrincipal1 = document.getElementById("descripcion-principal1");
    const descripcionPrincipal2 = document.getElementById("descripcion-principal2");
    const logoPrincipal = document.getElementById("logo-principal");
    const seccionIncubadora = document.getElementById("seccion-incubadora");
    const seccionEstufa = document.getElementById("seccion-estufa");
    const seccionAutoclave = document.getElementById("seccion-autoclave");
    const seccionTermometro = document.getElementById("seccion-termometro");
    const seccionMicroscopio = document.getElementById("seccion-microscopio");
    const seccionBanioTermostatico = document.getElementById("seccion-baniotermostatico");
    const seccionBalanza = document.getElementById("seccion-balanza");
    const seccionFlujoLaminar = document.getElementById("seccion-flujolaminar");

    // Mostrar el formulario al hacer clic en "Ingreso de Equipo"
    ingresoLink.addEventListener('click', () => {
        ocultarTodo();
        formulario.style.display = 'block';
    });

    // Manejar el envío del formulario
    formulario.addEventListener('submit', () => {
        const tipo = document.getElementById('tipo').value.toLowerCase();
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const calibracion = document.getElementById('calibracion').value;
        const verificacion = document.getElementById('verificacion').value;
        const vencimiento = document.getElementById('vencimiento').value;
        const imagen = document.getElementById('imagen').files[0];
        const imagenURL = imagen ? URL.createObjectURL(imagen) : '';
        const certificado = document.getElementById('certificado').files[0];
        const manual = document.getElementById('manual').files[0];

        const nuevoEquipo = {
            ID: id,
            "nombre equipo": nombre,
            "fecha calibracion": calibracion,
            "fecha verificacion": verificacion,
            "vencimiento calibracion": vencimiento,
            imagenURL: imagenURL,
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
        }

        alert("¡Equipo guardado con éxito!");
        formulario.reset();
    });

    // Función para ocultar todas las secciones
    function ocultarTodo() {
        formulario.style.display = 'none';
        seccionIncubadora.style.display = 'none';
        seccionEstufa.style.display = 'none';
        logoPrincipal.style.display = 'none';
        descripcionPrincipal.style.display = "none";
        descripcionPrincipal1.style.display = "none";
        descripcionPrincipal2.style.display = "none";
        seccionAutoclave.style.display = 'none';
        seccionTermometro.style.display = 'none';
        seccionMicroscopio.style.display = 'none';
        seccionBanioTermostatico.style.display = 'none';
        seccionBalanza.style.display = 'none';
        seccionFlujoLaminar.style.display = 'none';
    }


    document.getElementById("link-estufa").addEventListener("click", () => {
        ocultarTodo();
        seccionEstufa.style.display = "block";
        mostrarEquipos("estufa", estufa);
    });

    document.getElementById("link-autoclave").addEventListener("click", () => {
        ocultarTodo();
        seccionAutoclave.style.display = "block";
        mostrarEquipos("autoclave", autoclave);
    });

    document.getElementById("link-termometro").addEventListener("click", () => {
        ocultarTodo();
        seccionTermometro.style.display = "block";
        mostrarEquipos("termometro", termometro);
    });

    document.getElementById("link-microscopio").addEventListener("click", () => {
        ocultarTodo();
        seccionMicroscopio.style.display = "block";
        mostrarEquipos("microscopio", microscopio);
    });

    document.getElementById("link-banioTermostatico").addEventListener("click", () => {
        ocultarTodo();
        seccionBanioTermostatico.style.display = "block";
        mostrarEquipos("baniotermostatico", banioTermostatico);
    });

    document.getElementById("link-balanza").addEventListener("click", () => {
        ocultarTodo();
        seccionBalanza.style.display = "block";
        mostrarEquipos("balanza", balanza);
    });

    document.getElementById("link-flujoLaminar").addEventListener("click", () => {
        ocultarTodo();
        seccionFlujoLaminar.style.display = "block";
        mostrarEquipos("flujolaminar", flujoLaminar);
    });

    document.getElementById(`link-incubadora`).addEventListener("click", () => {
        ocultarTodo();
        seccionIncubadora.style.display = "block";
        mostrarEquipos("incubadora", incubadora);
    });

    function mostrarEquipos(tipo, array) {
        const contenedor = document.getElementById(`contenido-${tipo}`);
        contenedor.innerHTML = "";

        if (array.length === 0) {
            contenedor.innerHTML = `<h2>No hay ${tipo} registrado.</h2>`;
        } else {
            array.forEach(equipo => {
                const equipoHTML = `
                <div class="grilla">
                    <div class="grilla-izquierda">
                        ${equipo.imagenURL ? `<img src="${equipo.imagenURL}" class="imagen-incubadora">` : '<p>Sin imagen</p>'}
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
    }
});