//Dado un arreglo se va a multiplcar cada elemento por 2
//filtrar los mayores a 10 y ordenarlos de menor a mayor
//[8,4,7,5,1,2] -> [10,14,16]


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
    .map(num => num * 2)
    .filter(num => num >= 10)
    .sort((a, b) => b - a)
    .reverse();

console.log(resultado);