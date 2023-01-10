export class OtpEntities {
  ifi: string;
  tiempo: string;
  username: string;
  telefono: string;

  constructor() {
    this.ifi = '';
    this.tiempo = '';
    this.username = '';
    this.telefono = '';
  }
}

export class OtpValidateRequest {
  otp: string;
  id_mensaje: string;

  constructor() {
    this.otp = '';
    this.id_mensaje = '';
  }
}

export type OtpResponse = {
  error?: any;
  data?: any;
};

export default OtpEntities;
