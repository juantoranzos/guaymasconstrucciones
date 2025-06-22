import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsBuilding } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import logo1 from "../../public/logo1.webp";
import "./Navegacion.css";

export const Navegacion = () => {
  return (
    <Navbar expand="lg" className="p-4 navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand ICONO + TEXTO (solo desktop) */}
        <div className="d-none d-lg-flex align-items-center gap-2">
          <img
            src={logo1}
            alt="Logo"
            className="rounded-circle img-logo-navbar"
          />
          <span className="fw-bold text-white">CONSTRUCCIONES CIVILES</span>
        </div>

        {/* Brand ICONO solo mobile */}
        <div className="d-flex d-lg-none align-items-center gap-2">
          <img
            src={logo1}
            alt="Logo"
            className="rounded-circle img-logo-navbar"
          />
        </div>
        {/* Botón hamburguesa */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-label="Abrir menú de navegación"
          className="ms-2 border-0 shadow-none"
        >
          <FaBars color="#fff" size={28} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#servicios" className="text-white linksitos">
              SERVICIOS
            </Nav.Link>
            <Nav.Link href="#historia" className="text-white linksitos">
              HISTORIA
            </Nav.Link>
            <Nav.Link href="#proyectos" className="text-white linksitos">
              PROYECTOS
            </Nav.Link>
            <Nav.Link href="#equipamiento" className="text-white linksitos">
              EQUIPAMIENTO
            </Nav.Link>
            <Nav.Link href="#contacto" className="text-white linksitos">
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
