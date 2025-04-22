const prompt = require('prompt-sync')()

let nm = Number(prompt('Digite um numero: '))
console.log(`O Numero ${nm} tem as fatoriais de: `);
let fac = 1

while(true){
    if(nm==1){
        console.log(nm);
        console.log(`com fatorial de ${fac*nm}`);
        
        break
    }else if(nm!=0)
        console.log(nm);
        fac = fac * (nm)
        nm = nm-1
}


// let numero = parseInt(prompt('Digite um numero: '))

// let fatorial = 1
// let i = numero
// let sequencia = numero + "! = " //concatenando valores

// while(i >= 1){
//     fatorial = fatorial * i
//     sequencia = sequencia+i
//     if(i > 1){
//         sequencia = sequencia + " * "
//     }
//     i-- // decrementando contador
// }

// sequencia = sequencia + " + " + fatorial
// console.log(sequencia);
