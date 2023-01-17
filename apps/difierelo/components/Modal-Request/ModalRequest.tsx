import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import * as S from './ModalRequest.styles';
import { onlyNumber } from '../../utils/Formats';

export interface ModalRequestProps {
  title: string;
  textOne: string;
  loading: boolean;
  result: number;
  onContinue: (data: any) => void;
}

export const ModalRequest = (props: ModalRequestProps) => {
  useEffect(() => {
    const valor = localStorage.getItem('amount');
    const a = onlyNumber(valor);
    const aux = a.replace(',', '');
    let aprove = 0;

    if (parseInt(aux) <= 600) {
      aprove = 1;
    }

    if (parseInt(aux) > 600 && parseInt(aux) <= 1200) {
      aprove = 2;
    }

    if (parseInt(aux) > 1200) {
      aprove = 3;
    }

    console.log('valor', parseInt(aux));

    if (props.loading && aprove === 1) {
      setTimeout(() => {
        props.onContinue(aprove);
        localStorage.setItem('amountReduce', '$0.00');
      }, 2000);
    }

    if (props.loading && aprove === 2) {
      setTimeout(() => {
        props.onContinue(aprove);
        localStorage.setItem('amountReduce', '$900.00');
      }, 3000);
    }

    if (props.loading && aprove === 3) {
      setTimeout(() => {
        props.onContinue(aprove);
        localStorage.setItem('amountReduce', '$0.00');
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
