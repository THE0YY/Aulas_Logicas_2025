const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um numero (dia da semana) '))
if (num==1){
    console.log('Domingo');
}else if (num==2){
    console.log('Segunda-feira');
}else if (num==3){
    console.log('Terça-feira');
}else if (num==4){
    console.log('Quarta-feira');
}else if (num==5){
    console.log('Quinta-feira');
}else if (num==6){
    console.log('Sexta-feira');
}else if (num==7){
    console.log('Sabado');
}