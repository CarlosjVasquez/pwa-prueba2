export async function imageDistance(image: string) {
  //Loadbalancer kubernetes service
  const response = await fetch(
    `https://nextiapikongdev.nextisolutions.com:8443/biometry-services/image-validation-distance`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image: image })
    }
  );
  return await response.json();
}

type error = {
  error: string
}

export type faceRecognitionResponseType = {
  error?: any
  code?: number
  response?: string
}

export const faceRecognition = async (image: string): Promise<faceRecognitionResponseType> => {
  try {
    const response: any = await fetch(
      `https://nextiapikongdev.nextisolutions.com:8443/biometrics-face-api/face_recognition/FaceBiometricValidation`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: image })
      }
    );
    return await response.json();
  } catch (e) {
    return { error: e };
  }

};

type facePointsValidationResponseType = {
  error?: string
  face_points?: {
    validation: 'OK' | 'ERROR';
    parameter: string;
    percentage: number;
  }
}


export async function facepointsValidation(image: string): Promise<facePointsValidationResponseType> {
  //Loadbalancer kubernetes service
  const response: any = await fetch(
    `https://nextiapikongdev.nextisolutions.com:8443/biometry-services/image-validation-facepoints`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: image })
    }
  );

  return await response.json();
}

type livenessValidationType = {
  error?: string
  liveness?: {
    validation: 'OK' | 'ERROR';
    parameter: string;
    label: 'spoof' | 'real';
  }
}

export async function livenessValidation(image: string): Promise<livenessValidationType> {
  const response = await fetch(
    `https://nextiapikongdev.nextisolutions.com:8443/biometry-services/image-validation-liveness`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: image })
    }
  );
  return await response.json();
}


type idrndValidationType = {
  error?: string
  liveness?: {
    validation: 'OK' | 'ERROR';
    parameter: string;
    data: any;
  }
}

export async function idrndValidation(image: string): Promise<idrndValidationType> {
  //Loadbalancer kubernetes service
  const response = await fetch(
    `https://nextiapikongdev.nextisolutions.com:8443/biometry-services/image-validation-idrnd`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: image })
    }
  );
  return await response.json();
}
