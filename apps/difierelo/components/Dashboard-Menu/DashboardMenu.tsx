import { useRouter } from 'next/router';
import * as S from './DashboardMenu.styles';

export const DashboardMenu = () => {
  const router = useRouter();

  return (
    <>
      <S.ImgDifierelo />
      <S.ListOne>
        <S.TextOptions>Dashboard</S.TextOptions>
      </S.ListOne>
      <S.ListAll>
        <S.TextOptions>Mi Perfil</S.TextOptions>
      </S.ListAll>
      <S.ListAll>
        <S.TextOptions>Prestamos activos</S.TextOptions>
      </S.ListAll>
      <S.ListAll>
        <S.TextOptions>Configuración</S.TextOptions>
      </S.ListAll>
      <S.ContainerLogout>
        <S.TextOptions className="btn" onClick={() => router.push('/')}>
          Cerrar Sesión
        </S.TextOptions>
      </S.ContainerLogout>
    </>
  );
};

export default DashboardMenu;
