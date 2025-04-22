const prompt = require('prompt-sync')()
let nr1 = 0
let nr2 = 0
let resultado = 0
let func = ''
// NAO SEI
function funcoes(func,nr1,nr2){
   if (func == Number('+')) {
        resultado = nr1+nr2;
    }
    else if (func == Number('-')) {
        resultado = nr1-nr2;
    }
    else if (func == Number('*')) {
        resultado = nr1*nr2;
    }
    else if (func == Number('/')) {
        resultado = nr1/nr2;
    }
    else if (func == Number('**')) {
        resultado = nr1**nr;
    }
    return resultado
}

console.log(funcoes(Number(prompt('Digite dois numeros com "," entre eles '))))
console.log(resultado);