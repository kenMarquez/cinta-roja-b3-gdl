function palindromo(cadena) {

    var lowStr = cadena.toLowerCase().replace(cadena, '');
    var reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
  }
 console.log(palindromo("ala"));