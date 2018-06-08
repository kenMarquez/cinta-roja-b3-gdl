  let numeroGrande = (array) => {
    let mayor = array[0]
    for (let i=0; i<array.length;i++){
      if(mayor<array[i]){
          mayor=array[i];
      }
    }
    return mayor;
}
let numeros =[1,2,3,4,5,6,7,8,9];
let resultado=numeroGrande(numeros);
console.log(resultado);

//Hacer la suma de todos los elementos de un arreglo, ejemplo:[5,1,2,3,8,9,0]
//El resultado debe ser 26.
let sumArr = arreglo => {
    let suma = 0
      arreglo.forEach(n => {
        suma += n
      });
      return suma
    }
    console.log(sumArr(arr));