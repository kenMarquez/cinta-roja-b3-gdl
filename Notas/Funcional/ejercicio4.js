//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 304

const numbers = [1, 3, 5, 7, 9];

let result = numbers
    .map(num => num*7)
    .filter(num => num<304);

console.log(result);