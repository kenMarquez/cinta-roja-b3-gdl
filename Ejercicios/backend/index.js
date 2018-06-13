const express = require('express'); //express es un conjunto de middleware, que interceptan las peticiones
//y realizan algo con ellas, express es una función
const app = express();
//express tiene un metodo por cada verbo de http

//recibe una cadena o una expresión regular, que será la ruta en la que estamos buscando
//la diagonal apunta el ñindex de nuestra aplicación
// req: abreviatura para request, la petición que proviene desde el cliente
//res: response, es como nosotros vamos a poder responderle al cliente, conjunto
//de información con la que podemos responder
//next tiene que ver con lo middlwares, continúa con el sigiuente middleware que se encuentre
//no e sutilizada en la petición get, una ve que ese termine se manda a llamar para que
//pueda continuar, por ejemplo una autenticación
app.get('/' , (req,res) => {
    res.send('Hola crayola');
});
app.get('/html', (req,res,next) => {
    //regresa html, express po defecto encuentra e interpreta para responder con el contenido
    //adecuado
    res.send('<h1>Hola  crayola html</h1>');
});
app.get('/json', (req,res,next) => {
    res.send({
        mensaje: 'Hola crayola con json'
    });
});
//indicar a la computadora el puerto en el que va a correr la aplicacion
app.listen(3000 , () => {
    console.log('El servidor corre en el puerto 3000');
});
 //json nombre, html con edad, string con profesion, como sea con una descripcion
 //con lo que sea el propósito de estar en devf
 