//Definimos las variables que necisitaremos 
let cadena = "Cadena";
let alreves = "";  // definimos alreves para que aloje las palbras alreves
largo = cadena.length; // definimos el tamaño de la palabra
cadena = cadena.toLocaleLowerCase(); //lo convertimos a minusculas

for (i=0; i<largo; i++){ 
    alreves = alreves + cadena.substring(largo-i, largo-i-1); // alojamos cada letra de la palabra cadena comenzando desde la derecha letra por letra con -i en su largo y largo-1-1.
}

if(cadena === alreves){
    console.log("es un palindromol")
}
else{
    console.log("No es un palindromo")
}