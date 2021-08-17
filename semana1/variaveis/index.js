
//exercicio aula 03 variaveis 

let nome 
let idade
console.log(typeof nome , typeof idade)
//não existe um valor na variavel 

nome = prompt("qual é o seu nome?")
idade = prompt("qual é a sua idade?")
// com o comando prompt foi gerada a pergunta ao usuario que preencheu o valor da variavel. 

console.log(typeof nome , typeof idade)
// utilizando o typeof consegui identificar o tipo de variavel 
console.log("olá", nome ,"você tem" , idade,"anos")


let comida = prompt("você gosta de bolo?")
let roupa = prompt("ela usou o casaco ontem?")
let relacionamento = prompt("voces estão namorando?")
console.log("você gosta de bolo? -",comida)
console.log("ela usou o casaco ontem? - ",roupa)
console.log("voces estão namorando? -",relacionamento)

let a = 10
let b = 25
let c = b
b = a
a = c

console.log(a,b)








