const fs = require('fs');

function readFile (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
}

readFile('./file.txt')
  .then((resolve) => console.log(`Arquivo lido com sucesso` + " " +
  `${resolve.byteLength} bytes`))
  .catch((err) => console.log(`Erro ao ler o arquivo ${err.message}`))