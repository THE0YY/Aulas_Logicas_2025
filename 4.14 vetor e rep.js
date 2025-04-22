const prompt = require('prompt-sync')()

let frutas = ['maça', 'banana', 'uva', 'abacaxi']

// a variavel x serve para iterar os valores ate o limite da lista podendo o nome nao é obrigatoriamente ser o nome i, x ou contador, pode ser qualquer nome de variavel
for ( let x = 0; x < frutas.length; x++){
    //o lenght pega o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`);
}

let listaNomes = ['bill gates', 'rafinha', 'raul seixas', 'esteves', 'vieira']
//para cada nome da lista nomes escreva um nome
for(let nome of listaNomes){
    console.log(nome);
}

// verificando se é uma consoante
let vogais = ['a', 'e', 'i', 'o', 'u']

let letra = prompt('Digite uma letra: ')
//se letra estiver incluso em na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal');
}

let consoantes = ['q','w','r','t','y','p','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']
letra = prompt('Digite uma letra: ')

if(consoantes.includes(letra.toLowerCase())){
    console.log('É uma consoante');
}else if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal');
}else{
    console.log('Não é uma letra');
}

// obtendo a posiçao do item
for(let[pos,frutas] of frutas.entries()){
    // entries retorna o par de cada elemento do vetor, ou seja a posiçao e a fruta
    console.log(`Posição ${pos} e fruta ${frutas}`);
}

// separando os items em uma lista
let produtos = 'celular, notebook, tv, tablet, headset'
// o split divide a string e forma uma lista apartir do limitador no caso abaixo uma virgula
let listaProdutos = produtos.split(',')
for(let produtos of listaProdutos){
    console.log(produtos);
}

// percorrendo uma string como uma lista (lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra);
    
}