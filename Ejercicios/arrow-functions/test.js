numeros = [2, 3, 4, 5, 5];

var d = numeros.sort();
for (let r = 0; r < d.length; r++) {
    //console.log(d[r]);
    for (let u = 0; u < r; u++) {
        if (d[u] == d[r]) {
            //console.log(r);
            console.log(" este " + d[u]);
        }
    }

}

console.log(0 < 0);