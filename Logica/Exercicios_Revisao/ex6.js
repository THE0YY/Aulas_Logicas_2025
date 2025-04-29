const prompt = require('prompt-sync')()

let genero = prompt('Digite seu genero').toUpperCase()
let altura = Number(prompt('Digite sua altura: '))

if (genero == 'M'){
    console.log(`Seu peso ideal é ${(72.7 * altura) - 58}`);   
}else if (genero == 'F'){
    console.log(`Seu peso ideal é ${(62.1 * altura) - 44.7}`)
}