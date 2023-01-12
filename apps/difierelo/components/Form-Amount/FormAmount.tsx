import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../Button';
import * as S from './FormAmount.styles';
import { currencyFormatter } from '../../utils/Formats';

export const FormAmount = () => {
  const [amount, setAmount] = useState('0.00');
  const [digit, setDigit] = useState('');
  const [clasBtn, setClasBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (amount !== '0.00') {
      setClasBtn(false);
    } else {
      setClasBtn(true);
    }
  }, [amount]);

  useEffect(() => {
    if (digit !== '') {
      setAmount(currencyFormatter({ currency: 'USD', value: digit }));
    } else {
      setAmount('0.00');
    }
  }, [digit]);

  const selectAmount = (value: string) => {
    const amountFormat = currencyFormatter({ currency: 'USD', value: value });
    setAmount(amountFormat);
  };

  const addNumber = (val) => {
    setDigit(digit + val);
  };

  const clearNumber = () => {
    setDigit('');
    setAmount('0.00');
  };

  const sendData = () => {
    if (amount !== '') {
      setIsLoading(true);
      localStorage.setItem('amount', amount);
      router.push('/credit/credit-history');
    }
  };

  return (
    <S.Container>
      <div className="d-flex pt-3">
        <S.TextTitle>¿Cúal es el monto que necesitas?</S.TextTitle>
      </div>
      <div className="d-flex">
        <S.TextSubtitle>
          Ingresa el monto a solicitar en tu crédito
        </S.TextSubtitle>
      </div>
      <S.ContainerInputs className="row">
        <S.AmountLabel>{amount}</S.AmountLabel>
      </S.ContainerInputs>
      <div className="d-flex pt-3 justify-content-between">
        <S.AmountButton
          className="btn"
          onClick={(e: any) => selectAmount(e.target.value)}
          value={'100'}
        >
          $100
        </S.AmountButton>
        <S.AmountButton
          className="btn"
          onClick={(e: any) => selectAmount(e.target.value)}
          value={'300'}
        >
          $300
        </S.AmountButton>
        <S.AmountButton
          className="btn"
          onClick={(e: any) => selectAmount(e.target.value)}
          value={'500'}
        >
          $500
        </S.AmountButton>
        <S.AmountButton
          className="btn"
          onClick={(e: any) => selectAmount(e.target.value)}
          value={'800'}
        >
          $800
        </S.AmountButton>
        <S.AmountButton
          className="btn"
          onClick={(e: any) => selectAmount(e.target.value)}
          value={'1000'}
        >
          $1.000
        </S.AmountButton>
      </div>
      <div className="d-flex pt-4">
        <S.DivLine className="w-100"></S.DivLine>
      </div>
      <S.DivNumbers className="row">
        <div className="d-flex pt-3 justify-content-between">
          <div className="btn" onClick={() => addNumber(1)}>
            <S.TextNumber>1</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(2)}>
            <S.TextNumber>2</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(3)}>
            <S.TextNumber>3</S.TextNumber>
          </div>
        </div>
        <div className="d-flex pt-3 justify-content-between">
          <div className="btn" onClick={() => addNumber(4)}>
            <S.TextNumber>4</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(5)}>
            <S.TextNumber>5</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(6)}>
            <S.TextNumber>6</S.TextNumber>
          </div>
        </div>
        <div className="d-flex pt-3 justify-content-between">
          <div className="btn" onClick={() => addNumber(7)}>
            <S.TextNumber>7</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(8)}>
            <S.TextNumber>8</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(9)}>
            <S.TextNumber>9</S.TextNumber>
          </div>
        </div>
        <div className="d-flex pt-3 justify-content-between">
          <div className="btn" onClick={() => addNumber('.')}>
            <S.TextNumber>.</S.TextNumber>
          </div>
          <div className="btn" onClick={() => addNumber(0)}>
            <S.TextNumber>0</S.TextNumber>
          </div>
          <S.DivDelete className="btn" onClick={clearNumber}>
            <img src="../icons/Delete.svg" />
          </S.DivDelete>
        </div>
      </S.DivNumbers>
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

export default FormAmount;
