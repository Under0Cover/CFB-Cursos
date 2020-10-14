// Formatação Condicional com tabela

var tabela = document.getElementById("tabela_notas")
var resultado_notas = []
var indice
var soma_notas

for (indice = 1; indice < tabela.rows.length; indice++) {
    soma_notas = parseFloat(tabela.rows[indice].cells[1].innerHTML) + parseFloat(tabela.rows[indice].cells[2].innerHTML) + parseFloat(tabela.rows[indice].cells[3].innerHTML) + parseFloat(tabela.rows[indice].cells[4].innerHTML)
    tabela.rows[indice].cells[5].innerHTML = soma_notas
}

resultado_notas[0] = document.getElementById("resultado_01")
resultado_notas[1] = document.getElementById("resultado_02")
resultado_notas[2] = document.getElementById("resultado_03")
resultado_notas[3] = document.getElementById("resultado_04")
resultado_notas[4] = document.getElementById("resultado_05")

for (indice = 0; indice < 5; indice++) {
    if (resultado_notas[indice].innerHTML < 70){
        resultado_notas[indice].style.color = "#f00"
    } else {
        resultado_notas[indice].style.color = "#00f"
    }
}
