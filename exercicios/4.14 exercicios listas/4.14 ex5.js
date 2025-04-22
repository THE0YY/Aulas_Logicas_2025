let numeros = [Math.floor((Math.random() * 100 + 1)),Math.floor((Math.random() * 100 + 1)),Math.floor((Math.random() * 100 + 1)),Math.floor((Math.random() * 100 + 1)),Math.floor((Math.random() * 100 + 1))]
let nr = 0
for(nr of numeros){
    console.log(`${nr}, ${nr*2}`);    
}


// let numeros = []
// for(let i = 0; i < 5; i++){
//     let numeroAleatorio = Math.floor(Math.random() * 100) + 1
//     numero.push(numeroAleatorio)
//     console.log(`O dobro de ${numeros[i]} : ${numeros[i] * 2}`);
// }