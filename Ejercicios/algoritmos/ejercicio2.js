const getBigger = (array) => {
    let suma = 0;
    array.forEach((number) =>{
        suma += number;
    });
    return suma;
};

const arrayNum = [1,2,3,4,5,6,7,8,9];

console.log(getBigger(arrayNum));