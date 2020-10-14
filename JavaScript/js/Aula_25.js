// getElementsByTagName
var tagsP = document.getElementsByTagName("p")
document.write(tagsP[0].innerHTML)
tagsP[4].style.color = "#f00"
document.write("<br>")
var tagsP_elemento = document.getElementsByTagName("p")[3]
document.write(tagsP_elemento.innerHTML)
for (var indice = 0; indice < tagsP.length; indice++){
    tagsP[indice].style.color = "#fca"
}
// Pode recolher todos os elementos da página usando # getElementsByName("*")
/*
var tags = document.write.getElementsByTagName("*")
tags[8].innerHTML = "Novo Texto"
tags[8].style.color = "#f00"
*/
