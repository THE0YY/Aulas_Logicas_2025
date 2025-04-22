const prompt = require('prompt-sync')()

let soma = 0 
let qtd = 0

while (true){
    let nm = Number(prompt('Digite o numero(0 para encerrar): '))
    if (nm==0){
        break
    }else{
        soma = soma + nm
        qtd ++
    }
}

console.log(`quantidade dos numeros ${qtd}`);

console.log(`valor total  ${soma.toFixed(2)}`);


// let entrada
// let qtdPar = 0
// let somaPar = 0
// let qtdImpar = 0
// let somaImpar = 0

// console.log('Digite numeros (0 para encerrar): ');

// while(true){
//     entrada = parseFloat(prompt('numero: '))

//     if(entrada === 0){
//         break // encerra o loop
//     }
//     if(entrada % 2 == 0){
//         somaPar = entrada + somaPar
//         qtdPar++
//     }else{
//         somaImpar + entrada + somaImpar
//         qtdImpar++
//     }
// }

// console.log(`soma dos pares digitados: ${somaPar} quantidade de par: ${qtdPar}`);
// console.log(`soma dos impares digitados: ${somaImpar} quantidade de par: ${qtdImpar}`);
