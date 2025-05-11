function pedirCredenciales(area) {
  const usuarioCorrecto = "admin";
  const contraseñaCorrecta = "1234";
  const topeIntentos = 3;

  let usuario, contrasena;
  let intentos = 0;
  let accesoConcedido = false;

  do {
    usuario = prompt("Ingrese usuario:");
    contrasena = prompt("Ingrese contraseña:");
    intentos++;
  } while (
    usuario !== usuarioCorrecto &&
    contrasena !== contraseñaCorrecta &&
    intentos < topeIntentos
  );

  accesoConcedido = usuario === usuarioCorrecto && contrasena === contraseñaCorrecta;

  if (accesoConcedido) {
    confirm(`Bienvenido a ${area}!`);
    //acceso = true;

    // Redireccionar según el área elegida
    switch (area) {
      case "Microbiologia Agricola":
        window.location.href = "MicrobiologiaAgricola.html";
        break;
      case "Quimica y Micotoxinas":
        window.location.href = "QuimicaMicotoxinas.html";
        break;
      case "residuos de Plaguicidas":
        window.location.href = "residuosPlaguicidas.html";
        break;
    }
  }
  else {
    alert("Acceso bloqueado. Demasiados intentos fallidos.");
  }
}