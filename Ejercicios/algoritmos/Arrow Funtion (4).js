
let ejemplo=[2,3,4,5,6,7,9,10];

const par = (unArray) => {
    let Pares =[];
    let posicion = 0;
    for (i=0;i<unArray.length;i++){
        if ((unArray[i] % 2)===0){
            Pares[posicion] = unArray[i];
            posicion = posicion + 1;
        }
    }
    return Pares;
}
alert(par(ejemplo));
