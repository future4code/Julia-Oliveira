
// exercício de interpretação de código 01 aula 10

// o item exibe cada objeto dentro da array
// o index exibe a posição de cada objeto dentro da array
// o array exibe as todas as informações presentes na array


// exercício de interpretação de código 02 aula 10

// exibiu uma nova array

// exercício de interpretação de código 03 aula 10

// exibirá as informações e posições diferentes de Leticia  Chijo e  Chijo


// exercício de escrita de código 01 aula 10 

const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]

const novoArray = pets.map((item, index, array) => {
  return item.nome
})

console.log(novoArray)

const novoArrayB = pets.filter((item, index, array) => {
return item.raca === "Salsicha"
})

console.log(novoArrayB)

const novoArrayC = pets.filter((item, index, array) => {

  return item.raca === "Poodle"

}).map((pet,i, array)=>{

  return "Você ganhou um cupom de desconto de 10% para tosar o/a " + pet.nome

}) 
//let novoArrayD = novoArrayC

console.log(novoArrayC)


// exercício de escrita de código 02 aula 10

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

const novaLista = produtos.map((item, index, array) => {
  return item.nome
})
console.log(novaLista)

const novaLista01 = produtos.map((item, index, array) => {
  return {nome:item.nome, preco:item.preco - (item.preco * 0.05)}
})
console.log(novaLista01)

const produtoBebidas = produtos.filter((item, index, array) => {
  return item.categoria === "Limpeza"
})

console.log(produtoBebidas)

const produtosLimpeza = produtos.filter((item, index, array) => {
  return item.nome.includes("Ypê")
})

console.log(produtosLimpeza)

const produtosLimpeza01 = produtos.filter((item, index, array) => {
  return item.nome.includes("Ypê")
}).map((item, index, array) => {
  return " Compre " + item.nome + " por " + item.preco

})
console.log(produtosLimpeza01)