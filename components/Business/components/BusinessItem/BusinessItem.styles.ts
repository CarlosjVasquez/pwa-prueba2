import styled from "styled-components";
import BSCard from "react-bootstrap/Card";
import BSContainer from "react-bootstrap/Container";
import BSRow from "react-bootstrap/Row";
import BSCol from "react-bootstrap/Col";

export const Card = styled(BSCard)`
  margin-top: 2.28vw;
  border: 0;
  background-color: transparent;
  font-family: eina;
`;

export const CardImg = styled(BSCard.Img)`
  border-radius: 0;
`;

export const CardBody = styled(BSCard.Body)`
  padding: 0;

  h5 {
    margin-top: 1.17vw;
    font-size: 2.28vw;
    font-weight: bold;
  }
`;
