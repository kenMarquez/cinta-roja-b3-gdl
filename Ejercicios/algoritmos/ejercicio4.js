const getP = (array) => {
    let arrayP = [];
    let i = 0;
    array.forEach((number) =>{
        if(number % 2 === 0){
            arrayP[i] = number; 
            i++;
        }
    });
    return arrayP;
};

const arrayNum = [1,2,3,4,5,6,7,8,9];

if(getP(arrayNum) === 0){
    console.log(`no hay numero par`);
} else {
    console.log(`Los numeros par son ${getP(arrayNum)}`);
}
