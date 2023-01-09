import styled from 'styled-components';
import { UiBreakpoints } from '@digital-products-nx/ui';

const fonts = UiBreakpoints.fonts;

interface Props {
  urlBackground: string | undefined;
}

export const StyledImageDiv = styled.div<Props>`
  background-image: url(${(props) => props.urlBackground});
  height: 190px;
  border-radius: 0.5em;
  background-size: 100%;
  background-position: center;
`;

export const StyledExitButtonWhite = styled.button`
  font-family: ${fonts.primaryFont};
  float: right;
  background-color: white;
  color: #4544ed;
  font-style: normal;
  font-weight: 700;
  font-size: 14;
  text-align: center;
  margin-right: 2%;
  margin-top: 2%;
  border-radius: 15em;
  width: 65px;
  border: none;
`;

export const StyledTitleDiv1 = styled.div`
  text-align: center;
`;

export const StyledTextTitle = styled.text`
  color: #11171d;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const StyledDiv4 = styled.div`
  padding-top: 1%;
  text-align: center;
`;

export const StyledTextSubtitle = styled.text`
  color: #11171d;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const StyledDiv5 = styled.div`
  padding-top: 4%;
  text-align: center;
  overflow: hidden;
`;

export const StyledAnvRevDiv = styled.div`
  display: inline-block;
  width: 150px;
`;

export const StyledTextAnvRev = styled.text`
  color: #11171d;
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  padding-top: 1%;
`;

export const StyledDiv3 = styled.div`
  padding-bottom: 4%;
`;

export const StyledDiv = styled.div`
  text-align: center;
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

export default StyledImageDiv;
