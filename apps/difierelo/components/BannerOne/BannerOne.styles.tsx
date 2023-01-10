import styled from 'styled-components';
import Responsive from '../../utils/style/Responsive';
import imageBannerText from '../../public/difierelo-512x512.png';

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
