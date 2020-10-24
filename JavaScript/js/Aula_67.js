// dataset
// Propriedades personalizadas

function define_painel() {
    var objeto = event.target
    var painel = document.getElementById("painel")
    painel.innerHTML = "Modelo: " + objeto.dataset.modelo + "<br>"
    painel.innerHTML += "Cor: " + objeto.dataset.cor + "<br>"
    painel.innerHTML += "Potência: " + objeto.dataset.potencia + " Cavalos<br>"
    painel.innerHTML += "Velocidade: " + objeto.dataset.velocidade + " Km/h<br>"
}

function iniciar() {
    document.getElementById("carro_01").addEventListener("click", define_painel)
    document.getElementById("carro_02").addEventListener("click", define_painel)
    document.getElementById("carro_03").addEventListener("click", define_painel)
    document.getElementById("carro_04").addEventListener("click", define_painel)
}

window.addEventListener("load", iniciar)