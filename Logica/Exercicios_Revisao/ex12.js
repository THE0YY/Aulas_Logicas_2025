const prompt = require('prompt-sync')()

let Pares = []
let ImPares = []

for(let i = 0; i < 10; i++){
    let numero = Number(prompt('Digite um numero(par impar): '))
    if (numero % 2 == 0){
        Pares.push(numero)
    }else{
        ImPares.push(numero)
    }
}
console.log(Pares);
console.log(ImPares);
