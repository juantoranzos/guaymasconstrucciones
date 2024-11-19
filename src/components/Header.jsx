import React from 'react'

export const Header = () => {
  return (
    <section className="text-white p-3" style={{ backgroundColor: '#043055' }}>
    <div className="container">
      <div className="d-flex flex-column align-items-center text-center">
        <div className="mb-3 p-2">
          <h1 className="display-4 fs-4 fs-md-3 text-center" data-aos="zoom-in-down">
            Líderes en Construcción para el Sector Minero.
          </h1>
          <p className="fs-6 fs-md-5 text-light p-3" data-aos="zoom-in-up">
            Más de 18 años de experiencia y 300 proyectos exitosos en el Noroeste Argentino y zona Precordillerana.
            <br />
           <span className='text-secondary p-2'>📍Santa María, Catamarca, Argentina.</span>
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <button className="btn btn-light btn-lg p-2 m-3" aria-label="Solicitar Presupuesto">
            Solicitar Presupuesto
          </button>
          <button className="btn btn-light btn-lg p-2 m-3" aria-label="Ver Nuestros Proyectos">
            Nuestros Proyectos
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}
