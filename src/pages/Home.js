import React from 'react'
import Banner from '../components/banner/Banner'
import Cardmine from '../components/Cardmine'
import {Container} from 'react-bootstrap'

const DATA = [
  {title: 'FTTH',
    subtitle:'Fibra Óptica al Hogar.',
    text: 'La fibra óptica es la forma más eficiente para transmitir información que tenemos a nuestra disposición en estos días. Por medio de estos le proveeremos con una red wifi y una telefonía de primera calidad.',
    img: process.env.PUBLIC_URL + '/imagenes/home/fibraoptica.png',
    link: '/ftth'

   },
  {title: 'Control De Transito Inteligente',
    subtitle:'Control de transito',
    text: 'Nuestro equipo especializado en IA ha investigado una forma de control de tránsito de gran eficiencia. Mediante este método seremos capaces de detectar y clasificar los vehículos, sus velocidades, esto podrá ser utilizado para gestionar adecuamente cualquier estructura vial.',
    img: process.env.PUBLIC_URL + '/imagenes/home/autos.png',
    link: '/transito'
   },

  {title: 'Ayudando a los médicos',
    subtitle:'Diagnóstico inteligente de radiografias',
    text: 'Nuestro equipo especializado en IA ha desarollado una red neuronal capaz de detectar patologías en las radiografías de tórax',
    img: 'https://www.msdmanuals.com/-/media/manual/home/images/5/2/3/523-dilated-cardiomyopathy-chest-x-ray-s116-springer-high_es.jpg?mw=350&amp;thn=0&amp;sc_lang=es',
    link: '/diagnosticosinteligentes'
   
  },
]

const Home = () => {
  return (
    <>
    
      {/* <Banner link={'http://coopcardales.com.ar/Imagenes/Trabajador-Index.png'}> */}
      <Banner link={process.env.PUBLIC_URL + '/imagenes/Programador.png'}>
          <h1>LOS CARDALES LDT</h1>
          <p>Cooperativa de Servicios Públicos y Sociales</p>
      </Banner>
      <Container>
        <h1 className='page_title'>Conoce nuestros proyectos</h1>

        <div className='cards'>

          {DATA.map((currentValue, index) => {
            return (
            <Cardmine
            id='card_home'
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