const calculadora = (operacion, n1, n2, callback) => {
  let resultado = 0;
  switch(operacion) {
    case 'suma':
        resultado = suma(n1, n2)
        break;
    case 'resta':
        resultado = resta(n1, n2)
        break;
    case 'multiplicacion':
        resultado = multiplicacion(n1, n2)
        break;
    case 'division':
        resultado = division(n1, n2)
        break;
    default:
        resultado = "funcion no soportada" 
  }

  callback(resultado, operacion)
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

const impresion = (resultado, operacion) => {
  console.log(`La ${operacion} es ${resultado}`)
}

calculadora ('suma', 5, 6, impresion)
calculadora ('resta', 5, 6, impresion)
calculadora ('multiplicacion', 5, 6, impresion)
calculadora ('division', 5, 6, impresion)
calculadora ('potencia', 5, 6, impresion)