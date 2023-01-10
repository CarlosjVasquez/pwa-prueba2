import OcrRepositoryImp from '../repositories/ocrRepositoryImp';
import { getOcrInformation } from '../../application/useCases/ocrUseCase';
import OcrEntities, { OcrResponse, OcrType } from '../../domain/entities/ocr';

const api = new OcrRepositoryImp();

export class OcrController {
  static async getOcrInformation(data: OcrType): Promise<OcrResponse> {
    return getOcrInformation(api, data);
  }
}
