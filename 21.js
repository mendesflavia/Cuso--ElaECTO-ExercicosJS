/*Crie uma lista de objetos contendo filmes e suas respectivas classificações.O programa ao receber uma idade armazenada em uma variavel, deverá verificar e mostrar no console qual filme o usuario pode assistir.*/

let filmes = {
  [nome:"Deu a loca na Chapeuzinho", classificacao:17],
  [nome:"Vovozona", classificacao:42],
  [nome:"killBil", classificacao:28],
  [nome:"A fuga das galinhas", classificacao:0],
}
  idade = parsefloat(prompt("digite sua idade"))
console.log("Filmes para sua idade")
for(i=0;i<filmes.length;i++){
if(filmes[i].classificacao =< idade);  
console.log("Filme indicado" + filme[i].nome)
