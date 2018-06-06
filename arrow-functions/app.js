function suma(a, b) {
    return a + b;
}
let resultado = suma(2, 9);
console.log(resultado);

const suma2 = (c, d) => { c + d };
let resultado2 = suma2(4, 5);
console.log(resultado2);


//const input = prompt("Escriba un texto");

//const getInput = (text) => {
// return `input: ${text}`;
//}

//console.log(getInput(input));

const convertidorPD = value => value * 20.67;

const input = prompt("Escribe una cantidad en pesos");

console.log(convertidorPD(Number(input)));