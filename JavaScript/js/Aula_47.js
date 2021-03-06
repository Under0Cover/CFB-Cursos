// Manipulando strings - Parte 04

var frase = document.getElementById("texto").innerHTML

// ToString -> Vai converter a variável em string
// No caso do nosso exemplo, não trás muita utilidade
// Mas o método tem uma peculiaridade
// No caso dos números, ele pode retornar as bases
var numero = 15
// Aqui ele retorna o número como string
var resultado = numero.toString()
document.write(resultado)
document.write("<br>")

// Aqui ele retorna na base binária
var binaria = numero.toString(2)
document.write(binaria)
document.write("<br>")

// Aqui ele retorna na base octagonal
var octal = numero.toString(8)
document.write(octal)
document.write("<br>")

// Aqui ele retorna na base hexadecimal
var hexadecimal = numero.toString(16)
document.write(hexadecimal)
document.write("<br>")

// Trim -> Remove espaços antes e depois da string
// No caso do HTML, ele já não renderiza muitos espaços
// Mas em outros elementos como no alert, eles ainda são renderizados
texto = "                  CFB Cursos                         "
// Uma comparação antes e depois do método
//  alert(texto)
var resultado = texto.trim()
//  alert(resultado)
document.write(resultado)
document.write("<br>")

// Para imprimir caracteres especiais podemos usar "/" antes deles
// Para colocar a palavra "JavaScript" entre aspas
var resultado = "CFB Cursos - Curso de \"JavaScript\""
document.write(resultado)
document.write("<br>")
// A mesma ideia funciona para:
// Aspas simples
// Barra invertida
// Barra n -> Pórem não funciona no HTML, mas funciona no alert
