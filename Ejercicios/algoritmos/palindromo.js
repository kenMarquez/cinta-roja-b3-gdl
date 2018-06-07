function palindromo(cadena) {

    var lowStr = cadena.toLowerCase().replace(cadena, '');
    var reverseStr = lowStr.split('').reverse().join(''); 
    return reverseStr === lowStr;
  }
 console.log(palindromo("ala"));

 //git add palindromo.js or git add .
 //git commit -m "Ejercicio palindromo"
 //git push origin master

 //arrow functions
 //esta forma se ocupa si la expresion ocupa una sola linea
 var sum = (a,b) => a + b

 var PrintSaludo = saludo => { return `Hola ${saludo}` }

 var helloWorld = () => {return "Hello World"}

 //includir entre parentesis enl cuperpo para retomar un objeto literal>
 var foo = params => ({foo:bar}) //no se ocupa tanto

 //soporta parametros rest y parametros por default
 var foo = (param1, param2,...rest) => { sentencias } //... notacion
var foo = 

