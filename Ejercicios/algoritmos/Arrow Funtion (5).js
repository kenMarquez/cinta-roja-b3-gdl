
let ejemplo = [10, 8, 5,1, 5, 3, 77, 78];

const par = (unArray) => {
    let repetido ="No Hay Repetidos";
    ejemplo = ejemplo.sort((a, b) => a - b );
    for(i=0;i<unArray.length-1;i++){
        if(unArray[i] === unArray[i+1]){
            repetido = unArray[i];
            break;
        }
    }
    return repetido;
}
alert(par(ejemplo));

