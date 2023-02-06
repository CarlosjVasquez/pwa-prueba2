import * as S from './BannerLogin.styles';
import { useRouter } from 'next/router';

export const BannerLogin = () => {
  const router = useRouter();

  return (
    <S.Container className="col-md-6">
      <S.DivImg>
        <img
          className="position-absolute pt-2"
          alt="Regresar"
          src="./icons/return.svg"
          onClick={() => router.push('/')}
        />
        <S.ImgDifierelo />
      </S.DivImg>
      <S.DivTitle>
        <S.TextTitle>Disfruta tu día comprando</S.TextTitle>
      </S.DivTitle>
      <S.DivSubtitle>
        <S.TextSubtitle>
          Compra Ahora y <small>Paga después</small> con Difierelo
        </S.TextSubtitle>
      </S.DivSubtitle>
      <S.DivHugs className="d-flex ">
        <S.DivHug className="d-flex">
          <S.IconHug src="/icons/garantes.svg" />
          <S.TextHug>Sin Garantes</S.TextHug>
        </S.DivHug>
        <S.DivHug className="d-flex">
          <S.IconHug src="/icons/papeleo.svg" />
          <S.TextHug>Sin Papeleos</S.TextHug>
        </S.DivHug>
        <S.DivHug className="d-flex">
          <S.IconHug src="/icons/pago.svg" />
          <S.TextHug>Pagos Flexibles</S.TextHug>
        </S.DivHug>
        <S.DivHug className="d-flex">
          <S.IconHug src="/icons/linea.svg" />
          <S.TextHug>100% en línea</S.TextHug>
        </S.DivHug>
      </S.DivHugs>
      <S.DivImgFull className="justify-content-end">
        <S.ImgBg />
      </S.DivImgFull>
    </S.Container>
  );
};
export default BannerLogin;
