import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';

export const TextTitle = styled.div`
  width: 38.26vw;
  margin-inline-start: 4.53vw;
  top: -2.01vw;
  position: relative;
  background: white;
  z-index: 2;

  ${Responsive.SM} {
    width: 90%;
    min-height: 10.14vw;
    top: -7.73vw;
  }
`;

export const Title = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.18vw;
  line-height: 1.53vw;
  color: #11171d;
  padding-top: 2vw;

  ${Responsive.SM} {
    font-size: 4.53vw;
    line-height: 5.87vw;
    padding-top: 6vw;
  }
`;

export const TextSubtitle = styled.div`
  width: 22.01vw;
  margin-inline-start: 4.53vw;
  top: -2.01vw;
  position: relative;
  background: white;

  ${Responsive.SM} {
    width: 90%;
    min-height: 10.13vw;
    top: -7.73vw;
  }
`;

export const Subtitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #11171d;
  padding-top: 0.56vw;

  ${Responsive.SM} {
    font-size: 3.73vw;
    line-height: 5.07vw;
    padding-top: 2.13vw;
  }
`;

export const DivInfo = styled.div`
  width: 22.15vw;
  margin-inline-start: 4.53vw;
  position: relative;
  background: white;

  ${Responsive.SM} {
    width: 90%;
    min-height: 20.27vw;
  }
`;

export const TextInfo = styled.div`
  width: 20.72vw;
  margin-inline-start: 0.78vw;
  position: relative;
  background: white;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    width: 79.6vw;
    min-height: 8.53vw;
    margin-inline-start: 3.01vw;

    //text
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

export const PhoneInfo = styled.div`
  width: 12.54vw;
  margin-inline-start: 0.78vw;
  position: relative;
  background: white;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 1.04vw;
  line-height: 1.39vw;
  color: #11171d;
  padding-top: 0.56vw;

  ${Responsive.SM} {
    width: 48.14vw;
    min-height: 5.33vw;
    margin-inline-start: 3.01vw;

    //text
    font-size: 4vw;
    line-height: 5.33vw;
    padding-top: 2.13vw;
  }
`;

export const DivOtp = styled.div`
  width: 28.26vw;
  min-height: 6.74vw;
  margin-inline-start: 4.53vw;
  position: relative;
  background: white;
  margin-top: 1.33vw;

  ${Responsive.SM} {
    width: 90%;
    min-height: 25.87vw;
    margin-top: 1vw;
  }
`;

export const TextOtp = styled.div`
  width: 18.58vw;
  position: relative;
  background: white;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    width: 90%;
    min-height: 4.27vw;

    //text
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

export const DivOtpInput = styled.div`
  width: 90%;
  min-height: 4.51vw;
  position: relative;
  background: white;
  margin-top: 1.11vw;
  justify-content: space-between;
  display: flex;

  ${Responsive.SM} {
    min-height: 17.33vw;
    margin-top: 4.27vw;
    margin-inline-start: -3vw !important;
  }
`;

export const OtpInput = styled.input`
  width: 3.26vw;
  min-height: 4.51vw;
  position: relative;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.42vw;

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 1.94vw;
  line-height: 2.36vw;
  color: #11171d;
  text-align: center;

  ${Responsive.SM} {
    width: 12.53vw;
    min-height: 17.33vw;
    margin-inline-end: 2vw;

    //text
    font-size: 7.47vw;
    line-height: 9.07vw;
  }
`;

export const DivOtpResend = styled.div`
  width: 14.58vw;
  min-height: 2.92vw;
  margin-inline-start: 4.53vw;
  position: relative;
  background: white;
  margin-top: 2vw;
  margin-bottom: 1.22vw;

  ${Responsive.SM} {
    width: 90%;
    min-height: 11.2vw;
    margin-top: 6.33vw;
    margin-bottom: 4vw;
  }
`;

export const OtpQuestion = styled.p`
  width: 15.21vw;
  min-height: 1.11vw;
  position: relative;
  background: white;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    width: 90%;
    min-height: 4.27vw;

    //text
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

export const OtpResend = styled.a`
  width: 15.21vw;
  min-height: 1.25vw;
  position: relative;
  background: white;
  margin-top: 0.56vw;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height: 1.25vw;
  color: #4544ed;
  text-decoration: none;

  ${Responsive.SM} {
    width: 90%;
    min-height: 4.8vw;
    margin-top: 2.13vw;

    //text
    font-size: 3.47vw;
    line-height: 4.8vw;
  }
`;
