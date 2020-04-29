import { createStore } from 'redux'

const initialState = {
  pokemons: []
}

function reducer(state = initialState, action){
  return state
}

const store = createStore(reducer)

export default store