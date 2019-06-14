//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]

//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]





var original = ["hola", "como", "estas"];
original = original.map(function (x) { 
    return x.toUpperCase()
});
console.log(original );

//arrow function

var original = ["hola", "como", "estas"];
original = original.map( x => x.toUpperCase() );
console.log(original );

//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas
var tiempo = [120, 80, 200 , 100];
const resultado = tiempo
    .filter(num => num>120)
console.log(resultado);

//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30
var lista = [1, 3, 5, 7, 9];
const resultadomul7 = lista
    .map(lista => lista * 7)
    .filter(lista => lista < 30)
console.log(resultadomul7);




