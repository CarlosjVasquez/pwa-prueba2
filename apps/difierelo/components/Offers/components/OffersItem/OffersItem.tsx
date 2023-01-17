import Button from '../../../Button';
import Props from './OffersItem.props';
import * as S from './OffersItem.styles';

const BusinessItem: React.FunctionComponent<Props> = ({
  title,
  subtitle,
  img,
  information,
  link,
}) => {
  return (
    <>
      <S.Card>
        <S.CardImg variant="top" src={img} />
        <S.CardBody>
          <h5>{title}</h5>
          <p>{subtitle}</p>
        </S.CardBody>
        <div className="d-flex pt-2 flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex">{information[0].q}</div>
            <div className="d-flex">{information[0].m}</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">{information[1].q}</div>
            <div className="d-flex">{information[1].m}</div>
          </div>
        </div>
      </S.Card>
      <div className="d-flex mx-1 pt-3">
        <Button
          text="Comprar Ahora"
          handleClick={() => console.log('comprar')}
          disabled={false}
          loading={false}
        />
      </div>
      <div className="d-flex pt-3">
        <S.TextLink>
          {link} <img src="./icons/flecha.svg" />{' '}
        </S.TextLink>
      </div>
    </>
  );
};

export default BusinessItem;
