const prompt = require('prompt-sync')()

let saldo = 0
let acao = 'usando'
function sacar(qnt){
    saldo -= qnt
}
function depositar(qnt){
    saldo += qnt
}
function consultar(qnt){
    console.log(`Voce tem ${saldo}`);
}

while (acao != 0){
    acao = prompt(`Digite uma açao (sacar, depositar ou consultar e 0 para parar o programa: `)
    if (acao == 'sacar'){
        sacar(Number(prompt('Digite um valor para sacar ')))
    }else if (acao == 'depositar'){
        depositar(Number(prompt('Digite um valor para depositar ')))
    }else if (acao == 'consultar'){
        consultar(saldo);
    }
}



// let saldo = 0
// // Criar a funçao depositar
// function deposita(valorDeposito){
//     saldo += valorDeposito;
// }
// // Criar a funcao Sacar
// function saque(valorSaque){
//     // saldo = saldo - valorSaque
//     saldo -= valorSaque
// }
// // Criando a funcao Mostar Saldo
// function mostrarSaldo(){
//     console.log(`Seu saldo: ${saldo}`);
// }

// // Menu interativo
// function caixaEletronico(){
//     const prompt = require('prompt-sync')()
//     let opcao = 0

//     while(opcao != 4){
//         console.log('=== Caixa Eletronico ===');
//         console.log('[1] para Depositar');
//         console.log('[2] para Sacar');
//         console.log('[3] para Mostrar Saldo');
//         console.log('[4] para Sair');
        
//         opcao = Number(prompt('Escolha uma opcao: '))

//         switch(opcao){
//             case 1:
//                 let valorDeposito = Number(prompt('Digite o valor a ser depositado: '))
//                 deposita(valorDeposito)
//                 break;
//             case 2:
//                 let valorSaque = Number(prompt('Digite o valor a ser sacado: '))
//                 saque(valorSaque)
//                 break;
//             case 3:
//                 mostrarSaldo();
//                 break
//             case 4:
//                 console.log('Obrigado por usar o banco Barreto');
//                 break
//             default:
//                 console.log('opcao invalida');
                
//         }
//     }
// }


// caixaEletronico()