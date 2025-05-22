import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Info A</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/esportes">Esportes</Nav.Link>
            <NavDropdown title="ReactHook's" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">UseState</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect">UseEffect</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Noticia' id='noticia'>
                <NavDropdown.Item href='/cadastro/noticia'>Cadastro Noticia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
