function calculate() {
  const distance = document.getElementById("distance").value;
  const factor = document.getElementById("transport").value;

  if (distance <= 0) {
    alert("Digite uma distância válida.");
    return;
  }

  const co2 = distance * factor;
  document.getElementById("result").textContent =
    Emissão estimada: ${co2.toFixed(2)} kg de CO₂;
}