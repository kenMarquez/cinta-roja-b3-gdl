//'use strict'
// console.log("Me ejecuto primero")

// setTimeout(() => {
//     console.log ("Yo voy segundo");

// }, 2000);

// console.log("Yo voy tercero");  

const sumarTodos = (max, callback) => {
    let resultado = 0;

    setTimeout(() => {
        for (let i = 0; i < max;  i++) {
            resultado = resultado + i; 
        }
        callback(resultado)
        
    }, 5000);

}
const respuesaAlCallback = (resultadoDeLaSuma) => {
    const menosDiez = resultadoDeLaSuma - 10;
    console.log(menosDiez);
}



sumarTodos(15, (resultadoDeLaSuma) => {
    console.log(resultadoDeLaSuma);
})

sumarTodos(10, (resultadoDeLaSuma) => {
    const masDiez = resultadoDeLaSuma + 10;
    console.log(masDiez);
})










