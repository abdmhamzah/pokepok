const apiURL = 'https://api.pokemontcg.io/v1/cards'
const Swal = require('sweetalert2')

const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export function setAddToMyCard(card){
  console.log(card.id)
  return (dispatch, getState) => {
    fetch(`${apiURL}?id=${card.id}`)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'SET_MY_CARDS', payload: data.cards[0] })
        Toast.fire({
          icon: 'success',
          title: `${card.name} Added to My Card Successfully `
        })
      })
      .catch(err => console.log(err))
  }
}