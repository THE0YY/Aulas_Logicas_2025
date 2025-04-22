// declarando um novo vetor
// reconheco que é um vetor pelo uso dos [colchetes]
let listaVazia = [];
console.log(listaVazia);

// declarar uma lista de numeros
let numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros);
console.log(numeros[2]);

// declaraçao de uma lista de strings
let nomes = ['ana', 'joao', 'maria'];
console.log(nomes);

// declaraçao de uma lista mista
let listaMista = [1, 'dois', true, 2.5]
console.log(listaMista);

let listaComLista = [
    ['coca-cola', 'cachorro-quente'],
    [5.0, 10.0]
]
console.log(listaComLista);

// alterando valores da lista
let frutas = ['maça', 'pera', 'uva', 'abacaxi']
console.log(frutas);
// a funçao push adiciona um novo elemnto no vetor
frutas.push('laranja')
console.log(frutas);
// o spread adiciona um novo elemnto no vetor
frutas = [...frutas, 'banana']
console.log(frutas);

// a funçao splice adiciona um novo item em uma posiçao especifica a partir de um valor no indice
frutas.splice(2, 0, 'morango')
console.log(frutas);

// excluindo item da lista
frutas.splice(3, 1) // excluindo item pelo indice
console.log(frutas);
frutas.shift() // excluindo primeiro item da lista
frutas.pop() // exclui o ultimo item da lista
console.log(frutas);

// acessar os itens da lista
console.log(frutas[3]); // acesso a partir de uma posiçao especifica
console.log(frutas.slice(0,4)); // posiçao 0 ate 4
console.log(frutas.slice(1)); // a partor da posiçao 1
console.log(frutas.slice(-1)); // mostra os itens do fim para o inicio
console.log(frutas.length); // total de itens na lista

// ordenar itens da lista
console.log(frutas);
frutas.sort() // ordenar a lista em ordem crescente
console.log(frutas);
frutas.reverse(); // ordenando de forma decrescente
console.log(frutas);