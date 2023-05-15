import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
  const {isAuthenticated} = useSelector(state=>state.user);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={'/'} >Home</Nav.Link>
            <Nav.Link as={NavLink} to={'/about'} >About</Nav.Link>
            {
              isAuthenticated ? null : 
            <Nav.Link as={NavLink} to={'/login'} >Login</Nav.Link>
            }
            {
              isAuthenticated ? null : 
            <Nav.Link as={NavLink} to={'/register'} >Register</Nav.Link>
            }
            <Nav.Link as={NavLink} to={'/profile'} >Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;