const prompt = require('prompt-sync')()
//trabalhando com laços de repetiçao (while)

//executar o laço x vezes

let contador = 1

// ira repetir enquanto a condiçao for verdadeira
// ou seja, sera verdade enquanto o contador for menor ou igual a 5
while (contador<=5){
    console.log(`O contador é ${contador}`)
    //incrementando a variavel ou seja adicionando valor a ela
    // para que continue o processo ate que a condiçao seja atingida
    // contador = contador + +
    contador = contador + 1
}
console.log('Fim');

let senhaSenai = '12345'

while(true){
    let senha = prompt('Digite a senha: ')
    if (senha == senhaSenai){
        console.log('Voce hackeou a senha.');
        break
    }else if (senha=='desisto')
        break;
}


let soma = 0 
let qtd = 0

while (true){
    let valor = Number(prompt('Digite o valor de um produto(0 para encerrar): '))
    if (valor==0){
        break
    }else{
        soma = soma + valor
        qtd ++
    }
}

console.log(`Foram informados ${qtd}`);
// tofixe para colocar apenas 2 digitos apos a virgula
console.log(`valor total dos produtos ${soma.toFixed(2)}`);


let soma2 = 0 
let qtd2 = 0
let encerrar = ''
while (encerrar != 'SUB-TOTAL'){
    let valor2 = Number(prompt('Digite o valor de um produto(0 para encerrar): '))
        soma2 = soma2 + valor2
        qtd2 ++
    encerrar = prompt('Deseja continuar: (Digite SUB-TOTAL')
}

console.log(`Foram informados ${qtd2}`);
// tofixe para colocar apenas 2 digitos apos a virgula
console.log(`valor total dos produtos ${soma2.toFixed(2)}`);

// Crie um jogo de adivinhaçao de numeros, o computador precisa sortear um numero alatorio com o random e o usuario precisa digitar um numero enquanto ele nao acertar conua pedindo um novo numero

console.log('##############################');
console.log('🐟   Jogo da adivinhação   🐟');
console.log('##############################');

let nrSorteado = Math.floor(Math.random() * 100 + 1) //gera um numero aleatorio
let acertou = false

while (!acertou){
    const chute = parseInt(prompt('🐟 Digite um numero entre 1 e 100: '))
    if(chute>nrSorteado){
        console.log(`Voce chutou ${chute}, tente um numero menor`);
    }else if (chute<nrSorteado){
        console.log(`Voce chutou ${chute}, tente um numero maior`);
    }else if (chute==nrSorteado){
        console.log(`Voce chutou ${chute}, Parabens, voce acertou 🐟`);
        acertou = true
    }
}

console.log('Fim');
