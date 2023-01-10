import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './FormAddress.styles';

export const FormAddress = () => {
  const [address, setAddress] = useState('');
  const [codPostal, setCodPostal] = useState('');
  const [country, setCountry] = useState('');
  const [stateCountry, setStateCountry] = useState('');
  const [city, setCity] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (
      address !== '' &&
      codPostal !== '' &&
      country !== '' &&
      stateCountry !== '' &&
      city !== ''
    ) {
      setClasBtn(false);
    }
  }, [address, codPostal, country, stateCountry, city]);

  const sendData = () => {
    if (
      address !== '' &&
      codPostal !== '' &&
      country !== '' &&
      stateCountry !== '' &&
      city !== ''
    ) {
      console.log('address', address);
      console.log('codPostal', codPostal);
      console.log('country', country);
      console.log('stateCountry', stateCountry);
      console.log('city', city);
      router.push('/credit/credit-amount');
    }
  };

  return (
    <S.Container>
      <div className="d-flex pt-5">
        <S.TextTitle>¿Cúal es tu dirección?</S.TextTitle>
      </div>
      <div className="d-flex">
        <S.TextSubtitle>
          Debe ser una dirección residencial y ubicación postal
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <Input
          type="text"
          placeholder="Dirección"
          value={address}
          handleChange={setAddress}
        />
        <Input
          type="text"
          placeholder="Código Postal"
          value={codPostal}
          handleChange={setCodPostal}
        />
        <Input
          type="text"
          placeholder="País"
          value={country}
          handleChange={setCountry}
        />
        <div className="w-50 p-0">
          <Input
            type="text"
            placeholder="Provincia/Estado"
            value={stateCountry}
            handleChange={setStateCountry}
          />
        </div>
        <div className="w-50">
          <Input
            type="text"
            placeholder="Ciudad"
            value={city}
            handleChange={setCity}
          />
        </div>
      </S.ContainerInputs>
      <S.ContainerInfo className="d-flex">
        <S.IconInfo className="d-flex" />
        <S.TextInfo className="d-flex">
          Esta información se mantendrá privada y nunca aparecerá en su perfil
          público.
        </S.TextInfo>
      </S.ContainerInfo>
      <div className="d-flex justify-content-center">
        <Button text="Continuar" handleClick={sendData} disabled={clasBtn} />
      </div>
    </S.Container>
  );
};
export default FormAddress;
