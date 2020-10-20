// getAttribute - console.log

function iniciar() {
    var elemento = document.getElementById("paragrafo_01")
    var atributo = elemento.getAttribute("class")
    console.log("CFB Cursos")
    console.log(atributo)
}

window.addEventListener("load", iniciar)