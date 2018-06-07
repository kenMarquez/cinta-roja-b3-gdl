//function suma(a,b) {
    //return a + b;
//}

//const suma = (a,b) => {
    //return a + b;
//}

//let resultado = suma(2,9);

//console.log(resultado);




function numeroGrande(array){
    let mayor = array[0]
    for (let i=0; i<array.length; i++){
        if(mayor < array[i]){
            mayor = array[i];
        }
    }
    return mayor
}
let numeros = [1,10,2,11,20];
let resultado = numeroGrande(numeros);

console.log(resultado);