//Crie sistema que recebe três notas de um aluno, tire a média e define se ele passou ou não de ano.
//Nota minia de aprovação:7
//Entre 5 e 6.9, o aluno ganha o direito de fazer uma recuperação.
//Caso contrário, o alunoserá reprovado.
//DESAFIO 7:
alert=("Desafio 07")
//Variaveis:
let nota1
let nota2
let nota3
let media
//ENTRADA:
//RECEBER NOTA 1, NOTA 2, NOTA 3:
nota1 =Number(prompt("Digite a primeira nota"))
nota2 =Number(prompt("Digite a segunda nota"))
nota3 =Number(prompt("Digite a terceira nota"))
//PROCESSAMENTO:
media=(nota1 + nota2 + nota3)/3
console.log("A média do aluno foi " + media)
//Somar as notas e tirar a média do aulo.
//SE media >=7 :aprovado{}
//SE NÂO, SE média >=5 e <=6.9: recuperação.
//CASO CONTRÁRIO, o alulo será reprovado.
if(media >=7){
   console.log("Parabéns você foi aprovado")
}else if(media>=5){
  console.log("Você está em recuperação")
}else("Você foi reprovado")
//SAÍDA:
//Retornar se o aulo foi aprovado, ficou de recuperaçãoou foi reprovado.
