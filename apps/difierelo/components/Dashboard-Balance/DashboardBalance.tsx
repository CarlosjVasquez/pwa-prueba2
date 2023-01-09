import * as S from './DashboardBalance.styles';

export const DashboardBalance = () => {
  return (
    <>
      <S.DivCard className="card">
        <div className="card-body row justify-content-between">
          <S.DivCardBody className="row">
            <S.TextTitleCard>Balance en tu cuenta</S.TextTitleCard>
            <S.TextSubtitleCard>
              Ahora tienes en tu cuenta para usar
            </S.TextSubtitleCard>
          </S.DivCardBody>
          <S.DivCardBody1>
            <S.TextNumber1>$120</S.TextNumber1>
          </S.DivCardBody1>
        </div>
        <div className="card-footer justify-content-between d-flex">
          <S.TextFooterCard href="">Ver detalles</S.TextFooterCard>
          <S.IconFooterCard href="" />
        </div>
      </S.DivCard>
    </>
  );
};

export default DashboardBalance;
