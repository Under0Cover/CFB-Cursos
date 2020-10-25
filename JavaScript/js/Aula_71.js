// cookies

function criar_cookie(nome, valor, expira) {
    var data_expira = "expires =" + expira
    document.cookie = nome + " = " + valor + "; " + data_expira
}

function ler_cookie(nome) {
    var variavel_nome = nome + " = "
    var ca = document.cookie.split(';')
    for (var indice = 0; indice < ca.length; indice++) {
        var c = ca[indice]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(variavel_nome) == 0 ) {
            return c.substring(variavel_nome.length, c.length)
        }
    }
    return ""
}

function verificar_cookie() {
    var username = ler_cookie("username")
    if (username != "") {
        alert ("Bem vindo novamente " + username)
    } else {
        username = prompt("Digite o seu nome: ", "")
        if (username != "" && username != null) {
            criar_cookie("username", username, " Tue, 01 Jan 2115 12:00:00 UTC")
        }
    }
}