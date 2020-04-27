import React from 'react'

class FormPokemon extends React.Component {
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