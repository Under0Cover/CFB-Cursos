// Recursividade

function contador(minimo, maximo){
    // Recursividade imprimindo números
    document.write(minimo + "<br>")
    if (minimo < maximo){
        contador(++minimo, maximo)
    }
}

contador(0, 10)

function fatorial(numero) {
    // Recursividade de fatorial
    if (numero == 1){
        return 1
    }
    return numero*fatorial(numero - 1)
}

document.write(fatorial(7))


 // Recursividade para girar a div
 var objeto = document.getElementById("quadrado")
 var angulo = 0
 var animacao
 
 function gira() {
     objeto.style.transform = "rotate("+ angulo + "deg)"
     angulo++
     if (angulo > 360){
         angulo = 0
     }
     animacao = requestAnimationFrame(gira)
 }

 gira()