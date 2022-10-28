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
          <Image
            src="/difierelo-512x512.png"
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarScroll" />
        <BSNavbar.Collapse
          id="navbarScroll"
          style={{
            backgroundColor: "#f7f7f7",
            paddingBottom: 10,
            paddingInlineStart: 10,
          }}
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "550px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              href="#action2"
              style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
            >
              ¿Cómo funciona?
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
            >
              Negocios
            </Nav.Link>
            <Nav.Link
              href="#"
              style={{ color: "black", fontSize: 14, fontWeight: "bold" }}
            >
              Contactos
            </Nav.Link>
          </Nav>
          <button
            className="btn btn-w-m btn-success btn-sm"
            style={{
              borderRadius: 10,
              backgroundColor: "#4237AA",
              borderColor: "#4237AA",
              height: 45,
              width: 130,
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Iniciar Sesión
          </button>
          <button
            className="btn btn-w-m btn-light btn-sm"
            style={{
              marginLeft: 10,
              borderRadius: 10,
              borderColor: "#4237AA",
              height: 45,
              width: 130,
              fontSize: 14,
              fontWeight: "bold",
              color: "#4237AA",
              borderStyle: "solid",
              borderWidth: 2,
            }}
          >
            Regístrate
          </button>
        </BSNavbar.Collapse>
      </Container>
    </S.Navbar>
  );
};

export default Navbar;
