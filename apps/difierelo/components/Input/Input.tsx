import React from 'react';
import * as S from './Input.styles';
import { formatNumber } from '../../utils/Formats';

export interface Input {
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  typeFormat?: string;
  pattern?: string;
}

export const Input = (props: Input) => {
  return (
    <div className="input-group">
      {props.typeFormat === 'currency' && (
        <S.FormSpan className="input-group-text fw-bold">$</S.FormSpan>
      )}
      <S.FormInput
        className={
          props.typeFormat === 'currency' && 'border-start-0 ' + 'form-control'
        }
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e: any) => {
          props.typeFormat === 'currency' &&
            (e.target.value = formatNumber(e.target.value));
          props.handleChange(e.target.value);
        }}
        pattern={props.pattern}
      />
    </div>
  );
};
export default Input;
