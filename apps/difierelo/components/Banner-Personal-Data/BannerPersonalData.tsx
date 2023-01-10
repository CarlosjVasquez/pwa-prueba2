import ProgressBar from 'react-bootstrap/ProgressBar';
import OnboardingPersonalData from '../OnboardingPersonalData';
import * as S from './BannerPersonalData.styles';

export const BannerPersonalData = () => {
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
        <S.DivTextSkip>
          <S.TextSkip onClick={() => console.log('saltar')}>SALTAR</S.TextSkip>
        </S.DivTextSkip>
        <OnboardingPersonalData />
      </S.Container>
    </>
  );
};
export default BannerPersonalData;
