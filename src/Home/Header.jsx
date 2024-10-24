import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar id='nav'>
        <Container>
          <Navbar.Brand href="#home" className='text-primary'>
          <i className="fa-solid fa-mobile-screen text-primary" />{' '}   
            Electronics
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header