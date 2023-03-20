import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Col >
          <Row className='py-3' style={{display: 'flex', justifyContent:'center'}}>Copyright &copy; CoopCardales</Row>
          <Row className='py-3' style={{display: 'flex', justifyContent:'center'}}>Contactanos en: Info@CoopCardales.com.ar</Row>
        </Col>
      </Container>
    </footer>
  )
}

export default Footer