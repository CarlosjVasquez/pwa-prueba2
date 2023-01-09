import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const FormInput = styled.input`
  width: 100%;
  min-height: 3.61vw;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-bottom: 0.56vw;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.39vw;
  color: #2d3748;
  padding-left: 1.11vw;

  ${Responsive.SM} {
    min-height: 13.87vw;
    margin-bottom: 2.13vw;

    //text
    font-size: 3.73vw;
    line-height: 5.33vw;
    padding-left: 4.27vw;
  }
`;
