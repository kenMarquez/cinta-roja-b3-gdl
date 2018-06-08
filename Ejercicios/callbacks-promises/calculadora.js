const calculadora = (accion, numeroUno, numeroDos, callback) => {
    let resultado;
    const suma = (numeroUno, numeroDos) => numeroUno + numeroDos;
    const resta = (numeroUno, numeroDos) => numeroUno - numeroDos;
    const multiplicacion = (numeroUno, numeroDos) => numeroUno * numeroDos;
    const division = (numeroUno, numeroDos) => numeroUno / numeroDos;

    switch(accion) {
        case "suma":
            resultado = suma(numeroUno, numeroDos);
            break
        case "resta":
            resultado = resta(numeroUno, numeroDos);
            break
        case "multiplicacion":
            resultado = multiplicacion(numeroUno, numeroDos);
            break
        case "division":
            resultado = division(numeroUno, numeroDos);

    }
    callback(resultado);
};

calculadora("suma", 5, 5, (resultadoOperacion) => {
    console.log(resultadoOperacion);
});
calculadora("resta", 10, 5, (resultadoOperacion) => {
    console.log(resultadoOperacion);
});
calculadora("multiplicacion", 5, 5, (resultadoOperacion) => {
    console.log(resultadoOperacion);
});
calculadora("division", 100, 5, (resultadoOperacion) => {
    console.log(resultadoOperacion);
});

//PROMESAS

