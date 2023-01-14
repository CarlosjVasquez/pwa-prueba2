import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import imageNav from '../../public/img/happy-man.png';
import imageBannerText from '../../public/difierelo-512x512.png';

export const Container = styled.div`
  background: white;
  width: 38.26vw;
  padding-top: 20px;

  ${Responsive.SM} {
    width: 100%;
  }
`;

export const ImgNav = styled.div`
  background: url(${imageNav.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 15.49vw;
  min-height: 12.08vw;
  z-index: 1;
  position: sticky;

  ${Responsive.SM} {
    width: 57.47vw;
    min-height: 46.4vw;
    position: sticky;
    margin-left: 10.56vw;
  }
`;

export const BannerText = styled.div`
  background: transparent;
  width: 24vw;
  margin-inline-start: 4.53vw;
`;

export const BannerIcons = styled.div`
  ${Responsive.SM} {
    width: 68vw;
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

export const TextTitle = styled.div`
  width: 9.58vw;
  min-height: 3.47vw;
  margin-top: 3.68vw;
  position: relative;
  z-index: 2;

  ${Responsive.SM} {
    width: 36.8vw;
    min-height: 13.33vw;
    margin-top: 14.13vw;
  }
`;

export const Title = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.74vw;
  letter-spacing: -0.02em;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 4.8vw;
    line-height: 6.67vw;
  }
`;

export const DivButton = styled.div`
  margin-inline-start: 6.53vw;

  ${Responsive.SM} {
    margin-inline-start: 5vw;
  }
`;
