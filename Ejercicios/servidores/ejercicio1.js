const request = require('request');



const showJoke = (search) => {
    return new Promise((resolve,reject) => {

        var options = {
            url: `https://icanhazdadjoke.com/search?term=${search}`,
            headers: {
                'Accept': 'application/json'
            }
        };

      
        request(options,(error,response,body)=>{
            if(error){
                return reject(error);
            }
            body = JSON.parse(body);
            let number = (Math.random() * (body.results.length));
            resolve(body.results[Math.trunc(number)]);
        });
        
    });
};

showJoke("cat")
    .then((res)=>{console.log(res)})
    .catch();