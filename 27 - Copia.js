/*
* Crie um programa que utiliza os números ímpares encontrados entre numeroInicial
* e numeroFinal e realiza um soma entre eles.*/


let numeroInicial = 0
let numeroFinal = 0
let n = 0
let vetor =[]
let vetorImpar = []
let soma = 0

numeroInicial = Number(prompt("Digite o número inicial:"));
numeroFinal = Number(prompt("Digite o número final:"));

function criarvetor(numeroInicial, numeroFinal) {
    for (let i = 0; i < numeroFinal; i++) {
        n = numeroInicial + i;
        vetor.push(n)
    }
    return vetor
}
criarvetor(numeroInicial, numeroFinal)

console.log(vetor)


function somarImpar(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 1) {
            I = vetor[i]
            vetorImpar.push(I)
            soma= soma + vetor[i]

        }
    }
    return (soma)
    return(vetorImpar)
}

somarImpar(vetor)
alert( "Número Inicial = "+numeroInicial );
alert( "Número Final = "+numeroFinal) ;
alert("Ímpares = "+ vetorImpar);
alert("Soma = "+ soma);

console.log( "Número Inicial = "+numeroInicial );
console.log( "Número Final = "+numeroFinal) ;
console.log("Ímpares = "+vetorImpar)
console.log("Soma = "+soma)