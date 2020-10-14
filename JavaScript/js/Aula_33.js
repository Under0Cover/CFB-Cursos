// addEventListener
function mensagem() {
    alert("CFB Cursos")
}

/*
function muda_cor(){
    var objeto = document.getElementById("div_01")
    objeto.style.backgroundColor = "#aaa"
}

function muda_cor_saida() {
    var objeto = document.getElementById("div_01")
        objeto.style.backgroundColor = "#f00"
}
*/

// Função anônima para mudança de cor
function cor(objeto, cor){
    objeto.style.backgroundColor = cor
}

function add_eventos() {
    var objeto = document.getElementById("div_01")
    objeto.addEventListener("click", mensagem)
    objeto.addEventListener("mouseover", function(event){
        cor(objeto, "#fff")
    })
    objeto.addEventListener("mouseout", function(event){
        cor(objeto, "#f00")
    })
//    objeto.addEventListener("mouseover", muda_cor)
//    objeto.addEventListener("mouseout", muda_cor_saida)
}
window.addEventListener("load", add_eventos)
