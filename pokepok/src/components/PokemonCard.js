import React, { Component } from 'react'

class PokemonCard extends Component {

  render() {
    console.log(this.props)
    return (
      <>
        <h1>Pokemon Card</h1>
        {this.props.pokemons.map((pokemon, i) => {
          return (
            <ul key={i}>
              <li> {pokemon} </li>
            </ul>
          )
        })}
      </>
    )
  }
}

export default PokemonCard