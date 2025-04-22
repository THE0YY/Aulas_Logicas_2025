const prompt = require('prompt-sync')()

let mes = (prompt('Digite o nome de um mes: ')).toLowerCase

switch (true){
    case mes=='janeiro'||mes=='março'||mes=='maio'||mes=='julho'||mes=='agosto'||mes=='outubro'||mes=='dezembro':
        console.log(`${mes} tem 31 dias`);
        break
    case mes=='abril'||mes=='junho'||mes=='setembro'||mes=='novembro':
        console.log(`${mes} tem 30 dias`);
        break
    case mes=='fevereiro':
        console.log(`${mes} tem 28 dias`);
        break
    default:
        console.log('Mes invalido');
}