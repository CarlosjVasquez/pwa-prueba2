import styled from 'styled-components';

export interface ButtonProps {
  active: boolean;
}

export interface ButtonPrincipalProps {
  color: string;
  onClick: () => void;
}
export const ButtonPrincipal = styled.button<ButtonPrincipalProps>`
  background: ${(props) => props.color};
  border-radius: 100px;
  color: #152738;
  padding: 12px 24px;
  border: none;
  font-weight: bold;
  margin: 20px;
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.active ? '#22D16B' : '#F8F8F7')};
  border-radius: 100px;
  color: #152738;
  padding: 12px 24px;
  border: none;
  font-weight: bold;
  margin: 20px;
`;
