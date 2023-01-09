import sendRequest from '@digital-products-nx/utility/axios';
import OcrRepository from '../../domain/interfaces/ocrRepository';
import { OcrResponse, OcrType } from '../../domain/entities/ocr';

export default class OcrRepositoryImp implements OcrRepository {
  /* TODO reemplazar por variables de entortno el host y el port */

  async getOcrInformation(req: OcrType): Promise<OcrResponse> {
    const endpoint = {
      host: 'nextiapikongdev.nextisolutions.com',
      port: 8443,
      ssl: true,
    };
    const url = `/ocr/v1/ocr/id`;
    try {
      const response: any = await sendRequest(endpoint).post(url, req);
      return { data: response.data };
    } catch (error) {
      let errorMessage = 'Failed to do something exceptional';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      return { error: errorMessage };
    }
  }
}
