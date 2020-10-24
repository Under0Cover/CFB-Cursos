// activeElement
// Capturando o elemento ativo na página

// 3 Maneiras de trabalhar com o atributo

// Forma 01 - onclick no body

/*
function ativo() {
    var elemento = document.activeElement.tagName
    console.log(elemento)
}
*/

// Forma 02 - requestAnimationFrame
/*
var div_caixa
var frames

function iniciar() {
    div_caixa = document.getElementById("caixa")
    loop()
}

function loop() {
    div_caixa.innerHTML = document.activeElement.tagName
    frames = requestAnimationFrame(loop)
}

*/

// Forma 03 - onMouseUp

function iniciar() {
    var original = document.getElementById("texto_original")
    original.addEventListener("mouseup", copiar)
}

function copiar() {
    var caixa = document.getElementById("texto_selecionado")
    var elemento = document.activeElement
    var selecao = elemento.value.substring(elemento.selectionStart, elemento.selectionEnd)
    caixa.innerHTML = selecao
}

window.addEventListener("load", iniciar)