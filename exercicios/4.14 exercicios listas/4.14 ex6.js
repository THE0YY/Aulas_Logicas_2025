const prompt = require('prompt-sync')()
let palavra = prompt('Digite uma palavra: ')
let nrletras
let consoantes = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
let nrcon = 0
let vogais = ['a', 'e', 'i', 'o', 'u']
let nrvog = 0

for(nrletras of palavra)
    if(consoantes.includes(palavra)){
        nrcon+1
    }else if(vogais.includes(palavra)){
        nrvog+1
    } console.log(nrcon, nrvog);
//nao deu, pensei que tinha que colocar consoante


// let vogais = ['a', 'e', 'i', 'o', 'u']

// let palavra = prompt('digite uma palavra: ')
// let qntVogais = 0
// for(let letra of palavra){
//     if(vogais.includes(letra)){
//         qntVogais++
//     }
// }

// console.log(`${palavra} tem ${qntVogais} vogais`);
