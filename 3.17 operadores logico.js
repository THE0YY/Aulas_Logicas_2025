const prompt = require('prompt-sync')()

// let altura = Number(prompt(' Qual sua altura? '))
// let peso = Number(prompt('Qual seu peso'))
// let imc = peso/(altura**2)

// if (imc<18.5){
//     console.log('Abaixo do peso');
// }else if(imc >= 18.5 && imc <25){
//     console.log('Peso ideal');
// }else if (imc >= 25 && imc <30){
//     console.log('Sobrepeso');
// }else{
//     console.log('Obesidade');
// }

// // Verificar se o triangulo é equilatero ou escaleno
// // receber lado 1

// let lado1 = Number(prompt('digite o valor do lado 1 '))
// let lado2 = Number(prompt('digite o valor do lado 2 '))
// let lado3 = Number(prompt('digite o valor do lado 3 '))

// // verificar se o triangulo é equilatero caso tenha dois lados iguais
// let eq = (lado1==lado2) && (lado2==lado3)
// let es = (lado1!=lado2) && (lado2!=lado3) && (lado1!=lado3)

// if(lado1==lado2&&lado2==lado3){
//     console.log('O triangulo é equilatero');
// }else if(lado1!=lado2&&lado2!=lado3&&lado1!=lado3){
//     console.log('O triangulo é escaleno');
// }else{
//     console.log('Triangulo isosceles');
// }

// // // descobrir a quantidad de horas trabalhadas
// let horas = Number(prompt('Total de hora trabalhadas: '))
// let vendas = Number(prompt('Total de vendas: '))

// // //validar se uma das condiçoes foi atendida (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
// if(vendas>5000 || horas>40){
//     console.log('Tem direito a bonus');
// }else{
//     console.log('Nao tem direito a bonus');
// }

// // crie um algoritimo e receba um caractere e verifique se ele é uma vogal ou uma consoante
let ca = prompt('Digite um caractere: ')
// // sinal logico do "OU" = ||
// // sinal logico do "E" = &&
if(ca==('a')||ca==('e')||ca==('i')||ca==('o')||ca==('u')){
    console.log('Seu caractere é uma vogal');
}else{
    console.log('Seu caractere é uma consoante');
}