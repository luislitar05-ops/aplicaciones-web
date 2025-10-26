document.addEventListener("DOMContentLoaded", function () {
  // Validar número de tarjeta
  const inputTarjeta = document.getElementById("numero-tarjeta");
  const btnPagar = document.querySelector(".btn-pagar");

  btnPagar.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Eliminar espacios y validar solo dígitos
    const numero = inputTarjeta.value.replace(/\s+/g, '');
    const regex = /^\d{16}$/;

    if (!regex.test(numero)) {
      alert("Número de tarjeta inválido. Debe contener 16 dígitos.");
      inputTarjeta.focus();
      return;
    }

    alert("Pago realizado exitosamente. ¡Gracias por renovar tu membresía!");
  });

  // Botones de selección de plan
  const btnPlanes = document.querySelectorAll(".btn-seleccionar");
  btnPlanes.forEach(btn => {
    btn.addEventListener("click", function () {
      btnPlanes.forEach(b => b.classList.remove("activo"));
      this.classList.add("activo");
      alert(`Has seleccionado el plan: ${this.closest(".plan").querySelector("h4").textContent}`);
    });
  });
});
