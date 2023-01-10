import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const ButtonContinue = styled.button`
  width: 23.82vw;
  min-height: 3.75vw;
  margin-top: 1.67vw;
  margin-bottom: 7.36vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.11vw 1.67vw;
  border: none;
  background: #4544ed;
  border-radius: 0.56vw;

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.53vw;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;

  ${Responsive.SM} {
    width: 91.47vw;
    min-height: 14.4vw;
    border-radius: 2.13vw;

    //text
    font-size: 4.27vw;
    line-height: 5.87vw;
  }
`;
