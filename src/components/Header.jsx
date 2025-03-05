import React from 'react'
import BlurText from '../utils/BlurText';

export const Header = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <section className="text-white p-3" style={{ backgroundColor: '#043055' }}>
      <div className="container">
        <div className="d-flex flex-column align-items-center text-center">
          <div className="p-2">
            <BlurText text='Líderes en construcción para la minería' delay={90}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className=" picoso" />
            <BlurText text='Más de 18 años de experiencia y 300 proyectos exitosos en el Noroeste Argentino y zona Precordillerana.' delay={90}
              animateBy="words"
              direction="top"
              className='subtitulo'
              onAnimationComplete={handleAnimationComplete} >
            </BlurText>
            <BlurText text='📍Santa María, Catamarca' delay={90}
              className='subtitulo'
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}></BlurText>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <button className="btn btn-light btn-lg botoncito" onClick={handleScrollToContact} aria-label="Solicitar Presupuesto">
              Solicitar Presupuesto
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}
