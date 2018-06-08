const calculadora = (accion, numeroUno, numeroDos) => {
    return new Promise((resolved, reject) => {
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
            default:
                reject("error");
    
        }
        resolved(resultado);
    }) 
};

calculadora("suma", 5, 5,).then((res) => {
    console.log(res);
});

calculadora("qefef", 5, 5,).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
