import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'


function PokemonListCard(props){
  return (
    <>
      <Container>
          <div className="d-flex justify-content-md-center my-2">
            <h2>Pokemon Cards</h2>
          </div>
          <Row>
            {props.pokemons.map(pokemon => {
              return (
                <Col key={ pokemon.id } sm={4} md={3} lg={3} className="my-2">
                  <Image 
                    src={ pokemon.imageUrl }
                    fluid
                    className="card"
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

export default PokemonListCard