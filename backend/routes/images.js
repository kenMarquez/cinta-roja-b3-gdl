//aqui estamos requiriendo express
const express = require('express');
//esto nos va a permitir traer la logica  para poder declarar las rutas unicamnete define las rutas
const router = express.Router();
//aqui hablamos al middle +ware bodyparser para poder trabajar con un json 
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//{
  //  id: 1,
    ///url: "wwww.algo.com/imaagen",
   // description:"La imagen Mas chida",
    //name: "la imagen "
//}

const images=[];


//esta ruta se va encargar de mostrar nuestrar imagenes que tenemos guardadas vamos a recibir una imagen y 
//le vamos a devolver a quien haga la peticion esa misma imagen 
router.get("/",(req,res,next)=>{
    res.send(images);
})
//esta ruta es para crear o mandar ahora algo creado las rutas en este caso tienen = "/" esto se puede hacer//
router.post('/', (req,res,next)=>{
    const data = req.body;
    images.push(data);
    res.send(data);

})

router.get('/:pos',(req,res,next)=>{
    const posicion = req.params.pos;
    res.send(images[posicion]);
    
  })
  router.delete('/:pos',(req,res,next)=>{
      const posdel = req.param.pos;
    res.send(images.splice(posdel,1))
  })





module.exports = router;