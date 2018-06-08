const calculadora = (operacion, n1, n2) => {
  return new Promise((resolve, reject) => {
    if (typeof(n1) !== 'number' || typeof(n2) !== 'number')
      return reject(`Alguno de los valores no es numero`)
    
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

    if (typeof(resultado) !== 'number')
      return reject(`Error al ejecutar - ${resultado}`)

    resolve(resultado) 
  })
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

const impresion = (msj) => {
  console.log(msj)
}

calculadora ('suma', 5, 6).then((r) => {impresion(`El resultado es ${r}`)})
            .catch((error) => {impresion(`ERROR: ${error}`)})

calculadora ('potencia', 5, 6).then((r) => {impresion(`El resultado es ${r}`)})
            .catch((error) => {impresion(`ERROR: ${error}`)})

calculadora ('suma', 'x', 6).then((r) => {impresion(`El resultado es ${r}`)})
            .catch((error) => {impresion(`ERROR: ${error}`)})