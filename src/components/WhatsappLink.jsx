import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

export const WhatsappLink = () => {
    const numero = "543838602382";
    const mensaje = "Hola!, Quiero solicitar un presupuesto";
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;
  return (
    <>
    <a className="whatsapp-btn" href={url} target="_blank" rel="noopener noreferrer">
    <FaWhatsapp />

    </a>
    </>
  )
}
