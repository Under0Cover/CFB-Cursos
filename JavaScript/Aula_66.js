// hasFocus

function foco() {
    var resultado = document.getElementById("sim_nao")
    var painel = document.getElementById("painel")
    if (document.hasFocus()) {
        resultado.innerHTML = ""
        painel.style.display = "none"
    } else {
        resultado.innerHTML = ">> NÃO <<"
        painel.style.display = "block"
    }
}

setInterval(foco, 0)