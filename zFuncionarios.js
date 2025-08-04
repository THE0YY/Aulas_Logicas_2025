const prompt = require('prompt-sync')()
const Funcionarios = [
      { id: 1, name: "Aurora Almeida", setor: "RH"},
      { id: 2, name: "Benjamin Souza", setor: "Finanças"},
      { id: 3, name: "Catarina Dias", setor: "Contabilidade"},
      { id: 4, name: "Daniel Ribeiro", setor: "Contabilidade"},
      { id: 5, name: "Elisa Costa", setor: "Vendas"},
      { id: 6, name: "Felipe Silva", setor: "Vendas"},
      { id: 7, name: "Gabriela Pereira", setor: "Vendas"}
    ];

    let id = 7
    let ac= ''
while (ac!= 'sair') {
  ac= prompt('Escolher ação(Tudo,Checar,Adicionar,Sair): ').toLowerCase()
    if (ac== 'adicionar'){
      id++
      Funcionarios.push({id: id, nome: prompt('Digite o nome da pessoa'), setor: prompt("Digite o setor da pessoa")})
    }else if (ac== 'checar'){
      id= Number(prompt('Checar funcionario por id (0+): '))
      if (id <0){
        console.log('Id invalido');
      }else{
        console.log(Funcionarios[id-1]);
      }
    }else if (ac=="sair"){
      break
    }else if (ac=="tudo"){
      console.log(Funcionarios);
    }
}
