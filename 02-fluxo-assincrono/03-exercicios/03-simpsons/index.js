const fs = require('fs')
 fs.readFile('./simpsons.json', 'utf-8', (err, data) => {
   if(err) throw new Error('Não lido');
  
   let arrayJson = JSON.parse(data)

  console.log(arrayJson.map((result) => `${result.id} - ${result.name}` ));
 });

function searchId (id) {
  return new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf-8', (err, data) => {
      if(err) reject(new Error('Arquivo rejeitado'));

      let arrayJson = JSON.parse(data);

      const findId = arrayJson.find((r) => r.id == id )

      resolve(findId)
    })
  })
}

searchId(2)
  .then((data) => {
    console.log(data)
  })
  .catch((e) => console.error(e.message));
