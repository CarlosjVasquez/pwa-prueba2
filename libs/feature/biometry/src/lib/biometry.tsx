import { useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faceRecognitionResponseType } from './services/biometricServices';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { GrCircleInformation } from 'react-icons/gr';
import {
  MessageBiometry,
  StyledAlertDiv,
  StyledBiometry,
  StyledContinueButton,
  StyledDiv,
  StyledDiv1,
  StyledDiv2,
  StyledEllipseSVG,
  StyledExitButton,
  StyledIconDiv,
  StyledLiList,
  StyledReturnButton,
  StyledText,
  StyledTextSubtitle,
  StyledTextTitle,
  StyledTitleDiv,
  StyledTextTitleList,
  StyledUlList,
  StyledWrapper,
  StyleSpinner,
} from './components/biometry';
import { checkBoxesCenter } from './services/checkCenter';
import biometricConfig from './services/config';
import BiometryIndian from './biometryIndian.js';
import { useRouter } from 'next/router';
import {
  BiometricController,
  BiometricRequest,
  BiometricVerificationRequest,
} from '@digital-products-nx/data-access/biometric';

export interface BiometryProps {
  buttonActionText?: string;
  buttonActionColor?: string;
  containerFirstButtonText: string;
  containerSecondButtonText: string;
  containerFirstButtonColor: string;
  containerSecondButtonColor: string;
  containerFirstButtonAction: string;
  containerSecondButtonAction: string;
  open: boolean;
  exitButton: string;
  identification: string;
  login: boolean;
  onContinue?: () => void;
  onReturn?: () => void;
  onClose: () => void;
  onFinish: (data: any) => void;
}

export function Biometry(props: BiometryProps) {
  const [stopCamera, setStopCamera] = useState(false);
  const [isOpen, setIsOpen] = useState(props.open);
  const webcamRef = useRef(null);
  const [capturePhoto, setCapturePhoto] = useState(null);
  const [inputclass, setInputclass] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const closeModal = () => setIsOpen(false);
  const [index, setIndex] = useState(0);
  const [isDisabled, setDisabled] = useState(false);
  const [CameraValidation, setCameraValidation] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [countErrorMessage, setCountErrorMessage] = useState(0);
  const [loading, setloading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [messageDetection, setMessageDetection] = useState('');
  const _ = undefined;
  const router = useRouter();

  const onReturn = () => {
    if (index > 0) {
      setIndex(index - 1);
      handleError(_, _, true);
    } else {
      router.push('/personal-data');
    }
  };

  const onContinue = () => {
    setIndex(index + 1);
  };
  const onRetry = (event: number) => {
    handleError(_, _, true);
    setIndex(event);
  };
  const onFinish = () => {
    const res = {
      res: 1,
      code: 200,
      message: 'Se verificó correctamente el usuario',
      data: result,
    };
    props.onFinish(res);
    closeModal();
  };

  const [imgSrc, setImgSrc] = useState(null);

  // const capture = React.useCallback(() => {
  //   const imageSrc = (webcamRef?.current as any)?.getScreenshot();
  //   setImgSrc(imageSrc);
  // }, [webcamRef, setImgSrc]);

  const handleUserMedia = (imageSrc: any) => {
    setImgSrc(imageSrc);
    setCapturePhoto(imageSrc);
    setloading(false);
    setStopCamera(true);
    // capture();
  };

  const validateFacePosition = async (video: any): Promise<boolean> => {
    setloading(false);
    setInputclass('');
    await tf.ready();
    const net = await blazeface.load();
    const DEVICE = window.innerWidth <= 600 ? 'Mobile' : 'Desktop';
    if (video) {
      const obj: any = await net.estimateFaces(video);

      if (obj.length !== 0 && obj[0].probability[0] > 0.99) {
        const imageWidth = biometricConfig.VIDEO_WIDTH();
        const faceWidth = obj[0].bottomRight[0] - obj[0].topLeft[0];
        const faceSize = (faceWidth / imageWidth) * 100;
        if (!checkBoxesCenter(obj[0])) {
          handleError('Por favor centra tu rostro y no lo cubras con nada');
          return false;
        } else {
          if (faceSize < biometricConfig.MIN_FACE_SIZE) {
            setloading(false);
            setInputclass('bad');
            setInputMessage('Muévete mas cerca');
            setCountErrorMessage(0);
            return false;
          } else {
            setloading(true);
            setInputclass('ok');
            setInputMessage('No te muevas, estamos validando tu rostro');
            return true;
          }
        }
      } else {
        handleError('Por favor centra tu rostro y no lo cubras con nada');
        return false;
      }
    }
    return false;
  };

  const handleError = (message = '', type = 'bad', reloadCamera = false) => {
    if (reloadCamera) {
      setCapturePhoto(null);
      setImgSrc(null);
      setStopCamera(false);
      setFirstLoad(true);
      setInputclass('');
    } else {
      setInputclass(type);
    }
    setCountErrorMessage(countErrorMessage + 1);
    setloading(false);
    setInputMessage(message);
  };

  const ValidateFaceRecognition = (response: faceRecognitionResponseType) => {
    if (response.error) {
      setloading(false);
      setInputclass('bad');
      setInputMessage('Error de validación de rostro');
      setTimeout(() => {
        setCameraValidation(CameraValidation + 1);
      }, 500);
      return false;
    }
    if (response.code) {
      switch (response.code) {
        case 7:
          handleError('No hay imagen', _, true);
          break;
        case 9:
        case 8:
          handleError(
            'Ocurrieron errores, por favor intente nuevamente',
            _,
            true
          );
          break;
        case 4:
          handleError('El fondo de tu imagen debe ser blanco', _, true);
          break;
        case 3:
          handleError('No se encuentra un rostro en la imagen', _, true);
          break;
        case 21:
          handleError('Retírate la mascarilla', _, true);
          break;
        case 22:
          handleError('Retírate las gafas', _, true);
          break;
        case 16:
          handleError('Acerca tu rostro al óvalo', _, true);
          break;
        case 17:
          handleError('Aléjate un poco', _, true);
          break;
        case 12:
          handleError('No es una persona viva', _, true);
          break;
      }
      if (response.code !== 1) {
        setTimeout(() => {
          setInputclass('');
          setCameraValidation(CameraValidation + 1);
        }, 2000);
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (countErrorMessage === 6000) {
      setIndex(-3);
    }
  }, [countErrorMessage]);

  useEffect(() => {
    if (index === 1 && !loading && imgSrc) {
      if (firstLoad) setFirstLoad(false);
      setInputclass('ok');
      validateBiometric();
    } else {
      //setDisabled(false);
      setloading(false);
      setCameraValidation(0);
      setImgSrc(null);
    }
  }, [imgSrc, CameraValidation, index]);

  const validateBiometric = async () => {
    setCapturePhoto(imgSrc);

    let response;

    if (!props.login) {
      const req: BiometricVerificationRequest = {
        source: imgSrc ?? '',
      };

      response = await BiometricController.verificationBiometric(req);
      if (response.data?.code === 200) {
        setInputclass('');
        setCameraValidation(0);
        handleError(_, _, true);
        setResult({
          imgSrc,
        });
        setImgSrc(null);
        setIndex(2);

        return;
      }
    } else {
      const req: BiometricRequest = {
        identification: props.identification,
        source: imgSrc ?? '',
      };

      response = await BiometricController.validationBiometric(req);
      if (response.data?.code === 1) {
        setInputclass('');
        setCameraValidation(0);
        handleError(_, _, true);
        setResult({
          imgSrc,
        });
        setImgSrc(null);
        setIndex(2);
        return;
      }
    }

    setInputclass('bad');
    handleError(
      response.error?.data?.details?.message ||
        response.error?.data?.details?.response?.error ||
        response.data?.message,
      _,
      true
    );
    setIndex(-2);
    setImgSrc(null);
  };

  return (
    <div>
      <Modal
        show={isOpen}
        onHide={props.onClose}
        backdrop="static"
        keyboard={false}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <Modal.Header style={{ border: 'none' }}>
            {props.exitButton ? (
              <StyledExitButton
                className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                onClick={() => router.push('/personal-data')}
              >
                {props.exitButton}
              </StyledExitButton>
            ) : undefined}
          </Modal.Header>
          <Modal.Body>
            {index === 0 ? (
              <div className="step1">
                <StyledIconDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <picture>
                    <img src="./icons/camera.svg" />
                  </picture>
                </StyledIconDiv>
                <StyledIconDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitle>
                    Necesitamos acceso a tu cámara
                  </StyledTextTitle>
                </StyledIconDiv>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle>
                    Por tu seguridad vamos a validad tu identidad.
                  </StyledTextSubtitle>
                </StyledDiv>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle>
                    Debemos proceder con una validación para continuar tu
                    transacción.
                  </StyledTextSubtitle>
                </StyledDiv>
                <StyledDiv1 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitleList>Ten en cuenta</StyledTextTitleList>
                </StyledDiv1>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledUlList>
                    <StyledLiList key="Solo una persona (titular)">
                      <img src="./icons/bulletPoint.svg" /> Solo una persona
                      (titular)
                    </StyledLiList>
                    <StyledLiList key="Busca un lugar iluminado">
                      <img src="./icons/bulletPoint.svg" /> Busca un lugar
                      iluminado
                    </StyledLiList>
                    <StyledLiList key="Acercate lo necesario">
                      <img src="./icons/bulletPoint.svg" /> Acercate lo
                      necesario
                    </StyledLiList>
                    <StyledLiList key="Sin lentes ni accesorios que cubran tu rostro">
                      <img src="./icons/bulletPoint.svg" /> Sin lentes ni
                      accesorios que cubran tu rostro
                    </StyledLiList>
                  </StyledUlList>
                </div>
              </div>
            ) : undefined}
            {index === 1 ? (
              <div className="step2">
                <StyledBiometry>
                  <StyledWrapper>
                    <StyledEllipseSVG type={inputclass}>
                      <svg
                        width="100%"
                        height="auto"
                        viewBox="0 0 500 500"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M -188.583 -311.548 L 1506.17 -90.548 L 1506.17 1510.27 L -188.583 510.27 Z M 251.815 85.154 C 189.326 85.154 138.669 162.063 138.669 256.936 C 138.669 351.809 189.326 428.718 251.815 428.718 C 314.304 428.718 364.961 351.809 364.961 256.936 C 364.961 162.063 314.304 85.154 251.815 85.154 Z"
                          className="cls-1"
                        />
                        <ellipse
                          className="cls-2"
                          cx="251.893"
                          cy="256.3"
                          rx="113.146"
                          ry="171.782"
                        />
                      </svg>
                    </StyledEllipseSVG>
                    {capturePhoto && (
                      <div
                        className={'imgPreview'}
                        style={{
                          // left: 0,
                          // position: "absolute",
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          // right: 0,
                          // bottom: 0,
                          backgroundSize: 'cover',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          margin: '0px auto',
                          backgroundImage: `url('${capturePhoto}')`,
                        }}
                      />
                    )}

                    {!stopCamera && (
                      <BiometryIndian
                        reloadCamera={capturePhoto === null}
                        setMessage={(message: string) => {
                          setMessageDetection(message);
                          setInputMessage(message);
                        }}
                        handleUserMedia={handleUserMedia}
                      />
                    )}
                  </StyledWrapper>

                  {firstLoad && inputMessage && (
                    <StyledText>
                      <div className="title">Enmarca tu rostro en el óvalo</div>
                    </StyledText>
                  )}
                  {!inputMessage && capturePhoto && (
                    <>
                      <StyledText>
                        <div className="title">Validando imagen</div>
                      </StyledText>

                      <StyleSpinner className="col-12 d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </StyleSpinner>
                    </>
                  )}

                  {!inputMessage && !capturePhoto && (
                    <>
                      <StyledText>
                        <div className="title">
                          Prepárate para capturar tu selfie
                        </div>
                      </StyledText>

                      {loading && (
                        <StyleSpinner className="col-12 d-flex justify-content-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </StyleSpinner>
                      )}
                    </>
                  )}

                  {inputMessage && messageDetection && (
                    <MessageBiometry type={'bad'}>
                      {loading && (
                        <StyleSpinner className="col-12 d-flex justify-content-center">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </StyleSpinner>
                      )}
                      {inputMessage}
                    </MessageBiometry>
                  )}
                </StyledBiometry>
              </div>
            ) : undefined}
            {index === 2 ? (
              <div className="step-ok">
                <StyledAlertDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <picture>
                    <img src="./icons/checkSuccess.svg" />
                  </picture>
                </StyledAlertDiv>
                <StyledTitleDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitle>
                    Validamos correctamente tu rostro
                  </StyledTextTitle>
                </StyledTitleDiv>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  style={{ textAlign: 'center', paddingTop: '5%' }}
                >
                  <StyledTextSubtitle>
                    Por tu seguridad vamos a validar tu identidad.
                  </StyledTextSubtitle>
                </div>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle>
                    Debemos proceder con una validación para continuar tu
                    transacción.
                  </StyledTextSubtitle>
                </StyledDiv>
              </div>
            ) : undefined}
            {index === -1 ? (
              <div className="step-error">
                <StyledAlertDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <picture>
                    <img src="./icons/checkFail.svg" />
                  </picture>
                </StyledAlertDiv>
                <StyledTitleDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitle>
                    Encontramos un error en la validación
                  </StyledTextTitle>
                </StyledTitleDiv>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  style={{ textAlign: 'center', paddingTop: '5%' }}
                >
                  <StyledTextSubtitle>
                    Por tu seguridad vamos a validad tu identidad.
                  </StyledTextSubtitle>
                </div>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle>
                    Debemos proceder con una validación para continuar tu
                    transacción.
                  </StyledTextSubtitle>
                </StyledDiv>
              </div>
            ) : undefined}

            {index === -2 && (
              <div className="step-error">
                <StyledAlertDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <picture>
                    <img src="./icons/checkFail.svg" />
                  </picture>
                </StyledAlertDiv>
                <StyledTitleDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitle>
                    Ocurrieron errores en la validación
                  </StyledTextTitle>
                </StyledTitleDiv>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  style={{ textAlign: 'center', paddingTop: '5%' }}
                >
                  <StyledTextSubtitle>
                    {inputMessage && (
                      <div className="title">{inputMessage}</div>
                    )}
                  </StyledTextSubtitle>
                </div>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle></StyledTextSubtitle>
                </StyledDiv>
              </div>
            )}

            {index === -3 && (
              <div className="step-error">
                <StyledAlertDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <GrCircleInformation
                      size="4em"
                      className="infoMessage"
                      style={{ color: 'red' }}
                    />
                  </div>
                </StyledAlertDiv>
                <StyledTitleDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextTitle>
                    No se pudo validar tu identidad
                  </StyledTextTitle>
                </StyledTitleDiv>
                <div
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                  style={{ textAlign: 'center', paddingTop: '5%' }}
                >
                  <StyledTextSubtitle>
                    Por favor asegurate de estar en un lugar iluminado
                  </StyledTextSubtitle>
                </div>
                <StyledDiv className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <StyledTextSubtitle></StyledTextSubtitle>
                </StyledDiv>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer style={{ border: 'none' }}>
            <StyledDiv2 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <StyledDiv>
                <StyledReturnButton
                  className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
                  onClick={onReturn}
                >
                  Regresar
                </StyledReturnButton>
                {index === -1 ? (
                  <StyledContinueButton
                    className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
                    disabled={isDisabled}
                    onClick={() => onRetry(1)}
                  >
                    {index === -1 ? 'Reintentar' : 'Continuar'}
                  </StyledContinueButton>
                ) : (
                  index !== 1 && (
                    <StyledContinueButton
                      className="col-lg-6 col-md-6 col-sm-10 col-xs-10"
                      disabled={isDisabled}
                      onClick={() => {
                        if (index === 2) {
                          onFinish();
                          return;
                        }
                        if (index === -1 || index === -2 || index === -3) {
                          if (index === -3) setCountErrorMessage(0);
                          setIndex(1);
                          return;
                        }
                        onContinue();
                      }}
                    >
                      {index === -2 || index === -1 || index === -3
                        ? 'Reintentar'
                        : 'Continuar'}
                    </StyledContinueButton>
                  )
                )}
              </StyledDiv>
            </StyledDiv2>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}

export default Biometry;
