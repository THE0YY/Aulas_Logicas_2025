const prompt = require('prompt-sync')()

let nr = 0
let contador = 0
let qntImpar = 0
let qntPar = 0
let soma = 0

for (contador = 0; contador < 5; contador++){
    nr = Number(prompt('Digite um numero: '))
    if(nr % 2 == 0){
        qntPar++
        soma = nr + soma
    }
    if(nr % 2 == 1){
        qntImpar++
        soma = nr + soma
    }
}

console.log(`A quantidade de pares são: ${qntPar}`);
console.log(`A quantidade de impares são: ${qntImpar}`);
console.log(`A soma de todos é: ${soma}`);


// let somaPar = 0
// let somaImpar = 0
// let qtdPar = 0
// let qtdImpar = 0
// let entrada = 0

// for (let i = 0; i <=5; i++){
//     entrada = console.log(Number(prompt('Digite um numero: ')));
//     if (entrada % 2 == 0){
//         somaPar += entrada
//         qtdPar++
//     }else{
//         somaImpar += entrada
//         qtdImpar++
//     }
// }

// console.log(`A soma de ${qtdPar} é ${somaPar}`)
// console.log(`A soma de ${qtdImpar} é ${somaImpar}`)