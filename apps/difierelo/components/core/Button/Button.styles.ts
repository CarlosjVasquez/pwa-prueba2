import styled from 'styled-components';
import BSButton from 'react-bootstrap/Button';
import Responsive from '../../../utils/style/Responsive';

export const ButtonContainer = styled(BSButton)`
  margin-inline-end: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  border-radius: 8px;
  font-family: eina;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.02em;
  float: left;

  :hover {
    box-shadow: 0 4px 16px var(--bs-primary);
    transition: all 0.2s ease;
  }

  &.btn-outline-primary:hover {
    background-color: #f8f8f4;
    color: var(--bs-primary);
  }

  ${Responsive.SM} {
    padding: 7px 10px;
    font-size: 14px;
  }
`;
