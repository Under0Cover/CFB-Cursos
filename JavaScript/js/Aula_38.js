// requestAnimationFrame
var objeto
var velocidade
var direcaox
var direcaoy
var posicionamentox
var posicionamentoy
var animacao
var estado

function iniciar() {
    velocidade = 2
    direcaox = 1
    direcaoy = 0
    posicionamentoy = 0
    posicionamentox = 0
    estado = 1 // Em movimento
    objeto = document.getElementById("jogador")
    objeto.addEventListener("click", mover_parar)
    document.getElementById("botao_iniciar").addEventListener("click", mover)
    document.getElementById("botao_parar").addEventListener("click", parar)
    game()
}

function game() {
    posicionamentox += direcaox * velocidade
    //posicionamentoy += direcaoy * velocidade
    objeto.style.left = posicionamentox + "px"
    //objeto.style.top = posicionamentoy + "px"
    if (posicionamentox > 1300){
        direcaox = -1
    }else if (posicionamentox < 0){
        direcaox = 1
    }
    animacao = requestAnimationFrame(game)
}

function mover_parar(){
    if (estado) {
        estado = 0
        objeto.style.backgroundColor = "#f00"
        cancelAnimationFrame(animacao)
    }else {
        estado = 1
        objeto.style.backgroundColor = "#00f"
        animacao = requestAnimationFrame(game)
    }
}

function parar(){
    estado = 0
    objeto.style.backgroundColor = "#f00"
    cancelAnimationFrame(animacao)
}

function mover(){
    if (estado == 0) {
        estado = 1
        objeto.style.backgroundColor = "#00f"
        animacao = requestAnimationFrame(game)
    }
}

window.addEventListener("load", iniciar)
