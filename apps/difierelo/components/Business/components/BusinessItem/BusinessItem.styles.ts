import styled from 'styled-components';
import BSCard from 'react-bootstrap/Card';
import Responsive from '../../../../utils/style/Responsive';

export const Card = styled(BSCard)`
  margin-top: 2.28vw;
  border: 0;
  background-color: transparent;
  font-family: eina;

  ${Responsive.SM} {
    margin-top: 3.75vw;
  }
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
`;

export const CardBody = styled(BSCard.Body)`
  padding: 0;

  h5 {
    margin-top: 1.17vw;
    font-size: 2.28vw;
    font-weight: bold;

    ${Responsive.SM} {
      margin-top: 2.75vw;
      font-size: 5vw;
    }
  }
`;
