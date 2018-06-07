//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]

const array = [4,5,2,8,7,1,9,11];

let result = array
    .filter(num => !(num%2))
    .sort((a,b) => b-a);

console.log(result);