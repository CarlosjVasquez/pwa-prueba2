import ProgressBar from 'react-bootstrap/ProgressBar';
import OnboardingPersonalData from '../OnboardingPersonalData';
import * as S from './BannerPersonalData.styles';
import { useRouter } from 'next/router';

export const BannerPersonalData = () => {
  const router = useRouter();

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <img
              className="position-absolute"
              alt="Regresar"
              src="./icons/return.svg"
              onClick={() => router.push('/validation-otp')}
            />
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
