// function factorial(n) {
//     if (n == 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);

// }
// console.log(factorial(5));


// //En forma de arrow function 
// const factorial2 = m => {
//     if (m == 1) {
//         return 1;
//     }
//     return m + factorial2(m - 1);

// }
// console.log(factorial2(4));


//1- Sumar el número de digitos que tiene un número
// de manera recursiva. 
// ej. 23478 = 24

//2- Calcular el número de cifras de 
//un número entero de forma recursiva.
//ej. 23478 = 5


//3- Calcular serie fibonacci de forma
//recursiva 
// fib n = fib n-1 + fib n-2
// fib 1 = 1 , fib 2 = 2;



//priemro

const numero = 1234;
const digits = ("" + numero).split("");
console.log(digits);

const sumar = n => {
    if (n.length == 1) {
        return n;
    } else {
        return ((n % 10) + (Math.trunc(n / 10) % 10));

    }
}
console.log(sumar(numero));



//Segundo
const numero2 = 23478;
const digits2 = ("" + numero2).split("");
console.log(digits2.length);