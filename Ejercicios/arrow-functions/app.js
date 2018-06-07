/*const suma= (a,b) => a+b;

let resultado = suma(5,5);

console.log(resultado);

const input = prompt("escribe un texto");

const getInput = text => `input = ${text}`;

console.log(getInput(input));*/

//Encontrar el número mayor en un arreglo de números

let array = [5,6,8,3,2];

const numeroMayor = array => {
    let max = Math.max(...array)
    return max;
 };

numeroMayor(array);

//Hacer la suma de todos los elementos de un arreglo
/*const suma = (total, num) =>{
    return total+num;
}
const sumaElementos = item => {
   console.log(array.reduce(suma));  
}*/
let valorInicial = 0;

const sumaElementos = (array, valorInicial) =>{
    array.forEach(item => {
        let suma = valorInicial + array[item];
        valorInicial = suma;
        console.log(suma);
    });
    
}

sumaElementos(array);

//encontrar el número faltante en un arreglo
let arregloDos = [1,2,5,6,3,4,9,8,10];
const numeroFaltante = arregloDos => {
    let arrayOrdenado = arregloDos.sort();;
    let posicionInicial =0;
    for(let i=0; i < arrayOrdenado.length;i++){
        if(arrayOrdenado[i]< posicionInicial){
            posicionInicial = arrayOrdenado[i];
            console.log(posicionInicial);
        }
    }
    
}

numeroFaltante(arregloDos);



//numneros pares

const numerosPares = array => {
    array.forEach(item => {
        if(array[item] % 2 === 0){
            console.log(array[item]);
        }

        return false;
    })
}

numerosPares(array);

//dado un arreglo encontrar el repetido

