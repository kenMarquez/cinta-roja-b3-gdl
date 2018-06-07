//encontrar el numero faltante en un arreglo que contiene unicamente los numeros del 1 al 10 
let arreglo = [1,9,3,5,5,2,7,8,10];

const findnumber = (array) => {
    let num = 1;
        for(let i= 0; i< array.length; i++){
            if(num == array[i]){ 
               num++;
               i=0;
            } 
        }  
        return num;
}

console.log(findnumber(arreglo));