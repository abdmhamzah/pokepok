import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import store from './store'

import NavBar from './components/NavBar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import {
  Home,
  MyCard,
  CardDetail
} from './pages'

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/my-cards">
            <MyCard/>
          </Route>
          <Route exact path="/pokemons/:id">
            <CardDetail/>
          </Route>
          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;