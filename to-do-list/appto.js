const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const models = require('./db/models');
router.use(bodyParser.json());

router.get("/",(req,res,next)=>{
    models.lists.findAll().then((lists)=>{
     res.send(lists);
    })
 })

 router.post('/crea', (req,res,next)=>{
    const data = req.body;
    models.lists.create(data).then((lista)=>{
        res.send(lista);
    })
})

router.post('/:tarea1',(req,res,next)=>{
    const posicion = req.params.tarea;
    models.lists.create(data).then((lists)=>{
        res.send(lists);
    })
  })
  router.get('/:encuentra',(req,res,next)=>{
      const posdel = req.param.tarea;
   models.lists.findById(tarea).then((tarea)=>{
       res.send(tarea);
   })
  })

router.put('/:actualiza',(req,res,next)=>{
    const tarea = req.params.tarea;
    const data = req.body;
    models.lists.findById(tarea).then((lista)=>{
        lista.update(data).then((lista)=>{
            res.send(lista);
        })
    })

})




module.exports = router;