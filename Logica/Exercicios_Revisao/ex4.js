const prompt = require('prompt-sync')()

let ganhoHoras = Number(prompt('Quanto voce ganha por hora: '))
let horasTrabalhadas = Number(prompt('Quantas horas voce trabalha: '))

console.log(`No final do dia voce recebera ${ganhoHoras * horasTrabalhadas}`);
