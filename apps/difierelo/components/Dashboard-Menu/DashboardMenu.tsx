import { useRouter } from 'next/router';
import * as S from './DashboardMenu.styles';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const DashboardMenu = () => {
  const router = useRouter();

  return (
    <>
      <S.StyleNavar key={'true'} bg="white" expand={'true'}>
        <Container fluid>
          <Navbar.Brand href="#">
            <S.ImgDifierelo />
          </Navbar.Brand>
          <S.StyleNavarTog aria-controls={`offcanvasNavbar-expand-${'true'}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'true'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'true'}`}
            placement="start"
          >
            <Offcanvas.Header
              closeButton
              style={{ background: 'linear-gradient(0deg, #F8F8F4, #F8F8F4)' }}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'true'}`}>
                <S.ImgDifierelo />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body
              style={{ background: 'linear-gradient(0deg, #F8F8F4, #F8F8F4)' }}
            >
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">
                  <S.ListOne>
                    <S.TextOptions>Dashboard</S.TextOptions>
                  </S.ListOne>
                </Nav.Link>
                <Nav.Link href="#">
                  <S.ListAll>
                    <S.TextOptions>Mi Perfil</S.TextOptions>
                  </S.ListAll>
                </Nav.Link>
                <Nav.Link href="#">
                  <S.ListAll>
                    <S.TextOptions>Prestamos activos</S.TextOptions>
                  </S.ListAll>
                </Nav.Link>
                <Nav.Link href="#">
                  <S.ListAll>
                    <S.TextOptions>Configuración</S.TextOptions>
                  </S.ListAll>
                </Nav.Link>
                <Nav.Link href="#">
                  <S.ListAll
                    className="pt-5 mt-5"
                    onClick={() => router.push('/')}
                  >
                    <S.TextOptions>Cerrar Sesión</S.TextOptions>
                  </S.ListAll>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </S.StyleNavar>
    </>
  );
};

export default DashboardMenu;
