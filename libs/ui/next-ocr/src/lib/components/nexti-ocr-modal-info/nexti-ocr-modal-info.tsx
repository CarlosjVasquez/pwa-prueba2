import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  StyledDiv5,
  StyledTitleDiv1,
  StyledTextTitle,
  StyledDiv,
  StyledTextSubtitle,
  StyledImageDiv,
  StyledExitButtonWhite,
  StyledDiv4,
  StyledAnvRevDiv,
  StyledTextAnvRev,
  StyledDiv3,
  StyledReturnButton,
  StyledContinueButton,
} from './nexti-ocr-modal-info.style';

export interface OcrInfoProps {
  title: string;
  textOne: string;
  continueButton: string;
  exitButton: string;
  returnButton?: string;
  open?: boolean;
  imgBackground: string;
  onContinue: (data: any) => void;
  onReturn?: () => void;
  onClose: () => void;
}

export function NextiOcrModalInfo(props: OcrInfoProps) {
  const closeModal = () => props.onClose();
  return (
    <>
      <Modal.Header style={{ border: 'none' }}>
        <StyledImageDiv
          urlBackground={props.imgBackground}
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <StyledExitButtonWhite onClick={closeModal}>
            {props.exitButton}
          </StyledExitButtonWhite>
        </StyledImageDiv>
      </Modal.Header>
      <Modal.Body>
        <StyledTitleDiv1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledTextTitle>{props.title}</StyledTextTitle>
        </StyledTitleDiv1>
        <StyledDiv4 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledTextSubtitle>{props.textOne}</StyledTextSubtitle>
        </StyledDiv4>
        <StyledDiv5 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledAnvRevDiv className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img src="./icons/anverso.svg" />
            <br />
            <StyledTextAnvRev>ANVERSO</StyledTextAnvRev>
          </StyledAnvRevDiv>
          <StyledAnvRevDiv className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <img src="./icons/reverso.svg" />
            <br />
            <StyledTextAnvRev>REVERSO</StyledTextAnvRev>
          </StyledAnvRevDiv>
        </StyledDiv5>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <StyledDiv3 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <StyledDiv>
            <StyledReturnButton
              className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
              onClick={props.onReturn}
            >
              {props.returnButton}
            </StyledReturnButton>

            <StyledContinueButton
              className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
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

export default NextiOcrModalInfo;
