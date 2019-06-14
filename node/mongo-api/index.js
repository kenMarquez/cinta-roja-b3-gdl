var express = require('express');
var bookRouter = require('./routes/bookRouter');
var bodyParser=require('body-parser');

var mongoose = require ('mongoose');
const db = mongoose
        .connect('mongodb://admin:app12345@ds127771.mlab.com:27771/clubdecuervos');

const app = express(); 
app.use(bodyParser.json());

app.use('/book', bookRouter);


// app.get('/books',(req, res)=>{
//     // TODO: Tenemos que mandar lo de la DB 
//     res.send({});
// });

// app.get('/books/:id',(req,res)=>{
//       //TODO tenemos que mandar el libro en especifico
//       res.send({});

// });
  
app.listen(3050, ()=> {
    console.log(`servidor en http://localhost:3050`);

})