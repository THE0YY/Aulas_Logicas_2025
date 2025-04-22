const prompt = require('prompt-sync')()
let num1 = Number(prompt('digite um numero'))
let num2 = Number(prompt('digite um numero'))

if(num1>num2){
    console.log(`${num1} é maior doque ${num2}`);
}else{
    console.log(`${num2} é maior doque ${num1}`);
}