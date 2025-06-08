let intentos = 0;
const topeIntentos = 3;

function pedirCredenciales() {
  const usuarioCorrecto = "admin";
  const contrasenaCorrecta = "1234";

  const usuarioIngresado = document.getElementById("usuario").value;
  const contrasenaIngresada = document.getElementById("contrasena").value;

  if (intentos >= topeIntentos) {
    Swal.fire({
      icon: "error",
      title: "Acceso bloqueado",
      text: "Demasiados intentos fallidos.",
      confirmButtonText: "Entendido"
    });
  }
  else if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
    Swal.fire({
      icon: "success",
      title: "¡Bienvenido!",
      text: "Has ingresado correctamente",
      confirmButtonText: "Continuar"
    }).then(() => {
      window.location.href = "microbiologiaAgricola.html";
    });
  } else {
    intentos++;
    const restantes = topeIntentos - intentos;
    Swal.fire({
      icon: "warning",
      title: "Credenciales incorrectas",
      text: `Intentos restantes: ${restantes}`,
      confirmButtonText: "Reintentar"
    });
  }
}

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    const respuesta = JSON.parse(this.responseText);
    const fechaUTC = new Date(respuesta.currentDateTime);
    fechaUTC.setHours(fechaUTC.getHours());

    const opciones = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const fechaArgentina = fechaUTC.toLocaleString('es-AR', opciones);

    // Mostrar en el DOM
    document.getElementById("reloj-utc").textContent = fechaArgentina;

  }
});

xhr.open('GET', 'https://world-clock.p.rapidapi.com/json/utc/now');
xhr.setRequestHeader('x-rapidapi-key', 'cf1c8d32a6msh5c6bb410c2a1639p159730jsn6b15c92760e2');
xhr.setRequestHeader('x-rapidapi-host', 'world-clock.p.rapidapi.com');

xhr.send(data);