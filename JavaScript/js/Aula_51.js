// Objeto window

// Mantendo as configurações da aula anterior

var largura
var altura
var posicao_x
var posicao_y

function informacoes() {
    largura = window.innerWidth
    altura = window.innerHeight
    posicao_x = window.screenX
    posicao_y = window.screenY
    painel.innerHTML = "Largura: " + largura + "<br>Altura: " + altura + "<br>Posição X: " + posicao_x + "<br>Posição Y: " + posicao_y
}

function iniciar() {
    document.getElementById("botao_tamanho").addEventListener("click", informacoes)
    document.getElementById("botao_rolagem").addEventListener("click", rolar)
}

window.addEventListener("load", iniciar)

// scrollBy

function rolar() {
    window.scrollBy(500, 500)
}

// Propriedade length

function iniciar_frame() {
    // var quantidade = window.length
    // Vou forçar a quantidade para 4 para poder continuar trabalhando com iframes no decorrer da aula
    var quantidade = 4
    var painel_frame = document.getElementById("painel_frame").innerHTML = quantidade
    for (var indice = 0; indice < quantidade; indice++) {
        window.frames[indice].location = "http://cfbcursos.com.br"
    }
}

window.addEventListener("load", iniciar_frame)