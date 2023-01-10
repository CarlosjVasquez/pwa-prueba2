import React from 'react';
import * as S from './Input.styles';

export interface Input {
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
}

export const Input = (props: Input) => {
  return (
    <S.FormInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e: any) => props.handleChange(e.target.value)}
      value={props.value}
    />
  );
};
export default Input;
