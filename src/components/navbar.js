import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TPLogo from "../img/tabLogo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function Bar() {
  return (
    <div className='navBar'>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
          <img
              alt= "pumpkin"
              src={TPLogo}
              width="60px"
              height="50px"
              className="d-inline-block align-top"
          />
            </Navbar.Brand>
            <Navbar.Brand style={{color: "#d2d6d3"}}>eCommerce-Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="color-nav" style={{color: "#d2d6d3"}}>Home</Nav.Link>
              <Nav.Link href="/products" className="color-nav" style={{color: "#d2d6d3"}}>Catalogue</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <IconButton color="primary" aria-label="add to shopping cart">
                <ShoppingCartIcon />
                </IconButton>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
