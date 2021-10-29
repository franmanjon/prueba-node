//funcion multiplicar

function multiplicar (num1 , num2){
    if (num1 == 0 || num2 == 0) {
        console.log("se ejecuto este cero")
        return 0
    }
    return (num1 * num2)
}


module.exports = multiplicar 