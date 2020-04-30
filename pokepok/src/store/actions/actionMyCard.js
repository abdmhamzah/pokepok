const apiURL = 'https://api.pokemontcg.io/v1/cards'

export function setAddToMyCard(card){
  console.log(card.id)
  return (dispatch, getState) => {
    fetch(`${apiURL}?id=${card.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_MY_CARDS', payload: data.cards[0] })
      })
      .catch(err => console.log(err))
  }
}