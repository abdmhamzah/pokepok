import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'


class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Navbar>
      </>
    )
  }
}

export default NavBar