document.addEventListener("DOMContentLoaded", function () {
  // Reservar clase
  const botonesReservar = document.querySelectorAll(".btn-reservar");
  botonesReservar.forEach(btn => {
    btn.addEventListener("click", function () {
      const claseDia = this.closest(".clase-dia");
      const cuposSpan = claseDia.querySelector(".cupos");
      let [ocupados, total] = cuposSpan.textContent.split("/").map(n => parseInt(n));
      
      if (ocupados >= total) {
        alert("No hay cupos disponibles para esta clase");
        return;
      }
      
      ocupados++;
      cuposSpan.textContent = `${ocupados}/${total} cupos`;
      alert(`Clase reservada exitosamente: ${claseDia.querySelector(".tipo-clase").textContent}`);
      
      // Aquí se podría agregar la reserva al panel lateral dinámicamente
    });
  });

  // Cancelar reserva
  const botonesCancelar = document.querySelectorAll(".btn-cancelar");
  botonesCancelar.forEach(btn => {
    btn.addEventListener("click", function () {
      if (confirm("¿Deseas cancelar esta reserva?")) {
        const reservaItem = this.closest(".reserva-item");
        reservaItem.remove();
        alert("Reserva cancelada exitosamente");
      }
    });
  });

  // Botón buscar clases (filtro simple)
  document.querySelector(".btn-buscar").addEventListener("click", function () {
    const tipoClase = document.getElementById("tipo-clase").value;
    const instructor = document.getElementById("instructor").value;
    const fecha = document.getElementById("fecha-busqueda").value;
    
    alert(`Filtrando clases: ${tipoClase || "Todas"} - Instructor: ${instructor || "Todos"} - Fecha: ${fecha || "Cualquiera"}`);
    // Aquí se puede agregar la lógica para ocultar/mostrar clases según los filtros
  });
});
