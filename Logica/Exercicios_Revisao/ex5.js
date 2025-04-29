const prompt = require('prompt-sync')()

let genero = prompt('Digite seu genero "F" ou "M": ').toUpperCase()
if (genero == 'M'){
    console.log('Masculino')
}else if (genero == 'F'){
    console.log('Feminino');
}else{
    console.log('Genero invalido');
}