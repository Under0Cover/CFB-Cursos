// Objeto Window

var minha_janela
var meu_frame
var janela_300_300
var janela_posicao

function abre_janela() {
    minha_janela = window.open("Aula_49_02.html")
}

function abre_frame() {
    meu_frame = window.open("Aula_49_02.html", "cfb")
}

function abre_janela_tamanho() {
    janela_300_300 = window.open("Aula_49_02.html", "_blank", "width = 300, height = 300")
}

function abre_janela_tamanho_posicao() {
    janela_posicao = window.open("Aula_49_02.html", "_blank", "width = 300, height = 300, top = 300, left = 300")
}

function fecha_janelas() {
    minha_janela.close()
    janela_300_300.close()
    janela_posicao.close()
}