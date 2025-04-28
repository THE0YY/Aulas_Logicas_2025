function calcular (num1, num2, operador){
    switch(operador){
        case '+':
            console.log(`${num1} + ${num2} = ${num1+num2}`);
            break
        case '-':
            console.log(`${num1} - ${num2} = ${num1-num2}`);
            break
        case '*':
            console.log(`${num1} * ${num2} = ${num1*num2}`);
            break
        case '/':
            console.log(`${num1} / ${num2} = ${num1/num2}`);
            break
        case '**':
            console.log(`${num1} ** ${num2} = ${num1**num2}`);
            break
    }
}