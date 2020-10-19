// Armazenando características escolhidas pelo usuário
// Cor de fundo e cor de texto

var cor_fundo
var cor_texto
var nome

function define_cor(operacao, cor) {
    if (operacao == 1) {
        document.body.style.backgroundColor = cor
        cor_fundo = cor
    } else {
        document.body.style.color = cor
        cor_texto = cor
    }
}

function gravar() {
    nome = document.getElementById("formulario_nome").value
    var formulario = document.getElementById("configuracoes_formulario")
    localStorage.Cor_Fundo = cor_fundo
    localStorage.Cor_Texto = cor_texto
    localStorage.Nome = nome
    formulario.style.display = "none"
}

function configuracoes() {
    var formulario = document.getElementById("configuracoes_formulario")
    formulario.style.display = "block"
}

if (localStorage.Nome) {
    cor_fundo = localStorage.Cor_Fundo
    cor_texto = localStorage.Cor_Texto
    nome = localStorage.Nome
    define_cor(1, cor_fundo)
    define_cor(2, cor_texto)
    document.getElementById("painel").innerHTML = "Bem vindo " + nome + "<hr>"
}