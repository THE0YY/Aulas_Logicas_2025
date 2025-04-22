const prompt = require('prompt-sync')()

function senha(qntNr){
    for(let i = 0; i < qntNr; i++){
        console.log(Math.floor(Math.random() * 9 + 1));
    }
}

senha(Number(prompt('Digite o tamanho da sua senha: ')))