const initialState = {
  myCards: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MY_CARDS':
      return { ...state, myCards: [...state.myCards, action.payload] }
    default:
      return state
  }
}