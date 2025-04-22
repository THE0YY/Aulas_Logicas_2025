const prompt = require('prompt-sync')()

// estrutura condicional aninhada
let idade = Number(prompt('Digite sua idade: '))

if(idade>=18&&idade<70){
    console.log('Voto obrigatorio.');
}
else{
   if(idade<16){
        console.log('Voce nao pode votar.');
   }else{
        if(idade>=16||idade>70){
            console.log('Voto facultativo.');
        }
   } 
}

// Switch case - estrutura de controle de fluxo para tomar decisoes com avso no valor de uma variavel
let n1 = Number(prompt('Digite o primeiro numero: '));
let n2 = Number(prompt('Digite o segundo numero: '));
let op = prompt('escolha a operaçao (+, -, *, /, **) ' );

// testa o valor da variavel se é true
switch(op){
    //caso a variavel op for verdadeiro, testara cada condiçao caso uma condiçao seja igual a um dos "cases executara o blco em questao, usamos o break para interromper o provesso"
    case '+':
      console.log(`Resultado ${n1+n2}`);
      break;
    case '-':
        console.log(`Resultado ${n1-n2}`);
        break
    case '*':
        console.log(`Resultado ${n1*n2}`);
        break
    case '/':
        console.log(`Resultado ${n1/n2}`);
        break
    case '**':
        console.log(`Resultado ${n1**n2}`);
        break
    default:
        console.log('Operaçao invalida');
        
}

// verificar qual letra é igual
let letra = prompt('Digite uma letra: ').toLowerCase()
//quandos usamos switch com variavel, o switch compara o valor da variavel com os cases definidos

switch(letra){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vogal')
        break
    default:
        console.log('Consoante');   
}

// converter a nota em numero para letra
let nota = parseInt(prompt('Digite a nota do aluno: '))
//o switch(true) verifica quais expreçoes dentro do case retonam true(Verdade) ou seja, comparamos as expreçoes booleans
switch(true){
    case nota>=90:
        console.log('Nota A');
        break
    case nota>=80:
        console.log('Nota B');
        break
    case nota>70:
        console.log('Nota C');
        break
    case nota>=60:
        console.log('Nota D');
        break
    default:
    console.log('Nota E');
}
