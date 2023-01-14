import styled from 'styled-components';
import imageCedula from '../../public/icons/cedula.svg';
import imagePlanilla from '../../public/icons/planilla.svg';
import Responsive from '../../utils/style/Responsive';

export const TextTitleForm = styled.div`
  width: 38.26vw;
  margin-inline-start: 3.67vw;
  top: -2.01vw;
  position: relative;
  background: white;
  z-index: 2;

  ${Responsive.SM} {
    width: 100%;
    min-height: 10.14vw;
    margin-inline-start: 4.53vw;
    top: -7.73vw;
  }
`;

export const TitleForm = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 1.94vw;
  line-height: 2.71vw;
  letter-spacing: -0.02em;
  color: #11171d;
  padding-top: 0.5vw;

  ${Responsive.SM} {
    font-size: 7.47vw;
    line-height: 10.4vw;
    padding-top: 1vw;
  }
`;

export const TextSubtitleForm = styled.div`
  width: 21.88vw;
  margin-inline-start: 3.67vw;
  margin-bottom: 1.39vw;
  top: -1.5vw;
  position: relative;

  ${Responsive.SM} {
    width: 84vw;
    margin-inline-start: 4.53vw;
    margin-bottom: 5.33vw;
    top: -7.47vw;
  }
`;

export const SubtitleForm = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 600;
  font-size: 0.97vw;
  line-height: 1.32vw;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 3.73vw;
    line-height: 5.07vw;
  }
`;

export const InfoCedulaForm = styled.div`
  min-height: 4.72vw;
  margin-inline-start: 3.67vw;
  display: flex;
  margin-top: 0vw;

  ${Responsive.SM} {
    width: 38.4;
    min-height: 5.33vw;
    margin-inline-start: 4.53vw;
    margin-top: 1vw;
  }
`;

export const InfoCedulaForm1 = styled.div`
  min-height: 4.72vw;
  margin-inline-start: 3.67vw;
  display: flex;
  margin-top: -2.5vw;

  ${Responsive.SM} {
    width: 38.4;
    min-height: 5.33vw;
    margin-inline-start: 4.53vw;
    margin-top: 0vw;
  }
`;

export const IconCedula = styled.div`
  background: url(${imageCedula.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.39vw;
  min-height: 1.39vw;

  ${Responsive.SM} {
    width: 5.33vw;
    min-height: 5.33vw;
  }
`;

export const TextInfoDocs = styled.div`
  min-height: 1.11vw;
  top: -3.5vw;
  align-items: center;
  align-content: center;
  position: relative;
  display: flex;

  ${Responsive.SM} {
    top: -10vw;
  }
`;

export const IconPlanilla = styled.div`
  background: url(${imagePlanilla.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1.39vw;
  min-height: 1.39vw;

  ${Responsive.SM} {
    width: 5.5vw;
    min-height: 5.5vw;
    margin-inline-start: 1vw;
  }
`;

export const TextInfoForm = styled.p`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;
  margin-inline-start: 1.52vw;
  margin-inline-end: 10.44vw;

  ${Responsive.SM} {
    font-size: 3.47vw;
    line-height: 4.27vw;
    margin-inline-start: 4.93vw;
    margin-inline-end: 10.4vw;
  }
`;

export const DivPhone = styled.div`
  width: 83.47vw;
  margin-inline-start: 3.67vw;
  position: relative;
  top: -4vw;

  .form-control:focus {
    box-shadow: none !important;
    outline: none !important;
    background: #ffffff;
  }

  ${Responsive.SM} {
    top: -6vw;
  }
`;

export const DivPhoneLabel = styled.div`
  width: 7.43vw;
  min-height: 1.25vw;

  ${Responsive.SM} {
    width: 28.53vw;
    min-height: 4.8vw;
  }
`;

export const PhoneLabel = styled.label`
  font-family: Eina 02;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9vw;
  line-height: 1.25vw;
  color: #11171d;

  ${Responsive.SM} {
    font-size: 3.47vw;
    line-height: 4.8vw;
  }
`;

export const DivConditions = styled.div`
  width: 22.29vw;
  min-height: 6.25vw;
  margin-top: -4vw;
  margin-inline-start: 3.67vw;

  ${Responsive.SM} {
    width: 85.6vw;
    min-height: 24vw;
    margin-top: -2vw;
  }
`;

export const DivConditionsCheck = styled.div`
  width: 22.29vw;
  min-height: 3.33vw;
  margin-top: 1vw;

  ${Responsive.SM} {
    width: 85.6vw;
    min-height: 12.8vw;
  }
`;

export const DivConditionsCheck1 = styled.div`
  width: 22.29vw;
  min-height: 3.33vw;
  margin-top: -1vw;
  margin-bottom: 2vw;

  ${Responsive.SM} {
    width: 85.6vw;
    min-height: 12.8vw;
  }
`;

export const CheckInput = styled.input`
  width: 1.25vw;
  min-height: 1.25vw;

  ${Responsive.SM} {
    width: 4.8vw;
    min-height: 4.8vw;
  }
`;

export const TextConditions = styled.p`
  width: 19.38vw;
  min-height: 3.33vw;
  margin-inline-start: 1.46vw;
  align-content: center;
  display: grid;
  font-family: Eina 02;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 1.11vw;
  color: #11171d;
  text-align: left;

  a {
    text-decoration: none;
    display: contents;
  }

  ${Responsive.SM} {
    width: 74.4vw;
    min-height: 12.8vw;
    margin-inline-start: 5.6vw;
    font-size: 3.47vw;
    line-height: 4.27vw;
  }
`;
