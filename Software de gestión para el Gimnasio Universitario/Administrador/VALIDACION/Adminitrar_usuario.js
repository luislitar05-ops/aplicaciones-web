// Función para validar los campos del formulario
function validarFormulario(e) {
  e.preventDefault(); // evita que se envíe el formulario

  let tipo = document.getElementById("tipo").value.trim();
  let nombres = document.getElementById("nombres").value.trim();
  let apellidos = document.getElementById("apellidos").value.trim();
  let cedula = document.getElementById("cedula").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let email = document.getElementById("email").value.trim();

  // Validar campos obligatorios
  if (tipo === "" || nombres === "" || apellidos === "" || cedula === "" || telefono === "" || email === "") {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  // Validar cédula: solo números y 10 dígitos
  if (!/^\d{10}$/.test(cedula)) {
    alert("Cédula no válida: debe tener exactamente 10 números");
    return;
  }

  // Validar teléfono: solo números y 10 dígitos
  if (!/^\d{10}$/.test(telefono)) {
    alert("Teléfono no válido: debe tener exactamente 10 números");
    return;
  }

  // Validar correo simple
  if (!email.includes("@") || !email.includes(".")) {
    alert("Correo electrónico no válido");
    return;
  }

  // Todo correcto
  alert("Usuario guardado correctamente");
  e.target.reset(); // limpia el formulario
}

// Función para limpiar el formulario
function limpiarFormulario() {
  alert("Formulario limpiado");
}

// Función para consultar usuario
function consultarUsuario() {
  let busqueda = document.getElementById("buscar-tabla").value.trim();

  if (busqueda === "") {
    alert("Por favor, ingrese una cédula o nombre para consultar");
    return;
  }

  alert("Buscando usuario: " + busqueda);
}

// Asignar funciones a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-guardar").addEventListener("click", validarFormulario);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarFormulario);
  document.querySelector(".btn-consultar").addEventListener("click", consultarUsuario);
});
