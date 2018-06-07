//3. Hacer un arreglo de 4 cantidades de tiempo en minutos 
//[120, 80, 200, 100], y agarrar sólo las que son mayores a 2 horas

const arrayTime = [120, 80, 200, 100];

let result = arrayTime.filter(time => time>120);

console.log(result);