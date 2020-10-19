// Local Storage (Web Storage)

// Verificando se o navegador suporta o localStorage
if (typeof(Storage) != "undefine") {
    // setItem criando Chave e Valor
    localStorage.setItem("Canal", "CFB Cursos")

    // removeItem removendo a Chave (e o valor por consequência)
    // localStorage.removeItem("Canal")

    // getItem eu pego o item pela Chave
    var item = localStorage.getItem("Canal")
    // Também pode ser feito da seguinte forma:
    // var item = localStorage.Canal
    document.write(item)
} else {
    document.write("Sem suporte ao Web Storage!!")
}

