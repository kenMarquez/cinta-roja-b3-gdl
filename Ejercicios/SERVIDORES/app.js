const request = require("request");

const options = {
    url:"https://icanhazdadjoke.com/search?term=cat",
    headers:{
        'Accept':'application/json'
    }
}

request(options, (error,response,body)=>{
    body = JSON.parse(body);
    console.log("EL BODY",body.results);
})


const request = require('request');
const buscarPorTermino = (termino) => {
    return new Promise((resolve, reject) => {
        const options = {
            url: "https://icanhazdadjoke.com/search?term=" + termino,
            headers: {
                'Accept': 'application/json'
            }
        }
        
        request(options, (error, response, body) => {
            if (error !== null) {
                return reject(error);
            }
            body = JSON.parse(body);
            resolve(body.results[0]);
        });
    })
}

buscarPorTermino("trump").then((chiste) => {
    console.log(chiste);
}).catch((error) => {
    console.log(error);
})
