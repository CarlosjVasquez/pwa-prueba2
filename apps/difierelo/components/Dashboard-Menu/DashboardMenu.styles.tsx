import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import imageBannerText from '../../public/difierelo-512x512.png';

export const ImgDifierelo = styled.div`
  background: url(${imageBannerText.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 10.56vw;
  min-height: 2.85vw;
  margin-top: 2.85vw;
  margin-inline-start: 2.08vw;

  ${Responsive.SM} {
    width: 26.39vw;
    min-height: 7.12vw;
    margin-inline-start: 5.21vw;
  }
`;

export const ListOne = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 3.96vw;
  margin-inline-start: 2.08vw;

  ${Responsive.SM} {
    margin-top: 9.9vw;
    margin-inline-start: 5.21vw;
  }
`;

export const ListAll = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 2.64vw;
  margin-inline-start: 2.08vw;

  ${Responsive.SM} {
    margin-top: 6.6vw;
    margin-inline-start: 5.21vw;
  }
`;

export const ContainerLogout = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 32.71vw;
  margin-inline-start: 2.08vw;
  margin-bottom: 6.46vw;

  ${Responsive.SM} {
    margin-top: 81.77vw;
    margin-inline-start: 5.21vw;
    margin-bottom: 16.15vw;
  }
`;

export const TextOptions = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 1.11vw;
  line-height: 1.53vw;
  color: #000000;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 3.82vw;
  }
`;
