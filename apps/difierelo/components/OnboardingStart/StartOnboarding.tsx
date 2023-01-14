import * as S from './StartOnboarding.styles';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export interface StartOnboardingProps {
  value: string;
  setValue: (e: string) => void;
  setCode: (data: CountryData) => void;
  setAcept: (e: boolean) => void;
  setConfirm: (e: boolean) => void;
}

export const StartOnboarding = (props: StartOnboardingProps) => {
  return (
    <>
      <S.TextTitleForm className="col-md-6">
        <S.TitleForm>¡Es hora de empezar!</S.TitleForm>
      </S.TextTitleForm>

      <S.TextSubtitleForm>
        <S.SubtitleForm>
          Te recomendamos que tengas al alcance la siguiente documentación
        </S.SubtitleForm>
      </S.TextSubtitleForm>

      <S.InfoCedulaForm>
        <S.TextInfoDocs>
          <S.IconCedula />
          <S.TextInfoForm>Tu Cédula de identidad</S.TextInfoForm>
        </S.TextInfoDocs>
      </S.InfoCedulaForm>

      <S.InfoCedulaForm1>
        <S.TextInfoDocs>
          <S.IconPlanilla />
          <S.TextInfoForm>
            Planilla de cualquier servicio básico con una antigüedad no mayor a
            3 meses
          </S.TextInfoForm>
        </S.TextInfoDocs>
      </S.InfoCedulaForm1>

      <S.DivPhone>
        <S.DivPhoneLabel>
          <S.PhoneLabel>Ingresa tu celular</S.PhoneLabel>
        </S.DivPhoneLabel>
        <PhoneInput
          country={'ec'}
          value={props.value}
          onChange={(e: string, data: CountryData) => [
            props.setValue(e),
            props.setCode(data),
          ]}
          searchPlaceholder="search"
        />
      </S.DivPhone>

      <S.DivConditions>
        <S.DivConditionsCheck className="d-flex">
          <S.CheckInput
            type="checkbox"
            onChange={(e: any) => props.setAcept(e.target.checked)}
          />
          <S.TextConditions>
            He leído, acepto y entiendo los{' '}
            <a href="">Terminos y condiciones</a> y{' '}
            <a href="">Aviso de Privacidad</a> de Difierelo
          </S.TextConditions>
        </S.DivConditionsCheck>
        <S.DivConditionsCheck1 className="d-flex position-relative">
          <S.CheckInput
            type="checkbox"
            onChange={(e: any) => props.setConfirm(e.target.checked)}
          />
          <S.TextConditions>
            Confirmo que actúo por cuenta propia.
          </S.TextConditions>
        </S.DivConditionsCheck1>
      </S.DivConditions>
    </>
  );
};
export default StartOnboarding;
