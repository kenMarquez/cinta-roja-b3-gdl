//lógica
const express = require('express');
const bodyParser = require('body-parser');//toma el body del request y lo formatea para tener un json
const router = express.Router();

router.use(bodyParser.json()); //el body lo formatea y regresa un json

// {
//     id: 1,
//     url: 'www.imagen.com',
//     description: 'la imagen chidilla',
//     name: 'imagen chida'
// }

const images = [];


//recibe la ruta a la que va a responder o va a estar definido

router.get('/' , (req, res, next) => {
    //esta ruta se encargará de mostrar todas las imágenes guardadas
    //por convencion la ruta raiz de un endpoint debe regresar todos los objetos
    res.send(images);

});
router.post('/' , (req, res, next) => {
    const data = req.body; 
    images.push(data);
    res.send(data);
});

router.get('/:pos', (req,res,next) => {
    const position = req.params.pos;
    const result = images[position];
    res.send(result);
});

router.delete('/:pos', (req, res, next) => {
    const position = req.params.pos;
    const itemDelete = images.pop(position);
    res.send(itemDelete);
})

module.exports = router;