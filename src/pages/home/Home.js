import React from 'react'
import Banner from '../../components/banner/Banner'
import Cardmine from '../../components/Cardmine'
import {Container} from 'react-bootstrap'
import IMAGES from '../../imgs/index'
import DATA from './home_cards_info'

const Home = () => {
  return (
    <>
    
      {/* <Banner link={'http://coopcardales.com.ar/Imagenes/Trabajador-Index.png'}> */}
      <Banner link= {IMAGES.home.banner}>
          <h1>LOS CARDALES LDT</h1>
          <p>Cooperativa de Servicios Públicos y Sociales</p>
      </Banner>
      <Container>
        <h1 className='page_title'>Conoce nuestros proyectos</h1>

        <div className='cards'>

          {DATA.map((currentValue, index) => {
            return (
            <Cardmine
            key={index}
            title = {currentValue.title} 
            text= {currentValue.text}
            subtitle = {currentValue.subtitle}
            img= {currentValue.img}
            link = {currentValue.link}/>)
          })}
        </div>

      </Container>
    </>
    )
}

export default Home