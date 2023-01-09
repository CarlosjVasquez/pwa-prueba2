export default class OcrDocumentEntities {
  document_type?: 'ENERGY' | 'WATER' | 'VOTE' | '';
  ok: boolean;

  constructor() {
    this.document_type = '';
    this.ok = false;
  }
}

export interface OcrDocumentRequest {
  document_type: 'ENERGY' | 'WATER' | 'VOTE' | '';
  source: string;
}

export type OcrDocumentResponse = {
  error?: any;
  data?: OcrDocumentEntities;
};
