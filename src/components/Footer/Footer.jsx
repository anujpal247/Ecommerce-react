import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary "
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Text>copyright © {year} all rights reserved</Navbar.Text>
        <Nav>
          <Nav.Link href="#link">X</Nav.Link>
          <Nav.Link href="#link">Linked</Nav.Link>
          <Nav.Link href="#link">Youtube</Nav.Link>
          <Nav.Link href="#link">Insta</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
