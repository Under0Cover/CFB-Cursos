// Switch Case
var nome = prompt("Digite o nome do piloto: ")
var posicao = prompt("Digite a posição do piloto: ")
switch(posicao){
    case "1":
        document.write("O piloto " + nome + " somou 25 pontos\n")
        document.write("E subiu ao pódio")
        break
    case "2":
        document.write("O piloto " + nome + " somou 18 pontos\n")
        document.write("E subiu ao pódio")
        break
    case "3":
        document.write("O piloto " + nome + " somou 15 pontos\n")
        document.write("E subiu ao pódio")
        break
    case "4":
        document.write("O piloto " + nome + " somou 12 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "5":
        document.write("O piloto " + nome + " somou 10 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "6": 
        document.write("O piloto " + nome + " somou 8 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "7":
        document.write("O piloto " + nome + " somou 6 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "8":
        document.write("O piloto " + nome + " somou 4 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "9":
        document.write("O piloto " + nome + " somou 2 pontos\n")
        document.write("E não subiu ao pódio")
        break
    case "10":
        document.write("O piloto " + nome + " somou 1 ponto\n")
        document.write("E não subiu ao pódio")
        break
    default:
        document.write("O piloto " + nome + " não somou pontos\n")
        document.write("E tão pouco chegou perto do pódio")
}
