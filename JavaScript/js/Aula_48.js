
var biblioteca = ["javascript", "curso", "computador", "transporte", "livraria", "tecnologia", "controle", "churrasco", "brasil", "impressora", "xicara", "telefone", "internet", "camera", "monitor", "brinquedo", "youtube", "portaria", "escola", "carnaval", "teclado", "guitarra", "bateria", "chinelo", "helicoptero", "arduino"]
var quantidade = biblioteca.length - 1
var posicao = Math.round(Math.random()* quantidade)
var palavra = biblioteca[posicao]
var tamanho = palavra.length
var caixa_letras = []
var acertos
var erros_maximos = 7
var erros = 0
var desenhos = []
var acertou = false
var jogando = false
var jogador

function define_letras(letras) {
    var objeto
    for (var indice = 0; indice < 20; indice++) {
        objeto = document.getElementById("letra_" + indice).value = ""
        objeto = document.getElementById("letra_" + indice).style.display = "none"
    }
    for (var indice = 0; indice < letras; indice++) {
        objeto = document.getElementById("letra_" + indice).style.display = "inline-block"
    }
}

function jogar() {
    jogador.focus()
    if (jogador.value == "") {
        alert("Digite uma letra")
    } else {
        if (jogando) {
            var objeto
            var letra_tmp
            var letra
            var pesquisa
            letra = jogador.value
            jogador.value = ""
            acertou = false
            pesquisa = palavra.match(letra)
            while (pesquisa != null) {
                letra_tmp = palavra.search(letra)
                objeto = document.getElementById("letra_" + letra_tmp).value = letra
                palavra = palavra.replace(letra, "0")
                acertos++
                pesquisa = palavra.match(letra)
                acertou = true
            } if (!acertou) {
                document.getElementById("div_letras_digitadas").innerHTML+=letra.toUpperCase()
                erros++
                if (erros < 7) {
                    desenhos[erros].style.display = "block"
                } else {
                    document.getElementById("cabeca").src = "carro02.jpg"
                    // Aqui entrou a cabeça de "morto"
                    document.getElementById("div_mensagem").innerHTML = "PERDEU!!!"
                    jogando = false
                }
            } if (acertos == tamanho) {
                document.getElementById("div_mensagem").innerHTML = "GANHOU!!!"
                jogando = false
            }
        }
    }
}

function dica() {
    alert(palavra)
    jogador.focus
}

function iniciar() {
    jogando = true
    jogador = document.getElementById("letra_jogada")
    jogador.value = ""
    jogador.focus()
    acertos = 0
    erros = 0
    acertou = false
    document.getElementById("div_letras_digitadas").innerHTML = "Letras Digitadas: "
    posicao = Math.round(Math.random() * quantidade)
    palavra = biblioteca[posicao]
    tamanho = palavra.length
    define_letras(tamanho)
    // Desenho
    document.getElementById("div_mensagem").innerHTML = ""
    desenhos[1] = document.getElementById("cabeca")
    desenhos[2] = document.getElementById("corpo")
    desenhos[3] = document.getElementById("braco_esquerdo")
    desenhos[4] = document.getElementById("braco_direito")
    desenhos[5] = document.getElementById("perna_esquerda")
    desenhos[6] = document.getElementById("perna_direita")
    document.getElementById("cabeca").src="carro02.jpg"
    for (var indice = 1; indice < 7; indice++) {
        desenhos[indice].style.display = "none"
    }
}

window.addEventListener("load", iniciar)
