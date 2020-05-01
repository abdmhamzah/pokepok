import React from 'react'
import { Container, Button } from 'react-bootstrap'

import useInput from '../hooks/useInput' // INI BUAT INPUT DGN CARA HOOKS


function FormPokemon(props) {
  const { data, onChange } = useInput('Enter Mewtwo or Another Pokemon Name')
  return (
    <>
      <Container data-testid="homepage-searchform" className="d-flex justify-content-md-center my-4">
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