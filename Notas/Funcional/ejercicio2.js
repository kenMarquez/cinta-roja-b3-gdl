//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”]

const arrayStr = ["hola","como","estas"];

let result = arrayStr.map(str => str.toUpperCase());

console.log(result);