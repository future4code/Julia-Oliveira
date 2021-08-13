// exercicio de interpretação de código 1 aula 05

// a - undefined
// b - null
// c - 11
// d - 3
// e - arry (11)
// f - 9

// exercicio de interpretação de código 2 aula 05

//Subi num onibus em Mirrocos

//exericio de escrita de código 1 aula 05

const emailUsuario = prompt("Qual é o seu email?")
const NomeUsuario = prompt("Qual é o seu nome?")

const frase01 = " O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o), " + NomeUsuario

console.log(frase01)

//exercicio de escrita de código 2 aula 05 

const comida =["Japonesa","hamburguer","coxinha","sopa","peixe assado"]
const numeroUsuario = Number(prompt("insira um numero de 1 a 5"))

const frase02 = ("essas são minhas comidas preferidas") 
console.log(frase02)

console.log(comida[numeroUsuario-1])
console.log(comida[numeroUsuario-2])
console.log(comida[numeroUsuario-3])
console.log(comida[numeroUsuario-4])
console.log(comida[numeroUsuario-5])

const comidaUsuario = prompt("Qual é a sua comida preferida?")
console.log(comidaUsuario)

//exercicio de escrita de código 3 aula 05

let ListaDeTarefas = []

ListaDeTarefas.push( prompt("Qual é sua primeira tarefa a ser feita?"))
ListaDeTarefas.push( prompt("Qual é sua segunda tarefa a ser feita?"))
ListaDeTarefas.push( prompt("Qual é sua terceira tarefa a ser feita?"))

console.log(ListaDeTarefas)

let itemRemover= Number( prompt("Qual o indice da tarefa que deseja remover?"))
console.log(itemRemover)
ListaDeTarefas.pop(itemRemover)

console.log(ListaDeTarefas)





