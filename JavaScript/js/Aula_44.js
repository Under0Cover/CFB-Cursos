// Match - procurar algo em uma string
var texto = document.getElementById("texto").innerHTML

// Procurando pela palavra "Aula" existente na string
var resultado = texto.match("Aula")
document.write(resultado)

// Procurando pela palavra "HTML" inexistente na string
document.write("<hr>")
var resultado = texto.match("HTML")
document.write(resultado)

// Informando se palavras "Curso" existem na string
// O length retorna apenas a primeira
// Modificadores:
// i - Busca sem case-sensiteve
// g - Procurar TODAS as ocorrências
// m - Pesquisa sem array
document.write("<hr>")
var resultado = texto.match("Curso")
document.write(resultado.length)
document.write("<br>")
// Procurando TODAS as letras "de"
var resultado = texto.match(/de/g)
document.write(resultado.length)
document.write("<br>")
// Procurando TODAS as letras "Curso" sem case-sensitive
var resultado = texto.match(/Curso/gi)
document.write(resultado.length)
document.write("<br>")
// Os resultados estão no Array "resultado"
// Podemos acessar as diferentes palavras do "match"
document.write(resultado[0])
document.write("<br>")
document.write(resultado[1])
document.write("<br>")
// Como pode ver na impressão, uma palavra com maiúscula e uma com minúscula
// Aqui eu posso procurar a quantidade de letras diferentes como "o" e "a"
var resultado = texto.match(/[oa]/gi)
document.write(resultado.length)
document.write("<br>")
// Aqui eu posso procurar a quantidade de letras exceto "o" e "a"
var resultado = texto.match(/[^oa]/gi)
document.write(resultado.length)
document.write("<br>")
// Aqui eu posso saber quantas letras existem entre outras duas letras, como "a" até "e"
// Obs: a-b-c-d-e
var resultado = texto.match(/[a-e]/gi)
// Aqui retornando quais são eles
document.write(resultado + " : " + resultado.length + "<br>") 
document.write(resultado.length)
document.write("<br>")
// Aqui retornando quantas letras estão fora das duas letras
// Obs: Quantas letras fora de a-b-c-d-e
var resultado = texto.match(/[^a-e]/gi)
document.write(resultado.length)
document.write("<br>")
// Metacarateres e Comandos
// \w   -> Pesquisa somente por letras e numerais, ignorando espaços, traços, etc
// \W   -> Pesquisa por caracteres diferentes de números e letras
// \d   -> Pesquisa por numerais
// \D   -> Pesquisa todos caracteres que não são numerais
// \s   -> Pesquisa pelos espaços
// \S   -> Pesquisa por todos os caracteres, menos os espaços
// \b   -> Pesquisa por ocorrências que iniciem ou terminem com uma letra ou número, cada ocorrência que iniciar e terminar com um número ou letra conta com 2
// \B   -> Pesquisa por ocorrência que NÃO iniciem ou terminem com uma letra ou número
// \O   -> Procura por caracteres nulos
// \n   -> Procura por quebra de linha
// \r   -> Procura por caractere de "retorno de carro" = Enters
// \t   -> Procura por caractere de tabulação TAB
// \v   -> Procura por caractere de tabulação vertical
// s+   -> Procura por palavras que contenham uma ou mais letras "S"
