// replaceChild - Substituir elementos HTML

function iniciar() {
    var trocar_elemento = document.createElement("h1")
    var substituido = 3
    var lista_cursos = document.getElementById("cursos")
    var elemento_antigo = lista_cursos.childNodes[substituido]
    var texto = document.createTextNode(elemento_antigo.innerHTML)
    trocar_elemento.appendChild(texto)
    //alert(elemento_antigo.innerHTML)
    lista_cursos.replaceChild(trocar_elemento, elemento_antigo)
}

window.addEventListener("load", iniciar)