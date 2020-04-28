import React from 'react'
import { Container, Button } from 'react-bootstrap'

import useInput from '../hooks/useInput' // INI BUAT INPUT DGN CARA HOOKS


function FormPokemon(props) {
  const { data, onChange } = useInput('Enter Mewtwo or Anything Else')
  return (
    <>
      <Container className="d-flex justify-content-md-center">
        <input 
          onChange={ onChange } placeholder={ data }
          type="text" className="form-control"
        />
        <Button onClick={ () => props.findPokemon(data) } variant="success" >Search</Button>
      </Container>
    </>
  )
}

export default FormPokemon