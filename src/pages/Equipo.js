import React from 'react'
import Banner from '../components/banner/Banner'
import {Container} from 'react-bootstrap'

const EQUIPOS = [
  {
  nombre: "La Comisión Directiva",
  integrantes:[
    {cargo: "Presidente", nombre: "Jorge Carlos Jankowski", titulo: "Ing."},
    {cargo: "Secretario", nombre: "Cesar Octavio Di Pietro Peralta", titulo: "Lic."},
    {cargo: "Tesorero", nombre: "Martin Antonio Rodriguez", titulo: "Ing."},
    {cargo: "Síndico Titular", nombre: "Juan Luis Camoretti Mercado", titulo: "Arq."},
    {cargo: "Síndico Suplente", nombre: "Jose Maria Vazquez", titulo: "Ing."},
  ]},
  {
  nombre: "Nuestro Equipo de FTTH",
  integrantes: [
    {cargo: "Lider", nombre: "Jose Maria Vazquez", titulo: "Ing."}
  ]},
  {
  nombre: "Nuestro Equipo de IA",
  integrantes: [
    {cargo: "Lider", nombre: "Alexis Jankowski"}
  ]},
]

const Equipo = () => {
  return (
    <>
      <Banner link={process.env.PUBLIC_URL + '/imagenes/meetingroom2.png'}>
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
          console.log(currentValue.nombre)
        })}
      </Container>
    </>
  )
}

export default Equipo