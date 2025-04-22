const prompt = require('prompt-sync')()
//minima ideia


let i = 0
let entrada
let soma = 0
let maior = 0
let menor = Infinity

while(i <= 10){
    entrada = Number(prompt('Digite um, numero: '))
    if(entrada > maior){
        maior = entrada
    }
    if(entrada < menor){
        menor = entrada
    }
    soma += entrada
    // soma = entrada + soma
    i++
}
let media = soma / 10
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
console.log(`Media do valor: ${media}`);
