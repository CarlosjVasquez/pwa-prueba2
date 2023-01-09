import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import icon from '../../public/icons/Frame1.svg';

export const DivCard = styled.div`
  width: 30vw;
  min-height: 9.72vw;

  ${Responsive.SM} {
    width: 56vw;
    min-height: 24.31vw;
  }
`;

export const DivCardBody = styled.div`
  width: 75%;
`;

export const DivCardBody1 = styled.div`
  width: 25%;
  justify-content: end !important;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export const TextTitleCard = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9vw;
  line-height: 1.39vw;
  color: #050a39;
  padding-left: 1.04vw !important;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 2.6vw;
  }
`;

export const TextSubtitleCard = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.39vw;
  color: #050a39;
  padding-left: 1.04vw !important;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 3.47vw;
    padding-left: 2.6vw;
  }
`;

export const TextNumber1 = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 2.22vw;
  line-height: 3.06vw;
  color: #4544ed;

  ${Responsive.SM} {
    font-size: 5.56vw;
    line-height: 7.64vw;
  }
`;

export const TextFooterCard = styled.a`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 0.83vw;
  line-height: 1.39vw;
  color: #050a39;
  text-decoration: none;

  ${Responsive.SM} {
    font-size: 2.08vw;
    line-height: 3.47vw;
  }
`;

export const IconFooterCard = styled.a`
  background: url(${icon.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.67vw;
  min-height: 1.67vw;

  ${Responsive.SM} {
    width: 4.17vw;
    min-height: 4.17vw;
  }
`;
