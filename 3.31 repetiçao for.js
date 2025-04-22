const prompt = require('prompt-sync')()
//criando nosso primeiro FOR
for (let i = 0; i < 100; i++){
    console.log(i);
}

//entregando os notebooks por ordem
console.log('Entregando notebooks');

for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O(a) ${nome} veio para escola? (S ou N)`)
    
    if (presente == 'S'){
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`Levar notebook até ${nome}`);
    }else{
        console.log(`Não pegar notebook ${nr}`);
    }
}