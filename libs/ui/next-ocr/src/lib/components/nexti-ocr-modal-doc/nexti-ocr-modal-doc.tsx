import { useCallback, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Webcam from 'react-webcam';
import {
  StyledDiv5,
  StyledTextAnvRev1,
  StyledTitleDiv1,
  StyledTextTitle,
  StyledDiv,
  StyledTextSubtitle,
  StyledContinueButton1,
  StyledBody,
} from './nexti-ocr-modal-doc.style';
import { StyledExitButtonWhite } from '../nexti-ocr-modal-info/nexti-ocr-modal-info.style';

export interface OcrDocProps {
  title: string;
  textOne: string;
  description: string;
  continueButton: string;
  onContinue: (data: any) => void;
  exitButton?: string;
  onClose: () => void;
}

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

export function NextiOcrModalDoc(props: OcrDocProps) {
  const webcamRef: any = useRef(null);
  const [isShowVideo, setIsShowVideo] = useState(true);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot({
      width: 960,
      height: 540,
    });

    const stream = webcamRef.current?.stream;
    const video = webcamRef.current?.video;
    const tracks = stream.getTracks();

    tracks.forEach((track: any) => track.stop());
    video.srcObject = null;
    setIsShowVideo(false);
    props.onContinue(imageSrc);
  }, [webcamRef, props]);
  const closeModal = () => props.onClose();
  return (
    <>
      <StyledExitButtonWhite onClick={closeModal}>
        {props.exitButton}
      </StyledExitButtonWhite>

      <Modal.Header className="w-100 d-inline-flex flex-column justify-content-center border-0 align-items-center ">
        <div>
          <StyledTextAnvRev1>{props.description}</StyledTextAnvRev1>
        </div>
        <StyledDiv5 className="w-100 col-lg-11 col-md-11 col-sm-12 col-xs-12">
          {isShowVideo && (
            <Webcam
              className="w-100 rounded-2"
              screenshotQuality={1}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          )}
        </StyledDiv5>
      </Modal.Header>
      <Modal.Body>
        <StyledBody>
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
            <StyledContinueButton1
              className="col-lg-10 col-md-10 col-sm-10 col-xs-10"
              onClick={capture}
            >
              {props.continueButton}
            </StyledContinueButton1>
          </StyledDiv>
        </div>
      </Modal.Footer>
    </>
  );
}

export default NextiOcrModalDoc;
