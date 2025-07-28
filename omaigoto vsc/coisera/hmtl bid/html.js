
    let i = 0
    let gan = 1
    let prec = 10

    let upos = 0

    function zera(){
        i = 0
        gan = 1
        prec = 10
        document.getElementById("din").textContent = i.toFixed(0) + " din!"
        document.getElementById("ganho").textContent = gan + " gan!"
        document.getElementById("prec").textContent = prec.toFixed(0) + " prec!"
    }
    function aumenta(){
        i+= gan
        document.getElementById("din").textContent = i.toFixed(0) + " din!"
        document.getElementById("ganho").textContent = gan + " gan!"
        document.getElementById("prec").textContent = prec.toFixed(0) + " prec!"
    }
    function up(){
        if (i >= prec) {
            i -= prec
            gan++
            prec += (prec * 0.25)
            upos++
        }else{
         document.getElementById("din").textContent = "Nao tem, pobre"
           }
        document.getElementById("din").textContent = i.toFixed(0) + " din!"
        document.getElementById("ganho").textContent = gan + " gan!"
        document.getElementById("prec").textContent = prec.toFixed(0) + " prec!"
        document.getElementById("up").textContent = upos + " upos!"
    }