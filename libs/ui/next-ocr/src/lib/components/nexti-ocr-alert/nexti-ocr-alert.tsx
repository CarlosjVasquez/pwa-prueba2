import {
  StyledAlertDiv,
  StyledTextTitle,
  StyledTitleDiv,
  StyledTextSubtitle,
  StyledDiv,
  StyledDiv3,
  StyledContinueButton,
} from './nexti-ocr-alert.style';
import Modal from 'react-bootstrap/Modal';

/* eslint-disable-next-line */
export interface NextiAlertProps {
  title: string;
  icon: string;
  textOne: string;
  continueButton: string;
  onContinue: (data: any) => void;
}

export function NextiOcrAlert(props: NextiAlertProps) {
  return (
    <>
      <Modal.Body>
        {props.icon ? (
          <StyledAlertDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <picture>
              <img src={props.icon} />
            </picture>
          </StyledAlertDiv>
        ) : undefined}
        <StyledTitleDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledTextTitle>{props.title}</StyledTextTitle>
        </StyledTitleDiv>
        <div
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
          style={{ textAlign: 'center', paddingTop: '5%' }}
        >
          <StyledTextSubtitle>{props.textOne}</StyledTextSubtitle>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <StyledDiv3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledDiv>
            <StyledContinueButton
              className="col-lg-4 col-md-4 col-sm-8 col-xs-8"
              onClick={props.onContinue}
            >
              {props.continueButton}
            </StyledContinueButton>
          </StyledDiv>
        </StyledDiv3>
      </Modal.Footer>
    </>
  );
}

export default NextiOcrAlert;
