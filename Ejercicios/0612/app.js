const express = require('express')
const app = express()
const images = require('./routes/images')


app.use('/images', images)

app.listen(3000, () => {
  console.log('El servidor corre en el puerto 3k');
})