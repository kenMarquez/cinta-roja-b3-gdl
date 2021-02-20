const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

/*{
    id: 1,
    url: "www.algo.com/imagen",
    description: "la imagen mas chida!",
    name: "la imagen"
}*/

const images = [];
router.get('/', (req, res, next) =>{
 res.send(images);
});

router.post('/', (req, res, next) =>{
 const data = req.body;
 images.push(data);
 res.send(data);
});

router.get('/:pos', (req, res, next) =>{
    const position = req.params.pos;
    res.send(images[position]);
});

router.delete('/:pos', (req, res, next) =>{
    const position = req.params.pos;
    images.pop(position);
    res.send(images);
});

module.exports = router;