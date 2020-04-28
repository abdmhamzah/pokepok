import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

class PokemonListCard extends Component {

  render() {
    return (
      <>
        {!this.props.pokemons && 'Loading...'}
        <Container className="p-4 my-2">
          <div className="d-flex justify-content-md-center my-2">
            <h1>Pokemon Cards</h1>
          </div>
          <Row>
            {this.props.pokemons.map((pokemon) => {
              return (
                <Col sm={4} md={3} lg={3} className="my-2" key={pokemon.id}>
                  <Image 
                    src={pokemon.imageUrl}
                    fluid
                    // onClick={}
                  />
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default PokemonListCard