import OcrDocumentRepositoryImp from '../repositories/ocrDocumentRepositoryImp';
import {
  getOcrDocumentInformation,
  sendPDF,
} from '../../application/useCases/ocrDocumentUseCase';
import {
  OcrDocumentResponse,
  OcrDocumentRequest,
} from '../../domain/entities/ocrDocument';

const api = new OcrDocumentRepositoryImp();

export class OcrDocumentController {
  static async getOcrDocumentInformation(
    data: OcrDocumentRequest
  ): Promise<OcrDocumentResponse> {
    return getOcrDocumentInformation(api, data);
  }

  static async sendPDF(data: any): Promise<any> {
    return sendPDF(api, data);
  }
}
