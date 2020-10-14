
// Manipulando Forms
// Visualizando a quantidade de formulários
var formulario = document.forms.length
document.write(formulario)
document.write("<hr>")
// Formas diferentes de apontar para o mesmo formulário
// var formulario_item = document.forms.item(0).id
// var formulario_namedItem = document.forms.namedItem("curso_01").id
// var formulario_namedItem = document.forms.namedItem("curso_01").innerTHML
var formulario_id = document.forms[0].elements[1].value
document.write(formulario_id)
document.write("<hr>")

// Pegando o elemento [0]
// Primeiro aponta para o formulário
// Depois aponta para o elemento
document.write(document.getElementById("curso_01").elements[0].value)

var formul = document.forms[0]
var elemento = formul.elements
for ( var indice = 0; indice < elemento.length; indice++){
    elemento[indice].style.backgroundColor = "#ddd"
    elemento[indice].value = "Curso de JavaScript"
}

