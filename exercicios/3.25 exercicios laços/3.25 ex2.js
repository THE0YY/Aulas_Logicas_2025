const prompt = require('prompt-sync')()

let nm = 0

while (true){
    if(nm==20){
        console.log(nm);
        
        break
    }else if(nm%2==0){
        console.log(nm);
    }
    nm = nm+1
}


// let i = 1 

// while(i<=20){
//     if(i%2==0){
//         console.log(`${i} é par`);
//     }
//     i++
// }