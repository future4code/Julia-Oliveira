// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
 const altura = prompt("Qual é a sua altura?")
 const largura = prompt ("Qual é a sua largura?")

 const area = altura * largura

 console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em queano você nasceu?")

  const anos = anoAtual - anoNascimento

  console.log(anos)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
   
    const imc = peso /(altura * altura)
    return imc
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual é o seu nome?")
  const idadeUsuario = prompt("Qual  é a sua idade?")
  const emailUsuario = prompt("Qual é o seu email?")

  const frase01 = "Meu nome é " + nomeUsuario  + "," + " tenho " + Number(idadeUsuario) + " anos" + "," + " e o meu email é " + emailUsuario + "."

  console.log(frase01)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor01 = prompt("escolha sua primeira cor?")
  const cor02 = prompt("escolha sua segunda cor?")
  const cor03 = prompt("escolha sua terceira cor?")
  const cores = [cor01,cor02,cor03]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 let  custoPorIngresso = custo/valorIngresso
 return custoPorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let valor = string1.length === string2.length  
  return valor
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimoElemento = array[array.length-1]
  let primeiroElemento = array[0]
  array.splice(0,1,ultimoElemento);
  array.splice(array.length-1,1,primeiroElemento);
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let valor = string1.toLowerCase() === string2.toLowerCase()
  return valor
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}