import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const StyledBody = styled.div``;

export const StyleSpinner = styled.div`
  color: #4544ed;
`;

export const TextTitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.18vw;
  line-height: 1.53vw;
  align-items: center;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 3.95vw;
    line-height: 3.82vw;
  }
`;

export const TextSubtitle = styled.p`
  padding-left: 1.46vw;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #11171d;
  text-align: center;

  ${Responsive.SM} {
    font-size: 3.43vw;
    line-height: 3.3vw;
    padding-left: 3.65vw;
  }
`;
