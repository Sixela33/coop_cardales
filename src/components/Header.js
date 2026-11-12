import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

const PROJECT_PATHS = ['/ftth', '/transito', '/diagnosticosinteligentes', '/energia', '/estatuto']

const Header = () => {
  const { pathname } = useLocation()
  const onProject = PROJECT_PATHS.includes(pathname)

  return (
    <header>
      <Navbar variant='dark' expand="lg" sticky="top" collapseOnSelect className="site-nav">
        <Container>

          <Navbar.Brand as={NavLink} to="/">
            <img className="brand-mark" src={`${process.env.PUBLIC_URL}/cardo-icon.png`} alt="" />
            <span className="brand-text">
              <span className="brand-name">Los Cardales</span>
              <span className="brand-sub">Cooperativa</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/team">El Equipo</Nav.Link>

              <NavDropdown title="Nuestros Proyectos" id="basic-nav-dropdown" className={onProject ? 'active-section' : undefined}>
                <NavDropdown.Item as={NavLink} to="/ftth">FTTH</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/transito">Control de transito</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/diagnosticosinteligentes">Diagnosticos inteligentes</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/energia">Distribucion electrica</NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/estatuto">Nuestro Estatuto Constitutivo</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  )
}

export default Header