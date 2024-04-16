
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <Navbar expand="lg" className=" bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand className='ms-5' href="#">🛒 Ecommerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="pe-5 me-5 ms-auto "
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
            <Nav.Link as={Link} to="/listscat"> S/categories</Nav.Link>
            <Nav.Link as={Link} to="/listcat">Categories</Nav.Link>
            <Nav.Link as={Link} to="/listart">Article</Nav.Link>
            <Nav.Link as={Link} to="/listartcard">Article Card</Nav.Link>
            
            
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
