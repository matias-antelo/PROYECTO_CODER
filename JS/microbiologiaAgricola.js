// Arrays de equipos
const incubadora = JSON.parse(localStorage.getItem('incubadora')) || [];
const estufa = JSON.parse(localStorage.getItem('estufa')) || [];
const autoclave = JSON.parse(localStorage.getItem('autoclave')) || [];
const termometro = JSON.parse(localStorage.getItem('termometro')) || [];
const microscopio = JSON.parse(localStorage.getItem('microscopio')) || [];
const banio = JSON.parse(localStorage.getItem('banio')) || [];
const balanza = JSON.parse(localStorage.getItem('balanza')) || [];
const flujo = JSON.parse(localStorage.getItem('flujo')) || [];

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
    const seccionBanio = document.getElementById("seccion-banio");
    const seccionBalanza = document.getElementById("seccion-balanza");
    const seccionFlujo = document.getElementById("seccion-flujo");

    // Mostrar el formulario al hacer clic en "Ingreso de Equipo"
    ingresoLink.addEventListener('click', () => {
        ocultarTodo();
        formulario.style.display = 'block';
    });

    // Manejar el envío del formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
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

        const fechaCalibracion = new Date(calibracion);
        const fechaVencimiento = new Date(vencimiento);

        if (fechaVencimiento < fechaCalibracion) {
            Toastify({
                text: "⚠️ La fecha de vencimiento no puede ser anterior a la fecha de calibración.",
                duration: 2000,
                gravity: "center",
                position: "center",
                backgroundColor: "#e74c3c",
                stopOnFocus: true
            }).showToast();
        } else {
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
                    localStorage.setItem('incubadora', JSON.stringify(incubadora));
                    break;
                case 'estufa':
                    estufa.push(nuevoEquipo);
                    localStorage.setItem('estufa', JSON.stringify(estufa));
                    break;
                case 'autoclave':
                    autoclave.push(nuevoEquipo);
                    localStorage.setItem('autoclave', JSON.stringify(autoclave));
                    break;
                case 'termometro':
                    termometro.push(nuevoEquipo);
                    localStorage.setItem('termometro', JSON.stringify(termometro));
                    break;
                case 'microscopio':
                    microscopio.push(nuevoEquipo);
                    localStorage.setItem('microscopio', JSON.stringify(microscopio));
                    break;
                case 'banio':
                    banio.push(nuevoEquipo);
                    localStorage.setItem('banio', JSON.stringify(banio));
                    break;
                case 'balanza':
                    balanza.push(nuevoEquipo);
                    localStorage.setItem('balanza', JSON.stringify(balanza));
                    break;
                case 'flujo':
                    flujo.push(nuevoEquipo);
                    localStorage.setItem('flujo', JSON.stringify(flujo));
                    break;
            }

            Toastify({
                text: "✅ ¡Equipo guardado con éxito!",
                duration: 3000,
                gravity: "center",
                position: "center",
                backgroundColor: "#27ae60"
            }).showToast();
            formulario.reset();
        }

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
        seccionBanio.style.display = 'none';
        seccionBalanza.style.display = 'none';
        seccionFlujo.style.display = 'none';
    }
    const dataMap = {
    incubadora,
    estufa,
    autoclave,
    termometro,
    microscopio,
    banio,
    balanza,
    flujo,
};
    const tipos = ['incubadora', 'estufa', 'autoclave', 'termometro', 'microscopio', 'banio', 'balanza', 'flujo'];

    tipos.forEach(tipo => {
    try {
        const link = document.getElementById(`link-${tipo}`);
        link.addEventListener("click", () => {
            ocultarTodo();
            document.getElementById(`seccion-${tipo}`).style.display = "block";
            mostrarEquipos(tipo, dataMap[tipo]); 
        });
    } catch (error) {
        console.warn(`⚠️ No se pudo agregar el evento para link-${tipo}:`, error);
    }
});


        function mostrarEquipos(tipo, array) {
            const contenedor = document.getElementById(`contenido-${tipo}`);
            contenedor.innerHTML = "";

            if (array.length === 0) {
                contenedor.innerHTML = `<h2>No hay equipos registrados.</h2>`;
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
    })
