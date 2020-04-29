import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBar(){
  return (
    <>
      <Navbar className="d-flex justify-content-md-center" expand="lg" variant="light" bg="light">
        <div style={{ width: '95%',  }} className="d-flex justify-content-between custom-gradient">
          <Link to="/" style={{ color: '#086FA1' }} className="navbar-brand text-center font-weight-bold" >POKEPOK</Link>
          <Link to="/my-cards" style={{ color: '#086FA1' }} className="nav-item nav-link text-center font-weight-bold">My Cards</Link>
        </div>
      </Navbar>
    </>
  )
}

export default NavBar