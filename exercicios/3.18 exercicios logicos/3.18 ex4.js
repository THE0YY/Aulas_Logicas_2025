const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
media = (nota1+nota2)/2

if(media<5){
    console.log('Reprovado');
}else if (media>=5&&media<7){
    console.log('Recuperação');
}else{
    console.log('Aprovado');   
}