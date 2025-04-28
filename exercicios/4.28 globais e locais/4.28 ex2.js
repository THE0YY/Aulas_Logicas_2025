let dolar = 5.68
let euro = 6.46

function conversao(real){
    console.log(`R$${(real).toFixed(2)} é igual á: ${(real/dolar).toFixed(2)} dólar(es) e ${(real/euro).toFixed(2)} euro(s)`);   
}
conversao(1)
conversao(5.68)
conversao(6.46)
conversao(100)