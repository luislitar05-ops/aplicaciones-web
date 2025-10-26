// Validar formulario de membresía
function validarMembresia(e) {
  e.preventDefault(); // evita enviar el formulario

  let nombre = document.getElementById("nombre").value.trim();
  let tipo = document.getElementById("tipo").value.trim();
  let precio = document.getElementById("precio").value.trim();
  let estado = document.getElementById("estado").value.trim();

  // Campos obligatorios
  if (nombre === "" || tipo === "" || precio === "" || estado === "") {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  // Validar precio
  if (isNaN(precio) || precio < 0) {
    alert("Precio no válido: debe ser un número igual o mayor a 0");
    return;
  }

  alert("Membresía guardada correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarMembresia() {
  alert("Formulario limpiado");
}

// Consultar membresía
function consultarMembresia() {
  let busqueda = document.getElementById("buscar-tabla").value.trim();
  if (busqueda === "") {
    alert("Por favor, ingrese un nombre de membresía para buscar");
    return;
  }
  alert("Buscando membresía: " + busqueda);
}

// Asignar funciones a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-guardar").addEventListener("click", validarMembresia);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarMembresia);
  document.querySelector(".btn-consultar").addEventListener("click", consultarMembresia);
});
