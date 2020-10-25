//scrollIntoView

/*
function rolar() {
    var objeto = document.getElementById("carro_03").scrollIntoView()
}
*/

function rolar() {
    var objeto = event.target.dataset.nome
    document.getElementById(objeto).scrollIntoView()
}

function iniciar() {
    document.getElementById("botao_carro_01").addEventListener("click", rolar)
    document.getElementById("botao_carro_02").addEventListener("click", rolar)
    document.getElementById("botao_carro_03").addEventListener("click", rolar)
    document.getElementById("botao_carro_04").addEventListener("click", rolar)
}

window.addEventListener("load", iniciar)