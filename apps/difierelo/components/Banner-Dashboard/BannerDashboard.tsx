import DashboardBalance from '../Dashboard-Balance';
import DashboardCarrusel from '../Dashboard-Carrusel';
import DashboardGrafic from '../Dashboard-Grafic';
import DashboardHistory from '../Dashboard-History';
import DashboardMenu from '../Dashboard-Menu';
import DashboardStores from '../Dashboard-Stores';
import * as S from './BannerDashboard.styles';
import { useRouter } from 'next/router';

export const BannerDashboard = () => {
  const router = useRouter();

  const onLoading = () => {
    router.push('/credit/credit-entry');
  };

  return (
    <>
      <S.ContainerList>
        <DashboardMenu />
      </S.ContainerList>
      <S.ContainerInformation>
        <S.TextUser className="row justify-content-between">
          <div className="w-50">
            <S.CreditButton onClick={onLoading}>
              Solicitar Nuevo Crédito
            </S.CreditButton>
          </div>
          <div className="w-50 row justify-content-end">
            ¡Hola José! <S.IconUser />
          </div>
        </S.TextUser>
        <S.ContainerDash className="row p-0 m-0 bg-white">
          <S.InfoDash1 className="p-0 m-0">
            <S.TextTitle className="d-flex w-100">
              ¿Qué quieres comprar hoy?
            </S.TextTitle>
            <S.InfoCard>
              <DashboardBalance />
            </S.InfoCard>
          </S.InfoDash1>
          <S.InfoDash2 className="p-0 m-0">
            <S.DivTitleInfoPastel>
              <S.TextTitle>Categorías de Compras</S.TextTitle>
            </S.DivTitleInfoPastel>
            <DashboardGrafic />
          </S.InfoDash2>
          <S.InfoDash3>
            <div className="w-100 row position-absolute">
              <div className="w-50 p-0 m-0">
                <S.TextSubtitle className="d-flex w-100 pt-2">
                  Historial de Compras
                </S.TextSubtitle>
              </div>
              <div className="w-50 d-flex justify-content-end align-items-start m-0">
                <S.PayButton>Hacer Pago</S.PayButton>
              </div>
              <div className="w-100 d-flex">
                <DashboardHistory />
              </div>
            </div>
          </S.InfoDash3>
          <S.InfoDash4>
            <div className="w-100 row d-flex position-absolute">
              <S.TextSubtitle className="pt-5">
                Tiendas afiliadas
              </S.TextSubtitle>
            </div>
            <div className="w-100 d-flex">
              <DashboardStores />
            </div>
          </S.InfoDash4>
          <S.InfoDash5>
            <div className="w-100 row d-flex position-absolute">
              <S.TextSubtitle className="pt-2">
                Nuevas ofertas disponibles
              </S.TextSubtitle>
            </div>
            <div className="d-flex">
              <DashboardCarrusel />
            </div>
          </S.InfoDash5>
        </S.ContainerDash>
      </S.ContainerInformation>
    </>
  );
};
export default BannerDashboard;
