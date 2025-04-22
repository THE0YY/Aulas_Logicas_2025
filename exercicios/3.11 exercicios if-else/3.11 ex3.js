const prompt = require('prompt-sync')()
let num1 = Number(prompt('Digite um numero'))
if(num1%2==0){
    console.log(`O numero ${num1} é par`);
}else{
    console.log(`Onumero ${num1} é impar`);
    
}