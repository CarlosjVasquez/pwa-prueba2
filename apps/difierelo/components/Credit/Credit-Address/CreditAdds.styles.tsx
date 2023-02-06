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
