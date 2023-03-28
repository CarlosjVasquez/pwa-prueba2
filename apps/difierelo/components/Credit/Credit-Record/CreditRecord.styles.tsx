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
  width: 8.36vw;
  min-height: 1.46vw;
  margin-inline-start: 1.5vw;

  ${Responsive.SM} {
    width: 25.59vw;
    min-height: 5.6vw;
    margin-inline-start: 4.5vw;
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
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;
  text-align: justify;

  ${Responsive.SM} {
    width: 100%;
    font-size: 2.7vw;
    line-height: 2.9vw;
    padding-left: 3.65vw;
  }
`;
