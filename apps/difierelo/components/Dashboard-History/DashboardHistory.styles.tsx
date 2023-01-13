import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const InfoPay = styled.div`
  margin-top: 1vw;
  position: absolute;
  margin-inline-start: 4vw;
  width: 40vw;

  ${Responsive.SM} {
    margin-top: 2vw;
    margin-inline-start: 0vw !important;
    width: 100%;
    left: 0;
  }
`;

export const TextUlAmount = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25vw;
  line-height: 1.67vw;
  color: #050a39;

  ${Responsive.SM} {
    font-size: 3.13vw;
    line-height: 4.17vw;
  }
`;

export const TextUlDate = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #747478;

  ${Responsive.SM} {
    font-size: 2.43vw;
    line-height: 3.3vw;
  }
`;

export const TextUlPayment = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.83vw;
  line-height: 1.25vw;
  color: #050a39;

  ${Responsive.SM} {
    font-size: 2.08vw;
    line-height: 3.13vw;
  }
`;
