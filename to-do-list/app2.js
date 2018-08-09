const express = require ("express");
const app2 = express();
const lists = require('./appto.js');

// este es un middleware
app2.use('/list',lists);

app2.listen(4000,()=>{
    console.log('El servidor corre en el puerto 4000');
});



