const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite um numero'))
if (num1<0){
    console.log('Seu numero é negativo');
}else{
    console.log('Seu numero é positivo');
    
}