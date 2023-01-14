import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './FormAddress.styles';

export const FormAddress = () => {
  const [address, setAddress] = useState('');
  const [address1, setAddress1] = useState('');
  const [codPostal, setCodPostal] = useState('');
  const [country, setCountry] = useState('');
  const [stateCountry, setStateCountry] = useState('');
  const [city, setCity] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      address !== '' &&
      codPostal !== '' &&
      country !== '' &&
      stateCountry !== '' &&
      city !== '' &&
      address1 !== ''
    ) {
      setClasBtn(false);
    }
  }, [address, codPostal, country, stateCountry, city, address1]);

  const sendData = () => {
    if (
      address !== '' &&
      codPostal !== '' &&
      country !== '' &&
      stateCountry !== '' &&
      city !== '' &&
      address1 !== ''
    ) {
      console.log('address', address);
      console.log('address1', address1);
      console.log('codPostal', codPostal);
      console.log('country', country);
      console.log('stateCountry', stateCountry);
      console.log('city', city);
      setIsLoading(true);
      router.push('/credit/credit-amount');
    }
  };

  return (
    <S.Container>
      <div className="d-flex pt-3">
        <S.TextTitle>¿Cúal es tu dirección?</S.TextTitle>
      </div>
      <div className="d-flex">
        <S.TextSubtitle>
          Debe ser una dirección residencial y ubicación postal
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <div className="input-group">
          <S.FormSelect
            className="form-control mb-2"
            onChange={(e: any) => setCountry(e.target.value)}
          >
            <option value={''} disabled selected>
              País
            </option>
            <option value={'Ec'}>Ecuador</option>
          </S.FormSelect>
        </div>

        <div className="w-50">
          <div className="input-group">
            <S.FormSelect
              className="form-control mb-2"
              onChange={(e: any) => setStateCountry(e.target.value)}
            >
              <option value={''} disabled selected>
                Provincia/Estado
              </option>
              <option value={'1'}>Azuay</option>
              <option value={'2'}>Bolívar</option>
              <option value={'3'}>Cañar</option>
              <option value={'4'}>Carchi</option>
              <option value={'5'}>Chimborazo</option>
              <option value={'6'}>Cotopaxi</option>
              <option value={'7'}>El Oro</option>
              <option value={'8'}>Esmeraldas</option>
              <option value={'9'}>Galápagos</option>
              <option value={'10'}>Guayas</option>
              <option value={'11'}>Imbabura</option>
              <option value={'12'}>Loja</option>
              <option value={'13'}>Los Ríos</option>
              <option value={'14'}>Manabí</option>
              <option value={'15'}>Morona Santiago</option>
              <option value={'16'}>Napo</option>
              <option value={'17'}>Sucumbíos</option>
              <option value={'18'}>Pastaza</option>
              <option value={'19'}>Pinchincha</option>
              <option value={'20'}>Santa Elena</option>
              <option value={'21'}>Santo Domingo</option>
              <option value={'22'}>Francisco De Orellana</option>
              <option value={'23'}>Tungurahua</option>
              <option value={'24'}>Zamora Chinchipe</option>
            </S.FormSelect>
          </div>
        </div>
        <div className="w-50">
          <Input
            type="text"
            placeholder="Ciudad"
            value={city}
            handleChange={setCity}
          />
        </div>
        <Input
          type="text"
          placeholder="Dirección - Calle primaria"
          value={address}
          handleChange={setAddress}
        />
        <Input
          type="text"
          placeholder="Dirección - Calle secundaria - Información adicional"
          value={address1}
          handleChange={setAddress1}
        />
        <Input
          type="text"
          placeholder="Código Postal"
          value={codPostal}
          handleChange={setCodPostal}
        />
      </S.ContainerInputs>
      <S.ContainerInfo className="d-flex">
        <S.IconInfo className="d-flex" />
        <S.TextInfo className="d-flex">
          Esta información se mantendrá privada y nunca aparecerá en su perfil
          público.
        </S.TextInfo>
      </S.ContainerInfo>
      <div className="d-flex justify-content-center">
        <Button
          text="Continuar"
          handleClick={sendData}
          disabled={clasBtn}
          loading={isLoading}
        />
      </div>
    </S.Container>
  );
};
export default FormAddress;
