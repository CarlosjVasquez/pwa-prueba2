import * as S from './FormLogin.styles';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const FormLogin = () => {
  const [clasBtn, setClasBtn] = useState(true);
  const [value, setValue] = useState('');
  const [acept, setAcept] = useState(false);
  const router = useRouter();

  const phoneNumber = (phone: any) => {
    if (phone.length === 12 || phone.length === 13) {
      const auxNumber1 = phone.slice(3, 4);
      if (auxNumber1 === '0') {
        setValue(phone.slice(0, 3) + phone.slice(4, 13));
      } else {
        setValue(phone);
      }
    }
    if (phone.length > 13) {
      setValue('+593');
    }
  };

  const termsConditions = (e: any) => {
    setAcept(e);
  };

  useEffect(() => {
    if (value.length === 12 && acept) {
      setClasBtn(false);
    }
    if (value.length !== 12 || !acept) {
      setClasBtn(true);
    }
  }, [value, acept]);

  const onLogin = () => {
    localStorage.setItem('login', 'true');
    localStorage.setItem('value', value);
    router.push('/validation-otp');
  };

  return (
    <>
      <div className="col-md-6 d-flex justify-content-center">
        <S.Container>
          <S.DivTitle>
            <S.TextTitle>¡Es hora de empezar!</S.TextTitle>
          </S.DivTitle>
          <S.DivPhone>
            <S.TextPhone>Ingresa tu celular</S.TextPhone>
            <PhoneInput
              country={'ec'}
              value={value}
              onChange={(e: any) => phoneNumber(e)}
              searchPlaceholder="search"
            />
          </S.DivPhone>
          <S.DivConditions className="d-flex">
            <S.InputConditions
              type={'checkbox'}
              onChange={(e: any) => termsConditions(e.target.checked)}
            />
            <S.TextConditions>
              He leído, acepto y entiendo los{' '}
              <a href="">Terminos y condiciones</a> y{' '}
              <a href="">Aviso de Privacidad</a> de Difierelo
            </S.TextConditions>
          </S.DivConditions>
          <S.DivButton className="d-flex">
            <Button text="Continuar" handleClick={onLogin} disabled={clasBtn} />
          </S.DivButton>
          <S.DivAccount className="d-flex justify-content-center">
            <S.TextAccount href="/information">
              No tienes cuenta? - Registrate Ahora
            </S.TextAccount>
          </S.DivAccount>
        </S.Container>
      </div>
    </>
  );
};
export default FormLogin;
