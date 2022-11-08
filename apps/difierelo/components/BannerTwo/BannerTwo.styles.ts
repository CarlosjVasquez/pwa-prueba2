import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Responsive from '../../utils/style/Responsive';
import BSCol from 'react-bootstrap/Col';
import BSCard from 'react-bootstrap/Card';

export const Col = styled(BSCol)`
  &.col-md-6 {
    width: 50%;

    ${Responsive.SM} {
      width: 100%;
    }
  }
`;

export const TextContainer = styled(Container)`
  font-family: eina;
  background-color: #f7f7f7;
  padding: 0 5vw;

  ${Responsive.SM} {
    width: 100%;
    min-height: 80vw;
  }

  h1 {
    font-style: normal;
    font-size: 4.45vw;
    line-height: 1em;
    color: #11171d;
    font-weight: 700;
    text-align: center;
    letter-spacing: -0.02em;

    ${Responsive.SM} {
      font-size: 8vw;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.67vw;
    line-height: 1emvw;
    color: #11171d;
    margin-top: 1.8vw;
    text-align: center;

    ${Responsive.SM} {
      font-size: 3.35vw;
      margin-top: 3.6vw;
    }
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 810vw;
  min-height: 41.25vw;
  top: 125.07vw;
  right: 0;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 100%;
    min-height: 41.25vw;
  }
`;

export const CardImgInfo1 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 18.54vw;
  height: 5.76vw;
  top: 125.07vw;
  left: 12.43vw;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 32vw;
    min-height: 11vw;
    top: 225vw;
    left: 6vw;
  }
`;

export const CardImgInfo2 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 18.54vw;
  height: 5.76vw;
  top: 138.54vw;
  left: 5.14vm;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 32vw;
    min-height: 11vw;
    top: 240vw;
    left: 0.5vw;
  }
`;

export const CardImgInfo3 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 18.54vw;
  height: 5.76vw;
  top: 128.07vw;
  left: 68.26vw;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 32vw;
    min-height: 11vw;
    top: 232vw;
    left: 60vw;
  }
`;

export const CardImgInfo4 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 18.54vw;
  height: 5.76vw;
  top: 142.38vw;
  left: 75.56vw;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 32vw;
    min-height: 11vw;
    top: 248vw;
    left: 68vw;
  }
`;
