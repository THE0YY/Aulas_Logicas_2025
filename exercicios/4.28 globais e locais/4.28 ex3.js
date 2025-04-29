const prompt = require('prompt-sync')()
let listaNomes = []
function adicionarNome(nome){
    listaNomes.push(prompt('Digite um nome para adicionar á lista: '))
    console.log(listaNomes);
}
function removerNome(){
    listaNomes.pop()
    console.log(listaNomes);
    
}
adicionarNome()
adicionarNome()
removerNome()
adicionarNome()


let ListaNomes = []

function adicionarNome1(nome){
    ListaNomes.push(nome)
}

function removerNome1(nome){
    let pos = ListaNomes.indexOf(nome)

    if (pos != -1){
        ListaNomes.splice(pos, 1)
    }
}

adicionarNome1('Ana')
adicionarNome1('Mateus')
adicionarNome1('Camila')
console.log(ListaNomes)
adicionarNome1('Garro')
console.log(ListaNomes)
removerNome1()
console.log(ListaNomes)
removerNome1('Camila')
console.log();