const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))

switch (true){
    case idade>=60:
        console.log('Idoso');
        break
    case idade>=18:
        console.log('Adulto');
        break
    case idade>10:
        console.log('Adolecente');
        break
    default:
        console.log('Criança');
        
        
        
}