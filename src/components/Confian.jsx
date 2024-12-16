import 'pure-react-carousel/dist/react-carousel.es.css';
import livent from '../img/liventlogo.webp'
import mansfield from '../img/mansfieldnuevo.jpg_999_180.webp'
import mara from '../img/mara-verticual-1.webp'
import ymad from '../img/Nuevo-logo-YMAD-1-vectorizado-250px.webp'

export const Confian = () => {
    return (
        <>
            <h2 className='text-center p-3 m-3 mb-5 amarillo' data-aos="fade-up">Empresas que confian en Construcciones Civiles</h2>
            <div className='d-flex flex-wrap justify-content-center p-3 m-3' data-aos="fade-up" >
              <a href='https://cmsalta.com.ar/asociados/livent-minera-del-altiplano-s-a-mina-fenix/' target='_blank'><img src={livent} alt=""  className='img-fluid  confian p-2 m-2' data-aos="fade-up" /></a>
              <a href='https://cmsalta.com.ar/asociados/mansfield-minera-s-a-mina-lindero/' target='_blank'><img src={mansfield} alt="" className='img-fluid confian p-2 m-2' data-aos="fade-up" /></a> 
              <a href='https://proyectomara.com.ar/mara/' target='_blank'><img src={mara} alt="" className='img-fluid confian p-2 m-2' data-aos="fade-up" /></a> 
              <a href='https://ymad.ar/' target='_blank'><img src={ymad} alt="" className='img-fluid confian p-2 m-2' data-aos="fade-up" /></a>
            </div>

        </>
    )
}
