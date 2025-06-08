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
