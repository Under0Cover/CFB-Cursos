function iniciar() {
    document.getElementById("painel").innerHTML = sessionStorage.Texto
}

window.addEventListener("load", iniciar)