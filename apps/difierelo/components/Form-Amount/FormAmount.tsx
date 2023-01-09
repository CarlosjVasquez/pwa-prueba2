import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import * as S from './FormAmount.styles';

export const FormAmount = () => {
  const [amount, setAmount] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (amount !== '') {
      setClasBtn(false);
    }
  }, [amount]);

  const sendData = () => {
    if (amount !== '') {
      console.log('amount', amount);
      localStorage.setItem('amount', amount);
      //router.push('/credit/credit-amount');
    }
  };

  return (
    <S.Container>
      <div className="d-flex pt-5">
        <S.TextTitle>¿Cúal es el monto que necesitas?</S.TextTitle>
      </div>
      <div className="d-flex">
        <S.TextSubtitle>
          Ingresa el monto a solicitar en tu crédito
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <Input
          type="text"
          placeholder="0.00"
          value={amount}
          handleChange={setAmount}
        />
      </S.ContainerInputs>
      <div className="d-flex justify-content-center">
        <Button text="Continuar" handleClick={sendData} disabled={clasBtn} />
      </div>
    </S.Container>
  );
};

export default FormAmount;
