const pesoArg = document.getElementById('number');
const button = document.getElementById('submit')
const final = document.getElementById('final')
let precioUSD;

fetch('https://api.bluelytics.com.ar/v2/latest')
  .then(res => res.json())
  .then(data => precioUSD = data.blue.value_avg)


const calcularPesoAUsd = (event) => {
    event.preventDefault()
    calculo = pesoArg.value / precioUSD
    final.innerHTML = `${pesoArg.value} ARG =  ${calculo.toFixed(3)} USD`;
}

button.addEventListener('click', calcularPesoAUsd)


