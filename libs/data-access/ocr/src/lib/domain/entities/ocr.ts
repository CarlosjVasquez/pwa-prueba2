export default class OcrEntities {
  text: string;

  constructor() {
    this.text = '';
  }
}

export type OcrType = {
  document_type: 'CEDI';
  codigo_pais: 'ECU';
  codigo_ciudad: 'UIO';
  image_anverso: string;
  image_reverso: string;
};

export type OcrResponse = {
  error?: any;
  data?: {
    cedula: {
      ID: string;
      apellido1: string;
      apellido2: string;
      ciudad_nacimiento: string;
      codigo_dactilar: string;
      donante: string;
      estado_civil: string;
      fecha_expedicion: Date;
      fecha_expiracion: Date;
      fecha_nacimiento: Date;
      instruccion: string;
      lugar_expedicion: string;
      n_documento: string;
      nacionalidad: string;
      nat_can: string;
      nombre1: string;
      nombre2: string;
      nombres_conyuge: string;
      nombres_madre: string;
      nombres_padre: string;
      parroquia_nacimiento: string;
      prof_ocupacion: string;
      provincia_nacimiento: string;
      sexo: string;
      tipo_sangre: string;
    };
  };
};
