import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsBuilding } from "react-icons/bs";
import "./Navegacion.css";

export const Navegacion = () => {
  return (
    <Navbar expand="lg" className="p-4 navbar-custom">
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center text-white"
        >
          <BsBuilding className=" text-white p-2" size={42} />  CONSTRUCCIONES CIVILES
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-wrap">
            <Nav.Link
              href="#servicios"
              className="text-white linksitos"
            >
              SERVICIOS
            </Nav.Link>
            <Nav.Link
              href="#historia"
              className="text-white linksitos"
            >
              HISTORIA
            </Nav.Link>
            <Nav.Link
              href="#historia"
              className="text-white linksitos"
            >
              PROYECTOS
            </Nav.Link>
            <Nav.Link
              href="#equipamiento"
              className="text-white linksitos"
            >
              EQUIPAMIENTO
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              className="text-white linksitos"
            >
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
