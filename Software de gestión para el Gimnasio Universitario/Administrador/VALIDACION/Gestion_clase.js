// Validar formulario de clases
function validarClase(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre-clase").value.trim();
  let tipo = document.getElementById("tipo-clase").value.trim();
  let instructor = document.getElementById("instructor").value.trim();
  let ubicacion = document.getElementById("ubicacion").value.trim();
  let fecha = document.getElementById("fecha-clase").value.trim();
  let horaInicio = document.getElementById("hora-inicio").value.trim();
  let horaFin = document.getElementById("hora-fin").value.trim();
  let capacidad = document.getElementById("capacidad-maxima").value.trim();
  let estado = document.getElementById("estado-clase").value.trim();

  // Validar campos obligatorios
  if (!nombre || !tipo || !instructor || !ubicacion || !fecha || !horaInicio || !horaFin || !capacidad || !estado) {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  // Validar capacidad
  if (isNaN(capacidad) || capacidad < 1 || capacidad > 50) {
    alert("Capacidad no válida: debe ser un número entre 1 y 50");
    return;
  }

  // Validar horario
  if (horaInicio >= horaFin) {
    alert("La hora de inicio debe ser anterior a la hora de fin");
    return;
  }

  alert("Clase guardada correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarClase() {
  alert("Formulario limpiado");
}

// Consultar clases
function consultarClase() {
  let busqueda = document.getElementById("buscar-clase").value.trim();
  if (!busqueda) {
    alert("Ingrese el nombre de la clase a buscar");
    return;
  }
  alert("Buscando clase: " + busqueda);
}

// Asignar funciones a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-guardar").addEventListener("click", validarClase);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarClase);
  document.querySelector(".btn-consultar").addEventListener("click", consultarClase);
});
