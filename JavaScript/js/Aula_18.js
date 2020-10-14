// Comando FOR
var contador = 0
for (contador; contador < 10; contador ++){
    document.write("CFB Cursos<br>")
}

var numero = []

for (contador = 0; contador < 5; contador++){
    numero.push(contador)
}

document.write("<br>")
document.write("<br>")
document.write("<br>")

for (contador = 0; contador < 5; contador++){
    document.write(numero[contador]+"<br>")
}

document.write("<br>")
document.write("<br>")
document.write("<br>")

var numero_digitado = []

for (contador = 0; contador < 5; contador++){
    numero_digitado.push(prompt("Digite um número: "))
    document.write(numero_digitado[contador]+"<br>")
}

document.write("<br>")
document.write("<br>")
document.write("<br>")

var mochila = [["Corda", 1], ["Cura", 10], ["Lanterna", 1], ["Pilhas", 50]]
var linha = 0
var coluna = 0

for (linha; linha < 4; linha++){
    for (coluna = 0; coluna < 2; coluna++){
        document.write(mochila[linha][coluna])
    } document.write("<br>")
}
