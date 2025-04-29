function descontos (horas, horasTrabalhada, diasNoMes){
    salario = horas * horasTrabalhada * diasNoMes
    IR = salario * 0.11
    INSS = salario * 0.08
    sindicato = salario * 0.05
    console.log(salario - IR - INSS - sindicato);
}

descontos(15,7,30)
descontos(6,5,30)
descontos(18,10,30)

// console.log(`Voce ganha ${ganhoNoMes} de salario bruto, sendo 
//      ${ganhoNoMes * 0.11} para o IR
//      ${ganhoNoMes * 0.08} para o INSS
//      ${ganhoNoMes * 0.05} para o sindicato
//      e ficando com ${ganhoNoMes - (ganhoNoMes * 0.11) - (ganhoNoMes * 0.08) - (ganhoNoMes * 0.05)} de salario liquido`);