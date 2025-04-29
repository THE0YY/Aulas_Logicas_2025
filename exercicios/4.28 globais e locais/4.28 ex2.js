let dolar = 5.68
let euro = 6.46

function conversao(real){
    console.log(`R$${(real).toFixed(2)} é igual á: ${(real/dolar).toFixed(2)} dólar(es) e ${(real/euro).toFixed(2)} euro(s)`);   
}
conversao(1)
conversao(5.68)
conversao(6.46)
conversao(100)


// let cotacaoDolar = 5.65
// let cotacaoEuro = 6.64

// function converterMoeda(valorReais){
//     let valorEmDolar = valorReais / cotacaoDolar
//     let valorEmEuro = valorReais / cotacaoEuro

//     console.log(`R$ ${valorReais.toFixed(2)} equivale a: `);   
//     console.log(`US$ ${valorEmDolar.toFixed(2)}`);   
//     console.log(`E EU$ ${valorEmEuro.toFixed(2)}`);   
// }