const initialState = {
  pokemons: [],
  detailCard: {},
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POKEMONS' :
      return { ...state, pokemons: action.payload, loading: false }
    case 'SET_SEARCH_POKEMONS' :
      return { ...state, pokemons: action.payload, loading: false }
    case 'SET_CARD_DETAIL' :
      return { ...state, detailCard: action.payload, loading: false }
    case 'SET_LOADING' :
      return { ...state, loading: action.payload }
    case 'SET_ERROR' :
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}