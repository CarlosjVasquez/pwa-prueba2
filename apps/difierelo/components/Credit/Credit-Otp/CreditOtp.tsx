import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Button from '../../Button';
import ModalRequest from '../../Modal-Request';
import * as S from './CreditOtp.styles';
import Modal from 'react-bootstrap/Modal';
import { numbersValidation } from '../../../utils/Formats';

export const CreditOtp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clasBtn, setClasBtn] = useState(true);
  const router = useRouter();
  const phone = localStorage.getItem('value');
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval);
        setClasBtn(true);
        setMinutes(2);
        setSeconds(0);
      }
      if (seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes]);

  useEffect(() => {
    if (
      otp1 !== '' &&
      otp2 !== '' &&
      otp3 !== '' &&
      otp4 !== '' &&
      otp5 !== '' &&
      otp6 !== ''
    ) {
      setClasBtn(false);
    } else {
      setClasBtn(true);
      setIsOpen(false);
    }
  }, [otp1, otp2, otp3, otp4, otp5, otp6]);

  useEffect(() => {
    if (otp1 === '') {
      input1.current.focus();
    }

    if (numbersValidation(otp1) === '') {
      setOtp1('');
      input1.current.value = '';
    }

    if (otp1 !== '' && numbersValidation(otp1) !== '' && otp2 === '') {
      input2.current.focus();
    }

    if (numbersValidation(otp2) === '') {
      setOtp2('');
      input2.current.value = '';
    }

    if (
      otp1 !== '' &&
      numbersValidation(otp1) !== '' &&
      otp2 !== '' &&
      numbersValidation(otp2) !== '' &&
      otp3 === ''
    ) {
      input3.current.focus();
    }

    if (numbersValidation(otp3) === '') {
      setOtp3('');
      input3.current.value = '';
    }

    if (
      otp1 !== '' &&
      numbersValidation(otp1) !== '' &&
      otp2 !== '' &&
      numbersValidation(otp2) !== '' &&
      otp3 !== '' &&
      numbersValidation(otp3) !== '' &&
      otp4 === ''
    ) {
      input4.current.focus();
    }

    if (numbersValidation(otp4) === '') {
      setOtp4('');
      input4.current.value = '';
    }

    if (
      otp1 !== '' &&
      numbersValidation(otp1) !== '' &&
      otp2 !== '' &&
      numbersValidation(otp2) !== '' &&
      otp3 !== '' &&
      numbersValidation(otp3) !== '' &&
      otp4 !== '' &&
      numbersValidation(otp4) !== '' &&
      otp5 === ''
    ) {
      input5.current.focus();
    }

    if (numbersValidation(otp5) === '') {
      setOtp5('');
      input5.current.value = '';
    }

    if (
      otp1 !== '' &&
      numbersValidation(otp1) !== '' &&
      otp2 !== '' &&
      numbersValidation(otp2) !== '' &&
      otp3 !== '' &&
      numbersValidation(otp3) !== '' &&
      otp4 !== '' &&
      numbersValidation(otp4) !== '' &&
      otp5 !== '' &&
      numbersValidation(otp5) !== '' &&
      otp6 === ''
    ) {
      input6.current.focus();
    }

    if (numbersValidation(otp6) === '') {
      setOtp6('');
      input6.current.value = '';
    }
  }, [otp1, otp2, otp3, otp4, otp5, otp6]);

  const backSpace = (e: any) => {
    const target = e.target as HTMLInputElement;
    if (e.key === 'Backspace' && target.value === '' && target.tabIndex) {
      const previdno = target.tabIndex - 1;

      if (previdno && !isNaN(+target.value) && target.tabIndex === 6) {
        input5.current.focus();
      }

      if (previdno && !isNaN(+target.value) && target.tabIndex === 5) {
        input4.current.focus();
      }

      if (previdno && !isNaN(+target.value) && target.tabIndex === 4) {
        input3.current.focus();
      }

      if (previdno && !isNaN(+target.value) && target.tabIndex === 3) {
        input2.current.focus();
      }

      if (previdno && !isNaN(+target.value) && target.tabIndex === 2) {
        input1.current.focus();
      }
    }
  };

  const sendData = () => {
    if (
      otp1 !== '' &&
      otp2 !== '' &&
      otp3 !== '' &&
      otp4 !== '' &&
      otp5 !== '' &&
      otp6 !== ''
    ) {
      const otpArray = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
      console.log('otpArray', otpArray);
      setIsOpen(true);
    }
  };

  const closeModal = (e: any) => {
    console.log(e);
    if (e === 1) {
      setIsOpen(false);
      router.push('/credit/credit-approve');
    }

    if (e === 2) {
      setIsOpen(false);
      router.push('/credit/credit-approve');
    }

    if (e === 3) {
      setIsOpen(false);
      router.push('/credit/credit-fail');
    }
  };

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <S.ImgDifierelo />
            <div className="d-flex justify-content-end align-content-center">
              <a className="px-2">
                <img src="../icons/question.svg" />
              </a>
              <a href="/credit/credit-history">
                <img src="../icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={75} />
        </div>
        <S.DivValidation className="d-flex row mx-1">
          <div className="d-flex pt-4 mx-3">
            <S.InputConditions type={'checkbox'} checked readOnly />
            <S.TextConditions>
              Validación del Historial Crediticio
            </S.TextConditions>
          </div>
          <div className="d-flex pt-4">
            <S.TextTitle>
              Autorizo la consulta de mi comportamiento crediticio
            </S.TextTitle>
          </div>
          <div className="pt-4 d-flex row">
            <S.DivPhone className="d-flex row">
              <S.TextInfo>
                El siguiente número quedará registrado en tu solicitud:
              </S.TextInfo>
              <S.PhoneInfo>
                + {phone.slice(0, 3)} {phone.slice(3, 6)} {phone.slice(6, 9)}{' '}
                {phone.slice(9, 12)}
              </S.PhoneInfo>
            </S.DivPhone>
            <S.DivOtp className="d-flex row">
              <S.TextOtp>
                El código vencerá en {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}{' '}
                {minutes > 0 ? 'minutos' : 'segundos'}
              </S.TextOtp>
              <S.DivOtpInput className="d-flex pt-3 row justify-content-between align-items-center">
                <S.OtpInput
                  id="txtOtp1"
                  type={'text'}
                  onChange={(e: any) => setOtp1(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input1}
                  pattern="[0-9]*"
                  tabIndex={1}
                />
                <S.OtpInput
                  type={'text'}
                  onChange={(e: any) => setOtp2(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input2}
                  pattern="[0-9]*"
                  tabIndex={2}
                />
                <S.OtpInput
                  type={'text'}
                  onChange={(e: any) => setOtp3(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input3}
                  pattern="[0-9]*"
                  tabIndex={3}
                />
                <S.OtpInput
                  type={'text'}
                  onChange={(e: any) => setOtp4(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input4}
                  pattern="[0-9]*"
                  tabIndex={4}
                />
                <S.OtpInput
                  type={'text'}
                  onChange={(e: any) => setOtp5(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input5}
                  pattern="[0-9]*"
                  tabIndex={5}
                />
                <S.OtpInput
                  type={'text'}
                  onChange={(e: any) => setOtp6(e.target.value)}
                  onKeyDown={(e: any) => backSpace(e)}
                  maxLength={1}
                  ref={input6}
                  pattern="[0-9]*"
                  tabIndex={6}
                />
              </S.DivOtpInput>
            </S.DivOtp>
            <S.DivOtpResend className="d-flex flex-column">
              <S.OtpQuestion className="d-flex">
                ¿No recibiste el código?
              </S.OtpQuestion>
              <S.OtpResend
                className="d-flex"
                onClick={() => console.log('reenviar otp')}
              >
                Reenviar SMS
              </S.OtpResend>
            </S.DivOtpResend>
          </div>
        </S.DivValidation>
        <div className="d-flex justify-content-center pt-4">
          <Button text="Continuar" handleClick={sendData} disabled={clasBtn} />
        </div>
      </S.Container>
      {isOpen && (
        <Modal show={isOpen} backdrop="static" keyboard={false} centered={true}>
          <ModalRequest
            title="Estamos realizando la consulta"
            textOne="Espera un momento mientras obtenemos la información necesaria"
            loading={isOpen}
            onContinue={(e: any) => closeModal(e)}
            result={1}
          />
        </Modal>
      )}
    </>
  );
};
export default CreditOtp;
