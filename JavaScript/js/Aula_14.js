
// Array - Vetor (Parte 02)
var mochila = []

mochila.push("Faca")
mochila.push("Corda")
mochila.push("Pederneira")
mochila.push("Chave")
mochila.push("Lanterna")
mochila.push("Pedra")
mochila.unshift("Facão")

mochila.pop()

mochila.shift()

mochila.splice(2,1)

document.write(mochila + "<br>")
document.write(mochila[0] + "<br>")
document.write(mochila[1] + "<br>")
document.write(mochila[2] + "<br>")
document.write(mochila[3] + "<br>")
document.write(mochila[4] + "<br>")
document.write(mochila[5] + "<br>")
document.write(mochila[6] + "<br>")

// Metodo push          -> Inserção no final do Vetor
// Metodo unshift       -> Inserção no início do Vetor
// Metodo pop           -> Remove o último elemento do Vetor
// Metodo shift         -> Remove o primeiro elemento do Vetor
// Metodo splice        -> Remove um (ou vários) elementos do meio Vetor

