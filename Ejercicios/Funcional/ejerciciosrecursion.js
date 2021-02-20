//1- Sumar el número de digitos que tiene un número de manera recursiva.  ej. 23478 = 24
const sumadedigitos = num =>{
    let temp1 = num%10;
    //console.log(num + " num - temp " + temp1);
    if(num <= 9){
        return num;
    }
     return temp1 + sumadedigitos(Math.floor(num/10));
 }
 console.log(sumadedigitos(8123903));

//2- Calcular el número de cifras de un número entero de forma recursiva. ej. 23478 = 5
const sumadecifras = num =>{
    let temp1 = 1 ;
    //console.log(num + " num - temp " + temp1);
    if(num <= 9){
        return temp1++; 
    }
     return temp1 + sumadecifras(Math.floor(num/10));
 }
 console.log(sumadecifras(23478));

//3- Calcular serie fibonacci de forma recursiva  fib n = fib n-1 + fib n-2     fib 1 = 1 , fib 2 = 2;
const fibonacci = num =>{
    if(num <= 1){ 
        return num; 
    }
     return fibonacci(num-1) + fibonacci(num-2);
 }
 console.log(fibonacci(7));
