// const suma = (a,b) => { a + b };

// let resultado = suma(1, 10);
// console.log(resultado);

// const input = prompt("Escribe tu texto");
// // const getInput = (text) => {
// //     return `input: ${text}`
// // }
// const getInput = text => `input: ${text}`;
// console.log(getInput(input));

// const convertidorPD = value => value * 20.67;
// const input = prompt("Convertidor pesos a dolares");
// console.log(convertidorPD(Number(input)));

const mayorArreglo = arr => Math.max.apply(Math, arr);
 const arreglo = [5,1,2,3,8,9,0];
console.log(mayorArreglo(arreglo));
// const sumaArreglo = arr =>  
//     for (let i in arr) { total +=arr[i];}
const suma = (a, b) => a + b
const sumatoria = arreglo.reduce(suma)
console.log(sumatoria); 

const arreglo2 = [1,2,3,4,5,6,7,9,10]

const NumFaltante = arr =>  {
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] - arr[i-1] != 1) {
        return i+1;     
        }
    }
//    for (var i=0; i < arr.length; i++){
//       if(i !== arr[i]){
//         return i;
//       }
//    }
 }
 console.log(NumFaltante(arreglo2));


const arreglo3 = [1,2,5,8,7]

const numPares = arr => {
    var ar = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) { 
           ar.push(arr[i]);

        }
       
    }
  
    return ar;
}



console.log(numPares(arreglo3));








