const prompt = require('prompt-sync')()

let contagem = 10

while (true){
    console.log(contagem);
    contagem = contagem - 1   
    if (contagem==0){
        console.log('Fim');
        break
    }
}


// let i = 10 //inicializa o contador

// while(i>=0){
//     console.log(i);
//     i --
// }