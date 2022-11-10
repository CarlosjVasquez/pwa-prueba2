import { ButtonProps } from 'react-bootstrap';
import * as S from './Button.styles';

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <S.ButtonContainer size="sm" {...props}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
