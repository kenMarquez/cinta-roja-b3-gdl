//1- Dado un arreglo regresar todos los numeros pares ordenados de mayor menor [1,3,5,2,10,4,6] => [10,6,4,2]
original2 = [1,3,5,2,10,4,6];

const resultado2 = original2
    .filter(num => {if(num % 2==0) return num})
    .sort((a,b) => b-a)

console.log(resultado2);

//Escribe una funcion que tome una cadena de palabras en minusculas y la regrese en mayúsculas. Entrada: [“hola”,“como”,“estas”] Salida: [“HOLA”,“COMO”,“ESTAS”]
original3 = ['hola','como','estas'];

const resultado3 = original3
    .map(cadena => cadena.toUpperCase());
    
console.log(resultado3);

//3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas
original4 = [120, 80, 200, 100];

const resultado4 = original4
    .filter(num => num >120)
    
console.log(resultado4);

//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30
original5 = [1, 3, 5, 7, 9];

const resultado5 = original5
    .map(num => num*7)
    .filter(num => num <30);
    
console.log(resultado5);
