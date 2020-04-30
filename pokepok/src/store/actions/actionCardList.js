const apiURL = 'https://api.pokemontcg.io/v1/cards'

export function getCardList(){
  return (dispatch, getState) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_POKEMONS', payload: data.cards })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'SET_ERROR', payload: 'Error Fetching Data from API' })
      })
  }
}

export function searchPokemon(name){
  return (dispatch, getState) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })
    fetch(`${apiURL}?name=${name}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_SEARCH_POKEMONS', payload: data.cards })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'SET_ERROR', payload: 'Invalid Pokemon Name' })
      })
  }
}

export function getDetailCard(id){
  return (dispatch, getState) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    dispatch({ type: 'SET_ERROR', payload: null })
    fetch(`${apiURL}?id=${id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_CARD_DETAIL', payload: data.cards[0] })
      })
      .catch(err => {
        console.log(err)
        dispatch({ type: 'SET_ERROR', payload: 'Failed to get Card' })
      })
  }
}