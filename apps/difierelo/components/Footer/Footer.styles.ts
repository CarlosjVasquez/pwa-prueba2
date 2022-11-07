import styled from "styled-components";
import imageFooter from "../../public/icons/difierelo-384x384.svg";
import iconFacebook from "../../public/icons/facebook.svg";
import iconInstagram from "../../public/icons/instagram.svg";
import BSContainer from "react-bootstrap/Container";
import Responsive from "../../utils/style/Responsive";

export const Footer = styled.footer`
  position: absolute;
  width: 100%;

  h6 {
    color: #11171d;
    font-family: eina;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
  }

  p {
    color: #11171d;
    font-family: eina;
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

    ${Responsive.SM} {
      font-size: 2.5vw;
    }
  }

  .separador {
    color: #dedede !important;
  }
`;

export const NavContainer = styled(BSContainer)`
  padding-top: 5.94vw;
  padding-bottom: 4.83vw;

  ${Responsive.SM} {
    padding-top: 0vw;
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
  font-family: eina;
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
