// Tratamento de erros
try{
    document.write("CFB Cursos")
} catch(erro){
    document.write("ERRO!!")
}
document.write("<hr>")
try{
    document.writi("CFB Cursos")
} catch(erro){
    document.write("ERRO!! " + erro.message)
    console.log("Mensagem de erro: "+ erro.message)
}
document.write("<hr>")
var numero
try{
    numero = prompt("Digite um valor: ")
    if (numero > 10){
        throw new Error ("Valor inválido, o valor deve ser menor ou igual a 10")
        document.write("ERRO: " + erro.message)
    }else{
        document.write("Valor: " + numero)
    }
}catch (erro){
    document.write("ERRO: " + erro.message)
}finally{
    document.write("<br>Fim do Tratamento!")
}
