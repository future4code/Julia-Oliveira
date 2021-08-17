console.log("Bom dia, Maryam!");

// exercício de interpretação de código 01 aula 08

// a- faz um teste númerico de acordo com a escolha do usuario
// b- para os números pares
// c- para números ímpares


// exercício de interpretação de código 02 aula 08

// a- para listar frutas e seus valores 
// b- o preço da fruta, maçã, é R$2,25 reais
// c- não dará preço para a pêra pois, o case não consegue ser executado 


// exercício de interpretação de código 03 aula 08

// a- esta pedindo ao usuario  que forneça uma informação.
// b-  10 exibe a mensagem -10 não exibe nada pois é menor que 0.
// c-  sim, pois a variavel let mensagem, esta dentro de um bloco if. De forma que não é declarada no contexto global.

// exercício de escrita de código 01 aula 08

let idade = Number(prompt("Qual é a sua idade?"))

if (idade >= 18){
  console.log("Você pode dirigir!!")
} else {
  console.log("você não pode dirigir!!")
}


// exercício de escrita de código 02 aula 08

let periodo = prompt("Em qual período você estuda? M = matutino, V = vespertino, N = noturno")
if (periodo.toUpperCase() === "M" ){
console.log("bom dia!")
} else if(periodo.toUpperCase() === "V") {
console.log("boa tarde!")
} else if (periodo.toUpperCase() === "N"){
console.log("boa noite!")
}


// exeercício de escrita de código 03 aula 08 

let periodo01 = prompt("Em qual período você estuda? M = matutino, V = vespertino, N = noturno")
switch(periodo01.toUpperCase()){
  case "M":
  console.log("bom dia!")
  break;
  case "V":
  console.log("boa tarde!")
  break;
  case "N":
  console.log("boa noite!")
  break;
  default:
  break;
}

//exercício de escrita de código 04 aula 08

let genero = prompt("Qual gênero de filme você pretende assistir?")
let ingresso = Number(prompt("qual é o valor do ingresso?"))

if(genero === "fantasia", ingresso < 15){
  console.log("bom filme!")
} else {
  console.log("escolha outro filme :(")
}