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