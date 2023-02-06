import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Button from '../../Button';
import * as S from './CreditRecord.styles';

export const CreditRecord = () => {
  const [acept, setAcept] = useState(false);
  const [clasBtn, setClasBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validationHistory = (e: any) => {
    if (e) {
      setAcept(e);
      setClasBtn(false);
    } else {
      setAcept(e);
      setClasBtn(true);
    }
  };

  const sendData = () => {
    setIsLoading(true);
    localStorage.setItem('acept', acept.toString());
    router.push('/credit/credit-validation');
  };

  return (
    <>
      <S.Container>
        <div className="d-flex">
          <S.BannerImage className="d-flex justify-content-between">
            <img
              className="position-absolute"
              alt="Regresar"
              src="../icons/return.svg"
              onClick={() => router.back()}
            />
            <S.ImgDifierelo />
            <div className="d-flex justify-content-end align-content-center">
              <a className="px-2">
                <img src="../icons/question.svg" />
              </a>
              <a href="/credit/credit-amount">
                <img src="../icons/close.svg" />
              </a>
            </div>
          </S.BannerImage>
        </div>
        <div className="d-flex">
          <ProgressBar now={60} />
        </div>
        <S.DivValidation className="d-flex pt-4 row m-1">
          <div className="d-flex pt-2">
            <S.TextTitle>Validación del Historial Crediticio</S.TextTitle>
          </div>
          <div className="d-flex pt-3 justify-content-center align-items-start">
            <S.InputConditions
              type={'checkbox'}
              onChange={(e: any) => validationHistory(e.target.checked)}
            />
            <S.TextConditions>
              Lorem ipsum dolor sit amet consectetur. Semper at hendrerit
              vestibulum ornare. Amet odio sed sit orci dapibus amet aliquet sem
              odio. Suspendisse blandit tempus arcu pretium phasellus id
              dictumst. Faucibus tellus odio orci lectus venenatis morbi
              vulputate purus sit. Varius nisi eget in porta nisl malesuada
              fermentum varius facilisi. <br />
              <br />
              Morbi nibh egestas ac tempus erat. Dolor et turpis mi porttitor
              dolor. Et dictumst id viverra mauris aliquam platea porttitor quam
              id. Nunc enim tincidunt sagittis nunc sit tortor ut nulla.
              Consequat pellentesque enim euismod congue arcu convallis. Ut
              interdum in bibendum pulvinar massa vitae felis. Purus.
            </S.TextConditions>
          </div>
        </S.DivValidation>
        <div className="d-flex justify-content-center pt-5">
          <Button
            text="Continuar"
            handleClick={sendData}
            disabled={clasBtn}
            loading={isLoading}
          />
        </div>
      </S.Container>
    </>
  );
};
export default CreditRecord;
