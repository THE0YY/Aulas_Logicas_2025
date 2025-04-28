// variaveis glovais e locis
function nomeEscola(){
    escola = 'SESI'
    console.log(escola);
    // declarando uma variavel local
    var cidade = 'Andradina'
}

// essa variaveil é uma variavel global pois ela pode ser acessada em qualquer parte do codigo
var escola = 'SENAI'
console.log(escola)
nomeEscola()
var cidade = 'Mirandopolis'
console.log(cidade);

var x = 10 // variavel global(funciona no codigo inteiro)
console.log('fora da funçao',x);

function minhaFuncao(){
    let x = 0 // variavel local(funciona so dentro desta funçao)
    x = x + 1
    console.log('Dentro da funçao', x);
}

minhaFuncao()

console.log('Fora da funçao de novo', x);

/////////////////////////////////////////////////////////////////

var x = 10 // variavel global(funciona no codigo inteiro)
console.log('fora da funçao',x);

function minhaFuncao(){
    // estamos usando a variavel global
    x = x + 1
    console.log('Dentro da funçao', x);
}

minhaFuncao()
x += 1
console.log('Fora da funçao de novo', x);
