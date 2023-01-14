import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './OnboardingPersonalData.styles';
import { useRouter } from 'next/router';
import { numbersValidation } from '../../utils/Formats';

export const OnboardingPersonalData = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [identification, setIdentification] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [val, setVal] = useState(false);
  const [val1, setVal1] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      name !== '' &&
      surname !== '' &&
      birthday !== '' &&
      email !== '' &&
      identification !== '' &&
      identification.length === 10 &&
      numbersValidation(identification) !== ''
    ) {
      setClasBtn(false);
      setVal1(false);
    }

    if (numbersValidation(identification) === '' && identification.length > 0) {
      setIdentification('');
      setVal(true);
    }

    if (numbersValidation(identification) !== '') {
      setVal(false);
    }

    if (identification.length > 10) {
      setClasBtn(true);
      setVal1(true);
    }
  }, [name, surname, birthday, identification, email]);

  const sendDataPersonal = () => {
    if (
      name !== '' &&
      surname !== '' &&
      birthday !== '' &&
      email !== '' &&
      identification !== ''
    ) {
      console.log('name', name);
      console.log('surname', surname);
      console.log('email', email);
      console.log('birthday', birthday);
      console.log('identification', identification);
      setIsLoading(true);
      router.push('/biometry-step');
    }
  };

  return (
    <S.Container>
      <div className="d-flex">
        <S.TextTitle>Datos Personales</S.TextTitle>
      </div>
      <div className="d-flex">
        <S.TextSubtitle>
          Requerimos tu nombre legal completo tal como aparece en tu licencia o
          pasaporte.
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <Input
          type="text"
          placeholder="Nombre completo"
          value={name}
          handleChange={setName}
        />
        <Input
          type="text"
          placeholder="Apellidos completos"
          value={surname}
          handleChange={setSurname}
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          handleChange={setEmail}
        />
        <Input
          type="date"
          placeholder="Fecha Nacimiento"
          value={birthday}
          handleChange={setBirthday}
        />
        <Input
          type="text"
          placeholder="Cédula"
          value={identification}
          handleChange={setIdentification}
        />
        {val && <small className="text-danger">Ingrese solo números</small>}
        {val1 && (
          <small className="text-danger">Ingrese una cédula correcta</small>
        )}
      </S.ContainerInputs>
      <S.ContainerInfo className="d-flex">
        <S.IconInfo className="d-flex" />
        <S.TextInfo className="d-flex">
          Esta información se mantendrá privada y nunca aparecerá en su perfil
          público.
        </S.TextInfo>
      </S.ContainerInfo>
      <div className="d-flex w-100 justify-content-center mx-1">
        <Button
          text="Continuar"
          handleClick={sendDataPersonal}
          disabled={clasBtn}
          loading={isLoading}
        />
      </div>
    </S.Container>
  );
};
export default OnboardingPersonalData;
