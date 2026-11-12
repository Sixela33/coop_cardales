import React from 'react'
import {Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <p className="footer-name">CoopCardales</p>
        <p>Contactanos en: <a href="mailto:Info@CoopCardales.com.ar">Info@CoopCardales.com.ar</a></p>
        <p>Copyright &copy; CoopCardales</p>
      </Container>
    </footer>
  )
}

export default Footer