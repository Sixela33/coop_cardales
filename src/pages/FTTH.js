import React from 'react'
import Banner from '../components/banner/Banner'
import { Container, Image  } from 'react-bootstrap'

const FTTH = () => {
  return (
    <>
      <Banner link={process.env.PUBLIC_URL + '/imagenes/Trabajador-Index.png'}>
        <h1>FTTH</h1>
        <p>Cooperativa de Servicios Públicos y Sociales LOS CARDALES LTD.</p>
      </Banner>
      <h1>Servicios de Internet - Televisión - Telefonia utilizando Fibra Óptica al HOGAR</h1>
      <br/>
    <Container className='container-ftth'>


      <br/>
        <p>Actualmente se promociona el uso de la fibra óptica , como el mejor medio de conexión y las razones son:</p>


        <ul>
          <li><strong>Gran Capacidad:</strong>Debido a que cada vez más las compañias y usuarios necesitan mayor ancho de banda. Y la fibra es el único medio que puede realizar un suministro estable y que continuamente va en crecimiento según la demanda.</li>
          <li><strong>Alta Confiabilidad:</strong>El cable de fibra óptica está hecho de vidrio, por lo cual no se ve afectado por condiciones climáticas, por ejemplo con la lluvia o relámpagos (como otros medios).</li>
          <li><strong>Económico:</strong>Para transferir grandes cantidades de datos se requieré métodos efectivos, para evitar retardos en la trasmisión y no perder tiempo.</li>
          <li><strong>Futuro probado:</strong>Para actualizaciones futuras, solo necesitan cambiar los equipos electrónicos involucrados, no será necesario cambiar el enlace de fibra óptica.</li>
        </ul>

        <br/>

      <div className='image-container'>
        <img  src = {process.env.PUBLIC_URL + '/imagenes/ftth/GPON.jpg'}/>
      </div>

        <br/>
        <br/>
        <p><strong>En resumen</strong>, un enlace de FTTH desde el Proveedor de Servicios (ISP) hasta el Cliente (Abonado), es básicamente una Red GPON, el diagrama consta en este sentido desde una Línea Terminal Óptica (OLT), luego se transporta a través de la fibra y llega al FDT, sigue otra fibra hasta conectar con el FAT. Y por último, el tramo de conexión desde el FAT hasta la ONT dentro de la residencia de usuario final, para ofrecerles una de los Sistemas más comunes que es el Triple Play, es cual es una combinación de:</p>

        <ul>
          <li><strong>Data (Acesso a Internet).</strong></li>
          <li><strong>Vídeo (CATV en HD).</strong></li>
          <li><strong>Telefonía Residencial (VoIP).</strong></li>
        </ul>

    </Container>
    </>

  )
}

export default FTTH
