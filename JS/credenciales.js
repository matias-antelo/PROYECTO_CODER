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
      window.location.href = "MicrobiologiaAgricola.html";
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

fetch('https://world-clock.p.rapidapi.com/json/utc/now', {
  method: "GET",
  headers: {
    "x-rapidapi-key": 'cf1c8d32a6msh5c6bb410c2a1639p159730jsn6b15c92760e2',
    "x-rapidapi-host": 'world-clock.p.rapidapi.com'
  }
})
.then(response => response.json())
.then(respuesta => {
  const fechaUTC = new Date(respuesta.currentDateTime);
  const fechaArgentina = fechaUTC.toLocaleString("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  document.getElementById("reloj-utc").textContent = fechaArgentina;
})
.catch(err => {
  document.getElementById("reloj-utc").textContent = "Error al cargar la hora";
  console.error(err);
});
