import { useRouter } from 'next/router';
import Button from '../../Button';
import * as S from './CreditError.styles';

export const CreditError = () => {
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
          <img src="../icons/Sad.svg" />
        </div>
        <div className="d-flex justify-content-center pt-4">
          <S.TextTitle>¡Lo sentimos!</S.TextTitle>
        </div>
        <div className="d-flex row justify-content-center pt-4">
          <div className="d-flex justify-content-center">
            <S.TextConditions>
              Revisamos tu información, por el momento no <br />
              podemos otorgarte un crédito
            </S.TextConditions>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-4 mx-5">
          <Button text="Reintentar" handleClick={sendData} disabled={false} />
        </div>
      </S.Container>
    </>
  );
};
export default CreditError;
