import styled from 'styled-components';
import myImage from '../../public/img/banner-bg.png';
import Container from 'react-bootstrap/Container';
import Responsive from '../../utils/style/Responsive';
import BSCol from 'react-bootstrap/Col';
import Image from 'next/image';

export const BannerContainer = styled.section`
  font-family: eina;
  display: flex;
  position: relative;

  > p {
    font-size: 1.29vw;
    color: #11171d;
    position: absolute;
    bottom: 3.26vw;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    ${Responsive.SM} {
      display: none;
    }
  }
`;

export const Col = styled(BSCol)`
  position: relative;
  &.col-md-6 {
    width: 59%;

    ${Responsive.SM} {
      width: 50%;
    }
  }
`;

export const TextContainer = styled(Container)`
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

    .decoration {
      position: relative;
    }

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

export const ImgDecoration = styled(Image)`
  position: absolute;
  width: 4vw;
  bottom: 76%;
  right: -73%;
  height: auto;

  ${Responsive.SM} {
    width: 5.1vw;
  }
`;

export const BadgesContainer = styled.div`
  margin-top: 1.53vw;
  display: flex;
  justify-content: space-between;

  ${Responsive.SM} {
    display: none;
  }
`;
