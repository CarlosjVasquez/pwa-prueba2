import * as S from './CreditEntries.styles';
import ProgressBar from 'react-bootstrap/ProgressBar';
import FormEntries from '../../Form-Entries';

export const CreditEntries = () => {
  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage>
            <S.ImgDifierelo />
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
