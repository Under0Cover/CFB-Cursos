// Eventos em JavaScript
function muda_cor(objeto, cor) {
    objeto.style.backgroundColor = cor
}

function muda_posicao(objeto) {
    objeto.style.position = "absolute"
    objeto.style.left = Math.random()*500 + "px"
    objeto.style.top = Math.random()*500 + "px"
}

function saudacao() {
    var data = new Date()
    var hora = data.getHours()
    var texto = ""
    if (hora < 12 ) {
        texto = "Bom dia!"
    } else if (hora < 18) {
        texto = "Boa tarde!"
    } else {
        texto = "Boa noite!"
    }
    alert("Olá, " + texto)
}
