import * as S from './CreditEntries.styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormEntries from '../../Form-Entries';

export const CreditEntries = () => {
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
              <a href="/dashboard">
                <img src="../icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={15} />
        </div>
        <FormEntries />
      </S.Container>
    </>
  );
};
export default CreditEntries;
