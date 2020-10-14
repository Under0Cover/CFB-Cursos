// Relógio Digital

function relogio(){
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if (horas < 10){
        horas = "0" + horas
    }

    if (minutos < 10) {
        minutos = "0" + minutos
    }

    if (segundos < 10) {
        segundos = "0" + segundos
    }

    var horas_tela = horas + ":" + minutos + ":" + segundos
    document.getElementById("painel").value = horas_tela
}

var tempo = setInterval(relogio, 1000)
