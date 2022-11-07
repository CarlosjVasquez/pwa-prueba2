import Row from "react-bootstrap/Row";
import * as S from "./BannerBuy.styles";

const BannerBuy: React.FunctionComponent = () => {
  return (
    <section className="d-flex">
      <S.TextContainer fluid>
        <Row className="mx-0">
          <S.Col md="6">
            <h1>
              ¿Cómo comprar <br />
              con difierelo?
            </h1>
            <S.CardImgInfo1 src="/img/Group 127.png" />
            <h4>Ir de compras</h4>
            <p>
              Compra en tus tiendas favoritas en línea o en la tienda y paga
              después con Difierelo. Nos verá al finalizar la compra, o puede
              solicitar una tarjeta virtual en la aplicación Difierelo.
            </p>

            <S.TitleTwo>Métodos de pago</S.TitleTwo>
            <p>
              Tienes el control. Elije la opción de pago que funcione para ti y
              tu presupuesto: desde 4 pagos sin intereses cada 2 semanas hasta
              cuotas mensuales.
            </p>
            <S.TitleThree>Realiza tus pagos</S.TitleThree>
            <p>
              Administra tus pagos en la aplicación Difierelo o en línea, y
              configura AutoPay para no perder un pago. Pero si lo hace, nunca
              pagará ninguna tarifa.
            </p>
          </S.Col>
          <S.Col md="6">
            <S.CardImg variant="top" src="/img/happy-man.png" />
          </S.Col>
        </Row>
      </S.TextContainer>
    </section>
  );
};

export default BannerBuy;
