import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Responsive from '../../utils/style/Responsive';
import BSCol from 'react-bootstrap/Col';
import BSCard from 'react-bootstrap/Card';

export const Col = styled(BSCol)`
  &.col-md-6 {
    width: 50%;
    background-color: #804297;
    padding-inline-start: 0px;

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
    font-size: 64px;
    line-height: 1.5em;
    color: #ffffff;
    font-weight: 700;
    text-align: justify;
    letter-spacing: -0.02em;
    margin-top: 10%;

    ${Responsive.SM} {
      font-size: 4.4vw;
      margin-top: 5%;
    }
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
    margin-top: 1vw;
    text-align: justify;

    ${Responsive.SM} {
      font-size: 1.8vw;
      width: 100%;
      margin-top: 2vw;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 0px 0px 0px;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 8px;
    border-color: #ffffff;
    border-style: none;
    margin-top: 6%;
    width: 200px;
    height: 50px;

    :hover {
      background: #ffffff;
      color: #4544ed;
      border-color: #ffffff;
      box-shadow: 0 4px 16px #ffffff;
      transition: all 0.2s ease;
    }

    ${Responsive.SM} {
      width: 90px;
      height: 30px;
      margin-top: 2.5vw;
      padding: 8px 0px 0px 0px;
    }
  }

  h6 {
    color: #1a0826;
    font-size: 16px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    letter-spacing: -0.02em;

    ${Responsive.SM} {
      font-size: 2.3vw;
    }
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 54.49vw;
  min-height: 35vw;
  align-items: center;
  align-content: center;

  ${Responsive.SM} {
    width: 54.49vw;
    min-height: 45vw;
  }
`;
