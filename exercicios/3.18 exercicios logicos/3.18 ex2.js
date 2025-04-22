const prompt = require('prompt-sync')()

let anoNasc = Number(prompt('Digite o ano em que nasceu: '))
let anoPres = Number(prompt('Digite o ano em que esta: '))
let idade = anoPres - anoNasc
if(idade<=10){
    console.log('Voce é uma criança');
}else if (idade>=10&&idade<=17){
    console.log('Voce é uma adolescente');
}else if (idade>=18&&idade<=59){
    console.log('Voce é um adulto');
}else{
    console.log('Voce é um idoso');
}