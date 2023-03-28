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
              Declaro que los datos consignados en esta solicitud y sus anexos
              son veraces y fidedignos. Tales documentos no han sido alterados
              ni forjados, sino que han sido obtenidos ante las respectivas
              instituciones públicas o privadas encargadas de su emisión,
              cumpliendo con los procedimientos y requisitos necesarios para su
              obtención. <br />
              <br />
              Autorizo a la Empresa <strong>DIFIERELO</strong> a verificar toda
              la información proporcionada en la solicitud o en virtud de ésta,
              en cualquier momento, cuantas veces lo necesite y por cualquier
              medio que a su solo criterio considere idóneo, comprometiéndome
              desde ya a mantener durante el proceso de evaluación de esta
              solicitud e incluso en lo posterior, igual o mejor calificación
              crediticia.
              <br /> <br />
              Autorizo de forma expresa e indefinida al{' '}
              <strong>DIFIERELO</strong> y sus posteriores cesionarios, para que
              obtenga de cualquier fuente de información pública o privada
              habilitada, mis referencias personales y/o patrimoniales
              anteriores o posteriores a la suscripción de esta autorización,
              sea como deudor principal, codeudor o garante, sobre mi
              comportamiento crediticio, manejo de cuentas, tarjetas de crédito,
              etc., y en general del cumplimiento de mis obligaciones; así como,
              sobre mis activos, pasivos, datos personales y/o patrimoniales.
              Además, faculto de forma expresa al <strong>BANCO</strong> y sus
              cesionarios, para transferir o entregar dicha información o
              cualquier otra que se genere, a las entidades competentes para
              prestar servicios de referencias crediticias.
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
