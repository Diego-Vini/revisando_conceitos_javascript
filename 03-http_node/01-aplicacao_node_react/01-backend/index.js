const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = 3002;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', (req, res) => {
  res.json(recipes)
})

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } =  req.query;
  console.log(name)
  console.log(maxPrice)

  
  const filteredRecipes = recipes.filter((r) => (
    r.name.includes(name) && r.price < parseInt(maxPrice)));

  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Id não encontrado' });

  res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const { id, name, price} = req.body;

  recipes.push({ id, name, price });

  res.status(201).json({message: 'Recipe create successfully'});
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
 
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));
  console.log(recipeIndex)
  if (recipeIndex === -1) return res.status(404).json({ message: 'Id não encontrado' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();

});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Rodando aplicação na porta ${PORT}`)
});