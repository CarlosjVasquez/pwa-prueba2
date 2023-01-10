import { useRouter } from 'next/router';
import Button from '../../Button';
import * as S from './CreditFinish.styles';

export const CreditFinish = () => {
  const amount = localStorage.getItem('amount');
  const router = useRouter();

  const sendData = () => {
    router.push('/dashboard');
  };

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage>
            <S.ImgDifierelo />
          </S.BannerImage>
        </div>
        <div className="d-flex justify-content-center">
          <img src="../icons/checkSuccess.svg" />
        </div>
        <div className="d-flex justify-content-center pt-4">
          <S.TextTitle>¡Disfruta de tu crédito!</S.TextTitle>
        </div>
        <div className="d-flex row justify-content-center pt-4">
          <div className="d-flex justify-content-center">
            <S.TextConditions>El monto disponible es:</S.TextConditions>
          </div>
          <div className="d-flex justify-content-center pt-3">
            <S.TextAmpount>{amount}</S.TextAmpount>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 mx-5">
          <Button text="Aceptar" handleClick={sendData} disabled={false} />
        </div>
        <div className="d-flex flex-column mx-5">
          <div className="d-flex">
            <S.TextConditions>
              Recuerda que podrás utilizar tu crédito en los negocios afiliados
              y hacer los pagos en cuotas
            </S.TextConditions>
          </div>
          <div className="d-flex pt-3 pb-3">
            <S.TextConditions>
              Enviamos un correo con el contrato y demás terminos del crédito
              podrás consultarlo tmabien en nuestra plataforma en todo momento
            </S.TextConditions>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default CreditFinish;
