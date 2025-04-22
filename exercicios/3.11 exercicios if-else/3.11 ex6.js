const prompt = require('prompt-sync')()
let num1 = Number(prompt('Digite um numero '))
let num2 = Number(prompt('Digite um numero '))

if(num1==num2){
    console.log('Os numeros sao iguais');
}else{
    console.log('Os numeros sao diferentes');
}