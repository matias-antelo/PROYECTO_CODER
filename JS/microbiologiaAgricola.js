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
    const seccionIncubadora = document.getElementById("seccion-incubadora");
    const seccionEstufa = document.getElementById("seccion-estufa");
    const seccionAutoclave = document.getElementById("seccion-autoclave");
    const seccionTermometro = document.getElementById("seccion-termometro");
    const seccionMicroscopio = document.getElementById("seccion-microscopio");
    const seccionBanioTermostatico = document.getElementById("seccion-baniotermostatico");
    const seccionBalanza = document.getElementById("seccion-balanza");
    const seccionFlujoLaminar = document.getElementById("seccion-flujolaminar");



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
        form.reset();
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
    // Función para ocultar todas las secciones
    function ocultarTodo() {
        if (formulario) formulario.style.display = 'none';
        if (seccionIncubadora) seccionIncubadora.style.display = 'none';
        if (seccionEstufa) seccionEstufa.style.display = 'none';
        if (logoPrincipal) logoPrincipal.style.display = 'none';
        if (seccionAutoclave) seccionAutoclave.style.display = 'none';
        if (seccionTermometro) seccionTermometro.style.display = 'none';
        if (seccionMicroscopio) seccionMicroscopio.style.display = 'none';
        if (seccionBanioTermostatico) seccionBanioTermostatico.style.display = 'none';
        if (seccionBalanza) seccionBalanza.style.display = 'none';
        if (seccionFlujoLaminar) seccionFlujoLaminar.style.display = 'none';
    }

    document.getElementById("link-estufa").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionEstufa.style.display = "block";
        mostrarEstufa();
    });

    document.getElementById("link-autoclave").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionAutoclave.style.display = "block";
        mostrarAutoclave();
    });

    document.getElementById("link-termometro").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionTermometro.style.display = "block";
        mostrarTermometro();
    });

    document.getElementById("link-microscopio").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionMicroscopio.style.display = "block";
        mostrarMicroscopio();
    });

    document.getElementById("link-banioTermostatico").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionBanioTermostatico.style.display = "block";
        mostrarBanioTermostatico();
    });

    document.getElementById("link-balanza").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionBalanza.style.display = "block";
        mostrarBalanza();
    });

    document.getElementById("link-flujoLaminar").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionFlujoLaminar.style.display = "block";
        mostrarFlujoLaminar();
    });

    // Mostrar la sección de Incubadora

    document.getElementById("link-incubadora").addEventListener("click", (e) => {
        e.preventDefault();
        ocultarTodo();
        seccionIncubadora.style.display = "block";
        mostrarIncubadora();
    });

    // Función para mostrar el array de incubadoras
    function mostrarIncubadora() {
        const contenedor = document.getElementById("contenido-incubadora");
        contenedor.innerHTML = ""; // Limpiar contenido anterior

        if (incubadora.length === 0) {
            contenedor.innerHTML = `<h2>No hay incubadoras registradas.</h2>`;
        }
        incubadora.forEach(equipo => {
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
    // Función para mostrar el array de Estufa
    function mostrarEstufa() {
        const contenedor = document.getElementById("contenido-estufa");
        contenedor.innerHTML = ""; // Limpiar contenido anterior

        if (estufa.length === 0) {
            contenedor.innerHTML = `<h2>No hay estufas registradas.</h2>`;
            return;
        }
        estufa.forEach(equipo => {
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

    // Función para mostrar el array de Flujo Laminar
    function mostrarFlujoLaminar() {
        const contenedor = document.getElementById("contenido-flujolaminar");
        contenedor.innerHTML = "";

        if (flujoLaminar.length === 0) {
            contenedor.innerHTML = `<h2>No hay flujos laminares registrados.</h2>`;
            return;
        }
        flujoLaminar.forEach(equipo => {
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

    // Función para mostrar el array de Termómetro
    function mostrarTermometro() {
        const contenedor = document.getElementById("contenido-termometro");
        contenedor.innerHTML = "";

        if (termometro.length === 0) {
            contenedor.innerHTML = `<h2>No hay termómetros registrados.</h2>`;
            return;
        }
        termometro.forEach(equipo => {
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

    // Función para mostrar el array de Autoclave
    function mostrarAutoclave() {
        const contenedor = document.getElementById("contenido-autoclave");
        contenedor.innerHTML = "";

        if (autoclave.length === 0) {
            contenedor.innerHTML = `<h2>No hay autoclaves registrados.</h2>`;
            return;
        }
        autoclave.forEach(equipo => {
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

    // Función para mostrar el array de Microscopio
    function mostrarMicroscopio() {
        const contenedor = document.getElementById("contenido-microscopio");
        contenedor.innerHTML = "";

        if (microscopio.length === 0) {
            contenedor.innerHTML = `<h2>No hay microscopios registrados.</h2>`;
            return;
        }
        microscopio.forEach(equipo => {
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

    // Función para mostrar el array de Baño Termostático
    function mostrarBanioTermostatico() {
        const contenedor = document.getElementById("contenido-baniotermostatico");
        contenedor.innerHTML = "";

        if (banioTermostatico.length === 0) {
            contenedor.innerHTML = `<h2>No hay baños termostáticos registrados.</h2>`;
            return;
        }
        banioTermostatico.forEach(equipo => {
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

    // Función para mostrar el array de Balanza
    function mostrarBalanza() {
        const contenedor = document.getElementById("contenido-balanza");
        contenedor.innerHTML = "";

        if (balanza.length === 0) {
            contenedor.innerHTML = `<h2>No hay balanzas registradas.</h2>`;
            return;
        }
        balanza.forEach(equipo => {
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

});



