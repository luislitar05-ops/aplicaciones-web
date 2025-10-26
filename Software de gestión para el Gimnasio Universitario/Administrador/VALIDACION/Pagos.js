// Validar formulario de pagos
function validarPago(e) {
  e.preventDefault();

  const cedula = document.getElementById("cedula").value.trim();
  const membresia = document.getElementById("membresia").value.trim();
  const monto = document.getElementById("monto").value.trim();
  const fecha = document.getElementById("fecha-pago").value.trim();
  const metodo = document.getElementById("metodo-pago").value.trim();

  if (!cedula || !membresia || !monto || !fecha || !metodo) {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  if (cedula.length !== 10 || isNaN(cedula)) {
    alert("Ingrese una cédula válida de 10 dígitos");
    return;
  }

  if (parseFloat(monto) <= 0) {
    alert("El monto debe ser mayor a $0.00");
    return;
  }

  alert("Pago registrado correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarPago() {
  alert("Formulario limpiado");
}

// Consultar pagos
function consultarPago() {
  const busqueda = document.getElementById("buscar-tabla").value.trim();
  if (!busqueda) {
    alert("Ingrese cédula o nombre para buscar");
    return;
  }
  alert("Buscando pago: " + busqueda);
}

// Asignar eventos a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-guardar").addEventListener("click", validarPago);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarPago);
  document.querySelector(".btn-consultar").addEventListener("click", consultarPago);
});
