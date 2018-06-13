const express = require('express');

//Con express.Router unicamente podemos definir las rutas
const router = express.Router();

//Un parser es un metodo que recibe un input con algun formato y lo convierte en otro
//Para esto necesitamos un nuevo modulo que es body-parses (yarn add body-parser)
//Con esto interceptaremos el body y lo regresaremos como un objeto json
const bodyParser = require('body-parser');

//images sera un arreglo de objetos que tendran los siguientes artributos
    //id: debe ser único para cada imagen
    //url: ruta donde estara la imagen
    //description: breve descripcion de la imagen
    //name: como se llama la imagen
const images = [];

//Para lograr interceptarlo se manda llamar el middleware con la funcion .json del bodyParser
router.use(bodyParser.json());

//Esta ruta se encargará de mostrar todas las imagenes que tenemos guardadas
router.get('/',(req,res,next)=>{
    res.send(images);
});

router.get('/:pos',(req,res,next)=>{
    const posicion = req.params.pos;

    if(posicion-1 < images.length && posicion > 0){
        res.send(images[posicion-1]);
    } else {
        res.send("Esa imagen no existe");
    }
    
});

router.delete('/:pos',(req,res,next)=>{
    const posicion = req.params.pos;

    if(posicion-1 < images.length && posicion > 0){
        images.splice(0,posicion);
        res.send("Eliminado exitosamente");
    } else {
        res.send("Esa imagen no existe");
    }
});
//Aunque es la misma ruta se puede hacer tanto un get como un post
router.post('/',(req,res,next)=>{
    //data tendra el json del body y se enviara como respuesta el mismo body
    const data = req.body;
    images.push(data);
    res.send(data);
});
//Aqui estamos definiendo que es lo que se va a exportar una vez que alguien invoque images.js
module.exports = router;