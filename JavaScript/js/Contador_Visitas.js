// Contador de Visitar com localStorage e impresso na tela

if (typeof(Storage) != "undefined") {
    if (localStorage.Visitas) {
        localStorage.Visitas = Number(localStorage.Visitas) + 1
    } else {
        localStorage.Visitas = "1"
    }
    alert("Você já visitou esse site " + localStorage.Visitas + " vezes!")
} else {
    alert("Sem suporte a Web Storage")
}