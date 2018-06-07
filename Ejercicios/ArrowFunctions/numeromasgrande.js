//encontrar el numero mas grande en un arreglo
let numeros = [1,11,9,2,88,7,400];

const numeromasgrande = (number) => {
    let resultado;
    number.sort(function(a, b){return a-b});
    //console.log(number);
    resultado = number.pop();
    return resultado;
};

console.log(numeromasgrande(numeros));