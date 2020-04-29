import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PokemonListCard from '../components/PokemonListCard'
import FormPokemon from '../components/FormPokemon'
import CardDetail from '../components/CardDetail'

// import useFetch from '../hooks/useFetch';

export default () => {
  const apiURL = 'https://api.pokemontcg.io/v1/cards'
  // const [pokemons, loading, error, reFetch] = useFetch(apiURL)

  const dispatch = useDispatch()
  const { pokemons } = useSelector(state => state.reducerCardList) 

  // console.log(pokemons)

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_POKEMONS', payload: data.cards })
      })
      .catch(err => console.log(err))
  }, [dispatch])

  function reFetch(input){
    fetch(`${apiURL}?name=${input}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_SEARCH_POKEMONS', payload: data.cards })
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <FormPokemon findPokemon={(input) => reFetch(input)}/>
      <hr/>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error Loading Page</p>} */}
      {/* {!loading && !error && <PokemonListCard pokemons={ pokemons }/>} */}
      <CardDetail />
      <PokemonListCard pokemons={ pokemons }/>
    </>
  )
}