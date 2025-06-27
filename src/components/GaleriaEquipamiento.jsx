import img from "../img/todaslasmaquinas.jpeg";
import img2 from "../img/nieve2.jpeg";
import img3 from "../img/livent.jpeg";
import img4 from '../img/camioncargado.jpeg'
import img5 from '../img/panelsolar.webp'
import img6 from '../img/minacieloabierto.webp'
import img7 from '../img/maquinascargando.webp'
import img8 from '../img/personal2.webp'
import img9 from '../img/personal.webp'
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";


const GaleriaEquipamiento = () => {
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
      const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="container my-4" id="equipamiento">
       <h2 className='text-center p-3 m-3 amarillo display-6' data-aos="fade">Nuestro Equipamiento</h2>
      {/* Encabezado */}
      <div className="titulo-equipamiento p-3 rounded text-center mb-3" data-aos="fade-up">
        En Construcciones Civiles contamos con un equipamiento de última
        generación para garantizar la calidad y eficiencia en nuestros
        proyectos.
      </div>
       <div className=" rounded" data-aos="fade-up">
        <img src={img} alt="" className="img-principal-equipamiento" onClick={() => setSelectedImage(images[0])}/>
      </div>

      {/* Galería */}
      <div className="row">
        {/* Imagen principal (columna grande) */}
        <div className="col-12 col-md-6 mb-3 mt-3">
          <div className="bg-secondary text-white d-flex justify-content-center align-items-center rounded " data-aos="fade">
            <img
              src={img4}
              alt="Equipamiento Principal"
              className="img-equipamiento"
                onClick={() => setSelectedImage(images[3])}
            />
          </div>
        </div>

        {/* Texto lateral */}
        <div className="col-12 col-md-6 mb-3">
          <div className="text-equipamiento p-3 rounded h-100 d-flex justify-content-center align-items-center" data-aos="fade" >
            <ul className="list-unstyled" data-aos="fade-up">
                 <li className="mb-2">
                    <FaCheckCircle color="#0b0f2c"/>
                    <strong className="p-2">PERSONAL</strong>
                </li>
              <li className="mb-2">
                <FaCheckCircle color="#0b0f2c"/>
                 <strong className="p-2">CAMIONES</strong>
              </li>
              <li className="mb-2">
                <FaCheckCircle color="#0b0f2c"/>
                <strong className="p-2">CAMIONETEAS</strong> 
              </li>
              <li className="mb-2">
                <FaCheckCircle color="#0b0f2c"/>
                 <strong className="p-2">MAQUINARIA PESADA</strong>
              </li>
              <li className="mb-2">
                <FaCheckCircle color="#0b0f2c"/>
                 <strong className="p-2">MAQUINARIA LIVIANA</strong>
              </li>
                <li className="mb-2">
                    <FaCheckCircle color="#0b0f2c"/>
                     <strong className="p-2">EQUIPAMIENTO DE SEGURIDAD</strong>
                </li>
               
            </ul>
          </div>
        </div>

        {/* Dos imágenes pequeñas */}
      
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
  );
};

export default GaleriaEquipamiento;
