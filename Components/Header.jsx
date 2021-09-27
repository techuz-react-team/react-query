import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from './Link';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Nav>
            <Nav.Link as={Link} href='/posts'>
              Posts
            </Nav.Link>
            <Nav.Link as={Link} href='/todoOp'>
              Todo operation
            </Nav.Link>
            <Nav.Link as={Link} href='/todos'>
              Todos
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
