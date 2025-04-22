const prompt = require("prompt-sync")()

//// operaçao com variaveis
let nr1 = Number(prompt('Digite um numero.(soma)'))
let nr2 = Number(prompt('Digite um numero.'))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} e ${nr2} é igual a ${soma}`);

 nr1 = Number(prompt('Digite um numero.(subtraçao)'))
 nr2 = Number(prompt('Digite um numero.'))
let subtracao = nr1 - nr2
console.log(`A subtraçao entre ${nr1} e ${nr2} é igual a ${subtracao}`);

 nr1 = Number(prompt('Digite um numero.(multiplicaçao)'))
 nr2 = Number(prompt('Digite um numero.'))
let multiplicacao = nr1 * nr2
console.log(`A multiplicaçao entre ${nr1} e ${nr2} é igual a ${multiplicacao}`);

 nr1 = Number(prompt('Digite um numero.(divisao)'))
 nr2 = Number(prompt('Digite um numero.'))
let divisao = nr1 / nr2
console.log(`A divisao entre ${nr1} e ${nr2} é igual a ${divisao}`);

 nr1 = Number(prompt('Digite um numero.(exponenciaçao)'))
 nr2 = Number(prompt('Digite um numero.'))
let exponenciacao = nr1 ** nr2
console.log(`A exponenciaçao entre ${nr1} e ${nr2} é igual a ${exponenciacao}`);

nr1 = Number(prompt('Digite um numero.(modulo)'))
nr2 = Number(prompt('Digite um numero.'))
let modulo = nr1 % nr2
console.log(`O modulo entre ${nr1} e ${nr2} é igual a ${ modulo}`);

//// calculando novo preço do celular com desconto
let valorcel = Number(prompt('digite o preço do celular'))
let desconto = Number(prompt('digite o preço do desconto'))

valorcel = valorcel - desconto
console.log(`O valor do celular com descontos é de R$${valorcel}`);

//// atividade dobro e metade
let numero = Number(prompt('Digite um numero.'))
console.log(`O dobro do seu numero é ${numero*2} e a metade do seu numero é ${numero/2}`);

//// cobrar horas e dias trabalhados
let cobrar = Number(prompt('Quantos reais por hora eu irei cobrar? '))
let horas_dia = Number(prompt('quantas horas por dia eu vou trabalhar? '))
let dias_trabalhados = Number(prompt('Quantos dias eu vou trabalhar trabalhar? '))
console.log(`ao finaliza o projeto irei receber ${cobrar*horas_dia*dias_trabalhados}`)
