
/*Criar um programa que some todos os numeros amazenados em um vertor*/
// variavel global
let resultadoSoma = 0;
//vertor
let numero = [1,2,3,4,5,6,7,8,9,10];
for(let i = 0; i < numero.length; i++){
// condição
  resultadoSoma = resultadoSoma + numero[i]
  }
console.log("resultadoSoma", resultadoSoma);