import styled from 'styled-components';

interface Props {
  urlBackground: string | undefined;
}

export const StyledExitButton = styled.button`
  float: right;
  background-color: transparent;
  color: #4544ed;
  text-decoration: underline;
  font-style: normal;
  font-weight: 700;
  font-size: 14;
  text-align: right;
  border: none;
`;

export const StyledReturnButton = styled.button`
  color: #11171d;
  background-color: transparent;
  border-radius: 20em;
  height: 40px;
  width: 150px;
  border: none;
`;

export const StyledContinueButton = styled.button`
  color: #ffffff;
  background-color: #4544ed;
  border-radius: 20em;
  height: 40px;
  width: 150px;
  font-weight: 700;
  border: none;
`;

export const StyledIconDiv = styled.div`
  text-align: center;
  padding-top: 5%;
`;

export const StyledDiv = styled.div`
  text-align: center;
`;

export const StyledDiv1 = styled.div`
  padding-top: 5%;
`;

export const StyledDiv2 = styled.div`
  padding-bottom: 4%;
`;

export const StyledTextTitle = styled.p`
  color: #11171d;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const StyledTextSubtitle = styled.p`
  color: #11171d;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledTextTitleList = styled.p`
  color: #11171d;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const StyledUlList = styled.ul`
  columns: 2;
  overflow: hidden;
  margin-top: 2%;
`;

export const StyledLiList = styled.li`
  color: #11171d;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: inline-flex;
  text-align: start;
`;

export const StyledImageDocument = styled.img`
  border-radius: 0.5em;
  height: 100%;
  width: 85%;
`;

export const StyledAlertDiv = styled.div`
  text-align: center;
  padding-top: 4%;

  .infoMessage {
    path {
      stroke: #449fdb;
    }
    margin-bottom: 30px;
  }
`;

export const StyledTitleDiv = styled.div`
  text-align: center;
`;
