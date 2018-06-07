//2- Calcular el número de cifras de 
//un número entero de forma recursiva.
//ej. 23478 = 5

const numDig = (number) => {
    if(number/10 === 0){
        return number;
    }
    return 1 + numDig(Math.trunc(number/10));
};

console.log(numDig(340596872));

