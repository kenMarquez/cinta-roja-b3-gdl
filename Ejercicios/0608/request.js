const request = require('request')

const llamada = str => {
  return new Promise( (resolve, reject) => {
    let url = 'https://icanhazdadjoke.com/search?term=' + str
    var options = {
      url: url,
      headers: {
        'Accept': 'application/json'
      }
    };

    request(options, (error, response, body) => {
      body = JSON.parse(body)
      if(body.results.length === 0){
        return reject(`No jokes returned`)
      }
      return resolve(body.results[0].joke)
    })
  })
}

const impresion = (msj) => {
  console.log(msj, '\n')
}


llamada('dodfsliu238ug').then(r => impresion(r))
                        .catch(e => impresion(`ERROR - ${e}`))

llamada('dog').then(r => impresion(r))
              .catch(e => impresion(`ERROR ${e}`))