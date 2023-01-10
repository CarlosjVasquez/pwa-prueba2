import * as S from './ButtonReturn.styles';

export interface ButtonReturnProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
}

export const ButtonReturn = (props: ButtonReturnProps) => {
  return (
    <S.ButtonContinue disabled={props.disabled} onClick={props.handleClick}>
      {props.text}
    </S.ButtonContinue>
  );
};

export default ButtonReturn;
