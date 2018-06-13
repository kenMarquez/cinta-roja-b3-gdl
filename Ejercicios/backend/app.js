//Express es un conjunto de middlewares, esto significa que express es una función
const express = require('express');

//con el . declaramos que partimos del directorio actual
//y si no se define la extensión del archivo se va a interpretar como js
const images = require('./routes/images.js'); 

//Como express es una función se puede asignar a la variable app para instanciar y poder utilizar los
//los metodos dentro de express.
const app = express();

app.use('/images',images);

//el metodo get recibe una cadena o una expresión regular, en este caso es una ruta, y un callback 
//que contiene los siguientes parametros:

//req: petición del cliente
//res: respuesta que vamos a hacer al cliente
//next: se manda llamar para permitirnos continuar cuando se termine un milware para seguir con el siguiente

//---------Nota:
//---------las comillas dobles y las comillas simples se diferencian porque las simples puedes ingresar 
//--------- cualquier caracter.

//Express puede interpretar html o json, identificando la sintaxis que colocaste en tu respuesta con el 
//metodo send

//Definimos el puerto al que vamos a estar escuchando y un callback que contiene la rutina que se ejecutará
//una vez que se abra el puerto. Cada que se haga una modificacion el servidor lo debemos de levantar de nuevo
app.listen(3000,() => {
    console.log(`el servidor corre en el puerto 3000`);
});

