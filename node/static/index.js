var express = require('express')
var app = express()
var fs = require('fs')
var bodyParser = require('body-parser')
//usamos middleware body-parser
app.use(bodyParser.json())
var users=[]
/**
 * abrimos el archivo json
 */

fs.readFile("user.json",{encoding: 'utf8'},(err,data)=>{
    users=JSON.parse(data);
    //es lo mismo de abajo
   /* JSON.parse(data).forEach(elemento=>{
        //users.push(`${data.username} ${data.role}: ${data.email}`);
        users.push(elemento);
        console.log(users);
    });*/
});
/**
 * Escupe todos los usuarios del arreglo
 */
app.use('/users', (req,res)=>{
    res.send(users);

}); 

app.post('/user', (req, resp) =>{
    var user = req.body.user
    if(user.username !== undefined && user.username.length > 0) {
        if(user.email !== undefined && user.email.length > 0) {
            users.push(user);
            resp.send(user);
            
        } else {
            resp.status(400).send('Invalid email field')
        }
    } else {
        resp.status(400).send('Invalid username field')
    }
    
});


//muestra el current date del server


app.use('/:username', (req,res)=>{
    var username=req.params.username;
    var resultado=users.filter(user=>{
        if(user.username===username)
            return true;
        else 
            return false;
    
    });
    if(resultado.length>0)
        res.send(resultado[0]);
    else    
        res.status(404).send('Username not found');

}); 

app.use('/', (req,res)=>{
    res.send(new Date());

}); 

var server = app.listen(process.env.PORT, ()=>{
    console.log('Server running at http://localhost:'+server.address().port)
});



