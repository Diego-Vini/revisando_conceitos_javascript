const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises')

const app = express();

app.use(bodyParser.json());
const PORT = 3302;

function readFile() {
    const data = fs.readFile('./simpsons.json', 'utf-8')
        .then((r) => JSON.parse(r))

    return(data);
}


app.get('/simpsons', async(req, res) => {
  const simpsons = await readFile();

  res.status(200).json(simpsons)
})

app.get('/simpsons/:id', async(req, res) => {
  const { id } = req.params;
  console.log(id)
  const simpsons = await readFile();

  const simpsonIndex = simpsons.find((r) => r.id === id)

  if(!simpsonIndex) return res.status(404).json({ message: 'simpson not found' })
  
  res.status(200).json(simpsonIndex)
})

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})