
function cadena(string){
    console.log(string);
    let convertir=string.split("");
    console.log(convertir);
    let revertir=convertir.reverse();
    console.log(revertir);
    let unir=revertir.join("");
    console.log(unir);
    if(string==unir){
        console.log("si es")
    }
    else{
        console.log("no es")
    }
}

cadena("anitalavalatina")



/* 
function reverseString(string){
    var cadena1="";
    for (i=cadena.length-1;i>=0;i--){      
    }
}
reverseString("ala")
  
if(cadena==cadena1){
            console.log("es palindromo")
        }
        else{
            console.log("no es palindromo")
        }*/