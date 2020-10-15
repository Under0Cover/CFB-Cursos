var jogo = []
var tabuleiro = []
var quem_joga = 0
var verifica
var jogando = true
var dificuldade = 2
var jogada_cpu = 1
var quem_comeca = 1
var jogadas = 0

function jogar(posicao) {
    if ((jogando) && (quem_joga == 0)) {
        switch (posicao) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo [0][0] = "X"
                    quem_joga = 1
                }
            break
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X"
                    quem_joga = 1
                }
            break
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X"
                    quem_joga = 1
                }
            break
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X"
                    quem_joga = 1
                }
            break
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X"
                    quem_joga = 1
                }
            break
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X"
                    quem_joga = 1
                }
            break
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X"
                    quem_joga = 1
                }
            break
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X"
                    quem_joga = 1
                }
            break
            case 9:
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X"
                    quem_joga = 1
                }
            break
        }
        if (quem_joga == 1) {
            atualiza_tabuleiro()
            verifica = verifica_vitoria()
            if (verifica != "") {
                alert(verifica + " venceu!!!")
                jogando = false
            }
            jogadas++
            cpu_joga()
        }
    }
}

function iniciar() {
    jogando = true
    jogada_cpu = 1
    jogadas = 0
    jogo = [
        ["", "", ""], // Linha 0    Posições -> 0,0 | 0,1 | 0,2
        ["", "", ""], // Linha 1    Posições -> 1,0 | 1,1 | 1,2
        ["", "", ""]  // Linha 2    Posições -> 2,0 | 2,1 | 2,2
    ]
    tabuleiro = [
        [document.getElementById("posicao_01"), document.getElementById("posicao_02"), document.getElementById("posicao_03")], // Linha 0
        [document.getElementById("posicao_04"), document.getElementById("posicao_05"), document.getElementById("posicao_06")], // Linha 1
        [document.getElementById("posicao_07"), document.getElementById("posicao_08"), document.getElementById("posicao_09")]  // Linha 2
    ]
    atualiza_tabuleiro()
    if (quem_comeca == 1) {
        quem_comeca = 0
        quem_joga = 0
        document.getElementById("quem_comeca").innerHTML = "Quem começa a jogar: Jogador"
    } else {
        quem_comeca = 1
        quem_joga = quem_comeca
        document.getElementById("quem_comeca").innerHTML = "Quem começa a jogar: Computador"
        cpu_joga()
    }
}

function atualiza_tabuleiro() {
    for (var linha = 0; linha < 3; linha++) {
        for (var coluna = 0; coluna < 3; coluna++) {
            if (jogo[linha][coluna] == "X") {
                tabuleiro[linha][coluna].innerHTML = "X"
                tabuleiro[linha][coluna].style.cursor = "default"
            } else if (jogo[linha][coluna] == "O") {
                tabuleiro[linha][coluna].innerHTML = "O"
                tabuleiro[linha][coluna].style.cursor = "default"
            } else {
                tabuleiro[linha][coluna].innerHTML = ""
                tabuleiro[linha][coluna].style.cursor = "pointer"
            }
        }
    }
}

function cpu_joga() {
    if (jogando) {
        var linha
        var coluna
        if (dificuldade == 1) {
            do {
                linha = Math.round(Math.random() * 2)
                coluna = Math.round(Math.random() * 2)
            } while (jogo[linha][coluna]!="")
            jogo[linha][coluna] = "O"
        } else if (dificuldade == 2) {
            // MODO DE ATAQUE
            // TRATANDO A LINHA 01
            // LINHA 01 - ÚLTIMA POSIÇÃO VAGA
            if ((jogo[0][0] == "O") && (jogo[0][1] == "O") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
                // LINHA 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "O") && (jogo[0][1] == "") && (jogo[0][2] == "O")) {
                jogo[0][1] = "O"
                // LINHA 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[0][1] == "O") && (jogo[0][2] == "O")) {
                jogo[0][0] = "O"
                // TRATANDO A LINHA 02
                // LINHA 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[1][0] == "O") && (jogo[1][1] == "O") && (jogo[1][2] == "")) {
                jogo[1][2] = "O"
                // LINHA 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[1][0] == "O") && (jogo[1][1] == "") && (jogo[1][2] == "O")) {
                jogo[1][1] = "O"
                // LINHA 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[1][0] == "") && (jogo[1][1] == "O") && (jogo[1][2] == "O")) {
                jogo[1][0] = "O"
                // TRATANDO A LINHA 03
                // LINHA 03 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[2][0] == "O") && (jogo[2][1] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O"
                // LINHA 03 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[2][0] == "O") && (jogo[2][1] == "") && (jogo[2][2] == "O")) {
                jogo[2][1] = "O"
                // LINHA 03 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[2][0] == "") && (jogo[2][1] == "O") && (jogo[2][2] == "O")) {
                jogo[2][0] = "O"
                // TRATANDO A COLUNA 01
                // COLUNA 01 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "O") && (jogo[1][0] == "O") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
                // COLUNA 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "O") && (jogo[1][0] == "") && (jogo[2][0] == "O")) {
                jogo[1][0] = "O"
                // COLUNA 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[1][0] == "O") && (jogo[2][0] == "O")) {
                jogo[0][0] = "O"
                // TRATANDO A COLUNA 02
                // COLUNA 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][1] == "O") && (jogo[1][1] == "O") && (jogo[2][1] == "")) {
                jogo[2][1] = "O"
                // COLUNA 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][1] == "O") && (jogo[1][1] == "") && (jogo[2][1] == "O")) {
                jogo[1][1] = "O"
                // COLUNA 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][1] == "") && (jogo[1][1] == "O") && (jogo[2][1] == "O")) {
                jogo[0][1] = "O"
                // TRATANDO A COLUNA 03
                // COLUNA 03 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "O") && (jogo[1][2] == "O") && (jogo[2][2] == "")) {
                jogo[2][2] = "O"
                // COLUNA 03 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][2] == "O") && (jogo[1][2] == "") && (jogo[2][2] == "O")) {
                jogo[1][2] = "O"
                // COLUNA 03 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "") && (jogo[1][2] == "O") && (jogo[2][2] == "O")) {
                jogo[0][2] = "O"
                // TRATANDO A DIAGONAL 01
                // DIAGONAL O1 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "O") && (jogo[1][1] == "O") && (jogo[2][2] == "")) {
                jogo[0][2] = "O"
                // DIAGONAL 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "O") && (jogo[1][1] == "") && (jogo[2][2] == "O")) {
                jogo[1][1] = "O"
                // DIAGONAL 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[1][1] == "O") && (jogo[2][2] == "O")) {
                jogo[0][0] = "O"
                // TRATANDO A DIAGONAL 02
                // DIAGONAL 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "O") && (jogo[1][1] == "O") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
                // DIAGONAL 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][2] == "O") && (jogo[1][1] == "") && (jogo[2][0] == "O")) {
                jogo[1][1] = "O"
                // DIAGONAL 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "") && (jogo[1][1] == "O") && (jogo[2][0] == "O")) {
                jogo[0][2] = "O"
                // MODO DE DEFESA
                // TRATANDO A LINHA 01
                // LINHA 01 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "O"
                // LINHA 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[0][1] == "") && (jogo[0][2] == "X")) {
                jogo[0][1] = "O"
                // LINHA 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[0][1] == "X") && (jogo[0][2] == "X")) {
                jogo[0][0] = "O"
                // TRATANDO A LINHA 02
                // LINHA 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")) {
                jogo[1][2] = "O"
                // LINHA 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[1][0] == "X") && (jogo[1][1] == "") && (jogo[1][2] == "X")) {
                jogo[1][1] = "O"
                // LINHA 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[1][0] == "") && (jogo[1][1] == "X") && (jogo[1][2] == "X")) {
                jogo[1][0] = "O"
                // TRATANDO A LINHA 03
                // LINHA 03 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "O"
                // LINHA 03 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[2][0] == "X") && (jogo[2][1] == "") && (jogo[2][2] == "X")) {
                jogo[2][1] = "O"
                // LINHA 03 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[2][0] == "") && (jogo[2][1] == "X") && (jogo[2][2] == "X")) {
                jogo[2][0] = "O"
                // TRATANDO A COLUNA 01
                // COLUNA 01 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
                // COLUNA 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[1][0] == "") && (jogo[2][0] == "X")) {
                jogo[1][0] = "O"
                // COLUNA 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[1][0] == "X") && (jogo[2][0] == "X")) {
                jogo[0][0] = "O"
                // TRATANDO A COLUNA 02
                // COLUNA 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "O"
                // COLUNA 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][1] == "X") && (jogo[1][1] == "") && (jogo[2][1] == "X")) {
                jogo[1][1] = "O"
                // COLUNA 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][1] == "") && (jogo[1][1] == "X") && (jogo[2][1] == "X")) {
                jogo[0][1] = "O"
                // TRATANDO A COLUNA 03
                // COLUNA 03 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "O"
                // COLUNA 03 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][2] == "X") && (jogo[1][2] == "") && (jogo[2][2] == "X")) {
                jogo[1][2] = "O"
                // COLUNA 03 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "") && (jogo[1][2] == "X") && (jogo[2][2] == "X")) {
                jogo[0][2] = "O"
                // TRATANDO A DIAGONAL 01
                // DIAGONAL O1 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")) {
                jogo[0][2] = "O"
                // DIAGONAL 01 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][0] == "X") && (jogo[1][1] == "") && (jogo[2][2] == "X")) {
                jogo[1][1] = "O"
                // DIAGONAL 01 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][0] == "") && (jogo[1][1] == "X") && (jogo[2][2] == "X")) {
                jogo[0][0] = "O"
                // TRATANDO A DIAGONAL 02
                // DIAGONAL 02 - ÚLTIMA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "O"
                // DIAGONAL 02 - POSIÇÃO DO MEIO VAGA
            } else if ((jogo[0][2] == "X") && (jogo[1][1] == "") && (jogo[2][0] == "X")) {
                jogo[1][1] = "O"
                // DIAGONAL 02 - PRIMEIRA POSIÇÃO VAGA
            } else if ((jogo[0][2] == "") && (jogo[1][1] == "X") && (jogo[2][0] == "X")) {
                jogo[0][2] = "O"
            } else {
                if (jogadas < 8) {
                    do {
                        linha = Math.round(Math.random() * 2)
                        coluna = Math.round(Math.random() * 2)
                    } while (jogo[linha][coluna] != "")
                    jogo[linha][coluna] = "O"
                } else {
                    for (var linha = 0; linha < 3; linha++) {
                        for (var coluna = 0; coluna < 3; coluna++) {
                            if (jogo[linha][coluna] == "") {
                                jogo[linha][coluna] = "O"
                            }
                        }
                    }
                }
            }
        }
        verifica = verifica_vitoria()
        if (verifica != "") {
            alert(verifica + " venceu!!!")
            jogando = false
        }
        atualiza_tabuleiro()
        jogadas++
        quem_joga = 0
    }
}

function verifica_vitoria() {
    var linha
    var coluna
    // Verificando as linhas
    for (linha = 0; linha < 3; linha++) {
        if ((jogo[linha][0] == jogo[linha][1]) && (jogo[linha][1] == jogo[linha][2])) {
            return jogo[linha][0]
        }
    }
    // Verificando as colunas
    for (coluna = 0; coluna < 3; coluna++) {
        if ((jogo[0][coluna] == jogo[1][coluna]) && (jogo[1][coluna] == jogo[2][coluna])) {
            return jogo[0][coluna]
        }
    }
    // Verificando as diagonais
    if ((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])) {
        return jogo[0][0]
    }
    if ((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])) {
        return jogo[0][2]
    }
    return ""
}

window.addEventListener("load", iniciar)