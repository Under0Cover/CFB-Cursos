// Escopo de variáveis

var nome_Cor = "Vermelho"

function cor(){
    var nome_Cor = "Azul"
    document.write(nome_Cor + "<br>")
}

cor()
document.write("<hr>")
document.write(nome_Cor + "<br>")
document.write("<hr>")

// Uso do 'this' para o uso da variável fora da função
// Não é recomendado o uso de diferentes variáveis com o mesmo nome

var nome_outra_cor = "Verde"

function cor_com_this(){
    var nome_outra_cor = "Rosa"
    document.write(this.nome_outra_cor + "<br>" + nome_outra_cor)
}

cor_com_this()
document.write("<hr>")
document.write(nome_outra_cor + "<br>")
document.write("<hr>")

