const prompt = require('prompt-sync')()

let nota1 = Number(prompt('Digite a primeira nota do aluno: '))
let nota2 = Number(prompt('Digite a segunda nota do aluno: '))
let nota3 = Number(prompt('Digite a terceira nota do aluno: '))
let nota4 = Number(prompt('Digite a quarta nota do aluno: '))
let media = (nota1+nota2+nota3+nota4)/4

if (media < 5){
    console.log(`Reprovado, media: ${media}`);
}else if (media > 7){
    console.log(`Aprovado, media: ${media}`);
}else{
    console.log(`Recuperaçao, media: ${media}`);
}