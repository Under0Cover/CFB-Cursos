// insertBefore - childNodes

function iniciar() {
    document.getElementById("botao_contar").addEventListener("click", function () {
        var lista = document.getElementById("lista_elementos")
        var quantidade = lista.childNodes.length
        alert("Sua lista possui: " + quantidade + " item(ns)!")
    })
    document.getElementById("botao_adicionar").addEventListener("click", function () {
        var lista = document.getElementById("lista_elementos")
        var texto = document.getElementById("formulario")
        var li = document.createElement("li")
        li.textContent = texto.value
        lista.insertBefore(li, lista.childNodes[0])
        texto.value = ""
        texto.focus()
    })
}

window.addEventListener("load", iniciar)