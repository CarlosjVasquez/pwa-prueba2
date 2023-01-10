import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import imageBannerText from '../../public/difierelo-512x512.png';

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

export const DivTextSkip = styled.div`
  width: 100%;
  text-align: end;
  margin-top: 1.18vw;
  padding-right: 2.78vw;
  display: flex;
  flex-direction: column;

  ${Responsive.SM} {
    margin-top: 4.53vw;
    padding-right: 6.13vw;
  }
`;

export const TextSkip = styled.a`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.83vw;
  line-height: 1.18vw;
  letter-spacing: 0.02em;
  color: #1a0826;

  ${Responsive.SM} {
    font-size: 3.2vw;
    line-height: 4.53vw;
  }
`;
