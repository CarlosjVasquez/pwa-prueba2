import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import iconInfo from '../../public/icons/iconclose.svg';

export const Container = styled.div`
  width: 90%;
  margin-top: 1.5vw;
  margin-inline-start: 1.11vw;

  ${Responsive.SM} {
    margin-top: 3.5vw;
    margin-inline-start: 4.27vw;
  }
`;

export const TextTitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.67vw;
  line-height: 2.22vw;
  align-items: center;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 6.4vw;
    line-height: 8.53vw;
  }
`;

export const TextSubtitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.39vw;
  align-items: center;
  color: #11171d;
  padding-top: 0.56vw;

  ${Responsive.SM} {
    font-size: 3.73vw;
    line-height: 5.33vw;
    padding-top: 2.13vw;
  }
`;

export const ContainerInputs = styled.div`
  margin-top: 1.67vw;

  ${Responsive.SM} {
    margin-top: 6.4vw;
  }
`;

export const ContainerInfo = styled.div`
  margin-top: 1.5vw;
  margin-bottom: 1.43vw;

  ${Responsive.SM} {
    margin-top: 8.13vw;
    margin-bottom: 5.33vw;
  }
`;

export const IconInfo = styled.div`
  background: url(${iconInfo.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 2.5vw;
  min-height: 2.5vw;
  padding: 1.39vw;

  ${Responsive.SM} {
    width: 9.6vw;
    min-height: 9.6vw;
    padding: 5.33vw;
  }
`;

export const TextInfo = styled.div`
  margin-inline-start: 1.11vw;
  justify-content: center;
  align-items: center;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 0.83vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    margin-inline-start: 4.27vw;

    //text
    font-size: 3.2vw;
    line-height: 4.27vw;
  }
`;
