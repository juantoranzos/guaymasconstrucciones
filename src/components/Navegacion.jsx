import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsBuilding } from "react-icons/bs";

export const Navegacion = () => {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#0b0f2c" }}
      className="p-4 "
    >
      <Container>
        <Navbar.Brand
          href="#"
          className="d-flex align-items-center text-white"
          style={{ fontSize: "2rem", fontWeight: "bold" }} // Aumenta el tamaño del texto
        >
          <BsBuilding className=" text-white p-2" size={42} />  CONSTRUCCIONES CIVILES
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex-wrap">
            <Nav.Link
              href="#servicios"
              className="text-white linksitos"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.5rem 0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              SERVICIOS
            </Nav.Link>
            <Nav.Link
              href="#historia"
              className="text-white linksitos"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.5rem 0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              HISTORIA
            </Nav.Link>
            <Nav.Link
              href="#historia"
              className="text-white linksitos"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.5rem 0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              PROYECTOS
            </Nav.Link>
            <Nav.Link
              href="#equipamiento"
              className="text-white linksitos"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.5rem 0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              EQUIPAMIENTO
            </Nav.Link>
            <Nav.Link
              href="#contacto"
              className="text-white linksitos"
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                marginLeft: "0.5rem",
                marginRight: "0.5rem",
                padding: "0.5rem 0.75rem",
                whiteSpace: "nowrap",
              }}
            >
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
