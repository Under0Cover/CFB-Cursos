// Objeto Screen

var painel

function iniciar() {
    painel = document.getElementById("painel")
    painel.innerHTML = "Largura: " + screen.width + "px<hr>"
    painel.innerHTML += "Altura: " + screen.height + "px<hr>"
    painel.innerHTML += "Largura disponível: " + screen.availWidth + "px<hr>"
    painel.innerHTML += "Altura disponível: " + screen.availHeight + "px<hr>"
    painel.innerHTML += "Profundidade da paleta de cores: " + screen.colorDepth + "bits<hr>"
    painel.innerHTML += "Resolução das cores (bits/px): " + screen.pixelDepth + "bits/px<hr>"
}

window.addEventListener("load", iniciar)