import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import { HardHat, Truck, Mountain, Shield, MonitorCog, Building2, MountainSnow } from 'lucide-react';
import  SplitText  from "../utils/SplitText";
export const Servicios = () => {
  
  return (
    <>
    <div className=''>

    <Container id="servicios" className="">
      <div className="px-4 md:px-6 lg:px-8 mx-auto text-center">
        <h2 className=" display-6 font-bold p-3 m-3 amarillo "> <span style={{color: "#0b0f2c"}}> Nuestros</span> Servicios</h2>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6 ">
                <HardHat className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Construcción Minera</h3>
                <p className="text-center text-sm text-gray-500">Infraestructura especializada para la minería.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6">
                <Truck className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Logística y Transporte</h3>
                <p className="text-center text-sm text-gray-500">Soluciones de transporte en terrenos difíciles.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6">
              <MountainSnow className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Obras de Montaña</h3>
                <p className="text-center text-sm text-gray-500">Especialistas en construcción en zonas montañosas.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6">
                <Shield className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Seguridad y Protección</h3>
                <p className="text-center text-sm text-gray-500">Utilizamos las más altas normas de seguridad.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6">
              <MonitorCog className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Mantenimiento de maquinas Industriales</h3>
                <p className="text-center text-sm text-gray-500">Aseguramos la máxima eficiencia y productividad de tus máquinas.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Card className="mb-4 shadow card" data-aos="fade" timeout={1500}>
              <Card.Body className="flex flex-col items-center p-6">
              <Building2  className=" mb-4 text-dark" size={44} color="#0b0f2c" />
                <h3 className="text-lg font-bold mb-2 iconoz">Mantenimiento de Edificios</h3>
                <p className="text-center text-sm text-gray-500">Mantenimiento integral para garantizar la continuidad operativa.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
    </div>
  </>
  )
}
