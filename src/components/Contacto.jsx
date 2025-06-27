import Map from "./Map";
import { Row, Col, Container, Button, Form } from "react-bootstrap";
import { Mails, MapPin, Phone, SendHorizontal } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';


export const Contacto = () => {
  const [state, handleSubmit] = useForm("xzzgyvzr");

  return (
    <section data-aos="fade" id="contacto" className="d-block pb-4">
      <div className="p-3">
        <h2 className="text-center display-5 py-4 prefooter">
          Consultas y presupuestos
        </h2>
        <p className="text-center text-white fs-5 px-3">
          Nuestro servicio es 365 días al año. Contáctanos o solicita un
          presupuesto utilizando el formulario y te responderemos a la brevedad.
        </p>
      </div>
      <Container
        fluid
        className="d-flex align-items-center px-3 py-4"
        style={{ backgroundColor: "#0b0f2c" }}
      >
        <Row className="w-100 gy-4">
          {/* Mapa */}
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "400px" }}
          >
            <div
              className="w-100"
              style={{ maxWidth: "600px", height: "100%" }}
              data-aos="fade-up"
            >
              <Map />
            </div>
          </Col>

          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className="p-4 shadow-lg w-100"
              style={{
                borderRadius: "15px",
                backgroundColor: "#fff",
                maxWidth: "500px",
              }}
              data-aos="fade-up"
            >
              <h2
                className="text-center mb-4"
                style={{
                  fontWeight: "600",
                  fontSize: "1.8rem",
                  color: "#0b0f2c",
                }}
              >
                Formulario de Contacto
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#0b0f2c" }}>Email</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    placeholder="contacto@gmail.com"
                    className="shadow-sm"
                    style={{ borderRadius: "10px" }}
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label style={{ color: "#0b0f2c" }}>
                    Tu consulta
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Escribe aquí tu consulta..."
                    className="shadow-sm"
                    style={{ borderRadius: "10px" }}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="w-50 shadow btn-lg"
                    disabled={state.submitting}
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#0b0f2c",
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    Enviar <SendHorizontal size={23} />
                  </Button>
                </div>

                {state.succeeded && (
                  <p className="text-success mt-3 text-center fw-bold">
                    Tu mensaje fue enviado con exito. <br />
                    ¡Gracias por contactarte con nosotros!
                  </p>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center  py-4 contact " data-aos="fade">
        <ul className="list-unstyled p-2 m-2 fs-5">
          <li>
            <MapPin /> <a>Dr Fernandez, K4139 Santa María, Catamarca</a>
          </li>
          <li>
            <Mails /> <a>luisguaymas@construccionesciviles.com</a>{" "}
          </li>
          <li>
            <Phone /> <a>+54 3838602867</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
