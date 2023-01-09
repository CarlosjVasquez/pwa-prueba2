import { StyledPage } from './nexti-ocr-alert.style';

//estilos
function TypeAlert({ classAlert, titleAlert, message, icon }: any) {
  return (
    <StyledPage className={classAlert} role="alert">
      <i className={`${icon} pe-3`}></i>
      <div>
        <p className="alert-heading mb-0 title">{titleAlert}</p>
        <p className="description mb-0">{message}</p>
      </div>
    </StyledPage>
  );
}

export default TypeAlert;
