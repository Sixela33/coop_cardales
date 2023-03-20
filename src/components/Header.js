import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import './estilos.css'

const Header = () => {

  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>

          <Navbar.Brand>LCLTD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/' >Home</Link></Nav.Link>
              <Nav.Link><Link to='/team' >El Equipo</Link></Nav.Link>
              
              <NavDropdown title="Nuestros Proyectos" id="basic-nav-dropdown">
                {/* Quedó nesteado poruqe el link sigue funcionando, dependiendo de donde clickeen en el item se utiliza el respectivo redirect
                (preferiria que usen siempre el link) */}
                <NavDropdown.Item href = "/ftth"><Link to="/ftth">FTTH</Link></NavDropdown.Item>
                <NavDropdown.Item href = "/transito"><Link to="/transito">Control de transito</Link></NavDropdown.Item>
                <NavDropdown.Item href = "/diagnosticosinteligentes"><Link to="/diagnosticosinteligentes">Diagnosticos inteligentes</Link></NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item href = "/team"><Link to="/team">Nuestro Equipo</Link></NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  )
}

export default Header