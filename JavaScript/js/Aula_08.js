// OPERADORES LÓGICOS AND (&&) E OR (||)
var pontos = prompt("Digite um valor: ")
// Vitória -> Entre 30 e 40 ou Entre 70 e 80
var energia = prompt("Digite a energia: ")
if ((pontos >= 30) && (pontos <= 40) && (energia >= 40) || (pontos >= 70) && (pontos <= 80) && (energia >= 40)){
    document.write("Venceu!!!")
}else{
    document.write("Perdeu!!!")
}
