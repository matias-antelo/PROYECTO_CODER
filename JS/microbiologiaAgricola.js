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
                text: "⚠️ La fecha de vencimiento de calibración no puede ser anterior a la fecha de calibración.",
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

    //funcion para mostrar equipos
    function mostrarEquipos(tipo, array) {
        const contenedor = document.getElementById(`contenido-${tipo}`);
        contenedor.innerHTML = "";

        if (array.length === 0) {
            contenedor.innerHTML = `<h2>No hay equipos registrados.</h2>`;
        } else {

            array.forEach((equipo, index) => {
                const equipoHTML = `
                <div class="grilla">
                    <div class="grilla-izquierda">
                        ${equipo.imagenURL ? `<img src="${equipo.imagenURL}" class="imagen-incubadora">` : '<p>Sin imagen</p>'}
                    </div>
                    <div class="separador"></div>
                    <div class="contenido">
                        <p><strong>ID:</strong> ${equipo.ID}</p>
                        <p><strong>Nombre:</strong> ${equipo["nombre equipo"]}</p>
                        <p>
                        <strong>Fecha Calibración:</strong>
                        <span class="editable" data-key="fecha calibracion">${equipo["fecha calibracion"]}</span>
                        <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="fecha calibracion">Editar</button>
                        </p>
                        <p>
                        <strong>Fecha Verificación:</strong> 
                        <span class="editable" data-key="fecha verificacion">${equipo["fecha verificacion"]}</span>
                        <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="fecha verificacion">Editar</button>
                        </p>
                        <p>
                        <strong>Vencimiento Calibración:</strong>
                        <span class="editable" data-key="vencimiento calibracion">${equipo["vencimiento calibracion"]}</span>
                        <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="vencimiento calibracion">Editar</button>
                        </p>
                        <p>
                        <strong>Certificado:</strong>
                        <span class="editable" data-key="certificado calibracion">${equipo["certificado calibracion"]}</span>
                        <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="certificado calibracion">Editar</button>
                        </p>
                        <p><strong>Manual:</strong> ${equipo["manual equipo"]}</p>
                        <div class="botones-equipo">
                        <button class="btn-eliminar" data-tipo="${tipo}" data-index="${index}">Eliminar</button>
                        </div>
                        
                        </div>
                </div>
            `;
                contenedor.innerHTML += equipoHTML;
            });
        }
    }

    const mainContent = document.querySelector('main');
    //evento de click para eliminar equipo
    mainContent.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const tipo = e.target.dataset.tipo;
            const index = parseInt(e.target.dataset.index, 10);
            eliminarEquipo(tipo, index);
        }
    });
    //funcion para eliminar equipo
    function eliminarEquipo(tipo, index) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará el equipo.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const array = JSON.parse(localStorage.getItem(tipo)) || [];
                array.splice(index, 1);
                localStorage.setItem(tipo, JSON.stringify(array));

                Toastify({
                    text: "🗑️ Equipo eliminado",
                    duration: 2000,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "#e74c3c",
                }).showToast();

                mostrarEquipos(tipo, array);
            }
        });
    }
    mainContent.addEventListener('click', (e) => {
        // Modo edición
        if (e.target.classList.contains('btn-editar')) {
            const p = e.target.closest('p');
            const span = p.querySelector('.editable');
            const valorActual = span.textContent;
            const campo = e.target.dataset.campo;

            // Reemplazamos el span por input
            span.outerHTML = `<input type="text" class="editable-input" data-key="${campo}" value="${valorActual}">`;

            // Cambiamos el botón
            e.target.textContent = "Guardar";
            e.target.classList.remove("btn-editar");
            e.target.classList.add("btn-guardar");
        }

        // Guardar edición
        if (e.target.classList.contains('btn-guardar')) {
            const tipo = e.target.dataset.tipo;
            const index = parseInt(e.target.dataset.index, 10);
            const campo = e.target.dataset.campo;

            const p = e.target.closest('p');
            const input = p.querySelector('.editable-input');
            const nuevoValor = input.value;

            // Actualizar en localStorage
            const equipos = JSON.parse(localStorage.getItem(tipo)) || [];
            if (equipos[index]) {
                equipos[index][campo] = nuevoValor;
                localStorage.setItem(tipo, JSON.stringify(equipos));
            }

            // Volver a mostrar como texto
            input.outerHTML = `<span class="editable" data-key="${campo}">${nuevoValor}</span>`;
            e.target.textContent = "Editar";
            e.target.classList.remove("btn-guardar");
            e.target.classList.add("btn-editar");

            Toastify({
                text: "✅ Campo actualizado",
                duration: 2000,
                gravity: "top",
                position: "center",
                backgroundColor: "#27ae60",
            }).showToast();
        }
    });
})