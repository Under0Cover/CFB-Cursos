// querySelectorAll
var ps = document.querySelectorAll("p")
document.write(ps[0].innerHTML)
ps[0].innerHTML = "Novo texto"
ps[0].style.color = "#00f"

document.write("<br>")
document.write("<hr>")
document.write("<br>")

var elementos = document.querySelectorAll(".titulo")
for (var indice = 0; indice < elementos.length; indice++){
    document.write(elementos[indice].innerHTML + "<br>")
}

document.write("<br>")
document.write("<hr>")
document.write("<br>")

var exemplo = document.querySelectorAll("p.titulo")
for (var indice = 0; indice < exemplo.length; indice++){
    document.write(exemplo[indice].innerHTML + "<br>")
}

document.write("<br>")
document.write("<hr>")
document.write("<br>")

var p_div = document.querySelectorAll("div > p")
for (var indice = 0; indice < p_div.length; indice++){
    document.write(p_div[indice].innerHTML + "<br>")
    p_div[indice].style.color = "#0a0"
}

document.write("<br>")
document.write("<hr>")
document.write("<br>")

var quadro = document.querySelectorAll("div.quadro > *")
for (var indice = 0; indice < quadro.length; indice++){
    quadro[indice].style.color = "#a0a"
}
