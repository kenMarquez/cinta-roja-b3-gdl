//hacer la suma de todos los elementos de un arreglo
let arreglo = [1,9,2,8,77,4];

const suma = (array) => {
   let resultado = 0;
   for (let i = 0; i<array.length; i++){
     resultado += array[i];
   }
     return resultado;
}

console.log(suma(arreglo));