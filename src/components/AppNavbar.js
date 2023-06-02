import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

export default function AppNavbar(){
	return(
		<>
	  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='sticky-top shadow-sm'>
      <Container fluid className='py-2 px-3 px-lg-5' >
        <Navbar.Brand href="#home" className='font-weight-bold'>RomGar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link  href="/#welcome" start>Home</Nav.Link>
            <Nav.Link  href="/#about" end>About</Nav.Link>
            <Nav.Link  href="/#history" end>History</Nav.Link>
            <Nav.Link  href="/#projects" end>Projects</Nav.Link>
            <Nav.Link  href="/#contact" end>Contact</Nav.Link>
            <Button as={NavLink} to="/login" className='btn-warning px-5 mx-0 mx-lg-2'>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	  </>
		);
}