import { ProgressBar } from 'react-bootstrap';
import FormAmount from '../../Form-Amount';
import * as S from './CreditMoney.styles';
import { useRouter } from 'next/router';

export const CreditMoney = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <img
              className="position-absolute"
              alt="Regresar"
              src="../icons/return.svg"
              onClick={() => router.back()}
            />
            <S.ImgDifierelo />
            <div className="d-flex justify-content-end align-content-center">
              <a className="px-2">
                <img src="../icons/question.svg" />
              </a>
              <a href="/credit/credit-address">
                <img src="../icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={45} />
        </div>
        <FormAmount />
      </S.Container>
    </>
  );
};
export default CreditMoney;
