import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
  StyledTitleDiv1,
  StyledTextTitle,
  StyledDiv,
  StyledTextSubtitle,
  StyledReturnButton,
  StyledContinueButton,
  StyleSpinner,
  StyledDiv5,
  StyledTextAnvRev1,
  StyledBody,
} from './nexti-ocr-modal-confirm.style';
import { StyledExitButtonWhite } from '../nexti-ocr-modal-info/nexti-ocr-modal-info.style';

export interface OcrDocProps {
  title: string;
  textOne: string;
  continueButton: string;
  img: string;
  returnButton?: string;
  loading?: boolean;
  description?: string;
  onContinue: (data: any) => void;
  onReturn?: () => void;
  onClose: () => void;
  exitButton?: string
}

export function NextiOcrModalConfirm(props: OcrDocProps) {
  const closeModal = () => props.onClose();
  return (
    <>
      <StyledExitButtonWhite onClick={closeModal}>
        {props.exitButton}
      </StyledExitButtonWhite>
      <Modal.Header className="d-inline-flex flex-column justify-content-center border-0 align-items-center ">
        <div>
          <StyledTextAnvRev1>{props.description}</StyledTextAnvRev1>
        </div>
        <StyledDiv5 className="col-lg-11 col-md-11 col-sm-12 col-xs-12">
          <picture className="mt-3 col-12">
            <img className="rounded-2 w-100" src={props.img} alt="" />
          </picture>
        </StyledDiv5>
      </Modal.Header>
      <Modal.Body>
        <StyledBody>
          {props.loading && (
            <StyleSpinner className="col-12 d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </StyleSpinner>
          )}

          <StyledTitleDiv1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <StyledTextTitle>{props.title}</StyledTextTitle>
          </StyledTitleDiv1>
          <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <StyledTextSubtitle>{props.textOne}</StyledTextSubtitle>
          </StyledDiv>
        </StyledBody>
      </Modal.Body>
      <Modal.Footer style={{ border: 'none' }}>
        <div
          style={{
            paddingTop: '1%',
            paddingBottom: '4%',
          }}
          className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
        >
          <StyledDiv>
            <StyledReturnButton
              disabled={props.loading}
              className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
              onClick={props.onReturn}
            >
              {props.returnButton}
            </StyledReturnButton>

            <StyledContinueButton
              disabled={props.loading}
              className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
              onClick={props.onContinue}
            >
              {props.continueButton}
            </StyledContinueButton>
          </StyledDiv>
        </div>
      </Modal.Footer>
    </>
  );
}

export default NextiOcrModalConfirm;
