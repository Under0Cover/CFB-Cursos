// Slider em JavaScript

var imagens = []
var slider
var imagem_atual
var maximo_imagens
var tempo
var tempo_troca

function pre_carregamento(){
    var s = 1
    for (var indice = 0; indice < 5; indice++){
        imagens[indice] = new Image()
        imagens[indice].src = "imagens/s"+ s +".jpg"
        s++
    }
}

function carregar_imagens(imagem){
    slider.style.backgroundImage = "url('"+ imagens[imagem].src+"')"
}

function iniciar(){
    pre_carregamento();
    imagem_atual = 0
    maximo_imagens = imagens.length - 1
    slider = document.getElementById("div_slider")
    carregar_imagens(imagem_atual)
    var tempo_troca = 3000
    tempo = setInterval(troca, tempo_troca)
}

function troca(){
    imagem_atual++
    if (imagem_atual > maximo_imagens){
        imagem_atual = 0
    }
    carregar_imagens(imagem_atual)
}

window.addEventListener("load", iniciar)
