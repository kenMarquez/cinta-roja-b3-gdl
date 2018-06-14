//import express
const express = require('express');
const app = express();
const images = require('./routes/images.js');

//middleware, intercepta el request del cliente, recibe por parametro una funcion
app.use('/images', images);

app.listen(3000, ()=>{ console.log('El servidor corre en el puerto 3000');});

/*
//request, result, next (continuar con el siguiente middleware )
app.get('/',(req, res, next) => {
   res.send('Hola Devf!');
})

app.get('/html', (req, res, next) =>{
    res.send('<h1>Hola devf html!</h1>');
});

app.get('/json', (req, res, next) =>{
    res.send({mensaje: 'Hola devf trabajando con json'});
});

//1. json con nombre
app.get('/nombre', (req, res, next) =>{
    res.send({nombre: 'Grisell'});
});
//2. html con edad
app.get('/edad', (req, res, next) =>{
    res.send('<b><i>edad: 27</b></i>');
});
//3. string con profesion
app.get('/profesion', (req, res, next) =>{
    res.send('Ing. en Sistemas');
});
//4. descripcion de nosotros ,
app.get('/descripcion', (req, res, next) =>{
    res.send('<i>holi</i>');
});
//5. proposito
app.get('/proposito', (req, res, next) =>{
    res.send('<p style="color:48C9B0">aprender!!~~</p>');
}); */

