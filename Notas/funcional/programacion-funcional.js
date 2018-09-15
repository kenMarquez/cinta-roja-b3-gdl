//dado un areglo vamos a multiplicar cada elemneto 
// de este por 2, filtrar los mayores a 10 y
//ordenarlos de manera del menor al mayor
//[8,4,7,5,1,2]->[10,14,16]

let original = [8, 4, 7, 5, 1, 2];

const mapx2 = (array) => {
    let arrAux = [];
    for (let i in array) {
        arrAux.push(array[i] * 2);
    }
    return arrAux;
}

const filtrar = (array2) => {
    let arrAux = [];
    for (let i in array2) {
        if (array2[i] >= 10) {
            arrAux.push(array2[i])
        }
    }
    return arrAux;
}

function quickSort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }

    }

    return items;
}

function partition(items, left, right) {

    var pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}


original = mapx2(original);
original = filtrar(original);
original = quickSort(original);

console.log(original);

console.log("---------------");




original = [8, 4, 7, 5, 1, 2];
const resultado = original
    .map( num => num * 2)
    .filter(num => num>=10)
    .sort((a, b) => b-a)
    .reverse();

console.log(resultado);


//1- Dado un arreglo regresar todos los numeros pares 
//ordenados de mayor menor
//[1,3,5,2,10,4,6] => [10,6,4,2]
let pares = [1,3,5,2,10,4,6];
const resultado_pares = pares
.filter(pares=>pares%2===0)
.sort((a,b)=>b-a)
console.log(resultado_pares);
//Escribe una funcion que tome una cadena 
//de palabras en minusculas y la regrese en mayúsculas.
//Entrada: [“hola”,“como”,“estas”]
//Salida: [“HOLA”,“COMO”,“ESTAS”],
palabras =["hola","como","estas"];
const resultado_palabras= palabras
.map(palab=>palab.toUpperCase());
console.log(resultado_palabras);
//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas
cantidades = [120,80,200,100]
const mayor_horas=cantidades
.filter(hora=>hora>=120);
console.log(mayor_horas);

//4- A partir de esta lista [1, 3, 5, 7, 9], multiplicar 
//todos los elementos por 7, y después sólo traer 
//los que son menores a 30
//.map es cuando quiero transformar todo hace lo que  hace un for casi casi
//.filter solo toma algunos los que yo quiera  y y lo que no no  pela  
//.sort me lo ordena por su valor que tenga 
multiplicar = [1,3,5,7,9];
const menores_atreinta=multiplicar
.map(algunos=>algunos*7)
.filter(algunos=>algunos<30);
console.log(menores_atreinta);