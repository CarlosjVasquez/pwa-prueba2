import sendRequest from '@digital-products-nx/utility/axios';
import OcrDocumentRepository from '../../domain/interfaces/ocrDocumentRepository';
import {
  OcrDocumentResponse,
  OcrDocumentRequest,
} from '../../domain/entities/ocrDocument';

export default class OcrDocumentRepositoryImp implements OcrDocumentRepository {
  /* TODO reemplazar por variables de entortno el host y el port */

  async getOcrDocumentInformation(
    req: OcrDocumentRequest
  ): Promise<OcrDocumentResponse> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/ocr/v1/ocr/self/document`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
      return { data: response.data.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
  async sendPDF(req: any): Promise<any> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/carpeta/api/documents/send-pdf`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
      return { data: response.data.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
}
