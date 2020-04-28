import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonListCard from './components/PokemonListCard'
import FormPokemon from './components/FormPokemon'
import NavBar from './components/NavBar'
const apiURL = 'https://api.pokemontcg.io/v1/cards'

class App extends Component {

  constructor(){
    super()
    this.state = {
      pokemons: [],
      inputSearchPokemon: 'default',
    }
  }

  componentWillMount(){
    // console.log('---------- Will Mount')
  }

  componentDidMount(){
    // console.log('---------- Did Mount')
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemons: data.cards
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleInput = (e) => {
    console.log(e.target.value) 
    this.setState({
      inputSearchPokemon: e.target.value,
    })
  }

  findPokemon = () => {
    const { inputSearchPokemon } = this.state
    console.log('input search', inputSearchPokemon);

    fetch(`${apiURL}?name=${inputSearchPokemon}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.cards)
        this.setState({
          pokemons: data.cards
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render (){
    // console.log('---------- Render')
    return (
      <>
        <NavBar/>
        <FormPokemon 
          handleInput={ this.handleInput }
          findPokemon={ this.findPokemon }
        />
        {this.state.inputSearchPokemon}
        <hr/>
        <PokemonListCard 
          pokemons = { this.state.pokemons }
        />
      </>
    )
  }
}

export default App;