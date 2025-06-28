// Objeto para almacenar los arrays 
const dataMap = {};
const tipos = ['incubadora', 'estufa', 'autoclave', 'termometro', 'microscopio', 'banio', 'balanza', 'flujo'];

document.addEventListener('DOMContentLoaded', async () => {
    // Cargar todos los arrays desde archivos JSON usando fetch
    await Promise.all(tipos.map(async (tipo) => {
        try {
            const localData = JSON.parse(localStorage.getItem(tipo));
            if (localData) {
                dataMap[tipo] = localData;
            } else {
                const response = await fetch(`./data/${tipo}.json`);
                const jsonData = await response.json();
                dataMap[tipo] = jsonData;
                localStorage.setItem(tipo, JSON.stringify(jsonData));
            }
        } catch (error) {
            console.warn(`❌ Error cargando ${tipo}.json:`, error);
            dataMap[tipo] = [];
        }
    }));

    // Elementos del DOM
    const ingresoLink = document.getElementById('link-ingreso');
    const formulario = document.getElementById('formulario-ingreso');
    const logoPrincipal = document.getElementById("logo-principal");

    const secciones = tipos.reduce((equipos, tipo) => {
        equipos[tipo] = document.getElementById(`seccion-${tipo}`);
        return equipos;
    }, {});

    // Ocultar todas las secciones
    function ocultarTodo() {
        formulario.style.display = 'none';
        logoPrincipal.style.display = 'none';
        Object.values(secciones).forEach(sec => sec.style.display = 'none');
    }

    // Mostrar equipos en pantalla
    function mostrarEquipos(tipo, array) {
        const contenedor = document.getElementById(`contenido-${tipo}`);
        contenedor.innerHTML = "";

        if (!array || array.length === 0) {
            contenedor.innerHTML = `<h2>No hay equipos registrados.</h2>`;
            return;
        }

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
                            <strong>Fecha Calibración:</strong> <span>${equipo["fecha calibracion"]}</span>
                            <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="fecha calibracion">Editar</button>
                        </p>
                        <p>
                            <strong>Fecha Verificación:</strong> <span>${equipo["fecha verificacion"]}</span>
                            <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="fecha verificacion">Editar</button>
                        </p>
                        <p>
                            <strong>Vencimiento Calibración:</strong> <span>${equipo["vencimiento calibracion"]}</span>
                            <button class="btn-editar" data-tipo="${tipo}" data-index="${index}" data-campo="vencimiento calibracion">Editar</button>
                        </p>
                        <p><strong>Certificado:</strong> ${equipo["certificado calibracion"]}</p>
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

    // Mostrar sección al hacer clic en navbar
    tipos.forEach(tipo => {
        const link = document.getElementById(`link-${tipo}`);
        link?.addEventListener('click', () => {
            ocultarTodo();
            secciones[tipo].style.display = 'block';
            mostrarEquipos(tipo, dataMap[tipo]);
        });
    });

    // Mostrar formulario
    ingresoLink.addEventListener('click', () => {
        ocultarTodo();
        formulario.style.display = 'block';
    });

    // Guardar nuevo equipo
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
                text: "⚠️ La fecha de vencimiento no puede ser anterior a la de calibración.",
                duration: 3000,
                gravity: "center",
                position: "center",
                backgroundColor: "#e74c3c",
            }).showToast();
            return;
        }

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

        dataMap[tipo].push(nuevoEquipo);
        localStorage.setItem(tipo, JSON.stringify(dataMap[tipo]));

        Toastify({
            text: "✅ ¡Equipo guardado con éxito!",
            duration: 3000,
            gravity: "center",
            position: "center",
            backgroundColor: "#27ae60"
        }).showToast();

        formulario.reset();
    });

    // Eliminar equipo
    document.querySelector('main').addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const tipo = e.target.dataset.tipo;
            const index = parseInt(e.target.dataset.index, 10);

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
                    dataMap[tipo].splice(index, 1);
                    localStorage.setItem(tipo, JSON.stringify(dataMap[tipo]));
                    mostrarEquipos(tipo, dataMap[tipo]);
                    Toastify({
                        text: "🗑️ Equipo eliminado",
                        duration: 2000,
                        gravity: "top",
                        position: "center",
                        backgroundColor: "#e74c3c"
                    }).showToast();
                }
            });
        }
    });

    // Editar equipo
    document.querySelector('main').addEventListener('click', async (e) => {
        if (e.target.classList.contains('btn-editar')) {
            const tipo = e.target.dataset.tipo;
            const index = parseInt(e.target.dataset.index, 10);
            const campo = e.target.dataset.campo;

            const equipo = dataMap[tipo][index];
            const esFecha = ['fecha', 'vencimiento', 'verificacion'].some(w => campo.toLowerCase().includes(w));

            const { value: nuevoValor } = await Swal.fire({
                title: `Modificar ${campo}`,
                input: esFecha ? 'date' : 'text',
                inputLabel: `Nuevo valor para ${campo}`,
                inputValue: equipo[campo] || '',
                showCancelButton: true,
                inputValidator: (value) => {
                    if (!value) return 'Por favor, ingresa un valor';

                    if (campo === 'vencimiento calibracion') {
                        const nuevaFecha = new Date(value);
                        const fechaCalibracion = new Date(equipo['fecha calibracion']);
                        if (nuevaFecha < fechaCalibracion) {
                            return '⚠️ No puede ser anterior a la fecha de calibración.';
                        }
                    }
                    return null;
                }
            });

            if (nuevoValor) {
                equipo[campo] = nuevoValor;
                localStorage.setItem(tipo, JSON.stringify(dataMap[tipo]));
                mostrarEquipos(tipo, dataMap[tipo]);

                Toastify({
                    text: `✅ ${campo} actualizado correctamente`,
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    backgroundColor: "#27ae60"
                }).showToast();
            }
        }
    });
});