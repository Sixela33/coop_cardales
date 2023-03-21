import React from 'react'
import Banner from '../components/banner/Banner'
import { Container } from 'react-bootstrap'
import IMAGES from '../imgs/index'

const RxDiagnostics = () => {
  return (
    <>
    <Banner link={IMAGES.rx.banner}>
      <h1>Diagnósticos inteligentes</h1>
      <p>Cooperativa de Servicios Públicos y Sociales LOS CARDALES LTD.</p>
    </Banner>
    <h1>Un Asistente Virtual Para Los Médicos</h1>
    <br/>
    <Container className='container-ftth'>

      <p>Nuestro equipo de IA ha desarrollado un sistema capaz de diagnosticar una de las patologías más prominentes en estos dias, <strong>la neumonía</strong>. Somos capaces de detectar esta patología en el tórax de los pacientes con una certeza del 97.6%.</p>
      <p>Nuestra meta actual es ampliar la cantidad de patologías que el sistema es capaz de diagnosticar.</p>

      <br/>
    <div className='image-container' style={{display: 'flex', flexFlow: 'row wrap'}}>
      <div style={{ margin: '10px'}}><img  src = {IMAGES.rx.ejemplo1}/></div>
      <div style={{ margin: '10px'}}><img  src = {IMAGES.rx.ejemplo2}/></div>
      {console.log(IMAGES)}
    </div>

    
    </Container>

    </>
  )
}

export default RxDiagnostics