function aplicarEstilosIncorrectos(message, messageId, inputElement) {
  document.getElementById(messageId).innerHTML = message;
  document.getElementById(messageId).style.color = "#e35958";
  inputElement.classList.remove("correcto");
  inputElement.classList.add("incorrecto");
}

function aplicarEstilosCorrectos(inputElement, messageId) {
  inputElement.classList.add("correcto");
  inputElement.classList.remove("incorrecto");
  document.getElementById(messageId).innerHTML = " ";
}

function validarCampoTexto() {
  var nombreif = document.getElementById("nombre");
  var info = nombreif.value;

  if (info.length === 0) {
    aplicarEstilosIncorrectos("Rellene este campo", "mensajeNombre", nombreif);
    return false;
  }

  aplicarEstilosCorrectos(nombreif, "mensajeNombre");
  return true;
}

function validarCampoTexto2() {
  var apellidoif = document.getElementById("apellido");
  var info = apellidoif.value;

  if (info.length === 0) {
    aplicarEstilosIncorrectos(
      "Rellene este campo",
      "mensajeApellido",
      apellidoif
    );
    return false;
  }

  aplicarEstilosCorrectos(apellidoif, "mensajeApellido");
  return true;
}

function validarEmail() {
  var correoif = document.getElementById("email");
  var correo = correoif.value;

  if (correo.length === 0) {
    aplicarEstilosIncorrectos("Rellene este campo", "mensajeEmail", correoif);
    return false;
  }
  if (!/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(correo)) {
    aplicarEstilosIncorrectos("Email inválido", "mensajeEmail", correoif);
    return false;
  }

  aplicarEstilosCorrectos(correoif, "mensajeEmail");
  return true;
}

function validarFormulario() {
  return validarCampoTexto() && validarCampoTexto2() && validarEmail();
}
