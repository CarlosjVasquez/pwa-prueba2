import { ProgressBar } from 'react-bootstrap';
import FormAmount from '../../Form-Amount';
import * as S from './CreditMoney.styles';

export const CreditMoney = () => {
  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage>
            <S.ImgDifierelo />
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
