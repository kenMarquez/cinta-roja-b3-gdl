/*console.log("Me ejecuto primero");

setTimeout(() => {
    console.log("yo voy segundo");
},2000);

console.log("yo voy tercero");*/

const sumarTodos = (max, callback) => {
    let suma = 0;

    setTimeout(()=>{
        for(let i=0; i<max; i++){
            suma = suma + i;
        } 
        callback(suma);
    },3000);
}

const respuestaCallback = (respuesta) => {
    const menosDiez = respuesta - 10;
    console.log(menosDiez);
}

sumarTodos(15,(resultado) => {
    console.log(resultado);
});

sumarTodos(15, (resultado)=>{
    const sumDiez = resultado + 10;
    console.log(sumDiez);
});

sumarTodos(15,respuestaCallback);