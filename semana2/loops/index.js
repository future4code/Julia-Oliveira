
// exercício de interpretação de código 1 aula 09

// valor = 0
// i = 0

// i = 1
// valor = 1
// i = 2
// valor = 3
// i = 3
// valor = 6
// i = 4
// valor = 10 

// com o incremento de i ele soma o valor.

// exercício de interpretação de código 2 aula 09

//19 
//21
//23
//25
//27
//30

// não, para acessar e manipular o índice de cada é preciso utilizar  o for 


// exercício de interpretação de código 3 aula 09

// quantidadetotal = 4
// quantidadeatual = 0
// aterisco = 0
// linha = *

// quantidadeatual = 1
// linha = **

// quantidaadeatual = 2
// linha =  ***

// quantidadeatual = 3 
// linha = ****


// exercício de escrita de código 1 aula 09

let animais = Number(prompt("Quantos bichinhos de estimação você tem?"))
let animaisNomes = []
if(animais === 0){
  console.log("Que pena, você pode adotar um pet!")
} else{
  console.log(animais)
  for(let index = 0;index < animais;index++){
    animaisNomes.push(prompt("Digite o nome dos seu animail " + (index + 1)))

  }
  console.log(animaisNomes)
}


// exercício de escrita de código 2 aula 09

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function a(array) {
  for (const numero of array) {
      console.log(numero)
  }
}

//a(arrayOriginal)

function b(array) {
  for (const numero of array) {
    console.log(numero/10)
  }
  
}
//b(arrayOriginal)

let arrayPar = []

function c(array){
  for (const numero of array) {
    if (( numero % 2) == 0) {
      arrayPar.push(numero)
    }
  }
  console.log(arrayPar)
} 

//c(arrayOriginal)

let arrayString = []

function d(array) {
  for (let index = 0; index < array.length; index++) {
    arrayString.push("O elemento do índex "+ index +" é: "+ array[index])
  }
  console.log(arrayString)
}

//d(arrayOriginal)

let maiorNumero 
let menorNumero 

function e(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    console.log(array.length)
    if (index == 0) {
      maiorNumero = array[index]
      menorNumero = array[index]
    } else {
      if(array[index] > maiorNumero) {
        maiorNumero = array[index]
      }
  
      if(array[index] < menorNumero){
        menorNumero = array[index]
      }
      
    }
    
  }
  let frase = `O maior número é ${maiorNumero} e o menor é ${menorNumero}`
  
  console.log(frase)
}

e(arrayOriginal)


