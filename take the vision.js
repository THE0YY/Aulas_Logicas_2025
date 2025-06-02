const prompt = require('prompt-sync')()

let din = 0
let gan = 1
let upgs = 0
let prec = 10
let precCrit = 50
let upgsChance = 0
let chanCrt = 5
let ac

function pontos() {
console.log('');
console.log("### Menu de pontos, o normal (Tudo em minusculo) ###");
console.log("Nada: clicar.");
console.log("Up: dobrar ganhos.");
console.log("Upch: aumentar chance do critico em 5.");
console.log("Apostar: abre a tela de apostas, onde voce pode multiplicar ou perder");
console.log("Finalizar: finaliza a run.");
console.log("Pontos: mostra essa tela");
}
function apostar(){
console.log('');
console.log("### Menu Apostar (Do jeito que esta escrito) ###");
console.log("Tenha a chance de multiplicar seu dinheiro ou perder tudo");
console.log("All In (10%): Aposte todo o seu dinheiro por 10x seu valor");
console.log("Metade (35%): Aposte metade do seu dinheiro por 2x seu valor");
console.log("Pontos: volta para a area de pontos, em que voce ganha seu dinheiro");
console.log("Menu: Abre esta janela");
}
pontos()
while (true){
    ac = 0
    console.log('');

    console.log(`dinheiro: $${din.toLocaleString()} (${gan} por vez)`);
    
    ac = prompt("escolha: ")
    if (ac == ''){
        din = din + gan
        if (Math.floor(Math.random() * 100 + 1) < chanCrt){
            din = din + gan * 2
            console.log(`--Critico! (+${gan*2})--`);
            
        }
    }else if (ac == "up"){
        if (din >= prec){
            gan = gan + gan
            din = din - prec
            prec = prec * 2
            upgs++
            console.log(`-${gan} por vez agora-`);
            
        }else{
            console.log(`-insuficiente. (${prec})-`);
        }
    }else if (ac == 'upch'){
        if (din >= precCrit){
            din = din - precCrit
            chanCrt = chanCrt + 5
            precCrit = precCrit * 2
            upgsChance++
            console.log(`-Sua chance de critico agora é ${chanCrt}%.-`);
            
        }else if (chanCrt == 100){
            console.log("!!!MAXIMO ATINGIDO (100)!!!");
        }
        else{
            console.log(`-Insuficiente. (${precCrit})-`);
            
        }

    }else if (ac == "apostar"){
    apostar()
    while (true){
        if (din == 0) {
            console.log('Voce nao tem dinheiro.. logo nao pode apostar.');
            break
        }else{
        ac = prompt('escolha: ')
        if (ac == 'All In'){
            if (Math.floor(Math.random() * 100 + 1) <= 20){
               din = din * 10
              console.log(`Parabens! de: ${din/10} foi para ${din} (aumento de 10x)`);
             }else{
                din = din - din
                console.log(`Infelizmente voce perdeu tudo... e nao pode mais apostar.`);
                break
             }

        }else if (ac == 'Metade'){
            if (Math.floor(Math.random() * 100 + 1) <= 40){
               din = din * 5
              console.log(`Parabens! de: ${din/5} foi para ${din} (aumento de 5x)`);
             }else{
                din = din / 2
                console.log(`Infelizmente voce perdeu... Mas pode recuperar apostando mais!!`);
             }
        }else if (ac == "Menu"){
            apostar()
        }else if (ac == "pontos"){
            break
        }else{
            console.log("Operação invalida. ('pontos' para voltar)");
            
        }
    }
    }
    }else if (ac == "pontos"){
        pontos()
    }else if (ac == 'finalizar'){
        break
    }else{
        console.log(`---Invalido (${ac})---`);
    }
}
console.log(`Finalizou com ${din.toLocaleString()} de dinheiro e com o suporte de ${upgs} upgrades de pontos e com ${upgsChance} upgrades de critico`);
