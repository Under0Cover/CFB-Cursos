// Movendo objeto 
var direcaoX
var direcaoY
var posicionamentoX
var posicionamentoY
var velocidade
var objeto
var tempo

function iniciar() {
    direcaoX = 0
    direcaoY = 0
    posicionamentoX = 0
    posicionamentoY = 0
    velocidade = 10
    objeto = document.getElementById("div_01")
    tempo = setInterval(enter_frame, 20)
    document.addEventListener("keydown", tecla_pressionada)
    document.addEventListener("keyup", tecla_solta)
}

function tecla_pressionada() {
    var tecla = event.keyCode
    if (tecla == 37) {
        direcaoX = -1
    }else if (tecla == 38) {
        direcaoY = -1
    }else if (tecla == 39) {
        direcaoX = 1
    }else if (tecla == 40) {
        direcaoY = 1
    }
}

function tecla_solta() {
    var tecla = event.keyCode
    if (tecla == 37) {
        direcaoX = 0
    }else if (tecla == 38) {
        direcaoY = 0
    }else if (tecla == 39) {
        direcaoX = 0
    }else if (tecla == 40) {
        direcaoY = 0
    }
}

function enter_frame() {
    posicionamentoX += direcaoX * velocidade
    posicionamentoY += direcaoY * velocidade
    objeto.style.left = posicionamentoX + "px"
    objeto.style.top = posicionamentoY + "px"
}

window.addEventListener("load", iniciar)
