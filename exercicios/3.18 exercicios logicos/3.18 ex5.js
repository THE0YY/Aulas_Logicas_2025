const prompt = require('prompt-sync')()

let sal = Number(prompt('Qual o seu salario? '))

if(sal<2000){
    console.log(`Seu salario é de ${(sal*12/100)+sal}`);
}else if(sal>=2000&&sal<=4000){
    console.log(`Seu salario é de ${(sal*10/100)+sal}`);
}else{
    console.log(`Seu salario é de ${(sal*8/100)+sal}`);
}