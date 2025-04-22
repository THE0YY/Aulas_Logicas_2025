const prompt = require('prompt-sync')()

let mes = prompt('Digite o nome de um mes')

if(mes==('janeiro')){
    console.log('janeiro tem 31 dias');
}else if(mes==('fevereiro')){
    console.log('fevereiro tem 28');
}else if(mes==('março')){
    console.log('março tem 31 dias');
}else if(mes==('abril')){
    console.log('abril tem 30 dias');
}else if(mes==('maio')){
    console.log('maio tem 31 dias');
}else if(mes==('junho')){
    console.log('junho tem 30 dias');
}else if(mes==('julho')){
    console.log('julho tem 31 dias');
}else if(mes==('agosto')){
    console.log('agosto tem 31 dias');
}else if(mes==('setembro')){
    console.log('setembro tem 30 dias');
}else if(mes==('outubro')){
    console.log('outubro tem 31 dias');
}else if(mes==('novembro')){
    console.log('novembro tem 30 dias');
}else{
    console.log('dezembro tem 31 dias');
}