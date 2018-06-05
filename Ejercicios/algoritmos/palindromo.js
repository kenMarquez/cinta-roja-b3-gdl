

let palindromo  ="AnitalavalatinA";
let inverso = "";
longitud= palindromo.length;      
palindromo = palindromo.toUpperCase();
palindromo = palindromo.toLocaleLowerCase();
for (f=0; f<longitud;f++){
    inverso = inverso + palindromo.substring(longitud-f,longitud-f-1);
}

if(palindromo === inverso){
    console.log(" Hola soy un palindromo ");
}
else{
    console.log(" Hola no soy )= palindromo ");
}