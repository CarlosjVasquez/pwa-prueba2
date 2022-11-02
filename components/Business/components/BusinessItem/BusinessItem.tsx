import BSContainer from "react-bootstrap/Container";
import BSRow from "react-bootstrap/Row";
import BSCol from "react-bootstrap/Col";
// import * as S from "./BusinessItem.styles";
import styled from "styled-components";
import BSCard from "react-bootstrap/Card";

const Card = styled(BSCard)`
  margin-top: 2.28vw;
  border: 0;
  background-color: transparent;
  font-family: eina;
`;

const CardImg = styled(BSCard.Img)`
  border-radius: 0;
`;

const CardBody = styled(BSCard.Body)`
  padding: 0;

  h5 {
    margin-top: 1.17vw;
    font.size: 2.28vw;
    font-weight: bold;
  }
`;

const BusinessItem: React.FunctionComponent = () => {
  return (
    <Card>
      <CardImg variant="top" src="/img/Rectangle 24.png" />
      <CardBody>
        <h5>Frecuento</h5>
        <p>4 meses sin intereses en tecnología</p>
      </CardBody>
    </Card>
  );
};

export default BusinessItem;
