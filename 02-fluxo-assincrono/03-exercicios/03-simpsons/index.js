const fs = require('fs')


fs.readFile('./simpsons.json', 'utf-8', (err, data) => {
  if(err) throw new Error('Não lido');
  
  let arrayJson = JSON.parse(data)

  console.log(arrayJson.map((result) => `${result.id} - ${result.name}` ));
});

