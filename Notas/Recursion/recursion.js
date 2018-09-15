function factorial(n){
    if(n===1){
        return 1;
    }
return n * factorial(n-1);
}
console.log(factorial(4));


const sumAnt = num=>{
if(num===1){
    return 1;
}
return num + sumAnt(num-1);
};
console.log(sumAnt(5));


//1- Sumar el número de digitos que tiene un número
// de manera recursiva. 
// ej. 23478 = 24
const sumarDigitos = n => {
      if(n < 10) return n
      return n%10 + sumarDigitos(Math.trunc(n/10))
    }
    console.log(sumarDigitos(23478));

//2- Calcular el número de cifras de 
//un número entero de forma recursiva.
//ej. 23478 = 5




//3- Calcular serie fibonacci de forma
//recursiva 
// fib n = fib n-1 + fib n-2
// fib 1 = 1 , fib 2 = 2;


const fibona = n => {
     if(n <= 1) return n
      return fibona(n-1) + fibona(n-2)
    }
    console.log(fibona(5));