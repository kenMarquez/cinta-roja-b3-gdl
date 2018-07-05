var  express = require('express');
const bookRouter = express.Router();

//Importamos nuestro modelo
var BookModel=require('../models/bookModel');



bookRouter.get('/',(req,res)=>{
    // TODO enviar los libros
    BookModel.find({},(err,result)=>{
        if(err!=null){
            console.log('Error en GET Book', err);
            res.status(500).send('Internal error');
        }
        res.json(result);
    });
    //res.send({});
});

bookRouter.post('/',(req,res)=>{
    //TODO enviar un solo libro
    var tmpBook=req.body;
    var newBook=new BookModel(tmpBook);
    //new book(tmpBook).save();
    newBook.save()
    res.status(201).send(newBook);

});

bookRouter.get('/:bookId',(req,res)=>{
    var bookId=req.params.bookId; //obtengo la variable de la url
    BookModel.findById(bookId,(err,result)=>{
        if(err!=null || result==null){
            res.status(404).send(`Libro con el id ${bookId} no existe`);
        }
        res.json(result);
    });


})


bookRouter.put('/:bookId',(req,res)=>{
    var bookId=req.params.bookId; //obtengo la variable de la url
    BookModel.findById(bookId,(err,result)=>{
        if(err!=null || result==null){
            res.status(404).send(`Libro con el id ${bookId} no existe para actualizar`);
        }
        result.title=req.body.title;
        result.des=req.body.desc;
        result.save();
        res.status(201).send(result);

        });
    });
    bookRouter.delete('/:bookId',(req,res)=>{
        var bookId=req.params.bookId; //obtengo la variable de la url
        BookModel.findById(bookId,(err,result)=>{
            if(err!=null || result==null){
                res.status(404).send(`Libro con el id ${bookId} no existe para actualizar`);
            }
            result.remove(err=>{
                if(err){
                    res.status(500).send(err);
                }
                else { 
                    res.send(`Libro con el Id ${bookId} borrao!`);
                }
            });
            });
        });
    

module.exports=bookRouter;
