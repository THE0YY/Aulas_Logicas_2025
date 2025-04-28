const prompt = require('prompt-sync')()

function ParImpar(tipo){
    tipo = Number(prompt(tipo))
    if(tipo%2==0){
        console.log('Seu numero é par');
    }else{
        console.log('Seu numero é impar');
    }
}
ParImpar('Digite um numero: ')
ParImpar(5)
ParImpar(10)
//funcao com o retorno do resultado
// o calculo é realizado e é retprmada para a chamada da funçao
function media(n1,n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}
console.log(media(6,8));
//armazenei o retorno da funçao em uma variavel
let valor = media(9,7)
//utilizei o retorno da funçao para escrever na tela
console.log(valor);
//utilizei a variavel que recebeu o reterno da funçao para chamar a funçao par ou impar passando o valor como parametro
ParImpar(valor)
