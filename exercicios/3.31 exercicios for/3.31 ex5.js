const prompt = require('prompt-sync')()

let qntIdade
let idade = 0
let medFem = 0
let qntFem = 0
let medMas = 0
let qntMas = 0
let medGer = 0

for (qntIdade = 0; qntIdade<=10; qntIdade++){
    idade = (prompt('Digite o genero da pessoa (M ou F): ')).toUpperCase()
    if(idade=="M"){
        idade = Number(prompt('Digite a idade da pessoa: '))
        medGer = medMas+medGer
        medMas = medMas + idade
        qntMas++
    }else if(idade=='F'){
        idade = Number(prompt('Digite a idade da pessoa'))
        medGer = medMas+medGer
        medFem = idade + medFem
        qntFem++
    }
}  
console.log(`A media masculina é ${medMas/qntMas}`);
console.log(`A media feminina é ${medFem/qntFem}`);



// let idad = 0
// let sexo
// let mediaH
// let qtdH
// let mediaF
// let qtdF
// for (let i = 0; i < 10; i++){
//     idad = Number(prompt('Digite a idade: '))
//     sexo = prompt('Digite o sexo (M ou F): ').toUpperCase()

//     if (sexo == 'M'){
//         mediaH += idad
//         qtdH++
//     }else{
//         mediaF +=idad
//         qtdF++
//     }
// }
// console.log(`Idade do homens: ${mediaH/qtdH}`);
// console.log(`Idade das mulheres: ${mediaF/qtdF}`);
