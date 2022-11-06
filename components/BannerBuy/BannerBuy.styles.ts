import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Responsive from "../../utils/style/Responsive";
import BSCol from "react-bootstrap/Col";
import BSCard from "react-bootstrap/Card";

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
  padding-top: 10vw;

  ${Responsive.SM} {
    width: 100%;
    min-height: 80vw;
  }

  h1 {
    font-style: normal;
    font-size: 54px;
    line-height: 1.5em;
    color: #11171d;
    font-weight: 700;
    text-align: justify;
    letter-spacing: -0.02em;
    margin-inline-start: 20%;
    margin-top: 6%;

    ${Responsive.SM} {
      font-size: 4.4vw;
      margin-top: 5%;
      margin-inline-start: 20%;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #11171d;
    margin-top: 1vw;
    text-align: justify;
    margin-inline-start: 35%;

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
    font-size: 32px;
    line-height: 44px;
    color: #11171d;
    font-weight: 700;
    text-align: justify;
    letter-spacing: -0.02em;
    margin-inline-start: 35%;
    margin-top: 8%;

    ${Responsive.SM} {
      font-size: 2.5vw;
      margin-top: 3%;
      margin-inline-start: 45%;
    }
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
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
  width: 60px;
  height: 370px;
  top: 2360px;
  left: 140px;
  position: absolute;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 25px;
    height: 30vw;
    min-height: 30vw;
    top: 412vw;
    left: 15vw;
  }
`;

export const TitleTwo = styled.h5`
  font-style: normal;
  font-size: 32px;
  line-height: 44px;
  color: #11171d;
  font-weight: 700;
  text-align: justify;
  letter-spacing: -0.02em;
  margin-inline-start: 35%;
  margin-top: 6%;

  ${Responsive.SM} {
    font-size: 2.5vw;
    margin-top: 8%;
    margin-inline-start: 45%;
  }
`;

export const TitleThree = styled.h6`
  font-style: normal;
  font-size: 32px;
  line-height: 44px;
  color: #11171d;
  font-weight: 700;
  text-align: justify;
  letter-spacing: -0.02em;
  margin-inline-start: 35%;
  margin-top: 5.5%;

  ${Responsive.SM} {
    font-size: 2.5vw;
    margin-top: 2%;
    margin-inline-start: 45%;
  }
`;
