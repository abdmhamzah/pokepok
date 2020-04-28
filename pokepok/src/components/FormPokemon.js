import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'

class FormPokemon extends Component {
  render() {
    return (
      <>
        <Container className="d-flex justify-content-md-center">
          <input onChange={this.props.handleInput} className="form-control" type="text" placeholder="Enter Pokemon Name" required/>
          <Button onClick={this.props.findPokemon} variant="success" >Search</Button>
        </Container>
      </>
    )
  }
}

export default FormPokemon