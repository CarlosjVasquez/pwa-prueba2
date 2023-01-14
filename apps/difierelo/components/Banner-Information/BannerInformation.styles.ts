import styled from 'styled-components';
import imageNav from '../../public/img/happy-man.png';
import imageBannerText from '../../public/difierelo-512x512.png';
import Responsive from '../../utils/style/Responsive';

export const Container = styled.div`
  background: transparent;
  width: 38.26vw;
  padding-top: 20px;

  .form-control {
    border-bottom: 1px solid #11171d;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    font-family: Eina 02;
    font-style: normal;
    font-weight: 600;
    color: #444c47;
    font-size: 1.39vw;
    line-height: 1.67vw;
  }

  .flag-dropdown {
    border-bottom: 1px solid #11171d;
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
  }

  ${Responsive.SM} {
    width: 100%;

    .form-control {
      font-size: 5.33vw;
      line-height: 6.4vw;
    }
  }
`;

export const ImgNav = styled.div`
  background: url(${imageNav.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 17.57vw;
  min-height: 16.6vw;
  z-index: 1;
  position: sticky;

  ${Responsive.SM} {
    width: 71.25vw;
    min-height: 56vw;
    position: sticky;
  }
`;

export const BannerText = styled.div`
  background: transparent;
  width: 24vw;
  margin-inline-start: 4.53vw;
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

export const TextTitle = styled.div`
  width: 9.58vw;
  min-height: 3.47vw;
  margin-top: 3.68vw;
  z-index: 2;
  position: relative;

  ${Responsive.SM} {
    width: 36.8vw;
    min-height: 13.33vw;
    margin-top: 8.13vw;
  }
`;

export const Title = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.25vw;
  line-height: 1.74vw;
  letter-spacing: -0.02em;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 4.8vw;
    line-height: 6.67vw;
  }
`;

export const TextSubtitle = styled.div`
  width: 8.88vw;
  min-height: 2.22vw;
  margin-top: 0.69vw;
  z-index: 2;
  position: relative;

  ${Responsive.SM} {
    width: 35.47vw;
    min-height: 8.53vw;
    margin-top: 2.67vw;
  }
`;

export const Subtitle = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.83vw;
  line-height: 1.11vw;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 3.2vw;
    line-height: 4.27vw;
  }
`;

export const DivButton = styled.div`
  margin-inline-start: 4.53vw;
  position: relative;
  top: -1.5vw;

  ${Responsive.SM} {
    margin-inline-start: 1vw;
  }
`;
