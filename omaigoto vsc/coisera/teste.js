let chute
let qnt = 0
let ran = Math.floor(Math.random() * 100 + 1)

while(chute != ran){
    chute = Math.floor(Math.random() * 100 + 1)
    qnt++
}
console.log(qnt);
