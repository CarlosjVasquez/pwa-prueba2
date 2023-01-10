import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconInfo from '../../public/icons/Group129.svg';
import iconPastel from '../../public/icons/Group128.svg';

export const DivIconInfo = styled.div`
  position: absolute;
  margin-left: 2.79vw;
  z-index: 1;
  margin-top: 1.66vw;

  ${Responsive.SM} {
    margin-top: 4.17vw;
  }
`;

export const IconInfo = styled.div`
  background: url(${iconInfo.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 4.44vw;
  min-height: 4.24vw;

  ${Responsive.SM} {
    width: 11.11vw;
    min-height: 7.12vw;
  }
`;

export const DivIconPastel = styled.div`
  position: absolute;
  margin-left: 3.79vw;
  margin-top: 2.75vw;

  ${Responsive.SM} {
    margin-top: 6.38vw;
  }
`;

export const IconPastel = styled.div`
  background: url(${iconPastel.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 10.97vw;
  min-height: 10.97vw;

  ${Responsive.SM} {
    width: 27.43vw;
    min-height: 27.43vw;
  }
`;

export const DivIconPastelList = styled.div`
  margin-top: 2.75vw;

  ${Responsive.SM} {
    margin-top: 6.38vw;
    margin-left: 7vw;
  }
`;

export const DivInfoPastel = styled.div`
  width: 0.9vw;
  min-height: 0.9vw;

  ${Responsive.SM} {
    width: 2.26vw;
    min-height: 2.26vw;
  }
`;

export const TextInfoPastel = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.94vw;
  color: #11171d;
  letter-spacing: -0.02em;

  ${Responsive.SM} {
    font-size: 2.26vw;
    line-height: 4.86vw;
  }
`;

export const DivDetailPastel = styled.div`
  margin-top: 2.08vw;
  display: flex;
  justify-content: center;
`;

export const TextDetailPastel = styled.a`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #4544ed;
  text-decoration: none;

  ${Responsive.SM} {
    font-size: 2.43vw;
    line-height: 3.3vw;
  }
`;
