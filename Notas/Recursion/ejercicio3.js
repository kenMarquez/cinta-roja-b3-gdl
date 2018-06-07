//3- Calcular serie fibonacci de forma
//recursiva 
// fib n = fib n-1 + fib n-2
// fib 1 = 1 , fib 2 = 2;

const fib = (number) => {
    if(number === 1){
        return 1;
    } else if(number === 0){
        return 0;
    }
    return fib(number-1) + fib(number-2);
};

console.log(fib(7));