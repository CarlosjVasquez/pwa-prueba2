import { ProgressBar } from 'react-bootstrap';
import FormAddress from '../../Form-Address';
import * as S from './CreditAdds.styles';

export const CreditAdds = () => {
  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <S.ImgDifierelo />
            <div className="d-flex justify-content-end align-content-center">
              <a className="px-2">
                <img src="../icons/question.svg" />
              </a>
              <a href="/credit/credit-entry">
                <img src="../icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={30} />
        </div>
        <FormAddress />
      </S.Container>
    </>
  );
};
export default CreditAdds;
