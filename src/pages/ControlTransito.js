import React from 'react'
import Banner from '../components/banner/Banner'
import { Container } from 'react-bootstrap'

const ControlTransito = () => {
  return (
    <>
    
    <Banner link={process.env.PUBLIC_URL + '/imagenes/Auto-camaras-conductores.png'}>
      <h1>Control de Transito</h1>
      <p>Cooperativa de Servicios Públicos y Sociales LOS CARDALES LTD.</p>
    </Banner>
    <h1>Servicio de Control de Transito Basado en IA</h1>
    <br/>
    <Container className='container-ftth'>
      <br/>
        <p>Hemos desarrollado una herramienta basada en la Inteligencia Artificial para Detectar, Contar y Clasificar los siguientes Objetos en las Rutas:</p>
        <strong>
          <ul style={{listStyle: 'circle'}}>
            <li>Automóviles</li>
            <li>Motos</li>
            <li>Bicicletas</li>
            <li>Colectivos</li>
            <li>Camiones</li>
            <li>Personas</li>
            <li>Más</li>
          </ul>
        </strong>

        <p>Gracias a la detección y clasificación de objetos en tránsito, se puede analizar los datos y clasificarlos en bandas horarias. Asimismo, también es posible medir sus velocidades y direcciones, esta información es sumamente útil a la hora de tomar decisiones críticas.</p>

        <br/>

      <div className='image-container'>
        <img  src = {process.env.PUBLIC_URL + '/imagenes/transito/vision.jpg'}/>
      </div>

    </Container>
    </>
  )
}

export default ControlTransito
