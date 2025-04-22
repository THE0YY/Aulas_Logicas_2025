const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite um numero (1-7) '))

switch (true){
    case num1==1:
        console.log('Domingo');
        break
    case num1==2:
        console.log('Segunda');
        break
    case num1==3:
        console.log('Terça');
        break
    case num1==4:
        console.log('Quarta');
        break
    case num1==5:
        console.log('Quinta');
        break
    case num1==6:
        console.log('Sexta');
        break
    case num1==7:
        console.log('Sabado');
        break
    default:
    console.log('Dia invalido');
    
}