// Objeto Location

// hash para receber a # do link
var auxiliar = location.hash
document.write(auxiliar)
document.write("<hr>")
var dados = auxiliar.split("#")
document.write(dados)
document.write("<br>")
document.write(dados[1])
document.write("<br>")
document.write(dados[2])
document.write("<hr>")
var valor_01 = dados[1]
var valor_02 = dados[2]
document.write(valor_01)
document.write("<br>")
document.write(valor_02)
document.write("<hr>")

// hostname para receber o nome do host
var hospedagem = location.hostname
document.write(hospedagem)
document.write("<hr>")

// href para receber o endereço completo
var endereco = location.href
document.write(endereco)

// href setado para encaminhar outro endereço
// endereco = location.href = "https://www.google.com"
document.write("<hr>")

// origin para receber a origem da página
var origem = location.origin
document.write(origem)
document.write("<hr>")

// pathname para receber o nome do pacote
var caminho = location.pathname
document.write(caminho)
document.write("<hr>")

// protocol para receber o protocolo
var protocolo = location.protocol
document.write(protocolo)
document.write("<hr>")

// search é parecido com o hash
// no caso do search é utilizado o ?
var auxiliar_02 = location.search
var dados_02 = auxiliar_02.split("?")
document.write(dados_02)
document.write("<hr>")