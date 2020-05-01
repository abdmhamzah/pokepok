import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function NavBar(){
  return (
    <>
      <Navbar data-testid="navbar" className="d-flex justify-content-md-center" expand="lg" variant="light" bg="light">
        <div style={{ width: '95%',  }} className="d-flex justify-content-between custom-gradient">
          <Link to="/" data-testid="to-home" style={{ color: '#086FA1' }} className="navbar-brand text-center font-weight-bold" >POKEPOK</Link>
          <Link to="/my-cards" data-testid="to-myCard" style={{ color: '#086FA1' }} className="nav-item nav-link text-center font-weight-bold">My Cards</Link>
        </div>
      </Navbar>
    </>
  )
}

export default NavBar