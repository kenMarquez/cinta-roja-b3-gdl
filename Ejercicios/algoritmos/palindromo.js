let cadena  ="RasAR";
let alreves = "";
largo = cadena.length;      
cadena = cadena.toLocaleUpperCase();


for (i=0; i<largo;i++){
    alreves = alreves + cadena.substring(largo-i,largo-i-1);
}

if(cadena === alreves){
    console.log("Es un Palindromo");
}
else{
    console.log("No es un Palindromo");
}



