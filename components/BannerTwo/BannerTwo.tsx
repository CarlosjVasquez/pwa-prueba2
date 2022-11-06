import Row from "react-bootstrap/Row";
import * as S from "./BannerTwo.styles";

const BannerTwo: React.FunctionComponent = () => {
  return (
    <section className="d-flex">
      <S.TextContainer fluid>
        <Row className="mx-0">
          <S.Col md="12">
            <h1>No pagarás nada por</h1>
            <h1 style={{ color: "#4544ed !important" }}>
              adelantado <img src="../img/Group 85.png" />{" "}
            </h1>
            <p>
              Paga semanal, quincenal o mensualmente <br />
              en el horario que más te convenga.
            </p>
          </S.Col>
        </Row>
        <Row>
          <S.CardImg variant="top" src="/img/hands-gesture 1.png" />
          <S.CardImgInfo1 src="/img/Group 92.png" />
          <S.CardImgInfo2 src="/img/Group 93.png" />
          <S.CardImgInfo3 src="/img/Group 89.png" />
          <S.CardImgInfo4 src="/img/Group 91.png" />
        </Row>
      </S.TextContainer>
    </section>
  );
};

export default BannerTwo;
