// setTimeout e setInterval

var tempo

function muda_cor() {
    var objeto = document.getElementById("div_01")
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    objeto.style.backgroundColor = "rgb("+r+","+g+","+b+")"
}

// var tempo = setInterval(muda_cor, 3000)
// Contantemente troca de cores

// var tempo = setTimeout(muda_cor, 3000)
// Muda a cor da div apenas uma vez

// window.addEventListener("load", muda_cor)
// Sempre que a página é carregada, muda a cor

function iniciar() {
    tempo = setInterval(muda_cor, 50)
}

function parar() {
    clearInterval(tempo)
    // Para a variável "tempo" funcional, temos que declarar ela no escopo global, porque dentro da função ela não irá ser encontrada
}

function addEventos() {
    document.getElementById("botao_01").addEventListener("click", iniciar)
    document.getElementById("botao_02").addEventListener("click", parar)
}

window.addEventListener("load", addEventos)
