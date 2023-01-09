import { ProgressBar } from 'react-bootstrap';
import FormAddress from '../../Form-Address';
import * as S from './CreditAdds.styles';

export const CreditAdds = () => {
  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage>
            <S.ImgDifierelo />
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
