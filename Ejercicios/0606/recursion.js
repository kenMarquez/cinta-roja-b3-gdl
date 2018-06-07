//1- Sumar el número de digitos que tiene un número
// de manera recursiva. 
// ej. 23478 = 24
const sumaDigitos = n => {
  if(n < 10) return n
  return n%10 + sumaDigitos(Math.trunc(n/10))
}
console.log(sumaDigitos(23478));


//2- Calcular el número de cifras de 
//un número entero de forma recursiva.
//ej. 23478 = 5
const totalDigitos = n => {
  if(n < 10) return 1
  return 1 + totalDigitos(Math.trunc(n/10))
}
console.log(totalDigitos(2347538));



//3- Calcular serie fibonacci de forma
//recursiva 
// fib n = fib n-1 + fib n-2
// fib 1 = 1 , fib 2 = 2;

const fibo = n => {
  if(n <= 1) return n
  return fibo(n-1) + fibo(n-2)
}
console.log(fibo(7));