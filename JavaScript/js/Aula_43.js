// Manipulando atributos HTML por JavaScript
// setAtribute, removeAtribute e hasAtribute
// setAtribute vai setar um atributo
// removeAtribute vai remover um atributo
// hasAtribute vai verificar se já existe um atributo

function troca_carro(carro) {
    var objeto = document.getElementById("carro")
    if (carro == 1) {
        objeto.setAttribute("class", "c1")
    }else if (carro == 2) {
        objeto.setAttribute("class", "c2")
    }else if (carro == 3) {
        objeto.setAttribute("class", "c3")
    }
}

function remover_carro() {
    var objeto = document.getElementById("carro")
    objeto.removeAttribute("class")
}

function verficar() {
    var objeto = document.getElementById("carro")
    if (objeto.hasAttribute("class")) {
        alert("Atributo Class está atribuído no botão")
    } else {
        alert("Atributo Class não está atribuído no botão")
    }
}
