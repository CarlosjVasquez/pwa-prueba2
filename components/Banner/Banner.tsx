import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import * as S from "./Banner.styles";

const Banner: React.FunctionComponent = () => {
  return (
    <section className="d-flex">
      <S.TextContainer fluid>
        <Row className="mx-0">
          <Col md="6">
            <h1>Disfruta tu día comprando</h1>
            <p>
              Compra Ahora y <span className="highlight">Paga después</span> con
              Difierelo
            </p>
          </Col>
        </Row>
      </S.TextContainer>
      <S.ImgBg />
    </section>
  );
};

export default Banner;
