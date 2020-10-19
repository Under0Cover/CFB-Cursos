// SessionStorage

// Uma diferença básica entre o SessionStorage e o LocalStorage:
// LocalStorage não vai excluir as informações que foram armazenadas
// SessionStorage vai excluir assim que a sessão for finalizada

function iniciar() {
    document.getElementById("botao_pagina_02").addEventListener("click", function () {
        pagina(2)
    })
    document.getElementById("botao_pagina_03").addEventListener("click", function () {
        pagina(3)
    })
    document.getElementById("limpar").addEventListener("click", function () {
        sessionStorage.clear()
    })
}

function pagina(pagina) {
    sessionStorage.Texto = document.getElementById("formulario_nome").value
    if (pagina == 2) {
        window.location.assign("Aula_58_02.html")
    } else if (pagina == 3) {
        window.location.assign("Aula_58_03.html")
    }
}



window.addEventListener("load", iniciar)