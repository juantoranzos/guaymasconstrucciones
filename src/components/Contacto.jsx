import React from 'react';
import Map from './Map';
import { Row, Col, Container, Button, Form } from 'react-bootstrap';
import { Mails, MapPin, Phone, SendHorizontal } from 'lucide-react';

export const Contacto = () => {
  return (
    <section data-aos="fade" id="contacto" className="d-block pb-4"  >
      <div className="p-3">
        <h2 className="text-center display-5 py-4 prefooter">Consultas y presupuestos</h2>
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
              <Form data-aos="fade">
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nombre: Escribe tu nombre completo"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email: Escribe tu direccion de correo electronico"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Mensaje"
                    className="shadow-sm"
                    style={{ borderRadius: '10px' }}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button
                    type="submit"
                    data-aos='fade-up'
                    className="w-50 shadow btn-lg"
                    style={{
                      borderRadius: '10px',
                      backgroundColor: '#043055',
                      color: '#fff',
                      fontWeight: '600',
                    }}
                  >
                    Enviar <SendHorizontal size={23} />
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='text-center  py-4 contact '>
        <ul className='list-unstyled'>
          <li><MapPin /> <a>Dr Fernandez, K4139 Santa María, Catamarca</a></li>
          <li><Mails /> <a>construccionesguaymas@gmail.com</a> </li>
          <li><Phone /> <a>+54 3838602357</a></li>
        </ul>
      </div>
    </section>
  );
};
