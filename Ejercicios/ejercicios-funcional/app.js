//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]

const array = [4,5,3,2,8,9];

const pares = array
    .filter(numero => numero % 2 === 0)
    .sort((a,b)=> b-a);

console.log(pares);    

//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]
let arrayPalabras = ["hola","como","estas"];
const mayusculas = arrayPalabras.map(palabra => palabra.toUpperCase());

console.log(mayusculas);

//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas

let minutos = [120, 80, 200, 100];

const horas = minutos.filter(minuto => minuto > 120);
console.log(horas);

//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30

let lista = [1, 3, 5, 7, 9];

const multiplicar = lista
    .map(item => item *7)
    .filter(item => item < 30);

console.log(multiplicar);