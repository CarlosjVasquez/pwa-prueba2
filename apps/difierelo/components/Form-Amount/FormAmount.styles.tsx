import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

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
  margin-inline: 0.1vw;

  ${Responsive.SM} {
    margin-top: 6.4vw;
    margin-inline: 0.25vw;
  }
`;

export const AmountLabel = styled.label`
  min-height: 4.51vw;
  border: 1px solid #e2e8f0;
  border-radius: 0.42vw;
  display: flex;
  align-items: center;
  justify-content: center;

  //text
  text-align: center;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  color: #11171d;
  font-size: 1.94vw;
  line-height: 2.36vw;

  ${Responsive.SM} {
    min-height: 11.28vw;
    border-radius: 1.04vw;

    //text
    font-size: 4.86vw;
    line-height: 5.9vw;
  }
`;

export const AmountButton = styled.button`
  width: 3.75vw;
  min-height: 2.64vw;
  border-radius: 20.83vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eeeefb;

  //text
  text-align: center;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  color: #4d5155;
  font-size: 1.11vw;
  line-height: 1.39vw;

  ${Responsive.SM} {
    width: 9.38vw;
    min-height: 6.6vw;
    border-radius: 52.08vw;

    //text
    font-size: 2.78vw;
    line-height: 3.47vw;
  }
`;

export const DivLine = styled.div`
  border-top: 1px solid #d9d9d9;
  border-radius: 0;
`;

export const DivNumbers = styled.div`
  display: flex;
  margin-inline: 0.89vw;

  ${Responsive.SM} {
    margin-inline: 9.72;
    margin-bottom: 4.47vw;
  }
`;

export const DivDelete = styled.div`
  display: contents;
`;

export const TextNumber = styled.h1`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 1.53vw;
  line-height: 2.36vw;
  color: #170658;

  ${Responsive.SM} {
    font-size: 4.86vw;
    line-height: 5.9vw;
  }
`;
