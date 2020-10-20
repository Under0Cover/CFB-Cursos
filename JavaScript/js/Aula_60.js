// CreateAttribute - RemoveAttribute - SetAttributeNode


// Função destacando um elemento p
function iniciar() {
    document.getElementById("botao_destaque").addEventListener("click", function () {
        var paragrafo = document.getElementsByTagName("p")
        var escolhido = document.getElementById("formulario").value
        // Tirando a formatação dos outros elementos
        for (var indice = 0; indice < paragrafo.length; indice++) {
            paragrafo[indice].removeAttribute("style")
        }
        // Para deixar a formatação em todos os elementos, basta remover o for
        // O for remove todas as formatações, pra depois formatar no elemento escolhido
        var atributo = document.createAttribute("style")
        atributo.value = "color: #f00; font-size: 50px;"
        paragrafo[escolhido].setAttributeNode(atributo)
    })
}

window.addEventListener("load", iniciar)