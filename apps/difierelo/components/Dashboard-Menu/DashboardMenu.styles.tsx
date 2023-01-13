import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import Navbar from 'react-bootstrap/Navbar';
import imageBannerText from '../../public/difierelo-512x512.png';

export const ImgDifierelo = styled.div`
  background: url(${imageBannerText.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 10.56vw;
  min-height: 2.85vw;
  margin-top: 0.85vw;
  margin-inline-start: 2.08vw;

  ${Responsive.SM} {
    width: 19vw;
    min-height: 7.12vw;
    margin-inline-start: 0vw !important;
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

export const StyleNavar = styled(Navbar)`
  width: 25vw;
  background: linear-gradient(0deg, #f8f8f4, #f8f8f4);

  ${Responsive.SM} {
    width: 40vw;
  }
`;

export const StyleNavarTog = styled(Navbar.Toggle)`
  ${Responsive.SM} {
    width: 10vw;
    display: flex;
  }
`;
