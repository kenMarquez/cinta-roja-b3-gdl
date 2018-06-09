const request = require('request');
/*
request('http://www.google.com',(error, response, body)=>{
    console.log("Error: ", error);
    console.log("Response: ", response);
    console.log("Body: ", body);
});*/


//Las llaves no deben de tener mayusculas, ni otro tipo de simbolos como -
var options = {
    url: 'https://icanhazdadjoke.com/search?term=cat',
    headers: {
        'Accept': 'application/json'
    }
};

//Request sera GET si no definimos lo contrario
//la pagina por default responde con HTML, pero necesitamos especificar que queremos un json
request(options,(error,response,body)=>{
    //Lo que te regresa el body es un String, para poder utilizarlo necesitamos convertirlo a un objeto json
    body = JSON.parse(body);
    console.log("Body: ", body.results);
});




