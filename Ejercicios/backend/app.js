const express = require('express');
const app = express();
const images = require('./routes/images.js');

//middleware
app.use('/images', images);

app.listen(4000 , () => {
    console.log('Im here!')
});