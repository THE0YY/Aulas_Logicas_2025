const prompt = require('prompt-sync')()
let num1 = Number(prompt("Primeira nota do aluno"))
let num2 = Number(prompt("Segunda nota do aluno"))
media = (num1+num2)/2

if(media>=7){
    console.log('Aprovado');
}else{
    console.log('Reprovado');
}