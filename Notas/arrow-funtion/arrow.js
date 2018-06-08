//function suma (a,b){
  //  console.log (a+b);
//}
//suma(2,9);


//let resultado = suma (2,9);
//console.log(resultado);
//alert(resultado);


const suma = (a,b) =>{
    return a+b;
}
suma(2,9);

//const input= prompt("escribe un texto");

//const print=(text)=>{
  //  return `input = ${text}`
//};
//console.log(getInput(input));

const convertidorPD = value=>value * 20.67;
const input = prompt("escribe una cantidad en pesos");

console.log(convertidorPD(Number(input)));


