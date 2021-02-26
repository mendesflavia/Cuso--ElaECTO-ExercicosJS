/*A confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:

- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JUNIOR
- Até 24 anos: SÊNIOR
- Acima: MASTER */

//DESAFIO 15:
alert=("Desafio 15")
//VARIAVEIS:
let idade = parseInt(prompt("Digite sua idade",""));
let categoria_01 ="MIRIM";
let categoria_02 ="INFANTIL";
let categoria_03 ="JUNIOR";
let categoria_04 ="SENIOR";
let categoria_05 ="MASTER";
//CONDIÇOES:
if ((idade >= 5) && (idade <= 7))
{
alert ("Atleta pertence a categoria " + categoria_01);
if ((idade >= 8) && (idade <= 10))
{
alert ("Atleta pertence a categoria " + categoria_02);
}
if ((idade >= 11) && (idade <= 13))
{
alert ("Atleta pertence a categoria " + categoria_03);
}
if ((idade >= 14) && (idade <= 17))
{
alert ("Atleta pertence a categoria " + categoria_04);
}
if (idade >= 18)
alert ("Atleta pertence a categoria " + categoria_05);
}