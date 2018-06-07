//obtener todos los numeros pares de un arreglo de numeros positivos
let arreglo = [1,16,2,8,77,4,5,50,3];

const pares = (array) => {
   let resultado = '';
   for (let i = 0; i<array.length; i++){
     if(array[i] % 2 == 0)
         resultado += array[i] + ",";
   }
     return "Numeros Pares:" + resultado;
}

console.log(pares(arreglo));