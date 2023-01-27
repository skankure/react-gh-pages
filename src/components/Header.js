import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Container className='g-0 box-shadow'> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">Jalebi Jodi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className=''>
          <Nav.Link href="#deets">PROFILE REVIEWS</Nav.Link>
          <Nav.Link href="#deets">COACHING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  )
}

export default Header;