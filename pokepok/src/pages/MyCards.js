import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import PokemonListCard from '../components/PokemonListCard'

import { Button } from 'react-bootstrap'

export default () => {
  const history = useHistory()
  const { myCards } = useSelector(state => state.reducerMyCard)

  return (
    <>
      {myCards.length === 0 && 
        <>
          <div data-testid="list-mycard" className="empty-detail">
            <div className="d-flex justify-content-md-center my-2">
              <h2>Oops.. it seems Empty</h2>
            </div>
            <div className="d-flex justify-content-md-center my-2">
              <Button onClick={ () => history.push(`/`) } variant="success" >Get My Card</Button>
            </div>
          </div>
        </>
      }
      {myCards.length !== 0 && 
        <>
          <div data-testid="list-mycard">
            <div className="d-flex justify-content-md-center my-2">
              <h2>My Cards</h2>
            </div>
            <PokemonListCard pokemons={ myCards }/>
          </div>
        </>
      }
    </>
  )
}