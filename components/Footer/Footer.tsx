import * as S from "./Footer.styles";

const Footer: React.FunctionComponent = () => {
  return (
    <S.Footer>
      <footer className="text-center text-lg-start bg-light">
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <S.ImgNav />
                </h6>

                <div className="d-flex justify-content-center justify-content-lg-between">
                  <div className="me-6 d-none d-lg-block">
                    <S.txtFollow>
                      <p>Follow or socials</p>
                    </S.txtFollow>
                  </div>
                  <a className="me-2 text-reset">
                    <S.iconFb />
                  </a>
                  <a className="me-2 text-reset">
                    <S.iconInsta />
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="mb-4">Consumidores</h6>
                <p>
                  <a href="#" className="text-reset">
                    Cómo funciona
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Débito+
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Ahorros
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Ayuda
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="mb-4">Negocios</h6>
                <p>
                  <a href="#" className="text-reset">
                    Empezar
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Soluciones
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Para desarrolladores
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Soporte empresarial
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="mb-4">Acerca de Difierelo</h6>
                <p>
                  <a href="#" className="text-reset">
                    Sobre nosotros
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Carreras
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Inversores
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Prensa
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Afirmar cuidados
                  </a>
                </p>
                <p>
                  <a href="#" className="text-reset">
                    Diversidad e inclusión
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex container justify-content p-4 pie">
          <a href="#" className="me-2 text-reset">
            Privacidad
          </a>
          <a className="me-2 text-reset separador">|</a>
          <a href="#" className="me-2 text-reset">
            Términos
          </a>
          <a className="me-2 text-reset separador">|</a>
          <a href="#" className="me-2 text-reset">
            Licencias
          </a>
          <a className="me-2 text-reset separador">|</a>
          <a className="me-2 text-reset">
            © Difierelo, Inc. Todos los derechos reservados.
          </a>
        </div>
      </footer>
    </S.Footer>
  );
};

export default Footer;
