const getBigger = (array) => {
    let bigger = 0;
    array.forEach((number) =>{
        if(bigger < number){
            bigger = number;
        }
    });
    return bigger;
};

const arrayNum = [1,2,3,4,5,6,7,8,9];

console.log(getBigger(arrayNum));