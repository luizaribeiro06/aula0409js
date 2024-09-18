let nota1, nota2, media
// nota1 = prompt("Digite nota 1")
// nota1 = parseFloat(nota1)

// nota2 = prompt("Digite nota 2")
// nota2 = parseFloat(nota2)

// media= parseFloat(media)

//  media = (nota1+nota2)/2


function calcular(){
    console.log("vamos calcular");
    let elem1 = document.getElementById("campo1")
    let nota1 = parseFloat(elem1.value)
    let elem2 = document.getElementById("campo2")
    let nota2 = parseFloat(elem2.value)
    media = (nota1+nota2)/2
    console.log("A média é: ", media);
}


//digite lados triangulo depois descobre a area e dps faz pitagoras
//digite os dois lados retangulo (base.altura)



// console.log("Você digitou ", nota1);
// console.log("Você digitou ", nota2);
// console.log("A média é ", media);