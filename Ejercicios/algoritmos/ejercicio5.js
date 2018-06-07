const getReapeted = (array) => {
    let reapeted = 0;
    let i = 0;
    array.forEach((number) =>{
        i = 0;     
        array.forEach((numberReapeted) =>{
            if(number === numberReapeted){
                if(i === 0){
                    i++;
                } else {
                    reapeted = numberReapeted;
                    return reapeted;
                }
            }
        });
        if(reapeted != 0){
            return reapeted;
        }
    });
    return reapeted;
};

const arrayNum = [1,2,3,4,5,6,7,5,9];

if(getReapeted(arrayNum) === 0){
    console.log(`no hay numero repetido`);
} else {
    console.log(`El numero repetido es ${getReapeted(arrayNum)}`);
}
