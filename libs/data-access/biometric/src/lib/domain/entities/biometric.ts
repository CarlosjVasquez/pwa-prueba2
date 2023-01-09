export interface Biometric {
  code: number;
  message: string;
  response: Response;
}

export interface Response {
  probability: number;
  score: number;
  quality: number;
}

export class BiometricRequest {
  identification: string;
  source: string;

  constructor() {
    this.identification = '';
    this.source = '';
  }
}
export class BiometricVerificationRequest {
  source: string;

  constructor() {
    this.source = '';
  }
}

export type BiometricResponse = {
  error?: any;
  data?: Biometric;
};

export default Biometric;
