const prompt = require('prompt-sync')()
//th
let sal = Number(prompt('Digite o seu salario: '))

switch(true){
    case sal<2000:
        console.log(`Seu salario é de ${(sal*0.12)+sal}`);
        break
    case sal>=2000&&sal<4000:
        console.log(`Seu salario é de ${(sal*0.10)+sal}`);
        break
    default:
        console.log(`Seu salario é de ${(sal*0.08)+sal}`);
        break
    
}