import {
  OcrDocumentResponse,
  OcrDocumentRequest,
} from '../entities/ocrDocument';
export default interface OcrDocumentRepository {
  getOcrDocumentInformation(
    data: OcrDocumentRequest
  ): Promise<OcrDocumentResponse>;
  sendPDF(data: any): Promise<any>;
}
