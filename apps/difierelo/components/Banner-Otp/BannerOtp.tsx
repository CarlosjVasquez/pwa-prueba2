import React, { useEffect, useRef } from 'react';
import Button from '../Button';
import OnboardingOtp from '../OnboardingOtp';
import * as S from './BannerOtp.styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { numbersValidation } from '../../utils/Formats';

export const BannerOtp = () => {
  const [clasBtn, setClasBtn] = useState(true);
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [otp6, setOtp6] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);
  const input5 = useRef(null);
  const input6 = useRef(null);

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

  const validateOtp = () => {
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
      setLoading(true);
      if (localStorage.getItem('login') === 'false') {
        router.push('/personal-data');
      }
      if (localStorage.getItem('login') === 'true') {
        localStorage.setItem('userM', '$850.00');
        localStorage.setItem('amount', '$850.00');
        router.push('/dashboard');
      }
    }
  };

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <div className="d-flex col-md-6">
            <S.BannerText>
              {localStorage.getItem('login') === 'false' ? (
                <img
                  className="position-absolute"
                  alt="Regresar"
                  src="./icons/return.svg"
                  onClick={() => router.push('/information')}
                />
              ) : (
                <img
                  className="position-absolute"
                  alt="Regresar"
                  src="./icons/return.svg"
                  onClick={() => router.push('/login')}
                />
              )}

              <S.ImgDifierelo />
              <S.TextTitle>
                <S.Title>Compra ahora y paga después</S.Title>
              </S.TextTitle>
            </S.BannerText>
          </div>
          <div className="d-flex col-md-6">
            <S.BannerIcons>
              <div className="d-flex justify-content-end">
                <a className="px-2">
                  <img src="./icons/question.svg" />
                </a>
                <a href="/information">
                  <img src="./icons/close.svg" />
                </a>
              </div>
              <S.ImgNav />
            </S.BannerIcons>
          </div>
        </div>
        <OnboardingOtp
          setClasBtn={setClasBtn}
          setOtp1={setOtp1}
          setOtp2={setOtp2}
          setOtp3={setOtp3}
          setOtp4={setOtp4}
          setOtp5={setOtp5}
          setOtp6={setOtp6}
          input1={input1}
          input2={input2}
          input3={input3}
          input4={input4}
          input5={input5}
          input6={input6}
          setCounter={backSpace}
        />
        <S.DivButton>
          <Button
            disabled={clasBtn}
            text="Continuar"
            handleClick={validateOtp}
            loading={loading}
          />
        </S.DivButton>
      </S.Container>
    </>
  );
};
export default BannerOtp;
function useForm(arg0: { mode: string }) {
  throw new Error('Function not implemented.');
}
