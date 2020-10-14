// IF aninhado
var nota = prompt("Digite a sua média: ")
var resultado
if (nota >= 70){
    resultado = "Aprovado"
    if (nota == 100){
        resultado += " com Excelencia"
    }else if (nota >= 95){
        resultado += " com Louvor"
    }else if (nota >= 85){
        resultado += " com Gratidão"
    }else {
        resultado += " por Nota!"
    }
} else if (nota >= 50){
    resultado = "Recuperação"
}else {
    resultado = "Reprovado"
    if (nota >= 20){
        resultado += " por Nota"
    }else {
        resultado += " com Louvor!"
    }
}
document.write(resultado)
