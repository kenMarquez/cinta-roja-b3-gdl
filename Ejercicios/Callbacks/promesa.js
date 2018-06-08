const sumarTodos = (max) => {
    return new Promise((resolve,reject) => {
        if(max > 0){
            let suma = 0;

            setTimeout(()=>{
                for(let i=0; i<max; i++){
                    suma = suma + i;
                }
                resolve(suma);
                
            },3000);
        } else {
            reject("debe ser mayor que 0");
        }
    });
}

sumarTodos(10)
    .then(res => console.log(res))
    .catch(error => console.log(error));