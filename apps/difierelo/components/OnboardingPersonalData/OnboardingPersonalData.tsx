import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './OnboardingPersonalData.styles';
import { useRouter } from 'next/router';

export const OnboardingPersonalData = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [identification, setIdentification] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (
      name !== '' &&
      surname !== '' &&
      birthday !== '' &&
      identification !== '' &&
      identification.length === 10
    ) {
      setClasBtn(false);
    }
  }, [name, surname, birthday, identification]);

  const sendDataPersonal = () => {
    if (
      name !== '' &&
      surname !== '' &&
      birthday !== '' &&
      identification !== ''
    ) {
      console.log('name', name);
      console.log('surname', surname);
      console.log('birthday', birthday);
      console.log('identification', identification);
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
      </S.ContainerInputs>
      <S.ContainerInfo className="d-flex">
        <S.IconInfo className="d-flex" />
        <S.TextInfo className="d-flex">
          Esta información se mantendrá privada y nunca aparecerá en su perfil
          público.
        </S.TextInfo>
      </S.ContainerInfo>
      <div className="d-flex w-100 justify-content-center">
        <Button
          text="Continuar"
          handleClick={sendDataPersonal}
          disabled={clasBtn}
        />
      </div>
    </S.Container>
  );
};
export default OnboardingPersonalData;
