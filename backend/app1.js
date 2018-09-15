const express = require ("express");
const app = express();
const images = require('./routes/images.js')
const cors= require('cors');
// este es un middleware
app.use(cors());
app.use('/images',images);

app.listen(5000,()=>{
    console.log('El servidor corre en el puerto 5000');
});




















/*app.get('/',(req,res,next) => {
    res.send('Hola Devf');
})

app.get('/html',(req,res,next)=>{
    res.send('<h1>Hola dev utilizando  html</h1>');
})
app.get('/json',(req,res,next)=>{
    res.send({mensaje: 'Hola devf trabajando con json'});
})
app.listen(3000,()=>{
    console.log('El servidor corre en el puerto 3000');
});*/


//5 rutas la 1 json con mi nombre
//la 2 html con mi edad
//string con mi profesion
//json descripcion de mi
//html proposito por que estoy en devf

