import * as S from './OnboardingOtp.styles';
import { useEffect, useState } from 'react';

export interface OnboardingOtpProps {
  setClasBtn: (e: boolean) => void;
  setOtp1: (e: any) => void;
  setOtp2: (e: any) => void;
  setOtp3: (e: any) => void;
  setOtp4: (e: any) => void;
  setOtp5: (e: any) => void;
  setOtp6: (e: any) => void;
  input1: any;
  input2: any;
  input3: any;
  input4: any;
  input5: any;
  input6: any;
  setCounter: (e: any) => void;
}

export const OnboardingOtp = (props: OnboardingOtpProps) => {
  const phone = localStorage.getItem('value');
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0 && minutes === 0) {
        clearInterval(interval);
        props.setClasBtn(true);
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

  return (
    <>
      <S.TextTitle>
        <S.Title>Validación de celular</S.Title>
      </S.TextTitle>
      <S.TextSubtitle>
        <S.Subtitle>
          Para continuar, ingresa el código de 6 dígitos que enviamos al número
        </S.Subtitle>
      </S.TextSubtitle>
      <S.DivInfo className="row">
        <S.TextInfo>
          El siguiente número quedará registrado en tu solicitud:
        </S.TextInfo>
        <S.PhoneInfo>
          + {phone.slice(0, 3)} {phone.slice(3, 6)} {phone.slice(6, 9)}{' '}
          {phone.slice(9, 12)}
        </S.PhoneInfo>
      </S.DivInfo>
      <S.DivOtp className="row">
        <S.TextOtp>
          El código vencerá en {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}{' '}
          {minutes > 0 ? 'minutos' : 'segundos'}
        </S.TextOtp>
        <S.DivOtpInput>
          <S.OtpInput
            id="txtOtp1"
            type="text"
            onChange={(e: any) => props.setOtp1(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input1}
            pattern="[0-9]*"
            tabIndex={1}
          />
          <S.OtpInput
            type={'text'}
            onChange={(e: any) => props.setOtp2(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input2}
            pattern="[0-9]*"
            tabIndex={2}
          />
          <S.OtpInput
            type={'text'}
            onChange={(e: any) => props.setOtp3(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input3}
            pattern="[0-9]*"
            tabIndex={3}
          />
          <S.OtpInput
            type={'text'}
            onChange={(e: any) => props.setOtp4(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input4}
            pattern="[0-9]*"
            tabIndex={4}
          />
          <S.OtpInput
            type={'text'}
            onChange={(e: any) => props.setOtp5(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input5}
            pattern="[0-9]*"
            tabIndex={5}
          />
          <S.OtpInput
            type={'text'}
            onChange={(e: any) => props.setOtp6(e.target.value)}
            onKeyDown={(e: any) => props.setCounter(e)}
            maxLength={1}
            ref={props.input6}
            pattern="[0-9]*"
            tabIndex={6}
          />
        </S.DivOtpInput>
      </S.DivOtp>
      <S.DivOtpResend className="row">
        <S.OtpQuestion>¿No recibiste el código?</S.OtpQuestion>
        <S.OtpResend onClick={() => console.log('reenviar otp')}>
          Reenviar SMS
        </S.OtpResend>
      </S.DivOtpResend>
    </>
  );
};

export default OnboardingOtp;
