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
  padding-top: 2vw;

  ${Responsive.SM} {
    width: 100%;
    min-height: 80vw;
  }

  h1 {
    font-style: normal;
    font-size: 3.61vw;
    line-height: 1.2em;
    color: #11171d;
    font-weight: 700;
    text-align: justify;
    letter-spacing: -0.02em;
    margin-inline-start: 20%;
    margin-top: 6%;

    ${Responsive.SM} {
      font-size: 3.4vw;
      margin-top: 5%;
      margin-inline-start: 20%;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.98vw;
    line-height: 1.2em;
    color: #11171d;
    margin-top: 1vw;
    text-align: justify;
    margin-inline-start: 15.28vw;

    ${Responsive.SM} {
      /* font-size: 2.2vw;
      width: 100%;
      margin-inline-start: 20%;
      margin-top: 0vw; */
      display: none;
    }
  }

  h4 {
    font-style: normal;
    font-size: 2.22vw;
    line-height: 1.2em;
    color: #11171d;
    font-weight: 700;
    text-align: justify;
    letter-spacing: -0.02em;
    margin-inline-start: 15.28vw;
    margin-top: 4.31vw;

    ${Responsive.SM} {
      font-size: 2.8vw;
      margin-top: 4vw;
      margin-inline-start: 18vw;
    }
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 48vw;
  min-height: 50vw;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 100%;
    min-height: 50vw;
  }
`;

export const CardImgInfo1 = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 4.16vw;
  height: 26.88vw;
  top: 171vw;
  left: 10.33vw;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 4.16vw;
    min-height: 30vw;
    top: 285vw;
    left: 15vw;
  }
`;

export const TitleTwo = styled.h5`
  font-style: normal;
  font-size: 2.22vw;
  line-height: 1.2em;
  color: #11171d;
  font-weight: 700;
  text-align: justify;
  letter-spacing: -0.02em;
  margin-inline-start: 15.28vw;
  margin-top: 4.31vw;

  ${Responsive.SM} {
    font-size: 2.8vw;
    margin-top: 11vw;
    margin-inline-start: 18vw;
  }
`;

export const TitleThree = styled.h6`
  font-style: normal;
  font-size: 2.22vw;
  line-height: 1.2em;
  color: #11171d;
  font-weight: 700;
  text-align: justify;
  letter-spacing: -0.02em;
  margin-inline-start: 15.28vw;
  margin-top: 4.31vw;

  ${Responsive.SM} {
    font-size: 2.8vw;
    margin-top: 8vw;
    margin-inline-start: 18vw;
  }
`;
