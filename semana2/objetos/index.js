// exercicio de interpretação de código 01 aula 07


// Matheus Nachtergaele - Virrginia Cavendish - Globo 14 horas


// exercicio de interpretação de código 02 aula 07

//a- Juca - 3 - srd/ Juba - 3 - srd/ Juba - 3 - srd 
//b- Foi feito o espelhamento de um objeto,alterando apenas uma informação posterior.


// exercicio de interpretação de código 03 aula 07

//a- false/undefined
//b- porque uma informação foi dada como falsa  e a outra informção não foi declarada 

// exercicio de escrita de código 01 aula 07

let pessoa ={
  nome:"Julia",
  apelidos:["Juh","Jubz","Juba"]
}

function imprimeApelidos(){
  let frase = `Meu nome é ${pessoa.nome}, mas pode me chamar de:${pessoa.apelidos}.`;
  console.log(frase)

}
imprimeApelidos()

function imprimeApelidos(){
  let novaPessoa = {...pessoa, nome:'Rubens',  sobrenome:'Spósito'}
  console.log(novaPessoa)
}

// exercicio de escrita de codigo 02 aula 07 

let pessoa01 ={
  nome:"Rubens",
  idade:"23",
  profissao:"programador"
}
let pessoa02 ={
  nome:"Julia",
  idade:"23",
  profissao:"programador em construção"
}

function imprimeInfor(pessoa){
  let arrayPessoa = []
  arrayPessoa.push(pessoa.nome)
  arrayPessoa.push(pessoa.nome.length)
  arrayPessoa.push(pessoa.idade)
  arrayPessoa.push(pessoa.profissao)
  arrayPessoa.push(pessoa.profissao.length)
  console.log(arrayPessoa)
}
imprimeInfor(pessoa01)
imprimeInfor(pessoa02)


let carrinho = []

let maça = {
  nome:"maça",
  disponibilidade:true
}
let uva = {
  nome:"uva",
  disponibilidade:false
}
let pera = {
  nome:"pera",
  disponibilidade:true
}

function meuCarrinho(fruta){
 carrinho.push(fruta)
}
meuCarrinho(maça)
meuCarrinho(uva)
meuCarrinho(pera)

console.log(carrinho)
