// Manipulando strings - Parte 02

// Search - Procurar por algo na string
// O modificador "g" não funciona
// O search só retorna a posição da 1ª Palavra
// E não TODAS como o g
var texto = document.getElementById("frase").innerHTML
// Procurando a primeira letra "curso" na string independentemente de case-sensitive
var resultado = texto.search(/curso/i)
document.write(resultado)
document.write("<br>")

// Replace - Substitui a palavra "curso" pela palavra "aula"
var texto = document.getElementById("frase").innerHTML
// Substituindo as palavras
var resultado = texto.replace(/curso/ig,"aula")
// O metodo vai substituir TODAS as palavras "curso" por "aula"
// Os modificadores "i" e "g" estão ativos

document.write(resultado)
document.write("<br>")

// CharAt - Eu indico um caracter e ele me retorna o valor
var texto = document.getElementById("frase").innerHTML
// Aqui eu quero saber o valor no índice [15]
var resultado = texto.charAt(15)
document.write(resultado)
document.write("<br>")

// CharCodeAt = Eu indico o índice e ele me retorna o valor referente ao caracter desse índice
var texto = document.getElementById("frase").innerHTML
// Aqui eu quero saber o valor referente ao índice [15] - Letra "r"
var resultado = texto.charCodeAt(15)
document.write(resultado)
document.write("<br>")

// FromCharCode = Eu indico o valor referente ao caracter e ele me retorna o caracter
// Aqui eu vou informar o código "114" e quero que ele retorne o "r"
document.write(String.fromCharCode(114))
document.write("<br>")
// Também nesse exemplo, eu posso buscar a variável "resultado", pois ela já contém o valor referente ao caracter
// Ou seja, o "114" já está na variável "resultado"
document.write(String.fromCharCode(resultado))
document.write("<br>")

// Concat - Ele concatena as strings
// Vou fazer o Slogan do curso em duas variáveis e concatenar elas pra formar a mesma frase
var texto_01 = "CFB Cursos - Curso de JavaScript"
var texto_02 = " - aula 45 do curso de JavaScript"
// Uma variável para fazer a concatenação
var frase = texto_01.concat(texto_02)
// Faz a impressão da variável
document.write(frase)
document.write("<br>")
// Pode também passar a string direto do concat, sem variável
var frase = texto_01.concat(" - aula 45 do Curso de JavaScript")
document.write(frase)
document.write("<br>")
// E, claro, pode fazer dos dois modos
var frase = texto_01.concat(texto_02 + " Aprendendo pelo YouTube!")
document.write(frase)
document.write("<br>")
