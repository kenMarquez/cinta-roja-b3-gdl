//en un arreglo de numeros positivos no ordenados, hay un solo numero repetido, encontrar el numero repetido, ejemplo [1,2,5,7,5,7], el resultado es 5
let arreglo = [1,3,2,8,7,4,51,5,3];

const numerorepetido = (array) => {
    array.sort();
        for(let i= 0; i< array.length; i++){
            if(array[i] === array[i+1]){ 
               return array[i];
            } 
        }  
        return "No hay numeros repetidos";
}

console.log(numerorepetido(arreglo));