const prompt = require('prompt-sync')()
let nr1 = 0
let nr2 = 0
let resultado = 0
let func = ''
// deu errado ;p tentei com prompt
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


// function calcular(num1, num2, operadaor){
//     if(operador === '+'){
//         console.log(`${num1} + ${num2} = ${num1+num2}`);
//     }
//     else if(operador === '-'){
//         console.log(`${num1} - ${num2} = ${num1-num2}`);
//     }
//     else if(operador === '*'){
//         console.log(`${num1} * ${num2} = ${num1*num2}`);
//     }
//     else if(operador === '/'){
//         console.log(`${num1} / ${num2} = ${num1/num2}`);
//     }
//     else if(operador === '**'){
//         console.log(`${num1} ** ${num2} = ${num1**num2}`);
//     }
//     else{
//         console.log('Operador invalido');
//         return
//     }
// }

// calcular(2,4,'+')
// calcular(2,4,'-')
// calcular(2,4,'/')
// calcular(2,4,'*')
// calcular(2,4,'**')
// calcular(2,4,';')