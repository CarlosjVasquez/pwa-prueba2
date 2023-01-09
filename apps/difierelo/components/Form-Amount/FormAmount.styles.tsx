import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconInfo from '../../public/icons/iconclose.svg';

export const Container = styled.div`
  width: 90%;
  margin-top: 0.49vw;
  margin-inline-start: 1.11vw;

  ${Responsive.SM} {
    margin-top: 1.87vw;
    margin-inline-start: 4.27vw;
  }
`;

export const TextTitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.18vw;
  line-height: 1.53vw;
  align-items: center;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 2.95vw;
    line-height: 3.82vw;
  }
`;

export const TextSubtitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.32vw;
  align-items: center;
  color: #11171d;
  padding-top: 0.56vw;

  ${Responsive.SM} {
    font-size: 3.73vw;
    line-height: 3.3vw;
  }
`;

export const ContainerInputs = styled.div`
  margin-top: 1.67vw;

  ${Responsive.SM} {
    margin-top: 6.4vw;
  }
`;
