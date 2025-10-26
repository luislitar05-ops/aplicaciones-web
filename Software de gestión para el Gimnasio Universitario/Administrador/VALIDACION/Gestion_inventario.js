// Validar formulario de inventario
function validarInventario(e) {
  e.preventDefault(); // evita enviar el formulario

  let nombre = document.getElementById("nombre-item").value.trim();
  let categoria = document.getElementById("categoria").value.trim();
  let cantidad = document.getElementById("cantidad").value.trim();
  let minimoStock = document.getElementById("minimo-stock").value.trim();
  let estado = document.getElementById("estado").value.trim();

  // Campos obligatorios
  if (nombre === "" || categoria === "" || cantidad === "" || minimoStock === "" || estado === "") {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  // Validar cantidades: números positivos
  if (isNaN(cantidad) || cantidad < 0) {
    alert("Cantidad no válida: debe ser un número igual o mayor a 0");
    return;
  }

  if (isNaN(minimoStock) || minimoStock < 0) {
    alert("Stock mínimo no válido: debe ser un número igual o mayor a 0");
    return;
  }

  alert("Item guardado correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarInventario() {
  alert("Formulario limpiado");
}

// Consultar inventario
function consultarInventario() {
  let busqueda = document.getElementById("buscar-item").value.trim();
  let categoria = document.getElementById("filtro-categoria").value.trim();
  let estado = document.getElementById("filtro-estado").value.trim();

  if (busqueda === "" && categoria === "" && estado === "") {
    alert("Por favor, ingrese al menos un criterio de búsqueda");
    return;
  }

  let mensaje = "Buscando items";
  if (busqueda !== "") mensaje += "\nNombre: " + busqueda;
  if (categoria !== "") mensaje += "\nCategoría: " + categoria;
  if (estado !== "") mensaje += "\nEstado: " + estado;

  alert(mensaje);
}

// Asignar funciones a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-guardar").addEventListener("click", validarInventario);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarInventario);
  document.querySelector(".btn-consultar").addEventListener("click", consultarInventario);
});
