let oper = prompt("escribe tu operación", "Ejemplo: numero1+numero2");

const calculadora = (operacion,n1,n2,callback) => {
    let result = 0;

    switch(operacion) {
        case "+":
            result = sumar(n1,n2);
            break;
        case "-":
            result = restar(n1,n2);
            break;
        case "*":
            result = mult(n1,n2);
            break;
        case "/":
            result = div(n1,n2);
            break;
        default:
            break;
    }

    callback(result);
}

const sumar = (n1,n2) => {
    return n1+n2;
}

const restar = (n1,n2) => {
    return n1-n2;
}

const mult = (n1,n2) => {
    return n1*n2;
}

const div = (n1,n2) => {
    return n1/n2;
}

if(oper != null && oper != undefined){
    oper = oper.replace(/\s+/g,"");
    calculadora(oper[1],Number(oper[0]),Number(oper[2]),(result) =>{
        console.log(`${oper} = ${result}`);
    });
} else {
    console.log("No ingresaste ninguna operación");
}