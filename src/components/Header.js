import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import './estilos.css'

const Header = () => {
  const navigate = useNavigate()


  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>

          <Navbar.Brand onClick = {() => {navigate('/')}}>LCLTD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick = {() => {navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick = {() => {navigate("/team")}}>El Equipo</Nav.Link>
              
              <NavDropdown title="Nuestros Proyectos" id="basic-nav-dropdown">
                {/* Quedó nesteado poruqe el link sigue funcionando, dependiendo de donde clickeen en el item se utiliza el respectivo redirect
                (preferiria que usen siempre el link) 
                Dejo el link por el estilo, no tiene referencia
                */}
                <NavDropdown.Item onClick = {() => {navigate("/ftth")}}>FTTH</NavDropdown.Item>
                <NavDropdown.Item onClick = {() => {navigate("/transito")}}>Control de transito</NavDropdown.Item>
                <NavDropdown.Item onClick = {() => {navigate("/diagnosticosinteligentes")}}>Diagnosticos inteligentes</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick = {() => {navigate("/estatuto")}}>Nuestro Estatuto Constitutivo</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  )
}

export default Header