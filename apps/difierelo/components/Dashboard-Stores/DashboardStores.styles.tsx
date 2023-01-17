import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import BSCard from 'react-bootstrap/Card';

export const DivStore = styled.div`
  margin-top: 6.88vw;
  position: absolute;
  margin-inline-start: 4vw;
  width: 45vw;

  ${Responsive.SM} {
    margin-top: 19vw;
    margin-inline-start: 6vw;
    width: 100%;
    left: 0;
  }
`;

export const DivCardStore = styled.div`
  width: 11.25vw !important;
  justify-content: center;
  margin-inline-end: 2.43vw;

  ${Responsive.SM} {
    width: 85vw !important;
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

  h5 {
    margin-top: 1.17vw;
    font-weight: 700;
    font-size: 1.11vw;
    line-height: 1.53vw;

    ${Responsive.SM} {
      margin-top: 2.75vw;
      font-size: 3.78vw;
      line-height: 3.82vw;
    }
  }

  p {
    font-weight: 400;
    font-size: 0.9vw;
    line-height: 1.25vw;

    ${Responsive.SM} {
      font-size: 3.26vw;
      line-height: 3.13vw;
    }
  }
`;
