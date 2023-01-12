import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './FormEntries.styles';

export const FormEntries = () => {
  const [entries, setEntries] = useState('');
  const [expenses, setExpenses] = useState('');
  const [extra, setExtra] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (entries !== '' && expenses !== '' && extra !== '') {
      setClasBtn(false);
    }
  }, [entries, expenses, extra]);

  const sendData = () => {
    if (entries !== '' && expenses !== '') {
      console.log('entries', entries);
      console.log('expenses', expenses);
      console.log('extra', extra);
      setIsLoading(true);
      router.push('/credit/credit-address');
    }
  };

  return (
    <S.Container>
      <div className="d-flex pt-4">
        <S.TextTitle>
          Déjanos saber tus estado de ingresos/egresos mensuales
        </S.TextTitle>
      </div>
      <S.ContainerInputs className="row">
        <Input
          type="text"
          placeholder="Total Ingresos"
          value={entries}
          handleChange={setEntries}
          typeFormat="currency"
        />
        <Input
          type="text"
          placeholder="Total Egresos"
          value={expenses}
          handleChange={setExpenses}
          typeFormat="currency"
        />
      </S.ContainerInputs>
      <div className="d-flex pt-4">
        <S.TextSubtitle>
          Si tienes un negocio propio y generas ingresos extra ayudanos
          indicando el valor, todo esto ayudará en el proceso
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <Input
          type="text"
          placeholder="Ingresos Extra"
          value={extra}
          handleChange={setExtra}
          typeFormat="currency"
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
export default FormEntries;
