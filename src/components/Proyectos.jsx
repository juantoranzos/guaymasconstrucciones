import React from "react";
import { useState } from "react";
import img from "../img/todaslasmaquinas.jpeg";
import img2 from "../img/nieve2.jpeg";
import img3 from "../img/livent.jpeg";
import img4 from "../img/camioncargado.jpeg";
import img5 from "../img/panelsolar.webp";
import img6 from "../img/minacieloabierto.webp";
import img7 from "../img/maquinascargando.webp";
import img8 from "../img/personal2.webp";
import img9 from "../img/personal.webp";
import proyecto1 from "../../public/proyectos1.webp"
import proyecto2 from "../../public/proyectos2.webp"

import proyecto3 from "../../public/proyectos3.webp"

import { IoLocationOutline } from "react-icons/io5";
import { Building2 } from "lucide-react";
import { FaRegCalendar } from "react-icons/fa6";
import { LuWrench } from "react-icons/lu";
import CountUp from "../utils/CountUp";

export const Proyectos = () => {
  const stats = [
    { value: 300, suffix: "+", label: "Proyectos Completados" },
    { value: 10, suffix: "+", label: "Años de Experiencia" },
    { value: 50, suffix: "+", label: "Clientes Satisfechos" },
    { value: 100, suffix: "%", label: "Proyectos Exitosos" },
  ];
  return (
    <div className="container py-5 mt-5 p-2" id="projects">
      <h2 className="text-center fw-bold" data-aos="fade-up">Nuestros proyectos</h2>
      <p className="text-center fs-5 mt-5 mb-5" style={{ color: "gray" }} data-aos="fade-up">
        Cientos de proyectos finalizados con total exito en el sector minero del
        Noroeste Argentino y la región Precordillerana. Cada proyecto refleja
        nuestro compromiso con la excelencia y la innovación.
      </p>
      <div className="row fs-5">
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={proyecto1} className="card-img-top" alt="Proyecto 1" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">Expansión mina el teniente</h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Rancagua, Chile
              </span>
              <p className="card-text text-muted">
                Construcción de infraestructura para expansión de operaciones
                mineras, incluyendo túneles de acceso y plataformas
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                  Construcción Minera
                </span>
                <span className="text-muted   py-2">
                  <FaRegCalendar size={21} /> 2023
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 18 meses
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={proyecto2} className="card-img-top    " alt="Proyecto 2" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">Planta procesadora Los Andes</h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Catamarca, Argentina
              </span>
              <p className="card-text text-muted">
                Construcción de planta procesadora de minerales en zona
                montañosa con acceso limitado y condiciones climáticas extremas.
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                  Obras de Montaña
                </span>
                <span className="text-muted py-2">
                  <FaRegCalendar size={21} /> 2022
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 12 meses
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={proyecto3} className="card-img-top" alt="Proyecto 3" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">Campamento Minero Atacama</h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Antofagasta de la Sierra,
                Catamarca
              </span>
              <p className="card-text text-muted">
                Construcción y equipamiento de campamento para 500 trabajadores
                con todas las comodidades y sistemas{" "}
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                  Mantenimiento de Edificios
                </span>
                <span className="text-muted py-2">
                  <FaRegCalendar size={21} /> 2021
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 10 meses
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={img5} className="card-img-top" alt="Proyecto 3" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">
                Tunel de Acceso Salar del hombre muerto
              </h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Antofalla, Catamarca
              </span>
              <p className="card-text text-muted">
                Construcción de túnel de acceso para mina subterránea con
                tecnología avanzada y equipos especializados.
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                  Construcción Minera
                </span>
                <span className="text-muted py-2">
                  <FaRegCalendar size={21} /> 2022
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 14 meses
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={img8} className="card-img-top" alt="Proyecto 3" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">Centro de Mantenimineto MARA</h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Belén, Catamarca
              </span>
              <p className="card-text text-muted">
                Construcción de centro de mantenimiento especializado para
                maquinaria pesada minera con talleres especializados.
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                  Mantenimiento de maquinaria
                </span>
                <span className="text-muted py-2">
                  <FaRegCalendar size={21} /> 2022
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 8 meses
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 position-relative" data-aos="fade-up">
            <span className="badge bg-success position-absolute top-0 end-0 m-2">
              Completado
            </span>
            <img src={img9} className="card-img-top" alt="Proyecto 3" />
            <div className="card-body">
              <h4 className="card-title fw-bold text-black">Vias de Acceso Mina Livent</h4>
              <span className="text-muted">
                <IoLocationOutline size={22} /> Mina Livent, Salinas Grandes,
                Jujuy
              </span>
              <p className="card-text text-muted">
                Construcción de vías de acceso y plataformas logísticas para
                transporte de mineral y equipamiento pesado.
              </p>
              <div className="d-flex justify-content-between">
                <span className="text-muted py-2">
                  <Building2 />
                   Logistica y Transporte
                </span>
                <span className="text-muted py-2">
                  <FaRegCalendar size={21} /> 2022
                </span>
              </div>
              <span className="text-muted">
                <LuWrench size={25} /> 6 meses
              </span>
            </div>
          </div>
        </div>
      </div>
      <section className="banda container d-flex justify-content-between flex-wrap text-center gap-4 p-3 mt-5 rounded font-weight-bold fs-4">
        {stats.map((stat, index) => (
          <span key={index} className="flex-fill">
            <strong className="count-up-text">
              <CountUp from={0} to={stat.value} duration={1} separator="," />
              {stat.suffix}
            </strong>
            <br />
            {stat.label}
          </span>
        ))}
      </section>
      <section className="contacto-proyectos text-center p-5 mt-5 rounded ">
        <h2 className="text-center">¿Tienes un proyecto en mente?</h2>
        <p className="text-center fs-5 mt-5 mb-5" style={{ color: "gray" }}>
          Contáctanos para una consulta gratuita y descubre cómo podemos hacer
          realidad tu proyecto minero con la más alta calidad y eficiencia.
        </p>
        <a href="#contacto" className="botoncito btn btn-lg">
          Solicitar Presupuesto
        </a>
      </section>
    </div>
  );
};
