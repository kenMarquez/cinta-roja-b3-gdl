
let ejemplo=[2,3,4,5,6,7,9,10];

const faltar = (unArray) => {
    let Primero = unArray[0];
    let Falta = 0;
    for (i=0;i<unArray.length;i++){
        if(unArray[i] != Primero+i){
            Falta = Primero+i;
            break;
        }
    }
    return Falta;
}
alert(faltar(ejemplo));
