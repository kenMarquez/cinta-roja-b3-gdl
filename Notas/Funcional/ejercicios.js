//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]

//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]

//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas

//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30

//Primero
numeros = [1, 3, 5, 2, 10, 4, 6];

const ordenados = numeros.sort((a, b) => a - b);
console.log(ordenados);

//Segundo
palabras = ['hola', 'como', 'estas'];

const mayusculas = palabras.toString().toUpperCase();
console.log(mayusculas);

//tercero
minutos = [120, 80, 200, 100];
const horas = minutos.filter(min => min >= 120);
console.log(horas);

//cuarto
original = [1, 3, 5, 7, 9];
const multiplicar = original.map(num => num * 7).filter(num => num >= 30);
console.log(multiplicar);