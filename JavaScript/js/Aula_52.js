// Navigator

var painel

function verificar() {
    painel = document.getElementById("painel")
    painel.innerHTML = "Nome do Browser: " + navigator.appName + "<hr>"
    painel.innerHTML += "Versão do Browser: " + navigator.appVersion + "<hr>"
    painel.innerHTML += "Cookies? " + navigator.cookieEnabled + "<hr>"
    navigator.geolocation.getCurrentPosition(localizar) 
    painel.innerHTML += "Idioma: " + navigator.language + "<hr>"
    painel.innerHTML += "Online? " + navigator.onLine + "<hr>"
    painel.innerHTML += "Sistema Operacional: " + navigator.platform + "<hr>"
    painel.innerHTML += "Engine: " + navigator.product + "<hr>"
    painel.innerHTML += "Agente: " + navigator.userAgent + "<hr>"
}

function localizar(posicao) {
    var coordenadas = posicao.coords
    painel.innerHTML += "Latitude: " + coordenadas.latitude + " Longitude: " + coordenadas.longitude + "<hr>"
}

window.addEventListener("load", verificar)