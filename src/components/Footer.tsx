import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='container'>
    <div className='row'>
      <div className="col-md-4">
        <h3>Información de Contacto</h3>
        <p><i className="fas fa-map-marker-alt"></i> 123 Calle Principal, Ciudad, País</p>
        <p><i className="fas fa-phone"></i> +1 234 567 890</p>
        <p><i className="fas fa-envelope"></i> info@touristTreasures.com</p>
      </div>
      <div className="col-md-4">
        <h3>Enlaces Útiles</h3>
        <ul className="list-unstyled">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Idioma</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
        </ul>
      </div>
      <div className="col-md-4">
        <h3>Síguenos</h3>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <p>&copy; 2024 Visita los tesoros del mundo. Todos los derechos reservados.</p>
      </div>
    </div>
  </div>
      </footer>
    </div>
  )
}

export default Footer