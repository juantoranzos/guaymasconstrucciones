import React from 'react'
import logo from '../img/logo.png'
import { Clock, ShieldCheck } from 'lucide-react'
import { Row, Col, Container } from 'react-bootstrap'


export const Historia = () => {
  return (
    <>
    <div className='historia' id="historia" data-aos="fade" >

      
            <h2 className='text-center p-3 m-3 amarillo'>Nuestra Historia</h2>
            <Row className="align-items-center">
                <Col xs={ 12 } md={ 6 } className="text-center">
                    <img src={ logo } alt="Logo" className="img-fluid w-75" />
                </Col>
                <Col xs={ 12 } md={ 6 }>
                    <h3 className='p-2 m-2'>Desde 2006, Construyendo el futuro.</h3>
                    <p className='p-2 m-2 text-justify text-secondary'>
                        Fundada en 2006, Construcciones Civiles ha emergido como líder en la industria de la construcción para el sector minero. Con más de 18 años de experiencia, hemos completado más de 300 proyectos exitosos en el Noroeste argentino y la zona Precordillerana, consolidando nuestra posición como expertos en construcciones especializadas para la minería.
                    </p>

                    <Row className='p-2 m-2'>
                        <Col xs={ 6 } className="d-flex ">
                            <ShieldCheck size={ 40 } />
                            <p className="m-2">Seguridad.</p>
                        </Col>
                        <Col xs={ 6 } className="d-flex ">
                            <Clock size={40} />
                            <p className="m-2">+18 años</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
    
    </div>
    </>
  )
}
