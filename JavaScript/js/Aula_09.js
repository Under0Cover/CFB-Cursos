// IF com múltiplos retornos
var nota = prompt("Digite a sua média: ")
var resultado
if (nota > 95){
    resultado = "Aprovado com Louvor"
} else if (nota >= 60){
    resultado = "Aprovado"
} else if (nota >= 40){
    resultado = "Recuperação"
} else if (nota >= 20) {
resultado = "Reprovado"
} else {
    resultado = "Reprovado com Louvor"
}
document.write(resultado)
