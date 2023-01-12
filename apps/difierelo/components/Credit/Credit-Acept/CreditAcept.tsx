import { useRouter } from 'next/router';
import * as S from './CreditAcept.styles';
import { currencyFormatter } from '../../../utils/Formats';
import Button from '../../Button';
import ButtonReturn from '../../Button-Return';
import { useState } from 'react';

export const CreditAcept = () => {
  const amount = localStorage.getItem('amount');
  const amountR = localStorage.getItem('amountReduce');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingR, setIsLoadingR] = useState(false);
  const router = useRouter();

  const sendData = () => {
    setIsLoading(true);
    if (amountR === '0') {
      router.push('/credit/credit-success');
    }
    if (amountR !== '0') {
      localStorage.setItem(
        'amount',
        currencyFormatter({ currency: 'USD', value: amountR })
      );
      router.push('/credit/credit-success');
    }
  };

  const rejectMoney = () => {
    setIsLoadingR(true);
    localStorage.setItem(
      'amount',
      currencyFormatter({ currency: 'USD', value: '0.00' })
    );
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
          <img src="../icons/checkSuccess.svg" />
        </div>
        <div className="d-flex justify-content-center pt-4">
          <S.TextTitle>
            ¡Tu solicitud
            <br /> está aprobada!
          </S.TextTitle>
        </div>
        <div className="d-flex row justify-content-center pt-4">
          <div className="d-flex justify-content-center">
            <S.TextConditions>El monto aprobado es:</S.TextConditions>
          </div>
          <div className="d-flex justify-content-center pt-3">
            <S.TextAmpount>
              {amountR !== '0'
                ? currencyFormatter({ currency: 'USD', value: amountR })
                : amount}
            </S.TextAmpount>
          </div>
        </div>
        <div className="d-flex justify-content-start mx-5 pt-5">
          {amountR !== '0' && (
            <div className="d-flex justify-content-start mx-2">
              <S.TextConditions>
                {'Tu solicitud fue de: ' + amount}
              </S.TextConditions>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between pt-4 mx-5">
          <div className="d-flex w-50 p-2">
            <ButtonReturn
              text={amountR !== '0' ? 'Rechazar' : 'Regresar'}
              handleClick={rejectMoney}
              disabled={false}
              loading={isLoadingR}
            />
          </div>
          <div className="d-flex w-50 p-2">
            <Button
              text="Aceptar"
              handleClick={sendData}
              disabled={false}
              loading={isLoading}
            />
          </div>
        </div>
        <div className="d-flex flex-column mx-5">
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

export default CreditAcept;
