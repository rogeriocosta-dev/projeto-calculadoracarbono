function calculate() {
  const distanceEl = document.getElementById("distance");
  const transportEl = document.getElementById("transport");
  const resultEl = document.getElementById("result");

  const distance = parseFloat((distanceEl.value || "").replace(',', '.'));
  const factor = parseFloat((transportEl.value || "").replace(',', '.'));

  if (isNaN(distance) || distance <= 0) {
    alert("Digite uma distância válida.");
    return;
  }

  if (isNaN(factor) || factor <= 0) {
    alert("Selecione um tipo de transporte válido.");
    return;
  }

  const co2 = distance * factor;
  resultEl.textContent = `Emissão estimada: ${co2.toFixed(2)} kg de CO₂`;
}