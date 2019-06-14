//'use strict'
// console.log("Me ejecuto primero")

// setTimeout(() => {
//     console.log ("Yo voy segundo");

// }, 2000);

// console.log("Yo voy tercero");  

// const sumarTodos = (max, callback) => {
//     let resultado = 0;

//     setTimeout(() => {
//         for (let i = 0; i < max;  i++) {
//             resultado = resultado + i; 
//         }
//         callback(resultado)
        
//     }, 5000);

// }

// const respuesaAlCallback = (resultadoDeLaSuma) => {
//     const menosDiez = resultadoDeLaSuma - 10;
//     console.log(menosDiez);
// }



// sumarTodos(15, (resultadoDeLaSuma) => {
//     console.log(resultadoDeLaSuma);
// })

// sumarTodos(10, (resultadoDeLaSuma) => {
//     const masDiez = resultadoDeLaSuma + 10;
//     console.log(masDiez);
// })

const sumarTodos = (max) => {
    return new Promise((resolve, reject) => {
    if (max <= 0) {
        return reject("debe ser mayor que 0");
    }
    let resultado = 0;

    setTimeout(() => {
        for (let i = 0; i < max;  i++) {
            resultado = resultado + i; 
        }
        resolve(resultado);
        
    }, 5000);

})

}

sumarTodos(10) .then((res) => {
    console.log(res);
})


sumarTodos(0) .then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})







