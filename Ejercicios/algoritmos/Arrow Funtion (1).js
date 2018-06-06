let ejemplo=[5,3,2,4,6,7,10,1];


const mayor = (unArray) => {
    let max = unArray[0];
    for (i=0;i<unArray.length-1;i++){
        if(max<unArray[i+1]){
            max = unArray[i+1]
        }
    }
    return max;
}
alert(mayor(ejemplo));

