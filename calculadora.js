function somar (a, b){
    return a + b
}

function subtrair (a, b){
    return a - b
}

        //dividir //a, b
function dividir (a, b){
    if(b === 0){
        throw new Error('Divisão por zero!')
    }
    return a / b
}

         //multiplicar
function multiplicar (a, b){
    return a * b
}

module.exports = {somar, subtrair, dividir, multiplicar}