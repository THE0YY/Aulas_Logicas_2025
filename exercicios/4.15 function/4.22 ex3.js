const prompt = require('prompt-sync')()

function TabuadaNumero(numero){
    for (let i = 0; i <= 10; i++){
        console.log(`${numero} vezes ${i} é ${numero*i}`);
    }
}
TabuadaNumero(numero = Number(prompt('Digite um numero (tabuada ate 10): ')))