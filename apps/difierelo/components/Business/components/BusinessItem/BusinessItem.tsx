import * as S from './BusinessItem.styles';
import Props from './BusinessItem.props';

const BusinessItem: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <S.Card>
      <S.CardImg variant="top" src="/img/Rectangle 24.png" />
      <S.CardBody>
        <h5>{name}</h5>
        <p>4 meses sin intereses en tecnología</p>
      </S.CardBody>
    </S.Card>
  );
};

export default BusinessItem;
