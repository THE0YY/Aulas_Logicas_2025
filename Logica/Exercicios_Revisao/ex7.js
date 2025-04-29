const prompt = require('prompt-sync')()

let ganhoHoras = Number(prompt('Quanto voce ganha por hora: '))
let horasTrabalhadas = Number(prompt('Quantas horas voce trabalha: '))
let ganhoNoMes = ganhoHoras * horasTrabalhadas * 30

console.log(`Voce ganha ${ganhoNoMes} de salario bruto, sendo ${ganhoNoMes * 0.11} para o IR
     ${ganhoNoMes * 0.08} para o INSS
     ${ganhoNoMes * 0.05} para o sindicato
     e ficando com ${ganhoNoMes - (ganhoNoMes * 0.11) - (ganhoNoMes * 0.08) - (ganhoNoMes * 0.05)} de salario liquido`);