import * as S from './Button.styles';

export interface ButtonProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <S.ButtonContinue disabled={props.disabled} onClick={props.handleClick}>
      {props.text}
    </S.ButtonContinue>
  );
};
export default Button;
