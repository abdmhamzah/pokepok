import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Loading from '../components/Loading'

import { 
  Figure, 
  Container, 
  Row, 
  Col,
  Button
} from 'react-bootstrap'

import { getDetailCard } from '../store/actions/actionCardList'
import { setAddToMyCard } from '../store/actions/actionMyCard'

function CardDetail(){
  const dispatch = useDispatch()
  const { detailCard, loading } = useSelector(state => state.reducerCardList)
  const { id }  = useParams()

  useEffect(() => {
    dispatch(getDetailCard(id))
  }, [dispatch, id])

  function addToMyCard(card){
    dispatch(setAddToMyCard(card))
  }
  
  return (
    <>
      {!loading && 
        <>
          <Container className="d-flex justify-content-md-center my-4">
            <Row>
              <Col>
                <Figure>
                  <Figure.Image className="card-detail" src={ detailCard.imageUrl }/>
                </Figure>
              </Col>
              <Col className="card-detail" style={{ backgroundColor: "white" }}>
                <Figure >
                  <Figure.Caption>
                    <h4> {detailCard.name} </h4>
                    <p> Pokedex ID: {detailCard.nationalPokedexNumber} </p>
                    <p> HP: {detailCard.hp} </p>
                    <p> Rarity: {detailCard.rarity} </p>
                    <p> Card Series: {detailCard.series} </p>
                    <p> Card Set: {detailCard.set} </p>
                    <Button onClick={ () => { addToMyCard(detailCard) } } variant="success" >Add to My Card</Button>
                  </Figure.Caption>
                </Figure>
              </Col>
            </Row>
          </Container>
        </>
      }
      {loading && <Loading/>}
    </>
  )
}

export default CardDetail