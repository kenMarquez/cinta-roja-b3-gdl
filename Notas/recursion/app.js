function factorial(n) {
    if (n==1){
        return 1;
    }

    return n * factorial(n - 1);

}

console.log(factorial(5));

const sumAnt = num => { 
    if (num == 1) {
        return 1;
    }
    return num + sumAnt(num - 1);
};
console.log(sumAnt(4));


