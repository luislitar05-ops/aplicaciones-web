// VALIDACIÓN GENERAL DEL FORMULARIO
function validar() {
  if (!validaTexto("dni", "El DNI no puede estar vacío")) return false;
  if (!validaTexto("nombre", "El nombre no puede estar vacío")) return false;
  if (!validaTexto("apellido", "El apellido no puede estar vacío")) return false;
  if (!validaSexo()) return false;
  if (!validaCorreo()) return false;
  if (!validaNum()) return false;

  alert("Formulario enviado correctamente");
  return true;
}

// VALIDACIÓN DE CAMPOS DE TEXTO VACÍOS
function validaTexto(idCampo, mensaje) {
  let valor = document.getElementById(idCampo).value;
  if (valor == null || valor.length == 0) {
    alert(mensaje);
    return false;
  }
  return true;
}

// VALIDACIÓN DE CAMPO NUMÉRICO (TELÉFONO Y DNI)
function validaNum() {
  let dni = document.getElementById("dni").value;
  let telefono = document.getElementById("telefono").value;

  if (isNaN(dni) || dni.length < 8) {
    alert("El DNI debe contener solo números y tener al menos 8 dígitos");
    return false;
  }

  if (isNaN(telefono) || telefono.length < 10) {
    alert("El teléfono debe ser numérico y tener al menos 10 dígitos");
    return false;
  }
  return true;
}

// VALIDACIÓN DE CORREO ELECTRÓNICO
function validaCorreo() {
  let correo = document.getElementById("correo").value;
  let expresion = /\S+@\S+\.\S+/;

  if (correo == null || correo.length == 0) {
    alert("El correo no puede estar vacío");
    return false;
  }

  if (!expresion.test(correo)) {
    alert("Ingrese un correo válido (ejemplo@correo.com)");
    return false;
  }
  return true;
}

// VALIDACIÓN DE SELECCIÓN DE SEXO
function validaSexo() {
  let sexo = document.getElementById("sexo").value;
  if (sexo === "") {
    alert("Debe seleccionar un sexo");
    return false;
  }
  return true;
}
