//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]
let pares = [1,3,5,2,10,4,6];
console.log( pares.filter( n => n % 2 == 0).sort((a, b) => b-a) )


//2) Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]
let palabras = ["hola","como","estas"]
console.log( palabras.map( p => p.toUpperCase()) )


//3) Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas
let minutos = [120, 80, 200, 100]
console.log( minutos.filter(m => m > 120) )


//4) A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30
let numeros = [1, 3, 5, 7, 9]
console.log( numeros.map(n => n*7).filter(n => n<30) )
