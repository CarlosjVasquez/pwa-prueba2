import * as S from "./BusinessItem.styles";

const BusinessItem: React.FunctionComponent = () => {
  return (
    <S.Card>
      <S.CardImg variant="top" src="/img/Rectangle 24.png" />
      <S.CardBody>
        <h5>Frecuento</h5>
        <p>4 meses sin intereses en tecnología</p>
      </S.CardBody>
    </S.Card>
  );
};

export default BusinessItem;
