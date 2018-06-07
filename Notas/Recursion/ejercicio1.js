//1- Sumar el número de digitos que tiene un número
// de manera recursiva. 
// ej. 23478 = 24

const sumDig = (number) => {
    if(number/10 === 0){
        return number;
    }
    return number%10 + sumDig(Math.trunc(number/10));
};

console.log(sumDig(23478));