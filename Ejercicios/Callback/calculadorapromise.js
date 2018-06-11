const CALCULADORA = (accion, num1, num2) =>{
  return new Promise((resolve, reject)=>{
    let resultado = 0;
    switch (accion) {
        case 'sumar':
          resultado = sumar(num1,num2);
          break;
        case 'restar':
          resultado = restar(num1,num2);
          break;
        case 'dividir':
          resultado = dividir(num1,num2);
          if(resultado == 0) 
           return reject("División no válida");
          break;
        case 'multiplicar':
          resultado = multiplicar(num1,num2);
          break;
        default:
          return reject("Operación: " +accion +" Función no válida");
          break;
      }
      resolve("Operación: " + accion +" resultado: "+ resultado);  
  })
}


const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1/num2;


const imprimir = total => console.log(total);

CALCULADORA('sumar',42,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});;
CALCULADORA('multiplicar',5,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});;
CALCULADORA('dividir',0,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});;
CALCULADORA('dividir',20,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});;
CALCULADORA('restar',50,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});;

CALCULADORA('FRACCION',50,5).then((res) => {
  console.log(res);
}).catch((res) => {
  console.log(res);
});

