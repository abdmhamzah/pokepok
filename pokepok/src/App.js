import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonListCard from './components/PokemonListCard'
import FormPokemon from './components/FormPokemon'
const apiURL = 'https://api.pokemontcg.io/v1/cards'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pokemons: [],
      inputSearchPokemon: 'default',
    }
  }

  handleInput = (e) => {
    // console.log(e.target.value) 
    this.setState({
      inputSearchPokemon: e.target.value,
    })
  }

  addPokemon = () => {
    const { pokemons, inputSearchPokemon } = this.state
    // console.log('input search', inputSearchPokemon);
    this.setState({
      pokemons: [...pokemons, inputSearchPokemon]
    })
  }

  componentWillMount(){
    console.log('---------- Will Mount')
  }

  componentDidMount(){
    console.log('---------- Did Mount')
    fetch(apiURL)
      .then( resp => resp.json() )
      .then( data => {
        this.setState({
          pokemons: data.cards
        })
      })
  }

  render (){
    console.log('---------- Render')
    return (
      <div>
        <FormPokemon 
          handleInput={ this.handleInput }
          addPokemon={ this.addPokemon }
        />
        {this.state.inputSearchPokemon}
        <hr/>
        <h1>Pokemon Cards</h1>
        <PokemonListCard 
          pokemons = { this.state.pokemons }
        />
      </div>
    )
  }
}

export default App;