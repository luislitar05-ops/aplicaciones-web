// Validar formulario de asistencia
function validarAsistencia(e) {
  e.preventDefault(); // evita enviar el formulario

  let cedula = document.getElementById("cedula").value.trim();
  let tipo = document.getElementById("tipo-registro").value.trim();
  let fechaHora = document.getElementById("fecha-hora").value.trim();

  // Campos obligatorios
  if (cedula === "" || tipo === "" || fechaHora === "") {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  // Validar cédula: solo números y 10 dígitos
  if (!/^\d{10}$/.test(cedula)) {
    alert("Cédula no válida: debe tener exactamente 10 números");
    return;
  }

  alert("Asistencia registrada correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarAsistencia() {
  alert("Formulario limpiado");
}

// Consultar historial
function consultarHistorial() {
  let busqueda = document.getElementById("buscar-historial").value.trim();

  if (busqueda === "") {
    alert("Por favor, ingrese una cédula para consultar historial");
    return;
  }

  let fechaInicio = document.getElementById("fecha-inicio").value.trim();
  let fechaFin = document.getElementById("fecha-fin").value.trim();

  let mensaje = "Buscando historial de: " + busqueda;
  if (fechaInicio !== "") mensaje += "\nDesde: " + fechaInicio;
  if (fechaFin !== "") mensaje += "\nHasta: " + fechaFin;

  alert(mensaje);
}

// Asignar funciones a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-registrar").addEventListener("click", validarAsistencia);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarAsistencia);
  document.querySelector(".btn-consultar").addEventListener("click", consultarHistorial);
});
