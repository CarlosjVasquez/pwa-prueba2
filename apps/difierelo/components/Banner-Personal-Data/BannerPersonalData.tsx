import ProgressBar from 'react-bootstrap/ProgressBar';
import OnboardingPersonalData from '../OnboardingPersonalData';
import * as S from './BannerPersonalData.styles';

export const BannerPersonalData = () => {
  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <S.ImgDifierelo />
            <div className="d-flex justify-content-end align-content-center">
              <a className="px-2">
                <img src="./icons/question.svg" />
              </a>
              <a href="/information">
                <img src="./icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={30} />
        </div>
        <OnboardingPersonalData />
      </S.Container>
    </>
  );
};
export default BannerPersonalData;
