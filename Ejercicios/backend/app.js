const express = require('express');
//express es una funcion un middleware vienen de los clientes las peticiones
const app = express(); //ejecuto una funcion con parentesis
const images = require('./routes/images.js');

app.use('/images', images); //un middleware recibe como parametro una funcion

// app.get('/', (req, res, next) => {
//     res.send('Hola Devf');
// })

// app.get('/html', (req, res, next) => {
//     res.send('<h1>Hola devf utilizando html</h1>');
// })

// app.get('/json', (req, res, next) => {
//     res.send({message: 'Hola devf trabajando con json'});
// })

// app.get('/gus', (req, res, next) => {
//     res.send({message: 'Mi nombres es Gustavo Luna'});
// });

// app.get('/edad', (req, res, next) => {
//     res.send('<b>Mi edad es chavorruco</b>')
// });

// app.get('/descripcion', (req, res, next) => {
//     res.send({complexion: 'delgada', cabello: 'negro'});
// });

// app.get('/objetivo', (req, res, next) => {
//     res.send('<i>Mi objetivo en dev es aquirir las herramientas basicas para programar paginas web');
// });

// app.get('/profesion', (req, res, next) => {
//     res.send('mi profesion es ingeniero, asesor, autor')
// })

app.listen(3000, () => {
    console.log('El servidor corre en el puerto 3000');

});

//json con nombre
//la 2 html con la edad
//string con profesion
//json descripcion de mi 
//lo que sea objetivo en df