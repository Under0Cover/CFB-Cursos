// Funções
function escreve(){
    document.write("Curso de JavaScript - CRB Cursos<br>")
}

escreve()
escreve()

document.write("<hr>")

function soma (a, b) {
    var resultado = a + b
    document.write(resultado + "<br>")
}

soma(5,2)
soma(10,20)
soma(0,1)

document.write("<hr>")

function soma_02 (a, b) {
    return a + b
}
var resultado_02 = soma_02(6, 4)
document.write(resultado_02)

document.write("<hr>")

var valores_media = new Array (10, 4, 8, 22, 45, 9, 2, 6, 45, 12, 45)
function media (numeros) {
    var tamanho = numeros.length
    var soma = 0
    for (var indice = 0; indice < tamanho; indice++) {
        soma += numeros[indice]
    } return Math.round(soma / tamanho)
}

document.write(media(valores_media))
