// addEventListener
var px = 0
// Eixo X
var py = 0
// Eixo y

var objeto

/*
document.addEventListener("keydown", function(event){
    var objeto = document.getElementById("div_01")
    var tecla = event.keyCode
    // 37 - Esquerda
    // 38 - Cima
    // 39 - Direita
    // 40 - Baixo
    if (tecla == 37) {
        px -= 10
        objeto.style.left = px + "px"
    }else if (tecla == 38) {
        py -= 10
        objeto.style.top = py + "px"
    }else if (tecla == 39) {
        px += 10
        objeto.style.left = px + "px"
    }else if (tecla == 40) {
        py += 10
        objeto.style.top = py + "px"
    }
})
*/

// Também pode ser feito assim:

function move(){
    
    var tecla = event.keyCode
    if (tecla == 37) {
        px -= 10
        objeto.style.left = px + "px"
    }else if (tecla == 38) {
        py -= 10
        objeto.style.top = py + "px"
    }else if (tecla == 39) {
        px += 10
        objeto.style.left = px + "px"
    }else if (tecla == 40) {
        py += 10
        objeto.style.top = py + "px"
    }else if (tecla == 13) { /* Tecla 13 é Enter */
        alert("Evento keydown Removido")
        document.removeEventListener("keydown", move)
        objeto.style.backgroundColor = "#fff"
    }
}

function addClique(){
    alert("Evento keydown Ativado")
    document.addEventListener("keydown", move)
    objeto.style.backgroundColor = "#f00"
}

function iniciar(){
    objeto = document.getElementById("div_01")
    objeto.addEventListener("click", addClique)
}

window.addEventListener("load", iniciar)
