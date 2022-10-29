import styled from "styled-components";
import BSNavbar from "react-bootstrap/Navbar";

export const Navbar = styled(BSNavbar)`
  background-color: #f7f7f7;
  height: 90px;
  width: 100%;

  h6 {
    color: #11171d;
    font-size: 14px;
    font-weight: 600;
    font-family: Eina 02;
    padding-top: 3.5vh;
    font-style: normal;
    line-height: 19px;
  }
`;

export const Collapse = styled(BSNavbar.Collapse)`
  background-color: #f7f7f7;
  padding-bottom: 10px;
  padding-inline-start: 10px;
`;

export const BtnSuccess = styled.button`
  margin-inline-end: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  width: 150px;
  height: 55px;
  background: #4544ed;
  border-radius: 8px;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  float: left;
`;

export const BtnLight = styled.button`
  margin-inline-start: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 40px;
  gap: 8px;
  width: 150px;
  height: 55px;
  background: #f8f8f4;
  border-radius: 8px;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #4544ed;
  border-color: #4544ed;
`;
