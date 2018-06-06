let cadena  ="MALAm";  
let alreves = "";
cadena = cadena.toLocaleLowerCase();
for (i=0; i<cadena.length;i++){alreves = alreves + cadena.substring(cadena.length-i,cadena.length-i-1);}
if(cadena === alreves){console.log("Es un Palindromo");}
else{console.log("No es un Palindromo");}



