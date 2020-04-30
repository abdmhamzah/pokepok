import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducerCardList from './reducers/reducerCardList'
import reducerMyCard from './reducers/reducerMyCard'

const reducer = combineReducers({
  reducerCardList,
  reducerMyCard
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store