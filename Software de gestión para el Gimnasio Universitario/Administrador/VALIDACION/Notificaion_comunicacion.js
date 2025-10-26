// Mostrar/ocultar programación según envío inmediato
const envioInmediato = document.getElementById("envio-inmediato");
const grupoProgramacion = document.getElementById("grupo-programacion");

envioInmediato.addEventListener("change", () => {
  grupoProgramacion.style.display = envioInmediato.checked ? "none" : "block";
});

// Validar formulario de notificaciones
function validarNotificacion(e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const tipo = document.getElementById("tipo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const destinatarios = document.getElementById("destinatarios").value.trim();

  if (!titulo || !tipo || !mensaje || !destinatarios) {
    alert("Por favor, complete todos los campos obligatorios (*)");
    return;
  }

  if (mensaje.length > 500) {
    alert("El mensaje no puede superar los 500 caracteres");
    return;
  }

  alert("Notificación enviada correctamente");
  e.target.reset();
}

// Limpiar formulario
function limpiarNotificacion() {
  alert("Formulario limpiado");
}

// Consultar notificación
function consultarNotificacion() {
  let busqueda = document.getElementById("buscar-notificacion").value.trim();
  if (!busqueda) {
    alert("Ingrese el título de la notificación a buscar");
    return;
  }
  alert("Buscando notificación: " + busqueda);
}

// Asignar eventos a los botones
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn-enviar").addEventListener("click", validarNotificacion);
  document.querySelector(".btn-cancelar").addEventListener("click", limpiarNotificacion);
  document.querySelector(".btn-consultar").addEventListener("click", consultarNotificacion);
});
