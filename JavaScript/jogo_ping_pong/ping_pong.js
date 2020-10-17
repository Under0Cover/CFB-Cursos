// Elementos
var variavel_botao_iniciar
var variavel_bola
var variavel_cpu
var variavel_jogador
var variavel_painel_texto_pontos

// Controle de animação
var game
var frames

// Posições
var posicao_x_bola
var posicao_y_bola
var posicao_x_jogador
var posicao_y_jogador
var posicao_x_cpu
var posicao_y_cpu

// Direção de tecla
var direcao_y_tecla_jogador

// Posições iniciais
var posicao_y_inicial_jogador = 180
var posicao_y_inicial_cpu = 180
var posicao_x_inicial_bola = 475
var posicao_y_inicial_bola = 240

// Tamanhos
var posicao_x_campo = 0
var posicao_y_campo = 0
var largura_campo = 960
var altura_campo = 600
var largura_barra = 20
var altura_barra = 140
var largura_bola = 20
var altura_bola = 20

// Direção Jogador e Bola
var direcao_x_bola
var direcao_y_bola
var direcao_y_cpu

// Velocidade
var velocidade_bola
var velocidade_cpu
var velocidade_jogador

// Controle
var pontos = 0
var tecla_pressionada
var jogo = false

// Função para inicializar os componentes do jogo
function inicializar() {
    variavel_botao_iniciar = document.getElementById("botao_iniciar")
    variavel_botao_iniciar.addEventListener("click", iniciar_jogo)
    variavel_jogador = document.getElementById("div_jogador")
    variavel_cpu = document.getElementById("div_cpu")
    variavel_bola = document.getElementById("div_bola")
    variavel_painel_texto_pontos = document.getElementById("texto_pontos")
    document.addEventListener("keydown", tecla_apertada)
    document.addEventListener("keyup", tecla_solta)
    velocidade_bola = 5
    velocidade_cpu = 5
    velocidade_jogador = 5
}

// Função para iniciar a jogada

function iniciar_jogo() {
    if (!jogo) {
        velocidade_bola = 5
        velocidade_cpu = 5
        velocidade_jogador = 5
        cancelAnimationFrame(frames)
        jogo = true
        direcao_y_tecla_jogador = 0
        direcao_y_bola = 0
        if ((Math.random()*10) < 5) {
            direcao_x_bola = -1
        } else {
            direcao_x_bola = 1
        }
        posicao_x_bola = posicao_x_inicial_bola
        posicao_y_bola = posicao_y_inicial_bola
        posicao_y_jogador = posicao_y_inicial_jogador
        posicao_y_cpu = posicao_y_inicial_cpu
        controla_jogo()
    }
}

function controla_jogo() {
        if (jogo) {
            controla_jogador()
            controla_bola()
            controla_cpu()
        }
        frames = requestAnimationFrame(controla_jogo)
}

function tecla_apertada() {
    tecla_pressionada = event.keyCode
    if (tecla_pressionada == 38) {
        direcao_y_tecla_jogador = -1
    } else if (tecla_pressionada == 40) {
        direcao_y_tecla_jogador = +1
    }
}

function tecla_solta() {
    tecla_pressionada = event.keyCode
    if (tecla_pressionada == 38) {
        direcao_y_tecla_jogador = 0
    } else if (tecla_pressionada == 40) {
        direcao_y_tecla_jogador = 0
    }
}

function controla_jogador() {
    if (jogo) {
        posicao_y_jogador += velocidade_jogador * direcao_y_tecla_jogador
        if (((posicao_y_jogador + altura_barra) >= altura_campo) || (posicao_y_jogador <= 0)) {
            posicao_y_jogador += (velocidade_jogador * direcao_y_tecla_jogador) * -1
        }
        variavel_jogador.style.top = posicao_y_jogador + "px"
    }
}

function controla_bola() {
    posicao_x_jogador = 20
    posicao_x_cpu = 930
    // Movimentação bola
    posicao_x_bola += velocidade_bola * direcao_x_bola
    posicao_y_bola += velocidade_bola * direcao_y_bola

    // Colisão Jogador
    if ((posicao_x_bola <= posicao_x_jogador + largura_barra) && ((posicao_y_bola + altura_bola >= posicao_y_jogador) && (posicao_y_bola <= posicao_y_jogador + altura_barra))) {
        direcao_y_bola = (((posicao_y_bola + (altura_bola / 2)) - (posicao_y_jogador + (altura_barra / 2))) / 32 )
        direcao_x_bola *= -1
    }

    // Colisão CPU
    if ((posicao_x_bola >= (posicao_x_cpu - largura_barra)) && ((posicao_y_bola + altura_barra) >= posicao_y_cpu) && (posicao_y_bola <= (posicao_y_cpu + altura_barra))) {
        direcao_y_bola = (((posicao_y_bola + (altura_bola / 2)) - (posicao_y_cpu + (altura_barra / 2 ))) / 32 )
        direcao_x_bola *= -1
    }

    // Limite superior e limite inferior
    if ((posicao_y_bola >= 580) || (posicao_y_bola <= 0)) {
        direcao_y_bola *= -1
    }

    // Limites verticais
    // Lado direito
    if (posicao_x_bola >= (largura_campo - largura_bola)) {
        velocidade_bola = 0
        posicao_x_bola = posicao_x_inicial_bola
        posicao_y_bola = posicao_y_inicial_bola
        posicao_y_jogador = posicao_y_inicial_jogador
        posicao_y_cpu = posicao_y_inicial_cpu
        pontos++
        variavel_painel_texto_pontos.value = pontos
        jogo = false
        variavel_jogador.style.top = posicao_y_jogador + "px"
        variavel_cpu.style.top = posicao_y_cpu + "px"
    // Lado esquerdo
    } else if (posicao_x_bola <= 0) {
        velocidade_bola = 0
        posicao_x_bola = posicao_x_inicial_bola
        posicao_y_bola = posicao_y_inicial_bola
        posicao_y_jogador = posicao_y_inicial_jogador
        posicao_y_cpu = posicao_y_inicial_cpu
        pontos--
        variavel_painel_texto_pontos.value = pontos
        jogo = false
        variavel_jogador.style.top = posicao_y_jogador + "px"
        variavel_cpu.style.top = posicao_y_cpu + "px"
    }

    variavel_bola.style.top = posicao_y_bola + "px"
    variavel_bola.style.left = posicao_x_bola + "px"
}

function controla_cpu() {
    if (jogo) {
        if ((posicao_x_bola > (largura_campo / 2)) && (direcao_x_bola > 0)) {
            if (((posicao_y_bola + (altura_bola / 2)) > ((posicao_y_cpu + (altura_bola / 2 )))+ velocidade_cpu)) {
                if ((posicao_y_cpu + altura_barra) < altura_campo) {
                    posicao_y_cpu += velocidade_cpu
                }
            } else if ((posicao_y_bola + (altura_bola / 2 )) < (posicao_y_cpu + (altura_barra / 2)) - velocidade_cpu) {
                if (posicao_y_cpu >= 0) {
                    posicao_y_cpu -= velocidade_cpu
                }
            }
        } else {
            if ((posicao_y_cpu + (altura_barra / 2)) < (altura_campo / 2)) {
                posicao_y_cpu += velocidade_cpu
            } else if ((posicao_y_cpu + (altura_barra / 2)) > (altura_campo / 2)) {
                posicao_y_cpu -= velocidade_cpu
            }
        }
        variavel_cpu.style.top = posicao_y_cpu + "px"
    }
}

window.addEventListener("load", inicializar)