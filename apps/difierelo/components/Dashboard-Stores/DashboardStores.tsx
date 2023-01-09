import * as S from './DashboardStores.styles';

export const DashboardStores = () => {
  return (
    <>
      <S.DivStore className="d-flex">
        <div className="w-100 d-flex">
          <S.DivCardStore className="card w-50 border-0">
            <S.CardImg className="card-img-top" src="./img/Rectangle 24.png" />
            <S.CardBody className="card-body p-0">
              <h5 className="card-title">Frecuento</h5>
              <p className="card-text">4 meses sin intereses en tecnología</p>
            </S.CardBody>
          </S.DivCardStore>
          <S.DivCardStore className="card w-50 border-0">
            <S.CardImg className="card-img-top" src="./img/Rectangle 26.png" />
            <S.CardBody className="card-body p-0">
              <h5 className="card-title">Artefacta</h5>
              <p className="card-text">4 meses sin intereses en tecnología</p>
            </S.CardBody>
          </S.DivCardStore>
        </div>
      </S.DivStore>
    </>
  );
};

export default DashboardStores;
