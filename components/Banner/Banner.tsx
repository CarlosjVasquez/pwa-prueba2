import Row from "react-bootstrap/Row";
import * as S from "./Banner.styles";

const Banner: React.FunctionComponent = () => {
  return (
    <section className="d-flex">
      <S.ImgBg />
      <S.TextContainer fluid>
        <Row className="mx-0">
          <S.Col md="6">
            <h1>Disfruta tu día comprando</h1>
            <p>
              Compra Ahora y <span className="highlight">Paga después</span> con
              Difierelo
            </p>
          </S.Col>
        </Row>
      </S.TextContainer>
    </section>
  );
};

export default Banner;
