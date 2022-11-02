import styled from "styled-components";
import imageFooter from "../../public/icons/difierelo-384x384.svg";
import iconFacebook from "../../public/icons/facebook.svg";
import iconInstagram from "../../public/icons/instagram.svg";

export const Footer = styled.div`
  width: 100%;
  bottom: 0;

  h6 {
    color: #11171d;
    font-family: Eina 02;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }

  p {
    color: #11171d;
    font-family: Eina 02;
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 28px;
  }

  a {
    text-decoration: none;
    color: #11171d;
  }

  .pie {
    border-top: #dedede;
    border-style: solid;
    border-top-width: thin;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }

  .separador {
    color: #dedede !important;
  }
`;

export const ImgNav = styled.div`
  background: url(${imageFooter.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 152px;
  height: 41px;
  margin-top: 20px;
  display: inline-flex;
`;

export const txtFollow = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  align-items: center;
  letter-spacing: 0.04em;
  color: #11171d;
`;

export const iconFb = styled.div`
  background: url(${iconFacebook.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;

export const iconInsta = styled.div`
  background: url(${iconInstagram.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
`;
