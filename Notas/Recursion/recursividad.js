const sumatoria = (numero)=>{
    console.log(numero);
    if (numero ===0) return 0
    return numero + sumatoria (numero -1);

}
resultado=sumatoria(10);
console.log(resultado);

// ejercicio hacer recursividad de 2 elvado a la 3 
const potencia = (base, poten) => {
    console.log(base,poten);
    if (poten ===0) return 1
    return base * potencia(base,poten-1);


}
resuelto = potencia(4,3);
console.log(resuelto);