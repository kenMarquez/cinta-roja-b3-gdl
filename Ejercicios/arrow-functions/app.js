numeros = [2, 3, 4, 5, 9, 7, 6, 8, 0, 9];

/*for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        return numero2 = numeros[i];
    }
}*/

var a = numeros.sort();
console.log("Arreglo " + a);

for (let i = 0; i < a.length; i++) {
    if (i == a.length - 1) {
        console.log("# Mayor " + a[i]);
    }
}

//Usamos el mismo arreglo que al inicio y utilizamos la funcion "reduce" que hace la suma del arreglo
function Sumar(total, num) {
    return total + num;
}
console.log("  Suma del arreglo " + numeros.reduce(Sumar));

//Encontrar los numeros pares
var c = numeros.sort();
for (let p = 0; p < c.length; p++) {
    let q = c[p] % 2;
    if (q === 0 && c[p] != 0) {
        console.log("  # Par " + c[p]);
    }
}



//Encontrar el numero repetido
var d = numeros.sort();
for (let r = 0; r < d.length; r++) {
    //En el primer ciclo no entra al siguiente "for" por lo que se desfasa en -1
    for (let u = 0; u < r; u++) {
        if (d[u] == d[r]) {
            console.log("Repetido " + d[u]);
        }
    }

}






//Encontrar el numero faltante
var b = numeros.sort();
for (let o = 0; o < b.length; o++) {
    if (o !== b[o]) {
        console.log("Falta # " + (b[o] - 1));
        return;
    }
}