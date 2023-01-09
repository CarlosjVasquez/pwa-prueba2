import {
  OcrController,
  OcrType,
  RekognitionType,
  RekognitionController,
} from '@digital-products-nx/data-access/ocr';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import NextiOcrAlert from './components/nexti-ocr-alert/nexti-ocr-alert';
import NextiOcrModalConfirm from './components/nexti-ocr-modal-confirm/nexti-ocr-modal-confirm';
import NextiOcrModalDoc from './components/nexti-ocr-modal-doc/nexti-ocr-modal-doc';
import NextiOcrModalInfo from './components/nexti-ocr-modal-info/nexti-ocr-modal-info';
import { StyledOcr } from './next-ocr.style';
import { useRouter } from 'next/router';

interface OcrProps {
  faceImage: string;
  percentValidation: number;
  resultProcess: (data: any) => void;
  onClose: () => void;
}

export function Ocr(props: OcrProps) {
  const [imagesDocument, setImagesDocument] = useState({
    front: '',
    back: '',
  });
  const [index, setIndex] = useState<number>(0);
  const [uriImg, setUriImg] = useState('');
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const closeModal = () => setIsOpen(false);

  const showImgNext = (img: string) => {
    setUriImg(img);
    setLoading(false);
    nextStep();
  };

  const nextStep = () => {
    setIndex(index + 1);
  };

  const lastStep = () => {
    setIndex(index - 1);
  };

  const getRekognitionInformation = async (): Promise<{
    data?: any;
    error?: any;
  }> => {
    if (props.faceImage) {
      const reqRekognition: RekognitionType = {
        source: props.faceImage.split(',')[1],
        target: imagesDocument.front.split(',')[1],
      };

      const rekognition = await RekognitionController.getRekognitionInformation(
        reqRekognition
      );
      if (rekognition.error) return { error: rekognition.error };

      if (rekognition.data.percent > props.percentValidation) {
        return { data: rekognition.data };
      } else {
        return { error: 'no percentValidation' };
      }
    } else {
      return { error: 'no percentValidation' };
    }
  };

  const validateFrontImg = async () => {
    try {
      setLoading(true);
      setImagesDocument({
        ...imagesDocument,
        front: uriImg,
      });

      setLoading(false);
      nextStep();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIndex(-3);
    }
  };

  const validateImages = async () => {
    setLoading(true);
    setImagesDocument({ ...imagesDocument, back: uriImg });

    const dataOcr: OcrType = {
      codigo_ciudad: 'UIO',
      codigo_pais: 'ECU',
      document_type: 'CEDI',
      image_anverso: imagesDocument.front,
      image_reverso: uriImg,
    };

    const { error, data } = await OcrController.getOcrInformation(dataOcr);

    if (error) {
      console.log(error);
      setIndex(-1);
      return;
    }

    const response = { cedula: data?.cedula };

    setResult(response as any);

    const recData = await getRekognitionInformation();

    setLoading(false);

    if (recData?.error) {
      if (recData.error !== 'no percentValidation') {
        setIndex(-3);
      }
    }

    if (recData.data) {
      setIndex(5);
    }
  };

  const finishProcess = () => {
    props.resultProcess(result);
    setIsOpen(false);
    router.push('/login');
  };

  return (
    <StyledOcr>
      <Modal
        show={isOpen}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {index === 0 && (
            <NextiOcrModalInfo
              continueButton="Continuar"
              onClose={closeModal}
              onContinue={nextStep}
              textOne="Prepara tu cédula de ambos lados anverso y reseverso, vamos a validarla con tu cámara para nuestros registro"
              title="Necesitamos validar tu documento de identidad"
              exitButton="Salir"
              imgBackground="./img/infomodal.png"
              returnButton="Regresar"
            />
          )}
          {index === 1 && (
            <NextiOcrModalDoc
              continueButton="Tomar Foto"
              onContinue={showImgNext}
              onClose={closeModal}
              textOne="Recuerda ubicar correctamente tu documento dentro del rectangulo en pantalla"
              title="Acercate un poco, estamos escaneando"
              exitButton="Salir"
              description="ANVERSO"
            />
          )}
          {index === 2 && (
            <NextiOcrModalConfirm
              continueButton="Continuar"
              textOne="Valida que el documento esté legible y sin brillos"
              title="Confirmación de la imagen tomada"
              img={uriImg}
              onClose={closeModal}
              returnButton="Tomar otra foto"
              onContinue={validateFrontImg}
              onReturn={lastStep}
              exitButton="Salir"
              loading={loading}
              description="ANVERSO"
            />
          )}
          {index === 3 && (
            <NextiOcrModalDoc
              continueButton="Tomar Foto"
              onContinue={showImgNext}
              onClose={closeModal}
              textOne="Recuerda ubicar correctamente tu documento dentro del rectangulo en pantalla"
              title="Acercate un poco, estamos escaneando"
              exitButton="Salir"
              description="REVERSO"
            />
          )}
          {index === 4 && (
            <NextiOcrModalConfirm
              continueButton="Continuar"
              onClose={closeModal}
              textOne="Valida que el documento esté legible y sin brillos"
              title="Confirmación de la imagen tomada"
              img={uriImg}
              returnButton="Tomar otra foto"
              exitButton="Salir"
              onContinue={validateImages}
              onReturn={lastStep}
              loading={loading}
            />
          )}
          {index === 5 && (
            <NextiOcrAlert
              icon="./icons/checkSuccess.svg"
              title="Bienvenido a Difierelo.com!"
              textOne="Disfruta comprando"
              continueButton="Iniciar"
              onContinue={finishProcess}
            />
          )}
          {index === -1 && (
            <NextiOcrAlert
              icon="./icons/checkFail.svg"
              title="Encontramos un error en la validación"
              textOne="Por tu seguridad vamos a validar tu identidad. Debemos proceder con una validación para continuar tu transacción"
              continueButton="Reintentar"
              onContinue={() => setIndex(1)}
            />
          )}
          {index === -2 && (
            <NextiOcrAlert
              icon="./icons/checkFail.svg"
              title="Encontramos un error en la validación"
              textOne="Datos erroneos al momento de validar tu identidad. Por favor intenta de nuevo"
              continueButton="Reintentar"
              onContinue={() => router.push('/savings-account')}
            />
          )}
          {index === -3 && (
            <NextiOcrAlert
              icon="./icons/checkFail.svg"
              title="Error en el sistema"
              textOne="Por favor contacto con soporte"
              continueButton="Salir"
              onContinue={() => {
                setIsOpen(false);
                props.onClose();
              }}
            />
          )}
        </div>
      </Modal>
    </StyledOcr>
  );
}

export default Ocr;
