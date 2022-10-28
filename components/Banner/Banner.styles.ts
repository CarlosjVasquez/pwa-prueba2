import styled from "styled-components";
import myImage from "../../public/banner-bg.png";
import Container from "react-bootstrap/Container";

export const TextContainer = styled(Container)`
  padding-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 35.45vw;

  h1 {
    font-size: 62px;
    line-height: 1em;
    color: #11171d;
    font-weight: bold;
    font-family: eina;
  }

  p {
    font-size: 17px;
    line-height: bold;
    color: #11171d;
    margin-top: 3.6vh;

    .highlight {
      color: #4544ed;
    }
  }
`;

export const ImgBg = styled.div`
  background: url(${myImage.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 50%;
  min-height: 36.45vw;
  position: absolute;
  right: 0;
`;
