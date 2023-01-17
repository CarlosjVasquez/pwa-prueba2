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
          <S.FormSelect
            className="form-control mb-2"
            onChange={(e: any) => setCity(e.target.value)}
          >
            <option value={''} disabled selected>
              Ciudad
            </option>
            {stateCountry === '1' && (
              <>
                <option value={'1'}>Chordeleg</option>
                <option value={'2'}>Cuenca</option>
                <option value={'3'}>El Pan</option>
                <option value={'4'}>Girón</option>
                <option value={'5'}>Guachapala</option>
                <option value={'6'}>Gualaceo</option>
                <option value={'7'}>Nabón</option>
                <option value={'8'}>Oña</option>
                <option value={'9'}>Paute</option>
                <option value={'10'}>Pucará</option>
                <option value={'11'}>San Fernando</option>
                <option value={'12'}>Santa Isabel</option>
                <option value={'13'}>Sevilla de Oro</option>
                <option value={'14'}>Sígsig</option>
                <option value={'15'}>Ponce Enriquez</option>
              </>
            )}
            {stateCountry === '2' && (
              <>
                <option value={'1'}>Caluma</option>
                <option value={'2'}>Chillanes</option>
                <option value={'3'}>Chimbo</option>
                <option value={'4'}>Echeandía</option>
                <option value={'5'}>Guaranda</option>
                <option value={'6'}>Las Naves</option>
                <option value={'7'}>San Miguel</option>
              </>
            )}
            {stateCountry === '3' && (
              <>
                <option value={'1'}>Azogues</option>
                <option value={'2'}>Cañar</option>
                <option value={'3'}>Biblián</option>
                <option value={'4'}>La Troncal</option>
                <option value={'5'}>El Tambo</option>
                <option value={'6'}>Déleg</option>
                <option value={'7'}>Suscal</option>
              </>
            )}
            {stateCountry === '4' && (
              <>
                <option value={'1'}>Tulcán</option>
                <option value={'2'}>Bolívar</option>
                <option value={'3'}>Mira</option>
                <option value={'4'}>Espejo</option>
                <option value={'5'}>Montúfar</option>
                <option value={'6'}>San Pedro de Huaca</option>
              </>
            )}
            {stateCountry === '5' && (
              <>
                <option value={'1'}>Alausí</option>
                <option value={'2'}>Colta</option>
                <option value={'3'}>Cumandá</option>
                <option value={'4'}>Chambo</option>
                <option value={'5'}>Chunchi</option>
                <option value={'6'}>Guamote</option>
                <option value={'7'}>Guano</option>
                <option value={'8'}>Pallatanga</option>
                <option value={'9'}>Penipe</option>
                <option value={'10'}>Riobamba</option>
              </>
            )}
            {stateCountry === '6' && (
              <>
                <option value={'1'}>Latacunga</option>
                <option value={'2'}>La Maná</option>
                <option value={'3'}>Pangua</option>
                <option value={'4'}>Pujilí</option>
                <option value={'5'}>Salcedo</option>
                <option value={'6'}>Saquisilí</option>
                <option value={'7'}>Sigchos</option>
              </>
            )}
            {stateCountry === '7' && (
              <>
                <option value={'1'}>Arenillas</option>
                <option value={'2'}>Atahualpa</option>
                <option value={'3'}>Balsas</option>
                <option value={'4'}>Chilla</option>
                <option value={'5'}>El Guabo</option>
                <option value={'6'}>Huaquillas</option>
                <option value={'7'}>Las Lajas</option>
                <option value={'8'}>Machala</option>
                <option value={'9'}>Marcabelí</option>
                <option value={'10'}>Pasaje</option>
                <option value={'11'}>Piñas</option>
                <option value={'12'}>Portovelo</option>
                <option value={'13'}>Santa Rosa</option>
                <option value={'14'}>Zaruma</option>
              </>
            )}
            {stateCountry === '8' && (
              <>
                <option value={'1'}>Esmeraldas</option>
                <option value={'2'}>Eloy Alfaro</option>
                <option value={'3'}>Muisne</option>
                <option value={'4'}>Quinindé</option>
                <option value={'5'}>San Lorenzo</option>
                <option value={'6'}>Atacames</option>
                <option value={'7'}>Río Verde</option>
                <option value={'8'}>La Concordia</option>
              </>
            )}
            {stateCountry === '9' && (
              <>
                <option value={'1'}>San Cristóbal</option>
                <option value={'2'}>Isabela</option>
                <option value={'3'}>Santa Cruz</option>
              </>
            )}
            {stateCountry === '10' && (
              <>
                <option value={'1'}>Guayaquil</option>
                <option value={'2'}>Baquerizo Moreno</option>
                <option value={'3'}>Balao</option>
                <option value={'4'}>Balzar</option>
                <option value={'5'}>Colimes</option>
                <option value={'6'}>Daule</option>
                <option value={'7'}>Durán</option>
                <option value={'8'}>El Empalme</option>
                <option value={'9'}>El Triunfo</option>
                <option value={'10'}>Milagro</option>
                <option value={'11'}>Naranjal</option>
                <option value={'12'}>Naranjito</option>
                <option value={'13'}>Palestina</option>
                <option value={'14'}>Pedro Carbo</option>
                <option value={'15'}>Samborondón</option>
                <option value={'16'}>Santa Lucía</option>
                <option value={'17'}>Salitre</option>
                <option value={'18'}>Yaguachi</option>
                <option value={'19'}>General Villamil</option>
                <option value={'20'}>Simón Bolívar</option>
                <option value={'21'}>Marcelino Maridueña</option>
                <option value={'22'}>Nobol</option>
                <option value={'23'}>Lomas de Sargentillo</option>
                <option value={'24'}>Antonio Elizalde</option>
                <option value={'25'}>Isidro Ayora</option>
              </>
            )}
            {stateCountry === '11' && (
              <>
                <option value={'1'}>Antonio Ante</option>
                <option value={'2'}>Cotacachi</option>
                <option value={'3'}>Ibarra</option>
                <option value={'4'}>Otavalo</option>
                <option value={'5'}>Pimampiro</option>
                <option value={'6'}>Urcuquí</option>
              </>
            )}
            {stateCountry === '12' && (
              <>
                <option value={'1'}>Loja</option>
                <option value={'2'}>Calvas</option>
                <option value={'3'}>Catamayo</option>
                <option value={'4'}>Chaguarpamba</option>
                <option value={'5'}>Celica</option>
                <option value={'6'}>Espíndola</option>
                <option value={'7'}>Gonzamaná</option>
                <option value={'8'}>Macará</option>
                <option value={'9'}>Paltas</option>
                <option value={'10'}>Puyango</option>
                <option value={'11'}>Saraguro</option>
                <option value={'12'}>Sozoranga</option>
                <option value={'13'}>Zapotillo</option>
                <option value={'14'}>Pindal</option>
                <option value={'15'}>Quilanga</option>
                <option value={'16'}>Olmedo</option>
              </>
            )}
            {stateCountry === '13' && (
              <>
                <option value={'1'}>Babahoyo</option>
                <option value={'2'}>Baba</option>
                <option value={'3'}>Montalvo</option>
                <option value={'4'}>San Francisco de Puebloviejo</option>
                <option value={'5'}>Quevedo</option>
                <option value={'6'}>Urdaneta</option>
                <option value={'7'}>Ventanas</option>
                <option value={'8'}>Vinces</option>
                <option value={'9'}>Palenque</option>
                <option value={'10'}>Buena Fé</option>
                <option value={'11'}>Valencia</option>
                <option value={'12'}>Mocache</option>
                <option value={'13'}>Quinsaloma</option>
              </>
            )}
            {stateCountry === '14' && (
              <>
                <option value={'1'}>Portoviejo</option>
                <option value={'2'}>Bolívar</option>
                <option value={'3'}>Chone</option>
                <option value={'4'}>El Carmen</option>
                <option value={'5'}>Flavio Alfaro</option>
                <option value={'6'}>Jipijapa</option>
                <option value={'7'}>Puerto López</option>
                <option value={'8'}>Junín</option>
                <option value={'9'}>Manta</option>
                <option value={'10'}>Montecristi</option>
                <option value={'11'}>Paján</option>
                <option value={'12'}>Pichincha</option>
                <option value={'13'}>Rocafuerte</option>
                <option value={'14'}>Santa Ana</option>
                <option value={'15'}>Olmedo</option>
                <option value={'16'}>Sucre</option>
                <option value={'17'}>Tosagua</option>
                <option value={'18'}>24 de Mayo</option>
                <option value={'19'}>Pedernales</option>
                <option value={'20'}>Jama</option>
                <option value={'21'}>Jaramijó</option>
                <option value={'22'}>San Vicente</option>
              </>
            )}
            {stateCountry === '15' && (
              <>
                <option value={'1'}>Gualaquiza</option>
                <option value={'2'}>Huamboya</option>
                <option value={'3'}>Limón Indanza</option>
                <option value={'4'}>Logroño</option>
                <option value={'5'}>Morona</option>
                <option value={'6'}>Pablo Sexto</option>
                <option value={'7'}>Palora</option>
                <option value={'8'}>San Juan Bosco</option>
                <option value={'9'}>Santiago</option>
                <option value={'10'}>Sucúa</option>
                <option value={'11'}>Taisha</option>
                <option value={'12'}>Tiwintza</option>
              </>
            )}
            {stateCountry === '16' && (
              <>
                <option value={'1'}>Tena</option>
                <option value={'2'}>Archidona</option>
                <option value={'3'}>El Chaco</option>
                <option value={'4'}>Quijos</option>
                <option value={'5'}>Carlos Julio Arosemena Tola</option>
              </>
            )}
            {stateCountry === '17' && (
              <>
                <option value={'1'}>Cascales</option>
                <option value={'2'}>Cuyabeno</option>
                <option value={'3'}>Gonzalo Pizarro</option>
                <option value={'4'}>Lago Agrio</option>
                <option value={'5'}>Putumayo</option>
                <option value={'6'}>Shushufindi</option>
                <option value={'7'}>Nueva Loja</option>
              </>
            )}
            {stateCountry === '18' && (
              <>
                <option value={'1'}>Arajuno</option>
                <option value={'2'}>Mera</option>
                <option value={'3'}>Puyo</option>
                <option value={'4'}>Santa Clara</option>
              </>
            )}
            {stateCountry === '19' && (
              <>
                <option value={'1'}>Quito</option>
                <option value={'2'}>Cayambe</option>
                <option value={'3'}>Mejía</option>
                <option value={'4'}>Pedro Moncayo</option>
                <option value={'5'}>Rumiñahui</option>
                <option value={'6'}>San Miguel de los Bancos</option>
                <option value={'7'}>Pedro Vicente Maldonado</option>
                <option value={'8'}>Puerto Quito</option>
              </>
            )}
            {stateCountry === '20' && (
              <>
                <option value={'1'}>Salinas</option>
                <option value={'2'}>Santa Elena</option>
                <option value={'3'}>La Libertad</option>
              </>
            )}
            {stateCountry === '21' && (
              <>
                <option value={'1'}>San José de Alluriquín</option>
                <option value={'2'}>Puerto Limón</option>
                <option value={'3'}>Luz de América</option>
                <option value={'4'}>San Jacinto del Búa</option>
                <option value={'5'}>Valle Hermoso</option>
                <option value={'6'}>El Esfuerzo</option>
                <option value={'7'}>Santa María del Toachi</option>
              </>
            )}
            {stateCountry === '22' && (
              <>
                <option value={'1'}>Francisco de Orellana</option>
                <option value={'2'}>Aguarico</option>
                <option value={'3'}>La Joya de los Sachas</option>
                <option value={'4'}>Loreto</option>
              </>
            )}
            {stateCountry === '23' && (
              <>
                <option value={'1'}>Ambato</option>
                <option value={'2'}>Baños</option>
                <option value={'3'}>Cevallos</option>
                <option value={'4'}>Mocha</option>
                <option value={'5'}>Patate</option>
                <option value={'6'}>Quero</option>
                <option value={'7'}>Pelileo</option>
                <option value={'8'}>Píllaro</option>
                <option value={'9'}>Tisaleo</option>
              </>
            )}
            {stateCountry === '24' && (
              <>
                <option value={'1'}>Centinela del Cóndor</option>
                <option value={'2'}>Chinchipe</option>
                <option value={'3'}>El Pangui</option>
                <option value={'4'}>Nangaritza</option>
                <option value={'5'}>Palanda</option>
                <option value={'6'}>Paquisha</option>
                <option value={'7'}>Yacuambi</option>
                <option value={'8'}>Yantzaza</option>
                <option value={'9'}>Zamora</option>
              </>
            )}
          </S.FormSelect>
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
