const getMissing = (array) => {
    let consec = 0;
    let result = 0;
    array.forEach((number) =>{
        if((consec+1) === number){
            consec = number;
        } else {
            result = consec + 1;
            return;
        }
    });
    return result;
};

const arrayNum = [1,2,3,4,5,6,7,8,9];

if(getMissing(arrayNum) === 0){
    console.log(`no hay numero faltante`);
} else {
    console.log(`El numero faltante es ${getMissing(arrayNum)}`);
}
