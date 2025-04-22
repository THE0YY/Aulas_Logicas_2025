const prompt = require('prompt-sync')()
const sal = Number(prompt('Digite o seu salario'))
let irpf = 0
let inss = 0

switch (true){
    case sal>4664:
        irpf = sal*0.275
        break
    case sal>3751:
        irpf = sal*0.225
        break
    case sal>2826:
        irpf = sal*0.075
        break
    default:
        irpf = 0
}
//inss
switch (true){
    case sal>7786:
        inss = 908
        break
    case sal>4000:
        inss = sal*0.14
        break
    case sal>2666:
        inss = sal*0.12
        break
    case sal>1412:
        inss = sal*0.075
}
console.log(`Seu salario final é de ${(sal-irpf)-inss} sendo ${irpf} do irpf e ${inss} do inss`);