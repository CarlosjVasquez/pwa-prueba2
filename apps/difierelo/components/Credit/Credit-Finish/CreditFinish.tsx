import { onlyNumber, currencyFormatter } from '../../../utils/Formats';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Button from '../../Button';
import * as S from './CreditFinish.styles';

export const CreditFinish = () => {
  let amount = localStorage.getItem('amount');
  const amountR = localStorage.getItem('amountReduce');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const auxR = onlyNumber(amountR);
  const auxR1 = auxR.replace(',', '');

  if (parseInt(auxR1) !== 0) {
    amount = currencyFormatter({ currency: 'USD', value: auxR1.toString() });
  }

  const sendData = () => {
    let total = 0;
    const prev = localStorage.getItem('userM');
    const auxA = onlyNumber(prev);
    const auxB = auxA.replace(',', '');
    const auxR = onlyNumber(amountR);
    const auxR1 = auxR.replace(',', '');
    if (parseInt(auxR1) === 0) {
      total = parseInt(auxB) + parseInt(auxR1);
    }
    if (parseInt(auxR1) !== 0) {
      const auxA = onlyNumber(amount);
      const auxB = auxA.replace(',', '');
      total = parseInt(auxB) + parseInt(auxB);
    }

    localStorage.setItem(
      'amount',
      currencyFormatter({ currency: 'USD', value: total.toString() })
    );
    setIsLoading(true);
    router.push('/dashboard');
  };

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage>
            <S.ImgDifierelo />
          </S.BannerImage>
        </div>
        <div className="d-flex justify-content-center">
          <img src="../icons/Happystudent.svg" />
        </div>
        <div className="d-flex justify-content-center pt-4">
          <S.TextTitle>¡Disfruta de tu crédito!</S.TextTitle>
        </div>
        <div className="d-flex row justify-content-center pt-4">
          <div className="d-flex justify-content-center">
            <S.TextConditions>El monto disponible es:</S.TextConditions>
          </div>
          <div className="d-flex justify-content-center pt-3">
            <S.TextAmpount>{amount}</S.TextAmpount>
          </div>
        </div>
        <div className="d-flex justify-content-center pt-5 mx-5">
          <Button
            text="Comprar Ahora"
            handleClick={sendData}
            disabled={false}
            loading={isLoading}
          />
        </div>
        <div className="d-flex flex-column mx-5 pt-5">
          <div className="d-flex">
            <S.TextConditions>
              Recuerda que podrás utilizar tu crédito en los negocios afiliados
              y hacer los pagos en cuotas
            </S.TextConditions>
          </div>
          <div className="d-flex pt-3 pb-3">
            <S.TextConditions>
              Enviamos un correo con el contrato y demás terminos del crédito
              podrás consultarlo tmabien en nuestra plataforma en todo momento
            </S.TextConditions>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default CreditFinish;
