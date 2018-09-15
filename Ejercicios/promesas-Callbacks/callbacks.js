//console.log ("me ejecuto primero")

//setTimeout(()=>{
  //  console.log("yo voy segundo");

// },2000);
// console.log("yo voy tercero")


const sumarTodos = (max) => {
    return new Promise((resolve, reject) => {
        if (max <= 0) {
            return reject("debe ser mayor que 0");
        }
        let resultado = 0;

        setTimeout(() => {
            for (let i = 0; i < max; i++ ) {
                resultado = resultado + i;
            }
            resolve(resultado);
        }, 5000);

    })
}

sumarTodos(10).then((res) => {
    console.log(res);
})

sumarTodos(0).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})



/*const respuestaAlCallback= (resultadoDeLaSuma) =>{
    const menosDiez = resultadoDeLaSuma -10;
    console.log(menosDiez)
}

sumarTodos(20,respuestaAlCallback);

sumarTodos(15,(resultadoDeLaSuma) => {
    console.log(resultadoDeLaSuma);
})

sumarTodos(10,(resultadoDeLaSuma)=>{
    const masDiez = resultadoDeLaSuma + 10;
    console.log(masDiez);
})*/


//hacer una calculadora reciba 4 parametros
//el primero 

const sumar =(z,x)=>(z+x);
const restar =(z,x)=>(z-x);
const multiplicar =(z,x)=>(z*x);
const dividir =(z,x)=>(z/x);

const calculadora = (operaciones,z,x,)=>{
    return new Promise((resolve, reject)=>{
        if(operaciones<= 0){
            return reject("ESTA CALCULADORA NECESITA UNA OPERACION EN ESPECIFICO");
        }
        let resultados = 0;
        if(operaciones==="SUMAR"){
            resultados= sumar(z,x);
        
        }
        else if (operaciones==="RESTA"){
            resultados= restar(z,x);
            
        }
        else if(operaciones==="MULTIPLICACION"){
            resultados= multiplicar(z,x);
        }
        
        else if(operaciones==="DIVIDIR"){
            resultados= dividir(z,x);
        }
        
        
        else{
            console.log("Esta Calculadora No Hace eso")
        }
        resolve(resultados)
        })

    }


calculadora("SUMAR",8,9).then((resul)=>{
    console.log(resul);
}).catch((erro) => {
console.log(erro);
})
