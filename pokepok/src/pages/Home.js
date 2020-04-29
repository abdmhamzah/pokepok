import React from 'react'

import PokemonListCard from '../components/PokemonListCard'
import FormPokemon from '../components/FormPokemon'

import useFetch from '../hooks/useFetch';

export default () => {
  const apiURL = 'https://api.pokemontcg.io/v1/cards'
  const [pokemons, loading, error, reFetch] = useFetch(apiURL)

  return (
    <>
      <FormPokemon findPokemon={(input) => reFetch(input)}/>
      <hr/>
      {loading && <p>Loading...</p>}
      {error && <p>Error Loading Page</p>}
      {!loading && !error && <PokemonListCard pokemons={ pokemons }/>}
    </>
  )
}