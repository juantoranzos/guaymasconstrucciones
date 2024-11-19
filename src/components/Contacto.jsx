import React from 'react';
import Map from './Map';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';

export const Contacto = () => {
  return (
    <section id="contacto" className="d-block" style={{ backgroundColor: '#043055' }}>
      <div className="p-3">
        <h2 className="text-center text-white display-5 py-4">Consultas y presupuestos</h2>
        <p className="text-center text-white fs-5 px-3">
          Nuestro servicio es 365 días al año. Contáctanos o solicita un presupuesto utilizando el formulario y te responderemos a la brevedad.
        </p>
      </div>
      <Container
        fluid
        className="d-flex align-items-center px-3 py-4"
        style={{ backgroundColor: '#043055' }}
      >
        <Row className="w-100 gy-4">
          {/* Mapa */}
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '400px' }}
          >
            <div className="w-100" style={{ maxWidth: '600px', height: '100%' }}>
              <Map />
            </div>
          </Col>

          {/* Formulario */}
          <Col lg={6} md={12} className="d-flex justify-content-center align-items-center">
            <div
              className="p-4 shadow-lg w-100"
              style={{ borderRadius: '15px', backgroundColor: '#fff', maxWidth: '500px' }}
            >
              <h2
                className="text-center text-dark mb-4"
                style={{ fontWeight: '600', fontSize: '1.8rem' }}
              >
                Formulario de Contacto
              </h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Empresa"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Describa su proyecto"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-100 shadow btn-lg"
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#043055',
                      color: '#fff',
                      fontWeight: '600',
                    }}
                  >
                    Enviar datos
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
