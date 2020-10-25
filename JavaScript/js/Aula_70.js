// JavaScript em arquivo externo

var div01
var div02
var div03
var div04

function iniciar() {
    div01 = document.getElementById("div_01")
    // div01.addEventListener("click", troca)
    div02 = document.getElementById("div_02")
    div03 = document.getElementById("div_03")
    div04 = document.getElementById("div_04")

    div01.addEventListener("mouseover", troca_over)
    div01.addEventListener("mouseout", troca_out)

    div02.addEventListener("mouseover", troca_over)
    div02.addEventListener("mouseout", troca_out)

    div03.addEventListener("mouseover", troca_over)
    div03.addEventListener("mouseout", troca_out)

    div04.addEventListener("mouseover", troca_over)
    div04.addEventListener("mouseout", troca_out)
}

function troca() {
    var objeto = event.target
    objeto.style.backgroundImage = "url('./imagens/c2.png')"
}

function troca_over() {
    var objeto = event.target
    objeto.style.backgroundImage = "url('./imagens/c2.png')"
}

function troca_out() {
    var objeto = event.target
    objeto.style.backgroundImage = "url('./imagens/c1.png')"
}

window.addEventListener("load", iniciar)