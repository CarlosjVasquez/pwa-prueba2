import OcrEntities, { OcrResponse, OcrType } from '../entities/ocr';
export default interface OcrRepository {
  getOcrInformation(data: OcrType): Promise<OcrResponse>;
}
