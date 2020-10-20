// parentNode - remove - removeChild

function iniciar() {
    var elemento = document.getElementById("paragrafo_05")
    alert(elemento.parentNode.nodeName)
    elemento.remove()
    document.getElementById("paragrafo_02").remove()
    // Usando o removeChild
    var elementos = document.getElementById("cursos").childNodes
    document.getElementById("cursos").removeChild(elementos[1])
}

window.addEventListener("load", iniciar)