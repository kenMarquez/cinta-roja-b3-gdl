function palindromo(cadena) {
    let NewString = cadena.replace(/\s/g, "");
    let array1 = NewString.split("").reverse();
    let array2 = NewString.split("");

    console.log("Validando: " + NewString);

    if (array1.toString() == array2.toString()) 
        return console.log("Palindromo");
    else 
        return console.log("No Palindromo");    
}

palindromo('example example');
palindromo('ala');
palindromo('anita lava la tina');
palindromo('anita lava al tina');
