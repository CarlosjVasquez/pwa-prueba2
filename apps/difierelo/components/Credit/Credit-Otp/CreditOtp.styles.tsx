import styled from 'styled-components';
import Responsive from '../../../utils/style/Responsive';
import imageBannerText from '../../../public/difierelo-512x512.png';

export const Container = styled.div`
  background: white;
  width: 38.26vw;
  padding-top: 20px;

  .progress {
    height: 0.42vw;
    width: 90%;
    margin-inline-start: 1.11vw;
  }

  .progress-bar {
    background: #4544ed;
  }

  ${Responsive.SM} {
    width: 100%;

    .progress {
      height: 1.6vw;
      margin-inline-start: 4.27vw;
    }
  }
`;

export const BannerImage = styled.div`
  background: transparent;
  width: 90%;
  margin-inline-start: 1.11vw;
  margin-bottom: 2.15vw;

  ${Responsive.SM} {
    margin-inline-start: 4.27vw;
    margin-bottom: 8.27vw;
  }
`;

export const ImgDifierelo = styled.div`
  background: url(${imageBannerText.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 5.36vw;
  min-height: 1.46vw;

  ${Responsive.SM} {
    width: 20.59vw;
    min-height: 5.6vw;
  }
`;

export const DivValidation = styled.div`
  width: 90%;
  margin-top: 0.49vw;
  margin-inline-start: 1.11vw;

  ${Responsive.SM} {
    margin-top: 1.87vw;
    margin-inline-start: 4.27vw;
  }
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
    font-size: 2.95vw;
    line-height: 3.82vw;
  }
`;

export const InputConditions = styled.input`
  width: 1.25vw;
  min-height: 1.25vw;

  ${Responsive.SM} {
    width: 3.13vw;
    min-height: 3.13vw;
  }
`;

export const TextConditions = styled.p`
  padding-left: 1.46vw;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #11171d;
  text-align: justify;

  ${Responsive.SM} {
    font-size: 2.43vw;
    line-height: 3.3vw;
    padding-left: 3.65vw;
  }
`;

export const DivPhone = styled.div`
  margin-inline-start: 1.11vw;
  background: rgba(69, 68, 237, 0.05);
  border-radius: 0.28vw;
  min-height: 5.28vw;
  padding-top: 5px;
  padding-bottom: 5px;

  ${Responsive.SM} {
    margin-inline-start: 4.27vw;
    border-radius: 0.69vw;
    min-height: 13.19vw;
  }
`;

export const TextInfo = styled.div`
  width: 20.72vw;
  margin-inline-start: 0.78vw;
  position: relative;

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
  min-height: 6.74vw;
  position: relative;
  margin-top: 2.33vw;

  ${Responsive.SM} {
    min-height: 25.87vw;
    margin-top: 12.8vw;
  }
`;

export const TextOtp = styled.div`
  position: absolute;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    min-height: 4.27vw;

    //text
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

export const DivOtpInput = styled.div`
  min-height: 4.51vw;
  position: absolute;
  margin-top: 1.11vw;
  margin-inline-start: 1.11vw;

  ${Responsive.SM} {
    min-height: 17.33vw;
    margin-top: 4.27vw;
    margin-inline-start: 4.11vw;
  }
`;

export const OtpInput = styled.input`
  width: 3.26vw;
  min-height: 4.51vw;
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 0.42vw;

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

    //text
    font-size: 7.47vw;
    line-height: 9.07vw;
  }
`;

export const DivOtpResend = styled.div`
  min-height: 2.92vw;
  position: relative;
  margin-top: 3.47vw;

  ${Responsive.SM} {
    min-height: 11.2vw;
    margin-top: 8.33vw;
  }
`;

export const OtpQuestion = styled.p`
  min-height: 1.11vw;
  position: relative;

  //text
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    min-height: 4.27vw;

    //text
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;

export const OtpResend = styled.a`
  min-height: 1.25vw;
  position: relative;
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
    min-height: 4.8vw;
    margin-top: 2.13vw;

    //text
    font-size: 3.47vw;
    line-height: 4.8vw;
  }
`;
