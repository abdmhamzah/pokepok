import React, { Component } from 'react'

class FormPokemon extends Component {
  render() {
    return (
      <>
        <input type="text" onChange={this.props.findPokemon} />
        <button onClick={this.props.addPokemon} >Add</button>
      </>
    )
  }
}

export default FormPokemon