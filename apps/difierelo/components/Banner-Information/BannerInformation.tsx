import * as S from './BannerInformation.styles';
import { useRouter } from 'next/router';
import Button from '../Button';
import StartOnboarding from '../OnboardingStart';
import { CountryData } from 'react-phone-input-2';
import { useEffect, useState } from 'react';

const BannerInformation: React.FunctionComponent = () => {
  const [value, setValue] = useState('');
  const [acept, setAcept] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [code, setCode] = useState<CountryData>();
  const [clasBtn, setClasBtn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (value.length === 12 || value.length === 13) {
      const auxNumber1 = value.slice(3, 4);
      if (auxNumber1 === '0') {
        setValue(value.slice(0, 3) + value.slice(4, 13));
      } else {
        setValue(value);
      }
    }
    if (value.length > 13) {
      setValue('+593');
    }
  }, [value]);

  useEffect(() => {
    if (value.length === 12 && acept && confirm) {
      setClasBtn(false);
    }
    if (value.length !== 12 || !acept || !confirm) {
      setClasBtn(true);
    }

    if (!acept || !confirm) {
      setClasBtn(true);
    }
  }, [value, code, acept, confirm]);

  const sendOtp = () => {
    //servicio para otp
    console.log('otp', value);
    localStorage.setItem('value', value);
    localStorage.setItem('login', 'false');
    router.push('/validation-otp');
  };

  return (
    <>
      <S.Container className="row">
        <div className="d-flex">
          <div className="col-md-6 d-flex">
            <img
              className="position-absolute"
              alt="Regresar"
              src="./icons/return.svg"
              onClick={() => router.push('/')}
            />
            <S.BannerText>
              <S.ImgDifierelo
                className="btn"
                onClick={() => router.push('/')}
              />
              <S.TextTitle>
                <S.Title>Compra ahora y paga después</S.Title>
              </S.TextTitle>
              <S.TextSubtitle>
                <S.Subtitle>
                  Inicia en Difierelo y compra ahora mismo.
                </S.Subtitle>
              </S.TextSubtitle>
            </S.BannerText>
          </div>
          <div className="col-md-6">
            <S.ImgNav />
          </div>
        </div>
        <StartOnboarding
          value={value}
          setValue={setValue}
          setCode={setCode}
          setAcept={setAcept}
          setConfirm={setConfirm}
        />
        <S.DivButton>
          <Button disabled={clasBtn} text={'Continuar'} handleClick={sendOtp} />
        </S.DivButton>
      </S.Container>
    </>
  );
};

export default BannerInformation;
