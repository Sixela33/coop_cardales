import React from 'react'
import Banner from '../components/banner/Banner'
import {Container} from 'react-bootstrap'
import IMAGES from '../imgs/index'

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
  nombre: "División FTTH",
  integrantes: [
    {cargo: "Lider", nombre: "Jose Maria Vazquez", titulo: "Ing."}
  ]},
  {
  nombre: "Nuestro Equipo de IA",
  integrantes: [
    {cargo: "Lider", nombre: "Alexis Jankowski"}
  ]},
  {
  nombre: "División de Energia",
  integrantes: [
    {cargo: "Lider", nombre: "Jorge Carlos Jankowski", titulo: "Ing."}
  ]}
]

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