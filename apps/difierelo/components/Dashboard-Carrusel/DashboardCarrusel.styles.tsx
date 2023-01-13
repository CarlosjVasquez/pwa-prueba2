import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import BSCard from 'react-bootstrap/Card';

export const DivCarrusel = styled.div`
  margin-top: 2.88vw;
  position: absolute;
  margin-inline-start: 4vw;
  width: 90vw;

  ${Responsive.SM} {
    margin-top: 19vw;
    margin-inline-start: 0vw !important;
    width: 56vw;
    left: 0;
  }
`;

export const DivCardStore = styled.div`
  width: 15vw !important;
  justify-content: center;
  margin-inline-end: 2.43vw;

  ${Responsive.SM} {
    width: 28.13vw !important;
    margin-inline-end: 6.6vw;
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
`;

export const CardBody = styled(BSCard.Body)`
  font-family: Eina 02;
  font-style: normal;
  letter-spacing: -0.02em;
  color: #11171d;

  p {
    font-weight: 400;
    font-size: 0.9vw;
    line-height: 1.25vw;

    ${Responsive.SM} {
      font-size: 2.26vw;
      line-height: 3.13vw;
    }
  }

  a {
    width: 100%;
    height: 2.85vw;
    background: #4544ed;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.83vw;
    line-height: 1.18vw;
    border-radius: 0.35vw;
  }
`;

export const CardBodyTitle = styled.h5`
  font-family: Eina 02;
  font-style: normal;
  letter-spacing: -0.02em;
  color: #11171d;
  margin-top: 1.17vw;
  font-weight: 700;
  font-size: 0.97vw !important;
  line-height: 1.32vw !important;
`;
