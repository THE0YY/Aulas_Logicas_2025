const prompt = require('prompt-sync')()

let divida = Number(prompt('Digite o valor da sua divida: '))

console.log(`parcela de 1: R$${divida} e tera de pagar ${(divida / 1).toFixed(2)} cada parceça` );
console.log(`parcelas de 3: R$${divida + (divida * 0.10)} (com juros) e tera de pagar R$${((divida + (divida * 0.10)) / 3).toFixed(2)} cada parceça` );
console.log(`parcelas de 6: R$${divida + (divida * 0.15)} (com juros) e tera de pagar R$${((divida + (divida * 0.15)) / 6).toFixed(2)} cada parceça` );
console.log(`parcelas de 9: R$${divida + (divida * 0.20)} (com juros) e tera de pagar R$${((divida + (divida * 0.20)) / 9).toFixed(2)} cada parceça` );
console.log(`parcelas de 12: R$${divida + (divida * 0.25)} (com juros) e tera de pagar R$${((divida + (divida * 0.25)) / 12).toFixed(2)} cada parceça`);
// aihaondb