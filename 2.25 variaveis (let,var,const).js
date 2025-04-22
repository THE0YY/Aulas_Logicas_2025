//Importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')()

// Receber e armazenar texto em uma variavel
     let  curso   =     'desenvolvimento de sistemas'
//   Tipo nome  recebe     valor na variavel

// Exibir valor armazenado
console.log('curso') //Imprimo uma string (texto)
console.log(curso) //Imprimi o valor que esta dentro a variavel
console.log('curso:', curso)

//Criand e atribuindo valor a outras variaveis
let idade = 35 // Valor do tioo int
let temperatura = 23.5 //Valor do tiopo float
let nome = 'Lyuz'
console.log('Olá', nome, 'voce tem', idade, "anos e hoje está fazendo", temperatura, "ºC");

//Usando template string
console.log(`Olá ${nome} voce tem ${idade} anos e hoje está fazendo ${temperatura} ºC`);

let chovendo = false
let dia = true

const PI = 3.1415 //Constantes são sempre o mesmo valor (Não alteraveis(erro))
console.log(PI);

//Utilizando prompt para receber dados
//entrada de dados

//No prompt sempre recebemos uma string
nome = prompt('Qual é seu nome? ')
//Usando o parseint ou parsefloat converte os valores recebidos que vem como string para int ou float
idade = parseInt(prompt('Qual é sua idade? '))
peso = parseFloat(prompt('Qual seu peso? '))

console.log(`Seu nome é ${nome}, voce tem ${idade} anos, e pesa ${peso}`);
//Valida o tipo da variavel
console.log(typeof(idade));
console.log(typeof(peso));
//Apos a conversao dos valores é possivel realizar calculos matematicos
console.log(idade+peso);
