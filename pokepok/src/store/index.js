import { createStore, combineReducers } from 'redux'
import reducerCardList from './reducers/reducerCardList'
import reducerMyCard from './reducers/reducerMyCard'

const reducer = combineReducers({
  reducerCardList,
  reducerMyCard
})

const store = createStore(reducer)

export default store