import React from 'react'
import { Header } from '../components/Header'
import { Navegacion } from '../components/Navegacion'
import { Servicios } from '../components/Servicios'
import { Historia } from '../components/Historia'
import { Proyectos } from '../components/Proyectos'
import { Contacto } from '../components/Contacto'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
    <Navegacion />
    <Header />
    <Servicios />
    <Historia />
    <Proyectos />
    <Contacto />
    <Footer />
    </>
  )
}