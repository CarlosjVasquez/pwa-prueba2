import * as S from './Button.styles';

export interface ButtonProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
  loading?: boolean;
}

export const Button = (props: ButtonProps) => {
  return (
    <S.ButtonContinue disabled={props.disabled} onClick={props.handleClick}>
      {!props.loading && props.text}
      {props.loading && (
        <S.StyleSpinner className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </S.StyleSpinner>
      )}
    </S.ButtonContinue>
  );
};
export default Button;
