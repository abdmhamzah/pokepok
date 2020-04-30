import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function PokemonListCard(props){
  const history = useHistory()

  return (
    <>
      <Container>
          <Row>
            {props.pokemons.map(pokemon => {
              return (
                <Col key={ pokemon.id } sm={4} md={3} lg={3} className="my-2">
                  <Image 
                    src={ pokemon.imageUrl }
                    fluid
                    className="card"
                    onClick={ () => history.push(`/pokemons/${pokemon.id}`) }
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