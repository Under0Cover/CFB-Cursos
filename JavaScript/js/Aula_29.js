// Classe Math
document.write(Math.PI)
document.write("<hr>")
document.write(Math.SQRT2)
document.write("<hr>")
document.write(Math.SQRT1_2)
document.write("<hr>")
document.write("<hr>")
var valor = -10
document.write(Math.abs(valor))
document.write("<hr>")
var valor = 10.3
document.write(Math.ceil(valor))
document.write("<hr>")
var valor = 10.8
document.write(Math.floor(valor))
document.write("<hr>")
var valor_01 = 10.6
var valor_02 = 10.4
document.write(Math.round(valor_01))
document.write("<br>")
document.write(Math.round(valor_02))
document.write("<hr>")
var valor_01 = 8
var valor_02 = 3
document.write(Math.pow(valor_01, valor_02))
document.write("<hr>")
var valor = 7
document.write(Math.sqrt(valor))
document.write("<hr>")
document.write(Math.random())
document.write("<br>")
var valor = 10
document.write(Math.random()*valor)
document.write("<br>")
document.write(Math.round(Math.random()*valor))
document.write("<hr>")
var valor = 60
for (var indice = 0; indice < 6; indice++){
    document.write(Math.round((Math.random()*valor)+1)+"<br>")
}
document.write("<hr>")
var angulo = prompt("Digite o ângulo: ")
var conseno = Math.cos(angulo * Math.PI/180)
var seno = Math.sin(angulo * Math.PI/180)
document.write("Ângulo: "+ angulo + "<br>Cosseno: " + conseno + "<br>Seno: " + seno)
document.write("<hr>")
var numeros = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
document.write(Math.max(numeros))
document.write("<br>")
document.write(Math.min(numeros))
