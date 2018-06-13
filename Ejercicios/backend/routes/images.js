const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); //interceptar request, formate para tener json

router.use(bodyParser.json());

// {
//         id: 1,
//     url: "www.algo.com/imagen",
//     description: "la imagen mas chida",
//     name: "La imagen"
// }

const images = []; //arreglo de objeto

router .get('/', (req, res, next) => {
    res.send(images);
})


router.post('/', (req, res, next) => {
    const data = req.body; 
    images.push(data);
    res.send(data);
})

router.get('/:pos', (req, res, next) => {
    const posicion = req.params.pos;
    res.send(images[posicion]);
})

module.exports = router; // en app.js vamos a importar este archivo, cuando alguien te importe que es lo que vas a exponer

