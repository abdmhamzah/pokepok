import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PokemonListCard from '../components/PokemonListCard'
import FormPokemon from '../components/FormPokemon'
import Loading from '../components/Loading'

import { getCardList, searchPokemon } from '../store/actions/actionCardList'

export default () => {
  const { pokemons, loading, error } = useSelector(state => state.reducerCardList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardList())
  }, [dispatch])

  function reFetch(input){
    dispatch(searchPokemon(input))
  }

  return (
    <>
      {error && (
        <div class="alert alert-danger" role="alert"> 
          { error }
        </div>)
      }
      {!loading &&
        <>
          <FormPokemon findPokemon={ (input) => reFetch(input) }/>
          <hr/>
          <div className="d-flex justify-content-md-center my-2">
            <h2>Pokemon Cards</h2>
          </div>
          <PokemonListCard pokemons={ pokemons }/>
        </>
      }
      {loading && <Loading/>}
    </>
  )
}