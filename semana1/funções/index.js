
//exercicio de interpretação de código 1 aula 06

// a - foi impresso no console 10 e 50 

// b - o codigo continua sendo executado,sõ não é mais exibido


//exercicio de interpretação de código 2 aula 06

// a - permitir que o usuario insira a infromação e determinar se é falsa ou verdadeira

// b - i verdadeiro 
//   - ii verdadeiro
//  - iii verdadeiro 


//exercicio de escrita de código 1 aula 06 

// a -

function imprimeInformacao(nome,idade,cidade,Escola){
  console.log("Olá me chamo",nome,"tenho",idade,"moro em",cidade,"e estudo atualmente",Escola)
}

imprimeInformacao("Julia","23 anos","Praia Grande","programação.")

// b -

function imprimeInforms(nome,number,cidade,profissao){
  console.log("Olá me chamo",nome,"tenho",number,"anos","moradora do estado de",cidade,"e sou",profissao)
}
imprimeInforms("Lais",23,"São Paulo","instrutora de pilates.")


//exercicio de escrita de código 2 aula 06

//  
function DoisNumeros(primeiroNumero,segundoNumero){
  let soma = primeiroNumero + segundoNumero
  return soma
}
console.log(DoisNumeros(4,4))

// exercicio de escrita de código 3 aula 06

const MeusNumeros = prompt("Escolha o primeiro numero?")
const MeusNumeros01 = prompt("Escolha o segundo numero?")

function Operacao(NumUsuario,NumUsuario02){
let soma = NumUsuario + NumUsuario02
 return soma 
}
console.log(Operacao(Number(MeusNumeros),Number(MeusNumeros01)))

function Operacao01(NumUsuario,NumUsuario02){
  let soma = NumUsuario - NumUsuario02
  return soma
}
console.log(Operacao01(Number(MeusNumeros),Number(MeusNumeros01)))

function Operacao02(NumUsuario,NumUsuario02){
  let soma = NumUsuario * NumUsuario02
  return soma 
}
console.log(Operacao02(Number(MeusNumeros),Number(MeusNumeros01)))

function Operacao03(NumUsuario,NumUsuario02){
  let soma = NumUsuario % NumUsuario02
  return soma
}
console.log(Operacao03(Number(MeusNumeros),Number(MeusNumeros01)))