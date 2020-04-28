import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonListCard from './components/PokemonListCard'
import FormPokemon from './components/FormPokemon'
import NavBar from './components/NavBar'


function App() {
  const apiURL = 'https://api.pokemontcg.io/v1/cards'
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => setPokemons(data.cards))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const findPokemon = (searchedPokemon) => {
    setLoading(true)
    fetch(`${apiURL}?name=${searchedPokemon}`)
      .then(res => res.json())
      .then(data => setPokemons(data.cards))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error Loading Page</p>
  }

  return (
    <>
      <NavBar/>
      <FormPokemon findPokemon={ (input) => findPokemon(input) }/>
      <hr/>
      <PokemonListCard pokemons={ pokemons }/>
    </>
  )
}

export default App;