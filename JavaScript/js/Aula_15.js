// Array - Vetor (Parte 03)

var mochila = []
var posicao

mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.push("Pedra")
mochila.unshift("Facão")

// Metodo indexOf()             -> Verifica se existe um elemento no Vetor
posicao = mochila.indexOf("Lanterna")
// Formatando melhor quando o item está ou não no Vetor
if (posicao < 0 ){
    document.write("O item não está na mochila!")
}else{
    document.write("Item está na mochila!<br>Na posição: " + posicao )
}
document.write("<br>")
// Verificando um item que não está no Vetor
posicao = mochila.indexOf("Arame")
document.write("<br>")
// Formatando melhor quando o item está ou não no Vetor
if (posicao < 0 ){
    document.write("O item não está na mochila!")
}else{
    document.write("Item está na mochila!<br>Na posição: " + posicao )
}
document.write("<br>")
document.write("<br>")
document.write("<br>")


// Criando outro Array (Vetor)
var numeros = [5, 4, 7, 9, 0, 1, 6, 8, 2, 3]

document.write(numeros[0] + "<br>")
document.write(numeros[1] + "<br>")
document.write(numeros[2] + "<br>")
document.write(numeros[3] + "<br>")
document.write(numeros[4] + "<br>")
document.write(numeros[5] + "<br>")
document.write(numeros[6] + "<br>")
document.write(numeros[7] + "<br>")
document.write(numeros[8] + "<br>")
document.write(numeros[9] + "<br>")

document.write("<br>")
document.write("<br>")
document.write("<br>")

// Metodo sort()                -> Vai ordenar o Vetor
numeros.sort()

document.write(numeros[0] + "<br>")
document.write(numeros[1] + "<br>")
document.write(numeros[2] + "<br>")
document.write(numeros[3] + "<br>")
document.write(numeros[4] + "<br>")
document.write(numeros[5] + "<br>")
document.write(numeros[6] + "<br>")
document.write(numeros[7] + "<br>")
document.write(numeros[8] + "<br>")
document.write(numeros[9] + "<br>")

document.write("<br>")
document.write("<br>")
document.write("<br>")

// Metodo reverse()                -> Vai ordenar de forma reversa o Vetor
numeros.reverse()

document.write(numeros[0] + "<br>")
document.write(numeros[1] + "<br>")
document.write(numeros[2] + "<br>")
document.write(numeros[3] + "<br>")
document.write(numeros[4] + "<br>")
document.write(numeros[5] + "<br>")
document.write(numeros[6] + "<br>")
document.write(numeros[7] + "<br>")
document.write(numeros[8] + "<br>")
document.write(numeros[9] + "<br>")

document.write("<br>")
document.write("<br>")
document.write("<br>")

// Metodo join()                -> Inseri o Vetor completo       
var usando_join

usando_join = numeros.join()
document.write(usando_join + "<br>")

// Metodo concat()              -> Concatena dois Vetores
var outra_mochila = []

outra_mochila.push("Arama")
outra_mochila.push("Luvas")
outra_mochila.push("Joelheiras")
outra_mochila.push("Meias")
outra_mochila.push("Moedas")
outra_mochila.push("Canivete")
outra_mochila.push("Isqueiro")

var mala = []

mala = mochila.concat(outra_mochila)

document.write(mala)

document.write("<br>")
document.write("<br>")
document.write("<br>")

document.write(mala[0] + "<br>")
document.write(mala[1] + "<br>")
document.write(mala[2] + "<br>")
document.write(mala[3] + "<br>")
document.write(mala[4] + "<br>")
document.write(mala[5] + "<br>")
document.write(mala[6] + "<br>")
document.write(mala[7] + "<br>")
document.write(mala[8] + "<br>")
document.write(mala[9] + "<br>")
document.write(mala[10] + "<br>")
document.write(mala[11] + "<br>")
document.write(mala[12] + "<br>")
document.write(mala[13] + "<br>")

document.write("<br>")
document.write("<br>")
document.write("<br>")

document.write("Tamanho da Mochila: " + mochila.length + "<br>")
document.write("Tamanho da Outra Mochila: " + outra_mochila.length + "<br>")
document.write("Tamanho da Mala: " + mala.length + "<br>")

// Metodo indexOf()             -> Verifica se existe um elemento no Vetor
// Metodo sort()                -> Vai ordenar o Vetor
// Metodo reverse()             -> Vai ordenar de forma reversa o Vetor
// Metodo join()                -> Inseri o Vetor completo 
// Metodo concat()              -> Concatena dois Vetores
// Propriedade length           -> Retorna o tamanho do Vetor
