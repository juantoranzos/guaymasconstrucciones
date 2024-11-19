import React from 'react'

const Map = () => {
  return (
    <div className="map-container w-100 h-100 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.454588720288!2d-66.0458044163999!3d-26.697920674759345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421e54ab468302f%3A0xe4606b00557d1010!2sGuaymas%20Construcciones%20Civiles!5e0!3m2!1ses-419!2sar!4v1705972910963!5m2!1ses-419!2sar"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map