import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#" style={{marginLeft :"10px"}}>Vie Art</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="me-auto">
          <Nav.Link href="#" active>
            Home
          </Nav.Link>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex" role="search" style={{marginRight:"10px"}}>
          <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
          <Button variant="outline-dark" type="submit">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );

};

export default NavbarComponent;
