// exercicio 01 aula 04

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

//verdadeiro && falso = falso

//verdadeiro && falso && verdadeiro = falso 

//verdadeiro(!falso) +(verdadeiro +falso =) verdadeiro
//verdadeiro + verdadeiro = verdadeiro
//  o tipo de valor da variavel é booleano

// exercicio 02 aula 04

let primeiroNumero =prompt("Digite um numero!")
primeiroNumero = Number(primeiroNumero)

let segundoNumero =prompt("Digite outro numero!")
segundoNumero = Number(segundoNumero)

let soma = primeiroNumero + segundoNumero
console.log(soma)

// a forma colocada no código faz com que a soma não seja executada. Pois a variavel estava como string e não como Number 

// exercicio 03 aula 04
//solução converter a string em Number 

//exercio 01 aula 04 escrita de código

let idade = prompt("quantos anos você tem?")
idade = Number(idade)

let idade02 =prompt("sua amiga tem quantos anos?")
idade02 = Number(idade02)

let diferenca = idade > idade02
console.log("Sua idade é maior do que a do seu melhor amigo?")
//true
console.log(diferenca)
let diferenca2 = idade - idade02

console.log(diferenca2)
//-57

//exercio 02 aula 04

let par = prompt("insira um número par,por obsequio")
par = Number(par)
let restoDivisao = par % 2 
console.log(restoDivisao)
//quando executei com numero par o resultado foi zero 
//quando executei com numero impar o resultado foi 1

let idadeAno = prompt("quantos anos você tem?")
idadeAno = Number(idadeAno)
let multiplicacao = 12 * idadeAno
console.log(multiplicacao)

let multiplicacao01 = 365 * idadeAno
console.log(multiplicacao01)

let multiplicacao02 = 24 * 365 * idadeAno
console.log(multiplicacao02)

//exercicio 04 aula  03 

let numeracao = prompt("informe o primeiro numero")
numeracao = Number(numeracao)
let numeracao01 = prompt("informe a numeracao 02")
numeracao01 = Number(numeracao01)
console.log(" o primeiro numero é maior que o segundo?")
let calculo = numeracao > numeracao01 
console.log (calculo)

