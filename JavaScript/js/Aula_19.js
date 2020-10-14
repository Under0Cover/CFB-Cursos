// Comando while
var numero = 0
while (numero < 10){
    document.write(numero + "<br>")
    numero++
}

document.write("<hr>")

var numero_desc = 10
while (numero_desc--){
    document.write(numero_desc + "<br>")
}

document.write("<hr>")

numero_true = true
contador = 0
while (numero_true) {
    document.write(contador + "<br>")
        contador++
        if (contador > 9){
            numero_true = false
        }
}
