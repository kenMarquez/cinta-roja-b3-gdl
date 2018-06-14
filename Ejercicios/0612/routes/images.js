const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())

// {
//   id: 1,
//   url: 'www.imagenes.com/123.jpg',
//   description: 'la imagen mas chida'
//   name: 'gatitos'
// }

const images = []

router.get('/', (req, res, next) => {
  // Mostrar todas las imagenes que tenemos guardadas
  res.send(images)
})

router.post('/', (req, res, next) => {
  const data = req.body
  images.push(data)
  res.send(data)
})

router.get('/:pos', (req, res, next) => {
  const posicion = req.params.pos
  if( posicion < images.length )
    res.send(images[posicion])
  else
    res.send(`No se encontraron imagenes con el id ${posicion}`)
})

router.delete('/:pos', (req, res, next) => {
  const posicion = req.params.pos
  if( posicion < images.length ){
    images.pop(posicion)
    res.send(`elemento ${posicion} eliminado`)
  }
  else
    res.send(`No se encontraron imagenes con el id ${posicion}`)

})

module.exports = router