import * as S from './DashboardGrafic.styles';

export const DashboardGrafic = () => {
  return (
    <>
      <div className="w-50">
        <S.DivIconInfo>
          <S.IconInfo />
        </S.DivIconInfo>
        <S.DivIconPastel>
          <S.IconPastel />
        </S.DivIconPastel>
      </div>
      <S.DivIconPastelList className="w-50">
        <div className="justify-content-center">
          <div className="d-flex justify-content-start align-items-center">
            <S.DivInfoPastel
              className="m-2"
              style={{ background: '#4544ED' }}
            ></S.DivInfoPastel>
            <S.TextInfoPastel>Tecnología</S.TextInfoPastel>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <S.DivInfoPastel
              className="m-2"
              style={{ background: '#7D7CF9' }}
            ></S.DivInfoPastel>
            <S.TextInfoPastel>Productos y Servicios</S.TextInfoPastel>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <S.DivInfoPastel
              className="m-2"
              style={{ background: '#1B1A9A' }}
            ></S.DivInfoPastel>
            <S.TextInfoPastel>Hogar</S.TextInfoPastel>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <S.DivInfoPastel
              className="m-2"
              style={{ background: '#AE00EB' }}
            ></S.DivInfoPastel>
            <S.TextInfoPastel>Ropa</S.TextInfoPastel>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <S.DivInfoPastel
              className="m-2"
              style={{ background: '#32284E' }}
            ></S.DivInfoPastel>
            <S.TextInfoPastel>Entretenimiento</S.TextInfoPastel>
          </div>
        </div>
        <S.DivDetailPastel>
          <S.TextDetailPastel href="">Ver detalles</S.TextDetailPastel>
        </S.DivDetailPastel>
      </S.DivIconPastelList>
    </>
  );
};
export default DashboardGrafic;
