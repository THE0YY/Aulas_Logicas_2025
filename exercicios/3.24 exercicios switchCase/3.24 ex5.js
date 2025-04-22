const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite a primeira nota: '))
let nota2 = Number(prompt('Digite a segunda nota: '))
let media = (nota1+nota2)/2

switch (true){
    case media>=7:
        console.log('Aprovado');
        break
    case media>=5&&media<7:
        console.log('Recuperaçao');
        break
    default:
    console.log('Reprovado');
}