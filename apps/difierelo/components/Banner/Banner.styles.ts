import styled from 'styled-components';
import myImage from '../../public/img/banner-bg.png';
import Container from 'react-bootstrap/Container';
import Responsive from '../../utils/style/Responsive';
import BSCol from 'react-bootstrap/Col';

export const Col = styled(BSCol)`
  &.col-md-6 {
    width: 59%;

    ${Responsive.SM} {
      width: 50%;
    }
  }
`;

export const TextContainer = styled(Container)`
  font-family: eina;
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 49vw;
  z-index: 1;

  ${Responsive.SM} {
    width: 100%;
    min-height: 80vw;
    left: 41%;
  }

  h1 {
    font-size: 6.19vw;
    line-height: 1em;
    color: #11171d;
    font-weight: bold;

    ${Responsive.SM} {
      font-size: 8.5vw;
    }
  }

  p {
    font-size: 1.6vw;
    color: #11171d;
    margin-top: 1vw;

    ${Responsive.SM} {
      font-size: 3.9vw;
      margin-top: 3vw;
    }

    .highlight {
      color: #4544ed;
    }
  }
`;

export const ImgBg = styled.div`
  background: url(${myImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 56.52%;
  min-height: 49vw;
  position: absolute;
  right: 0;

  ${Responsive.SM} {
    width: 65%;
    min-height: 80vw;
    left: 35%;
    background-position: left;
  }
`;
