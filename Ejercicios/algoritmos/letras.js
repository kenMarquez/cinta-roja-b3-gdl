class regresa{

    constructor(nombre){
        this.nombre = nombre
    }
    presente(){
        console.log(`hola regreso a la ultima letra ${this.nombre[5]}`)
    }

}
const regreso= new regresa("FABIAN")
regreso.presente();

var cadena = "alicia";
var longitudCadena = cadena.length;
console.log(`aqui regreso cualquier ultima letra `+cadena[longitudCadena - 1]); // Muestra el últim caracter->as