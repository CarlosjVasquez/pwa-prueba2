import BSRow from "react-bootstrap/Row";
import BSCol from "react-bootstrap/Col";
import * as S from "./Business.styles";
import BusinessItem from "./components/BusinessItem";

const Business: React.FunctionComponent = () => {
  return (
    <S.Container
      fluid
      className="d-flex flex-column justify-content-center m-0"
    >
      <BSRow className="m-0">
        <BSCol>
          <h2>Negocios asociados</h2>
        </BSCol>
      </BSRow>
      <S.ListContainer className="m-0">
        <S.ItemCol md="4">
          <BusinessItem />
        </S.ItemCol>
        <S.ItemCol md="4">
          <BusinessItem />
        </S.ItemCol>
        <S.ItemCol md="4">
          <BusinessItem />
        </S.ItemCol>
      </S.ListContainer>
    </S.Container>
  );
};

export default Business;
