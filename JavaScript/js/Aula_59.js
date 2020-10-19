// CreateElement - AppendChild

function iniciar() {
    document.getElementById("adicionar").addEventListener("click", function () {
        var lista = document.getElementById("lista")
        var li = document.createElement("li")
        var texto = document.getElementById("formulario")
        li.textContent = texto.value
        lista.appendChild(li)
        texto.value = ""
        texto.focus()
    })
}


window.addEventListener("load", iniciar)