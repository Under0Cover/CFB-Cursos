// Objeto Location

// assign vai carregar a página ou o documento direto na página setada
// location.assign("https://www.google.com.br")

// replace é similar ao assign
// A diferença é que o replace remove a página do nosso history
// O assign não remove
// location.replace("https://www.google.com.br")

// reload vai recarregar a página 
// location.reload()

function recarregar() {
    location.reload()
}

function pagina_02() {
    location.replace("Aula_55.html")
}

function pagina_assign() {
    location.assign("Aula_55.html")
}