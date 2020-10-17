// Objeto window
// innerWidth           -> Largura interna da janela
// innerHeight          -> Altura interna da janela

var largura
var altura
var posicao_x
var posicao_y

/*
largura = window.innerWidth
altura = window.innerHeight
// Para a altura e a largura serem atualizadas sempre e sem a necessidade do carregamento da página, devemos colocar elas dentro da função; para que a função chame elas sempre que houver o click
*/

var painel = document.getElementById("painel")

// painel.innerHTML = largura

// Se o JavaScript não estivesse em arquivo externo e setado no fim do body
// Precisaria adicionar um "escutador de eventos com load e uma função"
// Exemplo:
/*
function iniciar() {
    painel.document.getElementById("painel")
    document.getElementById("botao_tamanho").addEventListener("click", informacoes)
}

window.addEventListener("load", iniciar)
*/

// Associar ao botão 
function informacoes() {
    largura = window.innerWidth
    altura = window.innerHeight
    posicao_x = window.screenX
    posicao_y = window.screenY
    painel.innerHTML = "Largura: " + largura + "<br>" + "Altura: " + altura + "<br>" + "Posição X: " + posicao_x + "<br>" + "Posição Y: " + posicao_y 
}

// Caso eu queira fazer por id
// Eu adiciono um id ao botão
// E chamo o evento de click na função iniciar