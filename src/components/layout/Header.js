import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import url from '../images/brand.png';

const Header = () => {
  return (
    <Container className='g-0'> 
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand>
        <img
              src={url}
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className=''>
          <Nav.Link href="#deets">PROFILE REVIEWS</Nav.Link>
          <Nav.Link href="#deets">CONSULTING</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  )
}

export default Header;