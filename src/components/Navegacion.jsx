import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsBuilding } from 'react-icons/bs';

export const Navegacion = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#043055' }} className="py-3 ">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center text-white">
          <BsBuilding className="fs-5 text-white" size={35} /> Construcciones Civiles
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: 'white'}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto">
            <Nav.Link href="#servicios" className="text-white fs-6 fs-md-5 linksitos">Servicios</Nav.Link>
            <Nav.Link href="#historia" className="text-white fs-6 fs-md-5 linksitos">Historia</Nav.Link>
            <Nav.Link href="#contacto" className="text-white fs-6 fs-md-5 linksitos">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
