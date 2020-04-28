import React, { Component } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

class PokemonListCard extends Component {

  render() {
    return (
      <>
        {!this.props.pokemons && 'Loading...'}
        <Container>
          <Row>
            {this.props.pokemons.map((pokemon, i) => {
              return (
                <Col sm={4} md={3} lg={3} className="my-2" key={i}>
                  <Image 
                    src={pokemon.imageUrl}
                    fluid
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