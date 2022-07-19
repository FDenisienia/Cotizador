const USD = 300;
const pesoArg = document.getElementById('number');
const button = document.getElementById('submit')
const final = document.getElementById('final')

const calcularPesoAUsd = (event) => {
    event.preventDefault()
    calculo = pesoArg.value / USD
    final.innerHTML = `${pesoArg.value} ARG =  ${calculo} USD`;
}

button.addEventListener('click', calcularPesoAUsd)


