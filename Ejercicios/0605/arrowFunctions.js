// 1)  obtener el numero mas grande dentro de un arreglo
let arr = [0,4,5,2,6]
let myMax = ar => {
  ar.sort()
  return ar[arr.length-1]
}
console.log(`1) ${myMax(arr)}`);


// 2) la suma de todos los elementos de un arreglo
let mySum = arr => {
  let suma = 0
  arr.forEach(n => {
    suma += n
  });
  return suma
}
console.log(`2) ${mySum(arr)}`);


// 3) encontrar el numero faltante en un arreglo del 1 al 10
let newarr = [1,2,3,4,5,7,6,8,9,10,12,13,14] // falta el 11 (1-14)

let newSeek = arr =>{
  let n1 = mySum(arr)
  let n2 = mySum([...Array(arr.length+1).keys()].map(i => i + 1));
  return n2-n1
}
console.log(`3) ${newSeek(newarr)}`)


// 4) encontrar todos los numeros pares de un arreglo
let pares = arr => {
  let p = []
  arr.forEach(n => {
    if (n % 2 === 0)
      p.push(n)
  });
  return p
}
console.log(`4) ${pares(newarr)}`);