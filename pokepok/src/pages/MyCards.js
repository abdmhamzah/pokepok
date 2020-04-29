import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default () => {
  const { myCards } = useSelector(state => state.reducerMyCard)
  return (
    <>
      <hr/>
      <Container>
          <div className="d-flex justify-content-md-center my-2">
            <h2>My Cards</h2>
          </div>
          <Row>
            {myCards.map(card => {
              return (
                <Col key={ card.id } sm={4} md={3} lg={3} className="my-2">
                  <Image 
                    src={ card.imageUrl }
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