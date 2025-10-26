document.addEventListener("DOMContentLoaded", function () {
  const btnGuardar = document.querySelector(".btn-guardar");

  btnGuardar.addEventListener("click", function () {
    const altura = parseInt(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const tipoSangre = document.getElementById("tipo-sangre").value;
    const condiciones = document.getElementById("condiciones-medicas").value.trim();
    const objetivos = document.getElementById("objetivos").value.trim();

    // Validaciones
    if (altura < 100 || altura > 250) {
      alert("La altura debe estar entre 100 cm y 250 cm.");
      return;
    }

    if (peso < 30 || peso > 200) {
      alert("El peso debe estar entre 30 kg y 200 kg.");
      return;
    }

    if (!tipoSangre) {
      alert("Por favor selecciona tu tipo de sangre.");
      return;
    }

    // Guardar cambios (simulación)
    console.log({
      altura,
      peso,
      tipoSangre,
      condiciones,
      objetivos
    });

    alert("Información de salud guardada correctamente.");
  });
});
