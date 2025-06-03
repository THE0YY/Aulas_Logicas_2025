const prompt = require('prompt-sync')()

let din = 0
let gan = 1
let chanCrt = 5
let prestigio = 1
let tranPrest = 1
let tranPontos = 1

let precPrest = 1000
let precCrit = 50
let prec = 10
let precTranMPres = 5
let precTranMPont = 2

let upgs = 0
let upgsChance = 0
let qntsPrest = 0
let upgsTranPon = 0
let upgsTranPre = 0

let ac // açao

function resetar(){
    din = 0
    gan = 1
    chanCrt = 5
    prec = 10
    precCrit = 50
}
function pontos() {
console.log('');
console.log("### Menu de pontos, o normal (Tudo em minusculo) ###");
console.log("Nada: clicar.");
console.log("Up: dobrar ganhos.");
console.log("Upch: aumentar chance do critico em 5.");
console.log("Prestigio: aumenta o multiplicador geral de seus ganhos (1*X)");
console.log("Apostar: abre a tela de apostas, onde voce pode multiplicar ou perder");
console.log("Finalizar: finaliza a run.");
console.log("Pontos: mostra essa tela");
console.log('');

}
function apostar(){
console.log('');
console.log("### Menu Apostar (Do jeito que esta escrito) ###");
console.log("Tenha a chance de multiplicar seu dinheiro ou perder tudo");
console.log("All In (10%): Aposte todo o seu dinheiro por 10x seu valor");
console.log("Metade (35%): Aposte metade do seu dinheiro por 2x seu valor");
console.log("Pontos: volta para a area de pontos, em que voce ganha seu dinheiro");
console.log("Menu: Abre esta janela");
console.log('');
}
function transcender (){
    console.log("### Menu Transcender (Gasta prestigios ao invez de pontos e reseta ao comprar) ###");
    console.log("UpPrest: multiplica o seu ganho de Prestigios");
    console.log("UpPonto: multiplica o seu ganho de pontos");
    console.log("Pontos: volta para a area de pontos, em que voce ganha seu dinheiro");
    console.log("Menu: Abre esta janela");
    console.log('');
}
pontos()
while (true){
    ac = 0
    console.log('')

    console.log(`dinheiro: $${din.toLocaleString()} (${gan * prestigio.toLocaleString()} por vez)`);
   
    ac = prompt("escolha: ")
    if (ac == ''){
        din = din + (gan * tranPontos) * (prestigio * tran)
        if (Math.floor(Math.random() * 100 + 1) < chanCrt){
            din = din + gan * prestigio * 2
            console.log(`--Critico! (+${gan.toLocaleString()*2})--`);
        }
    }
    else if (ac == "up"){
        if (din >= prec){
            gan = gan + gan
            din = din - prec
            prec = prec * 2
            upgs++
            console.log(`O preço agora é ${prec.toLocaleString()}`)
            console.log(`-${gan.toLocaleString()} por vez agora-`);
        }
        else{
            console.log(`-insuficiente. (${prec.toLocaleString()})-`);
        }
    }
    else if (ac == 'upch'){
        if (din >= precCrit){
            din = din - precCrit
            chanCrt = chanCrt + 5
            precCrit = precCrit * 2
            upgsChance++
            console.log(`O preço agora é ${precCrit.toLocaleString()}`)
            console.log(`-Sua chance de critico agora é ${chanCrt}%.-`);
        }else if (chanCrt == 100){
            console.log("!!!MAXIMO ATINGIDO (100)!!!");
        }
        else{
            console.log(`-Insuficiente. (${precCrit.toLocaleString()})-`);
        }
    }
    else if (ac == "prestigio") {
        if (din >= precPrest) {
            let decisao = prompt("Seu progresso ira resetar ao prestigiar (Sim/Nao)")
            if (decisao == "Sim") {
                resetar()
                qntsPrest++
                prestigio++
            }
            else if (decisao = "Nao"){
                 console.log("Desistiu de prestigiar");
            }
            else{
                console.log(`Decisao invalida (${decisao})`);
            }
        }
        else{
            console.log(`Não possui dinheiro ainda.. (${precPrest})`);
        }
    }
    else if (ac == "apostar"){
    apostar()
    while (true){
        if (din == 0) {
            console.log('Voce nao tem dinheiro.. logo nao pode apostar.');
            break
        }
        else{
        ac = prompt('escolha: ')
        if (ac == 'All In'){
            if (Math.floor(Math.random() * 100 + 1) <= 20){
               din = din * 10
              console.log(`Parabens! de: ${din.toLocaleString()/10} foi para ${din.toLocaleString()} (aumento de 10x)`);
             }
             else{
                din = din - din
                console.log(`Infelizmente voce perdeu tudo... e nao pode mais apostar.`);
                break
             }

        }
        else if (ac == 'Metade'){
            if (Math.floor(Math.random() * 100 + 1) <= 40){
               din = din * 5
              console.log(`Parabens! de: ${din.toLocaleString()/5} foi para ${din.toLocaleString()} (aumento de 5x)`);
             }
             else{
                din = din / 2
                console.log(`Infelizmente voce perdeu... Mas pode recuperar apostando mais!!`);
             }
        }
        else if (ac == "Menu"){
            apostar()
        }
        else if (ac == "pontos"){
            break
        }
        else{
            console.log("Operação invalida. ('pontos' para voltar)");
            
        }
    }
    }
    }
    else if(ac == "transcender"){
        transcender()
        while(true){
            if (prestigio == 0) {
            console.log('Voce nao tem prestigios.. logo nao pode comprar.');
            break
            }else{
                ac = prompt("escolha: ")
                if (ac == "UpPontos") {
                    if (prestigio >= precTranMPont){
                    prestigio = prestigio - precTranMPont
                    tranPontos++
                    upgsTranPon++
                    resetar()
                    }else{
                        console.log(`Não possui Prestigios o suficiente.. (${precTranMPont})`);
                    }
                }else if (ac == "UpPrest"){
                    if (prestigio >= precTranMPres){
                    prestigio = prestigio - precTranMPres
                    tranPrest++
                    upgsTranPre++
                    resetar()
                    }else{
                        console.log(`Não possui Prestigios o suficiente.. (${precTranMPres})`);
                    }
                }else if (ac == "Pontos"){
                    break
                }else if (ac == "Menu"){
                    transcender()
        }
    }
    }
    }
    else if (ac == "pontos"){
        pontos()
    }
    else if (ac == 'finalizar'){
        break
    }
    else{
        console.log(`---Invalido (${ac})---`);
    }
}
console.log(`Finalizou com :`);
console.log(`${din.toLocaleString()} de dinheiro;`);
console.log(`Com a ajuda de: `);
console.log(`${upgs} upgrades de pontos`);
console.log(`${upgsChance} upgrades de critico`);
console.log(`${qntsPrest} prestigios`);
console.log(`${upgsTranPon} ascençoes de pontos`);
console.log(`${upgsTranPre} ascençoes de prestigio`);
console.log('');