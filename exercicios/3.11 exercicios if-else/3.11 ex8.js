const prompt = require('prompt-sync')()
let num1 = Number(prompt('Digite o quanto voce fez no més'))
let cms1 = num1*5/100
let cms2 = num1*3/100
if(num1<5000){
    console.log(`sua comissao sera de ${cms2}`);
}else{
    console.log(`sua comissao sera de ${cms1}`);
}