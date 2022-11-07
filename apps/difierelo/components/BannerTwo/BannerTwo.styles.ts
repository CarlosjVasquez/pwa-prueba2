import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Responsive from '../../utils/style/Responsive';
import BSCol from 'react-bootstrap/Col';
import BSCard from 'react-bootstrap/Card';

export const Col = styled(BSCol)`
  &.col-md-6 {
    width: 50%;

    ${Responsive.SM} {
      width: 50%;
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
    font-size: 4.5vw;
    line-height: 1.5em;
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
    font-size: 1.4vw;
    line-height: 33px;
    color: #11171d;
    margin-top: 1vw;
    text-align: center;

    ${Responsive.SM} {
      font-size: 3vw;
      margin-top: 3vw;
    }
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 40vw;
  right: 0;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 100%;
    min-height: 40vw;
  }
`;

export const CardImgInfo1 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 270px;
  height: 80px;
  top: 1550px;
  left: 180px;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 30%;
    height: 5vw;
    min-height: 10vw;
    top: 200vw;
    left: 9vw;
  }
`;

export const CardImgInfo2 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 270px;
  height: 80px;
  top: 1750px;
  left: 80px;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 30%;
    height: 5vw;
    min-height: 10vw;
    top: 215vw;
    left: 2vw;
  }
`;

export const CardImgInfo3 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 270px;
  height: 80px;
  top: 1620px;
  right: 170px;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 30%;
    height: 5vw;
    min-height: 10vw;
    top: 205vw;
    right: 6vw;
  }
`;

export const CardImgInfo4 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 270px;
  height: 80px;
  top: 1800px;
  right: 90px;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 30%;
    height: 5vw;
    min-height: 10vw;
    top: 220vw;
    right: 1vw;
  }
`;
