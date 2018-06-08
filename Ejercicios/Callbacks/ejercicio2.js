let oper = prompt("escribe tu operación", "Ejemplo: numero1+numero2");

const calculadora = (operacion,n1,n2) => {
    return new Promise((resolve,reject) => {
        if(isNaN(n1) || isNaN(n2)){
            return reject("los numeros que ingresaste no son validos");
        }
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
                result = null;
                break;
        }
        
        if(result != null){
            resolve(result);
        } else {
            reject("la operacion que ingresaste no es valida");
        }
    });
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

let number1 = 0;
let number2 = 0;
let operand = "";

if(oper != null && oper != undefined){
    let getFlag = false;
    for(let index in oper){
        if(isNaN(oper[index]) && getFlag === false){
            number1 = Number(oper.substr(0,index));
            operand = oper[index];
            oper = oper.replace(number1.toString()+operand,"");
            number2 = Number(oper);
            getFlag = true;
            console.log(number1);
            console.log(number2);
            console.log(operand);
        }
    }
    oper = oper.replace(/\s+/g,"");
    calculadora(operand,number1,number2)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
} else {
    console.log("No ingresaste ninguna operación");
}