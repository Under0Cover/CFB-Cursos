// Manipulando strings - Parte 03
var texto_01 = document.getElementById("texto").innerHTML
var texto_02 = texto_01

// IndexOf -> Vai retornar o índice do elemento que eu passar
var resultado = texto_01.indexOf("r")
document.write(resultado)
document.write("<br>")
// Retorna erro, provavelemente sofreu alterações

// LastIndexOf -> Vai retornar o último index identificado
var resultado = texto_01.lastIndexOf("C")
document.write(resultado)
document.write("<br>")
// Ambos métodos são case-sensitive

// LocaleCompare -> Vai comparar as strings
var resultado = texto_01.localeCompare(texto_02)
// Como texto_02 recebeu texto_01 elas tem que retornar iguais
if (resultado == 0) {
    document.write("Strings iguais")
} else {
    document.write("Strings diferentes")
}
document.write("<br>")

// Slice -> Vai retornar um fatia da string, setada por índices
var resultado = texto_01.slice(3, 10)
// Retorna os valores nos índices marcados [3, 10] -> "Cursos"
document.write(resultado)
document.write("<br>")

// Split -> Vai dividir a string com o parametro que receber
var resultado = texto_01.split(" ")
// A passagem foi o espaço
// resultado passa a ser um vetor, podendo ser acessado por índices
document.write(resultado[0])
document.write("<br>")
// Ou na sua totalidade
document.write(resultado)
document.write("<br>")

// Substr -> É parecido com o slice
// A diferença é que no slice passa o índice de início e de fim
// No substr passa o índice de início e o TAMANHO do corte
var resultado = texto_01.substr(4, 6)
document.write(resultado)
document.write("<br>")

// ToLowerCase -> Transfere toda a string para minúsculas
var resultado = texto_01.toLowerCase()
document.write(resultado)
document.write("<br>")

// ToUpperCase -> Transfere toda a string para maiúsculas
var resultado =  texto_01.toUpperCase()
document.write(resultado)
document.write("<br>")

// Os métodos também podem ser combinados
var resultado = texto_01.toUpperCase().substr(22, 10)
// O retorno esperado é "JAVASCRIPT"
document.write(resultado)
document.write("<br>")
