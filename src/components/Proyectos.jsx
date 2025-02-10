import React from 'react'
import { useState } from 'react';
import img from '../img/todaslasmaquinas.jpeg'
import img2 from '../img/nieve2.jpeg'
import img3 from '../img/livent.jpeg'
import img4 from '../img/camioncargado.jpeg'
import img5 from '../img/panelsolar.webp'
import img6 from '../img/minacieloabierto.webp'
import img7 from '../img/maquinascargando.webp'
import img8 from '../img/personal2.webp'
import img9 from '../img/personal.webp'
const images = [
    { id: 1, src: img , alt: 'Proyecto 1', title: 'Vehiculos' },
    { id: 2, src: img2, alt: 'Proyecto 2', title: 'Transporte' },
    { id: 3, src: img3 , alt: 'Proyecto 3', title: 'Minas' },
    { id: 4, src: img4, alt: 'Proyecto 4', title: 'Transporte Pesado' },
    { id: 5, src: img5, alt: 'Proyecto 5', title: 'Obras en la montaña' },
    { id: 6, src: img6, alt: 'Proyecto 6', title: 'Espacios de Trabajo' },
    { id: 7, src: img7, alt: 'Proyecto 7', title: 'Cargas Pesadas' },
    { id: 8, src: img9, alt: 'Proyecto 8', title: 'Personal' },
    { id: 9, src: img8, alt: 'Proyecto 9', title: 'Personal Altamente Calificado' },
  ];
export const Proyectos = () => {
    
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="container py-5" id='projects'>
    <div className="row transition-transform duration-300 hover:scale-105">
      {images.map((image) => (
        <div
          key={image.id}
          className="col-12 col-sm-6 col-md-4 mb-4"
          onClick={() => setSelectedImage(image)}
        >
          <div className="card cardd h-100 border-0 shadow-lg"  style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="card-img-top rounded"
              style={{ objectFit: 'cover', height: '250px', transition: 'opacity 0.3s ease' }}
            />
          </div>
        </div>
      ))}
    </div>

    {selectedImage && (
      <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }} onClick={() => setSelectedImage(null)}>
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body text-center p-0">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="img-fluid"
              />
              <p className="text-white mt-3">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}
