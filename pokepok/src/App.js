import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard'
import FormPokemon from './components/FormPokemon'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pokemons: ['Bulbasaur', 'Charlizard', 'Pikachu'],
      inputSearchPokemon: 'default'
    }
  }

  findPokemon = (e) => {
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

  render (){
    return (
      <div>
        <FormPokemon 
          findPokemon={ this.findPokemon }
          addPokemon={ this.addPokemon }
        />
        {this.state.inputSearchPokemon}
        <hr/>

        <h1>List Pokemon</h1>
        <PokemonCard 
          text="testing"
          pokemons = { this.state.pokemons }
        />
      </div>
    )
  }
}

export default App;