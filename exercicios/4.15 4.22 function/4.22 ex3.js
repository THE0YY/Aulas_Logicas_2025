const prompt = require('prompt-sync')()

function TabuadaNumero(numero){
    for (let i = 0; i <= 10; i++){
        console.log(`${numero} vezes ${i} é ${numero*i}`);
    }
}
TabuadaNumero(numero = Number(prompt('Digite um numero (tabuada ate 10): ')))


// function exibirTabuada (numero){
//     console.log(`Tabuada do ${numero}: `);
//     for (let i = 0; i < 10; i++){
//         console.log(`${numero} X ${i} = ${numero * i}`);
//     }
// }
// exibirTabuada(2)
// exibirTabuada(5)
// exibirTabuada(8)