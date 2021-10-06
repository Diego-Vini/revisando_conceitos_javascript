import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/recipes')
    .then((response) => response.json())
    .then((recipes) => this.setState(
      {
        recipes,
        isLoading: false,
      },
    ));
  }

  render() {
    const { recipes, isLoading } = this.state;
    return (
      <div>
        <div>
          {isLoading}
          <div className="card-group">
            {recipes.map((recipe) => (
              <div key={recipe.id}>
                <h1>{recipe.name}</h1>
                <span>Preço: {recipe.price} reais - </span>
                <span>Tempo de preparo: {recipe.waitTime} minutos</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

}
export default App;
