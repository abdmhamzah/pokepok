import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  )
}

export default App;