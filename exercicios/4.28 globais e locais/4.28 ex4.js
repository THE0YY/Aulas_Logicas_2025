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