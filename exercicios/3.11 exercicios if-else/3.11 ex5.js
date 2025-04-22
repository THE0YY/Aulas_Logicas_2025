const prompt = require('prompt-sync')()
let num1 = Number(prompt('Que ano voce nasceu? '))
let idade = 2025-num1

if(idade>=18){
    console.log('Maior de idade');
}else{
    console.log('Menor de idade');
}