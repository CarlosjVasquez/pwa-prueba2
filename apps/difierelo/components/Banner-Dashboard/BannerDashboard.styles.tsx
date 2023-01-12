import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconUser from '../../public/icons/Ellipse150.svg';

export const ContainerList = styled.div`
  width: 25vw;
  align-items: center;
  position: relative;
  background: linear-gradient(0deg, #f8f8f4, #f8f8f4);

  ${Responsive.SM} {
    width: 40%;
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 2.99vw;
  margin-inline-start: 2.08vw;

  ${Responsive.SM} {
    margin-top: 7.47vw;
    margin-inline-start: 5.21vw;
  }
`;

export const CreditButton = styled.button`
  width: 15.14vw;
  height: 3.75vw;
  background: #4544ed;
  border: none;
  border-radius: 0.56vw;
  margin-left: 5.47vw;

  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.53vw;
  color: #ffffff;
  letter-spacing: -0.02em;
  text-align: center;

  ${Responsive.SM} {
    width: 34vw;
    height: 9.38vw;
    margin-left: 0.5vw;
    border-radius: 1.39vw;

    font-size: 2.78vw;
    line-height: 3.82vw;
  }
`;

export const ContainerInformation = styled.div`
  position: relative;
  width: 75vw;
  justify-content: end;
  display: flex;

  ${Responsive.SM} {
    width: 60%;
  }
`;

export const IconUser = styled.div`
  margin-inline: 5px;
  background: url(${iconUser.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 2.29vw;
  min-height: 2.29vw;

  ${Responsive.SM} {
    width: 7.5vw;
    min-height: 7.5vw;
  }
`;

export const TextUser = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  padding-top: 1.18vw;
  margin-inline-end: 2.57vw;
  align-items: center;

  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.67vw;
  color: #050a39;

  ${Responsive.SM} {
    font-size: 2.78vw;
    line-height: 4.17vw;
  }
`;

export const ContainerDash = styled.div`
  position: absolute;
  width: 75vw;
  margin-top: 7.43vw !important;
  flex-direction: row;
  display: flex;

  ${Responsive.SM} {
    width: 100%;
    margin-top: 18.58vw !important;
  }
`;

export const InfoDash1 = styled.div`
  position: relative;
  width: 37.5vw;
  display: flex;
  height: 17vw;

  ${Responsive.SM} {
    width: 100%;
    height: 40vw;
  }
`;

export const InfoDash2 = styled.div`
  position: relative;
  width: 37.5vw;
  display: flex;
  height: 17vw;

  ${Responsive.SM} {
    width: 100%;
    height: 50vw;
    display: none;
  }
`;

export const InfoDash3 = styled.div`
  position: relative;
  width: 37.5vw;
  display: flex;
  height: 20vw;

  ${Responsive.SM} {
    width: 100%;
    height: 40vw;
  }
`;

export const InfoDash4 = styled.div`
  position: relative;
  width: 37.5vw;
  display: flex;
  height: 20vw;

  ${Responsive.SM} {
    width: 100%;
    height: 40vw;
  }
`;

export const InfoDash5 = styled.div`
  position: relative;
  width: 75vw;
  display: flex;
  height: 20vw;

  ${Responsive.SM} {
    width: 100%;
    height: 40vw;
    display: none;
  }
`;

export const TextTitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.39vw;
  line-height: 1.67vw;
  color: #050a39;
  padding-left: 4.79vw !important;
  position: absolute;

  ${Responsive.SM} {
    font-size: 3.47vw;
    line-height: 4.17vw;
    padding-left: 0vw !important;
  }
`;

export const TextSubtitle = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.18vw;
  line-height: 1.53vw;
  color: #050a39;
  padding-left: 4.79vw !important;
  position: absolute;

  ${Responsive.SM} {
    font-size: 2.95vw;
    line-height: 3.82vw;
    padding-left: 0vw !important;
  }
`;

export const InfoCard = styled.div`
  margin-top: 2.81vw;
  position: absolute;
  margin-inline-start: 4.79vw;

  ${Responsive.SM} {
    margin-inline-start: 0vw;
    margin-top: 6.81vw;
  }
`;

export const DivTitleInfoPastel = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
`;

export const PayButton = styled.button`
  width: 9.17vw;
  min-height: 3.75vw;
  background: #4544ed;
  border: none;
  border-radius: 0.56vw;

  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.11vw;
  line-height: 1.53vw;
  color: #ffffff;
  letter-spacing: -0.02em;
  text-align: center;

  ${Responsive.SM} {
    width: 22.92vw;
    height: 9.38vw;
    border-radius: 1.39vw;

    font-size: 2.78vw;
    line-height: 3.82vw;
  }
`;
