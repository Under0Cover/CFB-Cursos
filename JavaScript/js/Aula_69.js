// hidden

function mostrar() {
    for (var indice = 1; indice < 5; indice++) {
        document.getElementById("carro_0" + indice).hidden = true
    }
    var objeto = event.target.dataset.nome
    document.getElementById(objeto).hidden = false
}

function esconder(objeto) {
    document.getElementById(objeto).hidden = true
}

function iniciar() {
    document.getElementById("botao_carro_01").addEventListener("click", mostrar)
    document.getElementById("botao_carro_02").addEventListener("click", mostrar)
    document.getElementById("botao_carro_03").addEventListener("click", mostrar)
    document.getElementById("botao_carro_04").addEventListener("click", mostrar)

    for (var indice = 1; indice < 5; indice++) {
        document.getElementById("carro_0" + indice).hidden = true
    }
    // document.getElementById("carro_04").hidden = true
}

window.addEventListener("load", iniciar)