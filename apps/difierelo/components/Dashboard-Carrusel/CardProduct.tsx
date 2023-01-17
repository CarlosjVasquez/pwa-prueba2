import * as S from './DashboardCarrusel.styles';

interface CardProductProps {
  title: string;
  subtitle: string;
  img: string;
}

export const CardProduct = (props: CardProductProps) => {
  return (
    <S.DivCardStore className="card border-0">
      <S.CardImg className="card-img-top" src={props.img} />
      <S.CardBody className="card-body p-0">
        <S.CardBodyTitle className="card-title">{props.title}</S.CardBodyTitle>
        <p className="card-text">{props.subtitle}</p>
        <a
          href="#"
          className="btn mt-2 justify-content-center align-items-center d-flex"
        >
          Compra Ahora
        </a>
      </S.CardBody>
    </S.DivCardStore>
  );
};
export default CardProduct;
