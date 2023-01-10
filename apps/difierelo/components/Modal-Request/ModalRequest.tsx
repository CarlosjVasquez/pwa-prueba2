import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as S from './ModalRequest.styles';

export interface ModalRequestProps {
  title: string;
  textOne: string;
  loading: boolean;
  result: number;
  onContinue: (data: any) => void;
}

export const ModalRequest = (props: ModalRequestProps) => {
  useEffect(() => {
    if (props.loading && props.result === 1) {
      setTimeout(() => {
        props.onContinue(props.result);
        localStorage.setItem('amountReduce', '0');
      }, 2000);
    }

    if (props.loading && props.result === 2) {
      setTimeout(() => {
        props.onContinue(props.result);
        localStorage.setItem('amountReduce', '400');
      }, 3000);
    }

    if (props.loading && props.result === 3) {
      setTimeout(() => {
        props.onContinue(props.result);
        localStorage.setItem('amount', '$0.00');
      }, 4000);
    }
  }, []);

  return (
    <>
      <Modal.Body>
        <S.StyledBody className="d-flex row pb-5">
          {props.loading && (
            <S.StyleSpinner className="d-flex justify-content-center pt-5">
              <div className="spinner-border" role="status"></div>
            </S.StyleSpinner>
          )}
          <div className="d-flex pt-4 justify-content-center">
            <S.TextTitle>{props.title}</S.TextTitle>
          </div>
          <div className="d-flex pt-2 justify-content-center">
            <S.TextSubtitle>{props.textOne}</S.TextSubtitle>
          </div>
        </S.StyledBody>
      </Modal.Body>
    </>
  );
};

export default ModalRequest;
