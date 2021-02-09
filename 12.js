//Crie um sistema que recebe uma idade e retorna se o usuário é criança, adolescente, adulto ou idoso. */
//DESAFIO 12:
alert=("Desafio 12")
//VARIAVEL:
let idade = Number(prompt("Digite sua idade"));
//CONDIÇÕES.
if(idade <=15){
  alert("Você é uma criança");
}else{
if(idade > 15 || idade <= 21)
  alert("Você é um adolescente");
}else{
if(idade >21 || idade < 50)
  alert("Você é um adulto");
}else{
if(idade >=50)
  alert("Você é um idoso");
}