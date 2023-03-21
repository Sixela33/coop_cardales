import React from 'react'
import Banner from '../../components/banner/Banner'
import {Container} from 'react-bootstrap'
import IMAGES from '../../imgs/index'
import EQUIPOS from './equipos_info'

const Equipo = () => {
  return (
    <>
      <Banner link={ IMAGES.meetingRoom }>
          <h1>CONOCE A NUESTRO EQUPIO</h1>
          <p>Cooperativa de Servicios Públicos y Sociales LOS CARDALES LTD.</p>
      </Banner>
      <Container id='equipos'>
        {EQUIPOS.map((currentValue, index) => {
          return(
            <div key={index} style={{width: '50%'}}>
              <h1 className = 'page_title'>{currentValue.nombre}</h1>
              {currentValue.integrantes.map((currentVal, index2)=> {
                return (
                  <div key={index2}>
                    <h3><strong>{currentVal.cargo}</strong></h3>
                    <p><small>{currentVal.titulo}</small>  {currentVal.nombre}</p>
                  </div>

                )
              })}
            </div>

          )
        })}
      </Container>
    </>
  )
}

export default Equipo