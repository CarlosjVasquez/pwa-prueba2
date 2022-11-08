import styled from 'styled-components';
import BSContainer from 'react-bootstrap/Container';
import BSRow from 'react-bootstrap/Row';
import BSCol from 'react-bootstrap/Col';
import Responsive from '../../utils/style/Responsive';

export const Container = styled(BSContainer)`
  background-color: #f7f7f7;
  padding: 0 7.25vw;
  padding-top: 5.66vw;
  padding-bottom: 8.7vw;

  h2 {
    font-family: eina;
    font-size: 3.31vw;
    font-weight: bold;

    ${Responsive.SM} {
      font-size: 6vw;
    }
  }
`;

export const ListContainer = styled(BSRow)`
  margin-top: 2.28vw;
`;

export const ItemCol = styled(BSCol)`
  padding: 0 0.83vw;
`;
