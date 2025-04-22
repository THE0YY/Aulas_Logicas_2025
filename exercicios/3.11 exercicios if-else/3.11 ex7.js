const prompt = require('prompt-sync')()
let num1 = Number(prompt('Digite a velocidade do carro '))
num1 = num1-80
if(num1<=0){
    console.log('Nao sera multado');
}else{
    console.log(`O valor da multa será ${num1*7}`);
}