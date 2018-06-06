let ejemplo=[5,3,2,4,6,7,10,1];

const sumarray = (unArray) =>{
    let suma = 0;
    for (i=0;i<unArray.length;i++){
    suma = suma + unArray[i]
    }
    return suma;
}

alert(sumarray(ejemplo));