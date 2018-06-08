

const sumar = (a, b) => ( a + b ) ; 
const restar  = (a, b) => ( a - b );
const multiplicar = (a, b) => ( a * b );
const dividir = (a, b) => ( a / b );

const Calculadora = (operacion, a, b) => {
    return new Promise((resolve, reject) => {
        if (b <= 0) {
            return reject("b debe ser mayor > 0, no es posible dividir entre 0");
        }
        
        let resultado = 0; 

        if (operacion === "sumar") {
            resultado = sumar(a, b); 
        }
        else if (operacion === "restar"){
            resultado = restar(a, b);
        }
        else if (operacion === "multiplicar") {
            resultado = multiplicar(a, b); 
        }
        else if (operacion === "dividir") {
            resultado = dividir(a, b); 
        }  
        else {
            console.log("No es una operacion valida");
        }
        resolve(resultado); 



})
}

Calculadora("sumar", 2, 2).then((res) => {
    console.log(res);
})




Calculadora("dividir", 2, 0) .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})

// sumarTodos(10) .then((res) => {
//     console.log(res);
// })


// Calculadora("sumar", 2, 2, resultadoDeLaOperacion => {
//     console.log(resultadoDeLaOperacion);
// });

// Calculadora("restar", 2, 2, resultadoDeLaOperacion => {
//     console.log(resultadoDeLaOperacion);
// });

// Calculadora("multiplicar", 2, 2, resultadoDeLaOperacion => {
//     console.log(resultadoDeLaOperacion);
// });

// Calculadora("dividir", 2, 2, resultadoDeLaOperacion => {
//     console.log(resultadoDeLaOperacion);
// });

// Calculadora("logaritmo", 2, 2, resultadoDeLaOperacion => {
//     console.log(resultadoDeLaOperacion);
// });




