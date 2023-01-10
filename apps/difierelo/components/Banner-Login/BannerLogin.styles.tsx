import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import imageBannerText from '../../public/difierelo-512x512.png';
import myImage from '../../public/img/banner-bg.png';

export const Container = styled.div`
  ${Responsive.SM} {
    display: none;
  }
`;

export const DivImg = styled.div`
  margin-top: 2.85vw;
  margin-left: 3.19vw;
`;

export const ImgDifierelo = styled.div`
  background: url(${imageBannerText.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 10.55vw;
  min-height: 2.85vw;

  ${Responsive.SM} {
    width: 26.39vw;
    min-height: 7.12vw;
  }
`;

export const DivTitle = styled.div`
  width: 40vw;
  margin-top: 4.93vw;
  margin-left: 4.1vw;
`;

export const TextTitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 4.51vw;
  line-height: 4.24vw;
  letter-spacing: -0.02em;
  color: #11171d;
`;

export const DivSubtitle = styled.div`
  width: 34.49vw;
  margin-top: 1.73vw;
  margin-left: 4.1vw;
`;

export const TextSubtitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 1.67vw;
  line-height: 2.29vw;
  color: #11171d;

  small {
    font-family: Eina 02;
    font-style: normal;
    font-weight: 400;
    font-size: 1.67vw;
    line-height: 2.29vw;
    color: #4544ed;
  }

  ${Responsive.SM} {
    font-size: 2.67vw;
    line-height: 3.29vw;

    small {
      font-size: 2.67vw;
      line-height: 3.29vw;
    }
  }
`;

export const DivImgFull = styled.div`
  margin-top: 2.71vw;
  margin-left: 9.24vw;
`;

export const ImgBg = styled.div`
  background: url(${myImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 39.93vw;
  min-height: 49.31vw;
`;

export const DivHugs = styled.div`
  width: 44.81vw;
  margin-top: 45.8vw;
  margin-left: 1.32vw;
  position: absolute;
  justify-content: space-between;
`;

export const DivHug = styled.div`
  width: 10.18vw;
  min-height: 2.38vw;
  background: white;
  border-radius: 5.82vw;
  align-items: center;
`;

export const IconHug = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.46vw;
  min-height: 1.39vw;
  margin-left: 0.93vw;
`;

export const TextHug = styled.p`
  width: 7.39vw;
  min-height: 1.46vw;
  margin-left: 0.47vw;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 1.05vw;
  line-height: 1.46vw;
  color: #11171d;
`;
