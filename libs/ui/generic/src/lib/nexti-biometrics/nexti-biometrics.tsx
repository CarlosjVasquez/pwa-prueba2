import {
  MembersOnboardingType,
  UserAuthController,
} from '@digital-products-nx/data-access/users';
import { Ocr } from '@digital-products-nx/ui-next-ocr';
import { Biometry } from '@digital-products-nx/feature-biometry';
import { useState } from 'react';
import {
  BiometricController,
  BiometricRequest,
} from '@digital-products-nx/data-access/biometric';

export interface NextiBiometricsProps {
  authenticateResult: (data: any) => void;
  user: any;
  userExist: boolean;
  closeModal?: () => void;
}

export function NextiBiometrics(props: NextiBiometricsProps) {
  const [openBiometrics, setOpenBiometrics] = useState(true);
  const [openOcr, setOpenOcr] = useState(false);
  const [uriImg, setUriImg] = useState('');

  const finishBiometrics = async (res: any) => {
    if (res.code === 200 && !props.userExist) {
      setUriImg(res.data.imgSrc);
      setOpenBiometrics(false);
      setOpenOcr(true);
      return;
    }
    if (res.code === 200 && props.userExist) {
      // const validate = await validateBiometric(res.data);
      // console.log(validate);
      // if (validate) return finishOcr(res);
      return finishOcr(res);
    }
    props.authenticateResult({
      code: 400,
      message: 'Error en la autenticación',
    });
  };

  const validateBiometric = async (data: any) => {
    const req: BiometricRequest = {
      identification: props.user.identification_number,
      source: data?.imgSrc,
    };

    const response = await BiometricController.validationBiometric(req);
    if (response?.data?.code === 1) return true;

    return false;
  };

  const finishOcr = async (ocrRes: any) => {
    console.log(ocrRes);
    try {
      const req: MembersOnboardingType = {
        identification: props.user.identification_number,
      };

      await UserAuthController.authUser(req).then((res) => {
        const mapper = {
          ...ocrRes,
          ...res,
          imgSrc: uriImg,
          home_state: res.addresses[0].state,
          home_city: res.addresses[0].city,
          home_address: res.addresses[0].address,
          job_state: res.addresses[1].state,
          job_city: res.addresses[1].city,
          job_address: res.addresses[1].address,
          build_type: res.addresses[0].build_type,
        };
        console.log(mapper);

        props.authenticateResult({
          code: 200,
          message: 'Consultado correctamente',
          data: mapper,
        });
      });
    } catch (error) {
      console.log(error);
      const mapper = {
        ...ocrRes,
        imgSrc: uriImg,
      };
      props.authenticateResult({
        code: 200,
        message: 'Consultado correctamente',
        data: mapper,
      });
    }
  };

  return (
    <>
      {openBiometrics && (
        <Biometry
          containerFirstButtonText="Cancelar"
          containerSecondButtonText="Siguiente"
          containerFirstButtonColor="#22D16B"
          containerSecondButtonColor="#F8F8F7"
          containerFirstButtonAction=""
          containerSecondButtonAction=""
          exitButton="Salir"
          open={true}
          onClose={() => props.closeModal}
          onFinish={finishBiometrics}
          identification={'0401535562'}
          login={props.userExist}
        />
      )}
      {openOcr && (
        <Ocr
          percentValidation={90}
          faceImage={uriImg}
          resultProcess={finishOcr}
          onClose={() => props.closeModal}
        />
      )}
    </>
  );
}

export default NextiBiometrics;
