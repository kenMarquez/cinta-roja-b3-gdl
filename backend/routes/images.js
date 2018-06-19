//aqui estamos requiriendo express
const express = require('express');
//esto nos va a permitir traer la logica  para poder declarar las rutas unicamnete define las rutas
const router = express.Router();
//aqui hablamos al middle +ware bodyparser para poder trabajar con un json 
const bodyParser = require('body-parser');
//hay que importar modelos 
const models = require('../db/models');
router.use(bodyParser.json());

//{
  //  id: 1,
      ///url: "wwww.algo.com/imaagen",
     // description:"La imagen Mas chida",
    // name: "la imagen "
//}




// esta ruta se va encargar de mostrar nuestrar imagenes que tenemos guardadas vamos a recibir una imagen y 
//le vamos a devolver a quien haga la peticion esa misma imagen sequelize 
//models lo importamos y nos va a atrer mimages finall nos regresa promesa con su metodo then y le pasamos un oarametro
//images y devolvemos images con send
router.get("/",(req,res,next)=>{
   models.images.findAll().then((images)=>{
    res.send(images);
   })
})
//esta ruta es para crear o mandar ahora algo creado las rutas en este caso tienen = "/" esto se puede hacer//
router.post('/', (req,res,next)=>{
    const data = req.body;
    models.images.create(data).then((image)=>{
        res.send(image);
    })
})

router.post('/:id',(req,res,next)=>{
    const posicion = req.params.id;
    models.images.create(data).then((images)=>{
        res.send(images);
    })
  })
  router.get('/:id',(req,res,next)=>{
      const posdel = req.param.id;
   models.images.findById(id).then((image)=>{
       res.send(image);
   })
  })

router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    const data = req.body;
    models.images.findById(id).then((image)=>{
        image.update(data).then((image)=>{
            res.send(image);
        })
    })

})


module.exports = router;