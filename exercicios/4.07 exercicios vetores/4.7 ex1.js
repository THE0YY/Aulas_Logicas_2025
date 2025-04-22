let filmes = ['Velozes e furiosos 1', 'velozes e furiosos 2', 'velozes e furiosos 3', 'velozes e furiosos 4', 'velozes e furiosos 5', 'velozes e furiosos 6', 'velozes e furiosos 7']
console.log(filmes[0]);
console.log(filmes[4]);
filmes[7] = 'velozes e furiosos 9'
filmes.push('velozes e furiosos 9')
console.log(filmes);
filmes.splice(5,0, 'velozes e furiosos 10')
console.log(filmes);
filmes.shift()
console.log(filmes);
filmes.pop()
console.log(filmes);
console.log(filmes[0,2]);
console.log(filmes.slice(3 , -1));
console.log(filmes.length);
filmes.reverse()
console.log(filmes);


// let Filme = 'harry' // Aqui é uma variavel simples
// let listaFilmes = ['harry potter', 'o senhor dos aneis', 'homem de ferro', 'a lista de shindler']
// console.log(listaFilmes);
// //exiba apenas o primeiro filme da lista
// console.log(`Filme na posiçao 1: ${listaFilmes[0]}`);
// //exiba o filme da posiçao 4
// console.log(`Filme na posiçao 4: ${listaFilmes[3]}`);
// // substitua o filme da ultima posiçao e xiba na tela
// listaFilmes[3] = 'o resgate do soldado ryan'
// console.log(listaFilmes);

// listaFilmes[listaFilmes -1] = 'homem aranha'
// console.log(listaFilmes);
// //insira um novo filme no final da lista
// listaFilmes.push('maquina mortifera')
// console.log(listaFilmes);
// //spread que adiona no fim
// listaFilmes = [...listaFilmes, 'maquina mortifera 2']
// console.log(listaFilmes);

// //insira um novo filme na posiçao 5 e exiba a lista
// listaFilmes[5] = 'a vila'
// console.log(listaFilmes);

// //exlcua o primeiro filme e exiba na lista
// listaFilmes.shift()
// //exlua o ultimo item da lista e exiba
// listaFilmes.pop()

// //exclua os 3 primeiros itens da lista
// console.log(listaFilmes.slice(0,3));
// console.log(listaFilmes);

// //exiba os 4 ultimos da lista
// console.log(listaFilmes.slice(-2));

// //exiba a quantidade de filmes na lista
// console.log(listaFilmes.length);

// //ordene em lista decrescente
// console.log(listaFilmes.sort().reverse());
// console.log(listaFilmes + 'comentario');
