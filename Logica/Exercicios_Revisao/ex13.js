const prompt = require('prompt-sync')()

function mediaNotas (n1,n2,n3,n4){
    let media =(n1 +n2 + n3 + n4) / 4
    if (media < 5){
        console.log(`Reprovado, media: ${media}`);
    }else if (media > 7){
        console.log(`Aprovado, media: ${media}`);
    }else{
        console.log(`Recuperaçao, media: ${media}`);
    }
}

mediaNotas(7,7,7,6)
mediaNotas(7,7,7,8)
mediaNotas(5,5,5,4)