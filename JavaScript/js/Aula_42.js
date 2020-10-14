// Slider em JavaScript

var imagens = []
var slider
var imagem_atual
var maximo_imagens
var tempo
var tempo_troca
var load_tempo
var load_barra

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
    load_barra = document.getElementById("carregamento")
    carregar_imagens(imagem_atual)
    tempo_troca = 0
    animacao()
}

function troca(direcao){
    tempo_troca = 0
    imagem_atual -= direcao 
    if (imagem_atual > maximo_imagens){
        imagem_atual = 0
    }else if (imagem_atual < 0) {
        imagem_atual = maximo_imagens
    }
    carregar_imagens(imagem_atual)
}

function animacao(){
    tempo_troca++
    if (tempo_troca >= 500) {
        tempo_troca = 0
        troca(1)
    }
    load_tempo = tempo_troca / 5
    load_barra.style.width = load_tempo + "%" 
    window.requestAnimationFrame(animacao)
}

window.addEventListener("load", iniciar)
