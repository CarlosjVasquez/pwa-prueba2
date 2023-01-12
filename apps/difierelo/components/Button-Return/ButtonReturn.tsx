import * as S from './ButtonReturn.styles';

export interface ButtonReturnProps {
  text: string;
  handleClick: () => void;
  disabled: boolean;
  loading?: boolean;
}

export const ButtonReturn = (props: ButtonReturnProps) => {
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

export default ButtonReturn;
