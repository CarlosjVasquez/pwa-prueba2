import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";
import Image from "next/image";
import * as S from './Navbar.styles';

const Navbar: React.FunctionComponent = () => {
  return (
    <S.Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand href="#home">
          <Image
            src="/icon-512x512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarScroll" />
        <BSNavbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">¿Cómo funciona?</Nav.Link>
            <Nav.Link href="#">Negocios</Nav.Link>
            <Nav.Link href="#">Contactos</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </S.Navbar>
  );
}

export default Navbar;