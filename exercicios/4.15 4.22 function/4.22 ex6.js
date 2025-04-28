const prompt = require('prompt-sync')()

function senha(qntNr){
    for(let i = 0; i < qntNr; i++){
        console.log(Math.floor(Math.random() * 9 + 1));
    }
}

senha(Number(prompt('Digite o tamanho da sua senha: ')))


// function gerarSenha (tamanhoSenha){
//     let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
//     let senha = ''

//     for(let i = 0; i <tamanhoSenha; i++){
//         let letraSorteada = Math.floor(Math.random() * caracteres.length)
//         senha += caracteres[letraSorteada]
//     }
//     return senha
// }

// console.log('Senha de 6 caracteres: ', gerarSenha(6));
// console.log('Senha de 10 caracteres: ', gerarSenha(10));