import styled from 'styled-components';
import Responsive from '../../../utils/style/Responsive';
import imageBannerText from '../../../public/difierelo-512x512.png';

export const Container = styled.div`
  background: white;
  width: 38.26vw;
  padding-top: 20px;

  ${Responsive.SM} {
    width: 100%;
  }
`;

export const BannerImage = styled.div`
  background: transparent;
  width: 90%;
  margin-inline-start: 1.11vw;
  margin-bottom: 2.15vw;

  ${Responsive.SM} {
    margin-inline-start: 4.27vw;
    margin-bottom: 8.27vw;
  }
`;

export const ImgDifierelo = styled.div`
  background: url(${imageBannerText.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 8.36vw;
  min-height: 1.46vw;

  ${Responsive.SM} {
    width: 25.59vw;
    min-height: 5.6vw;
  }
`;

export const TextTitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.18vw;
  line-height: 1.53vw;
  align-items: center;
  color: #11171d;
  text-align: center;

  ${Responsive.SM} {
    font-size: 3.95vw;
    line-height: 3.82vw;
  }
`;

export const TextConditions = styled.h5`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.95vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 3.26vw;
    line-height: 2.78vw;
  }
`;

export const TextAmpount = styled.h2`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 3.89vw;
  line-height: 2.36vw;
  color: #4544ed;

  ${Responsive.SM} {
    font-size: 9.72vw;
    line-height: 5.9vw;
  }
`;

export const BtnContinue = styled.div`
  align-items: baseline;
  margin-top: 1.8vw;

  ${Responsive.SM} {
  }
`;
