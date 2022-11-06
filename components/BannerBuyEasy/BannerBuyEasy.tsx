import Row from "react-bootstrap/Row";
import * as S from "./BannerBuyEasy.styles";

const BannerBuyEasy: React.FunctionComponent = () => {
  return (
    <section className="d-flex">
      <S.TextContainer fluid>
        <Row className="mx-0">
          <S.Col md="6">
            <S.CardImg variant="top" src="/img/beautiful-smiling-young.png" />
          </S.Col>
          <S.Col md="6">
            <h1>
              Comprar nunca <br />
              fue tan fácil
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              elementum habitant commodo eget. Turpis sed netus malesuada
              ultrices dolor.
            </p>
            <button onClick={() => console.log("click")}>
              <h6>Comprar ahora</h6>
            </button>
          </S.Col>
        </Row>
      </S.TextContainer>
    </section>
  );
};

export default BannerBuyEasy;
