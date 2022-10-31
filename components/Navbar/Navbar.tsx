import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BSNavbar from "react-bootstrap/Navbar";
import Image from "next/image";
import * as S from "./Navbar.styles";

const Navbar: React.FunctionComponent = () => {
  return (
    <S.Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <BSNavbar.Brand href="#home">
          <S.ImgNav className="d-inline-block align-top" />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarScroll" />
        <S.Collapse>
          <BSNavbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "550px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <h6>Inicio</h6>
              </Nav.Link>
              <Nav.Link href="#action2">
                <h6>¿Cómo funciona?</h6>
              </Nav.Link>
              <Nav.Link href="#">
                <h6>Negocios</h6>
              </Nav.Link>
              <Nav.Link href="#">
                <h6>Contactos</h6>
              </Nav.Link>
            </Nav>
            <S.BtnSuccess className="btn btn-w-m btn-sm">
              Iniciar Sesión
            </S.BtnSuccess>
            <S.BtnLight className="btn btn-w-m btn-sm">Regístrate</S.BtnLight>
          </BSNavbar.Collapse>
        </S.Collapse>
      </Container>
    </S.Navbar>
  );
};

export default Navbar;
