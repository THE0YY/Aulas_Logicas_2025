const prompt = require('prompt-sync')()

//criando nossa primeira funcao
function cabecalho(texto){
    console.log('----------------------');
    console.log(texto);
    console.log('----------------------');
}

//criando outra funçao, funçao de saudaçao
function saudacao(){
    let nome = prompt('Digite o seu nome: ')
    console.log(`${nome} Tenha um bom dia.`);
    
}

//chamando a funçao
//passando o parametro junto com a funçao
cabecalho('SESI/SENAI')
//declarar uma variavel e passa-la como parametro para função
let escola = 'SESI 025'
cabecalho(escola)
saudacao()

//criei a fuçao soma que ira receber dois valores como parametros a partir desses valores, ralizara o calculo e mostrara o resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado);
}
soma(5,6)
soma(8,9)
soma(8,18)
