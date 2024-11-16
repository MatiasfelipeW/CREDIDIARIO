// script.js
function calcularCredito() {
    const capital = document.getElementById("capital").value;
    const interes = 0.35;
    const plazo = 27;
  
    const totalPago = (capital * (1 + interes)).toFixed(2);
    const pagoDiario = (totalPago / plazo).toFixed(2);
  
    document.getElementById("totalPago").innerText = `${totalPago} ARS`;
    document.getElementById("pagoDiario").innerText = `${pagoDiario} ARS`;
  }