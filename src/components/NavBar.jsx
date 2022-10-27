import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink className="navbar-brand" to={'/'}>
          <img src="/assets/logo.jpg" alt='logo' width="60px"/>
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/"> */}
            {/* </Nav.Link> */}
            <NavLink className="nav-link active" to={'/'}>Inicio</NavLink>
            <NavDropdown title="Series" id="basic-nav-dropdown">
              {/* <NavDropdown.Item> */}
                <NavLink className="nav-link" to={'/category/Sandman'}>Sandman</NavLink>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item> */}
                <NavLink className="nav-link" to={'/category/100Balas'}>100 Balas</NavLink>
              {/* </NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item> */}
                <NavLink className="nav-link" to={'/category/YTLM'}>Y El Ultimio Hombre</NavLink>
              {/* </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;