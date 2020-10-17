// History

var painel
var voltar
var avancar
var voltar_2

function iniciar() {
    painel = document.getElementById("informacoes")
    voltar = document.getElementById("botao_voltar")
    avancar = document.getElementById("botao_avancar")
    voltar_2 = document.getElementById("voltar_2")
    voltar = addEventListener("click", historico_voltar)
    avancar = addEventListener("click", historico_avancar)
    voltar_2 = addEventListener("click", historico_go)
    painel.innerHTML = "Total de páginas visitadas: " + history.length
}

function historico_voltar() {
    window.history.back()
}

function historico_avancar() {
    window.history.forward()
}

function historico_go() {
    window.history.go(-2)
}

window.addEventListener("load", iniciar)