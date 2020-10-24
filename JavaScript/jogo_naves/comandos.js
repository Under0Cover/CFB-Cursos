var direcao_y_jogador // Direção eixo Y - (diryJ)
var direcao_x_jogador // Direção eixo X - (dirxJ)
var tecla // Função tecla pressionada e tecla solta
var jogo // Variável para dizer se o jogo está ativo ou não
var frames // Variável para ser utilizada junto com requestAnimationFrame
var jogador // Variável para controle do jogador - (jog)
var velocidade_jogador // Controlar a velocidade do jogador - (velJ)
var posicao_x_jogador // Posição no eixo X do jogador - (pjx)
var posicao_y_jogador // Posição no eixo Y do jogador - (pjy)
var tamanho_tela_largura // Tamanho da Largura da Tela - (tamTelaW)
var tamanho_tela_altura // Tamanho da Altura da Tela - (tamTelaH)
var velocidade_tiros // Controlar a velocidade dos tiros - (velT)
var conta_bombas // Controlar a contagem das bombas - (contBombas)
var painel_contagem_bombas // Painel visual de contagem das bombas - (painelContBombas)
var total_bombas // - (bobasTotal)
var velocidade_bomba // Controla a velocidade das bombas - (velB)
var vida_planeta // Gerenciar a vida do Planeta - (vidaPlaneta)
var tempo_bombas // Intervalo das bombas - (tmpCriaBomba)
var indice_explosao // Indice de explosão - (ie)
var indice_som // Indice som - (isom)
var barra_planeta // Vai ser associada a barra da tela - (barraPlaneta)
var tela_mensagem // Fazer a configuração das imagens do jogo - (telaMsg)


function tecla_pressionada() {
    tecla = event.keyCode
    // Lembrando que o eixo Y é invertido
    if (tecla == 37) { // Esquerda
        direcao_x_jogador = -1
    } else if (tecla == 38) { // Cima
        direcao_y_jogador = -1
    } else if (tecla == 39) { // Direita
        direcao_x_jogador = 1
    } else if (tecla == 40) { // Baixo
        direcao_y_jogador = 1
    } else if (tecla == 32) { // Espaço - Tiro
        // Comando de tiro
        // Soma para o tiro sair da pontinha da nave
        atirar(posicao_x_jogador + 17, posicao_y_jogador)
    }
}

function tecla_solta() {
    tecla = event.keyCode
    if ((tecla == 38) || (tecla == 40)) {
        direcao_y_jogador = 0
        // Se a tecla for para cima ou para baixo, a movimentação do eixo Y recebe valor igual a 0, ou seja, para de haver movimentação
    } else if ((tecla == 37) || (tecla == 39)) {
        direcao_x_jogador = 0
        // Mesma lógica, se as teclas direita e esquerda forem soltas, a movimentação do eixo X recebe 0
    }
}

function iniciar() {
    jogo = false

    // Inicialização do Tamanho da Tela
    tamanho_tela_altura = window.innerHeight
    tamanho_tela_largura = window.innerWidth

    // Inicialização do Jogador
    direcao_x_jogador = 0
    direcao_y_jogador = 0
    posicao_x_jogador = (tamanho_tela_largura / 2)
    posicao_y_jogador = (tamanho_tela_altura / 2)
    velocidade_jogador = 7
    velocidade_tiros = 2
    jogador = document.getElementById("nave_jogador")
    jogador.style.top = posicao_y_jogador + "px"
    jogador.style.left = posicao_x_jogador + "px"
    
    // Controle das bombas
    conta_bombas = 150
    velocidade_bomba = 1

    // Controle do Planeta
    vida_planeta = 300
    barra_planeta = document.getElementById("barra_planeta")
    barra_planeta.style.width = vida_planeta + "px"

    // Controle Explosão
    indice_explosao = 0

    // Controle de Som
    indice_som = 0

    // Telas
    tela_mensagem = document.getElementById("tela_mensagem")
    tela_mensagem.style.backgroundImage = "url('arquivos/intro.jpg')"
    tela_mensagem.style.display = "block"

    // Botão Jogar
    document.getElementById("botao_jogar").addEventListener("click", reiniciar)

}

function jogar() { // (gameLoop)
    if (jogo) { // Se o jogo estiver sendo jogado
        // Funções de controle
        controla_jogador()
        controle_tiros()
        controla_bomba()
    }
    gerenciar_jogo()
    frames = requestAnimationFrame(jogar)
}

function controla_jogador() { // (controlaJogador)
    posicao_y_jogador += direcao_y_jogador * velocidade_jogador
    posicao_x_jogador += direcao_x_jogador * velocidade_jogador
    jogador.style.top = posicao_y_jogador + "px"
    jogador.style.left = posicao_x_jogador + "px"
}

function atirar(x, y) { // Função para disparar os tiros - (atira)
    var tiro = document.createElement("div")
    var atributo_01 = document.createAttribute("class")
    var atributo_02 = document.createAttribute("style")
    atributo_01.value = "tiro_disparado"
    atributo_02.value = "top:" + y + "px; left:" + x + "px"
    tiro.setAttributeNode(atributo_01)
    tiro.setAttributeNode(atributo_02)
    document.body.appendChild(tiro)
}

function controle_tiros() { // Controle dos tiros - (controleTiros)
    var tiros = document.getElementsByClassName("tiro_disparado")
    var tamanho = tiros.length
    for (var indice = 0; indice < tamanho; indice++) {
        if (tiros[indice]) {
            var posicao_tiros = tiros[indice].offsetTop
            posicao_tiros -= velocidade_tiros
            tiros[indice].style.top = posicao_tiros + "px"
            colisao(tiros[indice])
            if (posicao_tiros < 0) {
                tiros[indice].remove()
            }
        }
    }
}

function criar_bombas() { // - (contBombas)
    if (jogo) {
        var y = 0
        var x = Math.random() * tamanho_tela_largura
        var bomba =  document.createElement("div")
        var atributo_01 = document.createAttribute("class")
        var atributo_02 = document.createAttribute("style")
        atributo_01.value = "bomba"
        atributo_02.value = "top:" + y + "px; left:" + x + "px"
        bomba.setAttributeNode(atributo_01)
        bomba.setAttributeNode(atributo_02)
        document.body.appendChild(bomba)
        conta_bombas--
    }
}

function controla_bomba() { // - (controlaBomba)
    total_bombas = document.getElementsByClassName("bomba")
    var tamanho = total_bombas.length
    for (var indice = 0; indice < tamanho; indice++) {
        if (total_bombas[indice]) {
            var posicao_indice = total_bombas[indice].offsetTop
            posicao_indice += velocidade_bomba
            total_bombas[indice].style.top = posicao_indice + "px"
            if (posicao_indice > tamanho_tela_altura) {
                vida_planeta -= 10
                cria_explosao(2, total_bombas[indice].offsetLeft, null)
                total_bombas[indice].remove()
            }
        }
    }
}

function colisao(tiro) { // - (colisaoTiroBomba)
    var tamanho = total_bombas.length
    for (var indice = 0; indice < tamanho; indice++) {
        if(total_bombas[indice]) {
            if (((tiro.offsetTop <= (total_bombas[indice].offsetTop+40)) && ((tiro.offsetTop + 6) >= (total_bombas[indice].offsetTop))) && ((tiro.offsetLeft <= (total_bombas[indice].offsetLeft + 24))&& ((tiro.offsetLeft + 6) >= (total_bombas[indice].offsetLeft)))) {
                cria_explosao(1, (total_bombas[indice].offsetLeft -25), total_bombas[indice].offsetTop)
                total_bombas[indice].remove()
                tiro.remove()
            }
        }
    }
}

function cria_explosao(tipo, x, y) { // Tipo 01 = Ar - Tipo 02 = Terra - (criaExplosao)
   if (document.getElementById("explosao" + (indice_explosao - 5))) {
        document.getElementById("explosao" + (indice_explosao - 5)).remove()
   }
   
   var explosao = document.createElement("div")
   var imagem = document.createElement("img")
   var som = document.createElement("audio")

   // Atributos para DIV
   var atributo_1 = document.createAttribute("class")
   var atributo_2 = document.createAttribute("style")
   var atributo_3 = document.createAttribute("id")

   // Atributo para IMG
   var atributo_4 = document.createAttribute("src")

   // Atributos para AUDIO
   var atributo_5 = document.createAttribute("src")
   var atributo_6 = document.createAttribute("id")

   atributo_3.value = "explosao" + indice_explosao
   if (tipo == 1) {
       atributo_1.value = "explosaoar"
       atributo_2.value = "top:" + y + "px; left:" + x + "px;"
       atributo_4.value = "arquivos/explosao_ar.gif?" + new Date()
    } else {
        atributo_1.value = "explosaochao"
        atributo_2.value = "top:" + (tamanho_tela_altura - 57) + "px; left:" + (x - 17) + "px;"
        atributo_4.value = "arquivos/explosao_chao.gif?" + new Date()
    }
    atributo_5.value = "arquivos/exp1.mp3"
    atributo_6.value = "som" + indice_som
    explosao.setAttributeNode(atributo_1)
    explosao.setAttributeNode(atributo_2)
    explosao.setAttributeNode(atributo_3)
    imagem.setAttributeNode(atributo_4)
    som.setAttributeNode(atributo_5)
    som.setAttributeNode(atributo_6)
    explosao.appendChild(imagem)
    explosao.appendChild(som)
    document.body.appendChild(explosao)
    document.getElementById("som" + indice_som).play()
    indice_explosao++
    indice_som++
}

function gerenciar_jogo() {
    barra_planeta.style.width = vida_planeta + "px"
    if (conta_bombas <= 0) {
        jogo = false
        clearInterval(tempo_bombas)
        tela_mensagem.style.backgroundImage = "url('arquivos/vitoria.jpg')"
        tela_mensagem.style.display = "block"
        
        // Removendo bombas
        removendo_bombas()
    }
    if (vida_planeta <= 0) {
        jogo = false
        clearInterval(tempo_bombas)
        tela_mensagem.style.backgroundImage = "url('arquivos/derrota.jpg')"
        tela_mensagem.style.display = "block"

        // Removendo bombas
        removendo_bombas()
    }
}

// O professor não criou essa função, mas como eu quero excluir as bombas no final do jogo, criei essa função e setei ela no gerenciar_jogo()
function removendo_bombas() {
    total_bombas = document.getElementsByClassName("bomba")
    var tamanho = total_bombas.length
    for (var indice = 0; indice <= tamanho; indice++) {
        if (total_bombas[indice]) {
            total_bombas[indice].remove()
        }
    }
}

function reiniciar() {
    tela_mensagem.style.display = "none"
    clearInterval(tempo_bombas)
    cancelAnimationFrame(frames)
    vida_planeta = 300
    posicao_x_jogador = tamanho_tela_largura / 2
    posicao_y_jogador = tamanho_tela_altura / 2
    jogador.style.top = posicao_y_jogador + "px"
    jogador.style.left = posicao_x_jogador + "px"
    conta_bombas = 150
    jogo = true
    tempo_bombas = setInterval(criar_bombas, 2000)

    jogar()
}

window.addEventListener("load", iniciar)
document.addEventListener("keydown", tecla_pressionada)
document.addEventListener("keyup", tecla_solta)