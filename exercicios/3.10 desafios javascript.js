const prompt = require('prompt-sync')()

// 1- criar um prfograma que leia dois numeros e mostre a soma entre eles
let num1 = Number(prompt('Digite um numero. (soma)'))
let num2 = Number(prompt('Digite um numero. (soma)'))
console.log(`A soma dos  numeros ${num1} e ${num2} é ${num1+num2}`);

// 2- criar um programa que leia um numero inteiro e mostre na tela o seu sucessor e antecessor
num1 = Number(prompt('Digite um numero. (sucessor e antecessor)'))
console.log(`O antecessor e sucessor do numero ${num1} sao: ${num1-1} e ${num1+1}`);

// 3- crie um programa que leia um numero e mostre seu dobro e sua raiz quadrada
num1 = Number(prompt('Digite um numero. (dobro e raiz)'))
console.log(`O numero ${num1} tem o dobro de ${num1*2} e a raiz de ${Math.sqrt(num1)}`);

// 4- crie um programa que leia duas notas de um aluno e mostre sua media
num1 = Number(prompt("Primeira nota do aluno"))
num1 = Number(prompt("Segunda nota do aluno"))
console.log(`A media do aluno é igual á ${(num1+num2)/2}`);

// 5- crie um programa que leia o alor em metros e exiba os convertido em milimetros e centimetros
num1 = Number(prompt('Digite a quantidade de metros'))
console.log(`A quantida de metros ${num1} convertido em centimetros é ${num1*100} convertido em milimetros é de ${num1*1000} e em quilometros é ${num1/1000}`);

// 6- crie um programa que leia um numero qualquer e mostre na tela sua tabuada
num1 = Number(prompt('Digite um numero para saber sua tabuada'))
console.log(`A tabuada do numero ${num1} é: ${num1*2} ${num1*3} ${num1*4} ${num1*5} ${num1*6} ${num1*7} ${num1*8} ${num1*9} ${num1*10}`);

// 7- crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dolares ela pode contar
num1 = Number(prompt('Quantos reais voce tem na carteira? '))
console.log(`A quantidade de dolares na sua carteira equivale á ${num1/6.30}`);

// 8- crie um programa que leia a altura e largura de uma parede e metros e calcule sua area, cada lata de tinta pinta 2m²
num1 = Number(prompt('Qual a altura da sua parede? '))
num2 = Number(prompt('Qual a largura da sua parede? '))
console.log(`Sua parede tem ${num1*num2}m² de area, precisando de ${(num1*num2)/2} latas de tinta para cobri-la`);

// 9- faça um algoritimo que leia o preço do preduto e seu novo preço com 5% de desconto
num1 = Number(prompt('QUal o preço do produto? '))
console.log(`O preço do produto com 5% de desconto é de R$${num1-((num1*5)/100)}`);

// 10- faça um algoritmo que leia o salario de um funcionario e mostre seu novo salaria com 15% de aumento
num1 = Number(prompt('Quanto é seu salario? '))
console.log(`O preço do seu salario com 15% de aumento é de R$${num1+((num1*15)/1000)}`);

// 11- faça um alritmo que receba um valor em graus celcius e converta para farenheit
num1 = Number(prompt('Qual a temperatura em celcius? '))
console.log(`a temperatura em fahrenheit é de ${(num1*(9/5))+32} fahreinheit`);

// 12- faça um alritmo que pergunte a quantidade de km percorridos por um carro alugado e dias alugados sendo 60 por dia e 0.15 por km
num1 = Number(prompt('Por quantos dia voce alugou o carro? '))
num2 = Number(prompt('Quantos quilometros foram rodados com esse carro? '))
console.log(`alugando o carro por ${num1} dias, e percorrendo ${num2}km voce deve pagar R$${(num1*60)+(num2*0.15)}`)
