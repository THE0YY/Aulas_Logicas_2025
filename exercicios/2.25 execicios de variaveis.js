//EXECICIOS VARIAVEIS/CONSTANTES
const prompt = require('prompt-sync')()
let nomeAluno = 'Qual seu nome ? '
let altura = 'Qual sua altura? '
let escola = 'Qual sua escola? '
let anoentrada = 'em que ano entrou nessa escola? '
let ano = "Em que ano está? "
let professor = 'Qual nome do professor? '
let materia = "Qual materia seu professor passa? "
console.log(nomeAluno,altura,escola,ano);

nomeAluno = prompt(nomeAluno)
altura = parseFloat(prompt(altura))
escola = prompt(escola)
anoentrada = parseInt(prompt(anoentrada))
ano = parseFloat(prompt(ano))
professor = prompt(professor)
materia = prompt(materia)

console.log(`Seu nome é ${nomeAluno}, sua altura é ${altura}, você estuda no(a) ${escola} á ${ano-anoentrada} anos, e o ano é ${ano}, com o professor(a) ${professor}, que da aula de ${materia}`);
//console.log(`Estou no(a) ${escola} á ${ano-anoentrada} anos`);
