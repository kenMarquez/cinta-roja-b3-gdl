const CALCULADORA = (accion, num1, num2, callback) =>{
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
          break;
        default:
          resultado = multiplicar(num1,num2);
          break;
      }
      callback(resultado);  
}

const sumar = (num1, num2) => num1 + num2;
const restar = (num1, num2) => num1 - num2;
const dividir = (num1, num2) => num1 / num2;
const multiplicar = (num1, num2) => num1 * num2;

const imprimir = total => console.log(total);

CALCULADORA('sumar',2,5,imprimir);
CALCULADORA('multiplicar',5,5,imprimir);
CALCULADORA('dividir',20,5,imprimir);
CALCULADORA('restar',50,5,imprimir);